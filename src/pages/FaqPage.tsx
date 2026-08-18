import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { FAQ_DATA } from '../data/mockData';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  PhoneCall, 
  Mail, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Tag,
  X
} from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = [
    'All',
    'Booking & Pricing',
    'Safety',
    'Seats & Luggage',
    'Rides & Cancellations',
    'Account & Roles',
  ];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-10 sm:space-y-12 pb-16" id="faqs-page-container">
      
      {/* 1. HERO, SEARCH & CATEGORY FILTERS (Unified Header Section) */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        className="pt-6 sm:pt-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-center"
      >
        <div className="inline-flex items-center gap-2 bg-[#F4EDF9] border border-[#5B16A6]/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#5B16A6] uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-[#00B936]" />
          <span>Knowledge Base & Support</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight font-display">
          Frequently Asked <span className="text-[#5B16A6]">Questions</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about pricing algorithms, women's safety seating, luggage reservations, and cancellation protection on CarPe.
        </p>

        {/* FAQ Search Bar */}
        <div className="max-w-xl mx-auto pt-1">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by topic (e.g. fare, women safety, luggage, deposit, OTP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-white border border-gray-300 rounded-2xl text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5B16A6] shadow-xs transition-shadow"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 text-gray-400 hover:text-gray-600 rounded-full cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills (Directly below search bar with tight, clean spacing) */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#5B16A6] text-white shadow-xs'
                  : 'bg-[#F8F7FA] text-gray-700 hover:bg-[#F4EDF9] hover:text-[#5B16A6] border border-gray-200'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* 2. FAQ ACCORDION LIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5" id="faqs-accordion">
        {filteredFaqs.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#F8F7FA] p-8 rounded-3xl text-center space-y-3 border border-gray-200"
          >
            <p className="text-base font-bold text-gray-800">No questions matched "{searchQuery}"</p>
            <p className="text-xs text-gray-500">
              Try searching with another keyword or explore our 10 Core Service Groups.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs font-bold text-[#5B16A6] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openFaqId === faq.id;
            return (
              <motion.div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 5) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-[#5B16A6] shadow-sm ring-1 ring-[#5B16A6]/20'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 select-none cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B16A6] bg-[#F4EDF9] px-2.5 py-0.5 rounded-full inline-block">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 font-display">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0 mt-0.5">
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5 text-[#5B16A6]" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-500" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
                      className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#FAF9FC] overflow-hidden"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </section>

      {/* 3. STILL HAVE QUESTIONS CARD */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#F8F7FA] rounded-3xl p-6 sm:p-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-display">
              Have a specific question not listed here?
            </h3>
            <p className="text-xs text-gray-500">
              Our 24/7 customer support team is available to assist you with booking or driver inquiries.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 bg-[#5B16A6] hover:bg-[#481185] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer shrink-0"
          >
            <span>Contact Support Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </motion.section>

    </div>
  );
};
