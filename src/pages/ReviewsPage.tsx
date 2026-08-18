import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { REVIEWS_DATA } from '../data/mockData';
import { 
  Star, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  MessageSquare, 
  Check, 
  PlusCircle, 
  X,
  Filter,
  ThumbsUp,
  Download
} from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewForm, setNewReviewForm] = useState({
    name: '',
    route: 'Hyderabad ⇄ Vijayawada',
    rating: 5,
    category: 'Safety',
    quote: '',
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const categories = ['All', 'Safety', 'Pricing', 'Comfort', 'Reliability', 'Verification'];

  const filteredReviews = selectedCategory === 'All'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.category === selectedCategory);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReviewForm.name && newReviewForm.quote) {
      setSubmittedMessage(true);
      setTimeout(() => {
        setSubmittedMessage(false);
        setShowReviewModal(false);
      }, 2500);
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16" id="reviews-page-container">
      
      {/* 1. HERO & RATING SUMMARY WIDGET */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#F4EDF9] border border-[#5B16A6]/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#5B16A6] uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Community Trust & Testimonials</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight font-display">
            What Our <span className="text-[#5B16A6]">Riders Say</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Authentic feedback from daily commuters, solo women travelers, and verified vehicle owners sharing highway journeys across India.
          </p>
        </motion.div>

        {/* Overall Rating Summary Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#F8F7FA] rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          
          {/* Big Score Block */}
          <div className="lg:col-span-4 text-center lg:text-left lg:border-r border-gray-200 lg:pr-8 space-y-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Overall Community Score
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-5xl sm:text-6xl font-black text-[#5B16A6] font-display">
                4.8
              </span>
              <div>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-gray-500 mt-1">out of 5.0</p>
              </div>
            </div>
            <p className="text-xs text-gray-600">
              Based on <strong className="text-gray-900">45,000+</strong> verified completed journeys across 120+ arterial corridors.
            </p>
          </div>

          {/* Breakdown by Category */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center space-y-1">
              <p className="text-xs text-gray-500 font-medium">Women's Safety</p>
              <p className="text-2xl font-black text-[#00B936] font-display">4.9 ★</p>
              <p className="text-[10px] text-gray-400">Front seat & pair logic</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center space-y-1">
              <p className="text-xs text-gray-500 font-medium">Pricing Fairness</p>
              <p className="text-2xl font-black text-[#5B16A6] font-display">4.9 ★</p>
              <p className="text-[10px] text-gray-400">Zero surge or haggling</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center space-y-1">
              <p className="text-xs text-gray-500 font-medium">Ride Punctuality</p>
              <p className="text-2xl font-black text-[#5B16A6] font-display">4.7 ★</p>
              <p className="text-[10px] text-gray-400">40-min pickup window</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center space-y-1">
              <p className="text-xs text-gray-500 font-medium">Cabin Comfort</p>
              <p className="text-2xl font-black text-[#00B936] font-display">4.8 ★</p>
              <p className="text-[10px] text-gray-400">Zero middle seats</p>
            </div>
          </div>

        </motion.div>
      </section>

      {/* 2. FILTER TAGS, SUBMIT BUTTON & REVIEWS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-gray-100">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#5B16A6] text-white shadow-xs'
                    : 'bg-[#F8F7FA] text-gray-700 hover:bg-[#F4EDF9] hover:text-[#5B16A6]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowReviewModal(true)}
            className="px-4 py-2 bg-[#00B936] hover:bg-[#009c2e] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Share Your Ride Experience</span>
          </motion.button>

        </div>

        {/* Reviews Grid - Staggered Scroll-to-Reveal with Hover Lighting */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              id={`review-item-${rev.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: (index % 4) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative bg-white rounded-3xl p-6 border border-[#E7E3EB] shadow-xs hover:border-[#5B16A6]/40 hover:shadow-lg hover:shadow-[#5B16A6]/5 transition-all duration-300 flex flex-col justify-between space-y-4 group overflow-hidden cursor-pointer"
            >
              {/* Subtle Refined Top Light Edge */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#5B16A6]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 space-y-3">
                
                {/* Header: Stars & Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#5B16A6] bg-[#F4EDF9] px-2.5 py-0.5 rounded-full uppercase tracking-wider group-hover:bg-[#5B16A6] group-hover:text-white transition-colors duration-200">
                    {rev.category}
                  </span>
                </div>

                {/* Corridor Route */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100 group-hover:bg-white group-hover:border-[#5B16A6]/20 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-[#00B936] shrink-0" />
                  <span>{rev.route}</span>
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              {/* User Avatar & Verification Footer */}
              <div className="relative z-10 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${rev.avatarColor} text-white flex items-center justify-center font-bold text-xs shadow-xs group-hover:shadow-[0_0_12px_rgba(91,22,166,0.35)] transition-shadow`}>
                    {rev.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{rev.name}</h4>
                    <p className="text-[10px] text-gray-500">{rev.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-[#00B936] bg-[#E8FBF3] px-2 py-0.5 rounded-md group-hover:bg-[#00B936] group-hover:text-white transition-colors">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. MODAL: WRITE A REVIEW */}
      <AnimatePresence>
        {showReviewModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-200 relative"
            >
              <button
                onClick={() => setShowReviewModal(false)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 rounded-xl hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-extrabold text-gray-900 font-display">
                  Share Your CarPe Experience
                </h3>
                <p className="text-xs text-gray-600">
                  Help other commuters make informed highway travel choices.
                </p>
              </div>

              {submittedMessage ? (
                <div className="p-6 bg-[#E8FBF3] rounded-2xl text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#00B936] text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900">Review Submitted!</h4>
                  <p className="text-xs text-gray-600">
                    Thank you! Your verified trip feedback has been shared with the CarPe community.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meera S."
                      value={newReviewForm.name}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7FA] border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-[#5B16A6] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Corridor Route</label>
                      <select
                        value={newReviewForm.route}
                        onChange={(e) => setNewReviewForm({ ...newReviewForm, route: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#F8F7FA] border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-[#5B16A6] outline-none"
                      >
                        <option>Hyderabad ⇄ Vijayawada</option>
                        <option>Bangalore ⇄ Chennai</option>
                        <option>Pune ⇄ Mumbai</option>
                        <option>Delhi ⇄ Jaipur</option>
                        <option>Ahmedabad ⇄ Surat</option>
                        <option>Chandigarh ⇄ Delhi</option>
                        <option>Coimbatore ⇄ Bangalore</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Highlight Area</label>
                      <select
                        value={newReviewForm.category}
                        onChange={(e) => setNewReviewForm({ ...newReviewForm, category: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#F8F7FA] border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-[#5B16A6] outline-none"
                      >
                        <option>Safety</option>
                        <option>Pricing</option>
                        <option>Comfort</option>
                        <option>Reliability</option>
                        <option>Verification</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewReviewForm({ ...newReviewForm, rating: star })}
                          className="p-1 text-amber-400 focus:outline-none cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newReviewForm.rating ? 'fill-amber-400' : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Honest Feedback</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about the car cleanliness, punctuality, seating comfort, or driver conduct..."
                      value={newReviewForm.quote}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, quote: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7FA] border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-[#5B16A6] outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#5B16A6] hover:bg-[#481185] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm"
                    >
                      Submit Verified Review
                    </button>
                  </div>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. CTA SECTION */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#5B16A6] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            Join Thousands of Satisfied Commuters
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base">
            Get the app, sign up in seconds, and book your next comfortable highway ride with complete peace of mind.
          </p>
          <div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('download')}
              className="px-7 py-3.5 bg-[#00B936] hover:bg-[#009c2e] text-white rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CarPe App</span>
            </motion.button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
