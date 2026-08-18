import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { 
  Headphones, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  Check, 
  Send, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Building2
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          category: 'General Inquiry',
          message: '',
        });
      }, 4000);
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16" id="contact-page-container">
      
      {/* 1. HERO HEADER */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        className="pt-6 sm:pt-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4"
      >
        <div className="inline-flex items-center gap-2 bg-[#F4EDF9] border border-[#5B16A6]/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#5B16A6] uppercase tracking-wider">
          <Headphones className="w-3.5 h-3.5 text-[#00B936]" />
          <span>Support & Help Desk</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight font-display">
          We’re Here to <span className="text-[#5B16A6]">Help You</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Have questions regarding an upcoming booking, driver document verification, or partnership inquiries? Get in touch with our team.
        </p>
      </motion.section>

      {/* 2. EMERGENCY NOTICE CALLOUT BOX */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 text-rose-950">
          <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1 flex-1">
            <h3 className="text-base font-extrabold text-rose-900 font-display">
              Critical Safety Notice: Live In-Transit Emergencies
            </h3>
            <p className="text-xs sm:text-sm text-rose-800 leading-relaxed">
              If you are currently traveling on an active highway ride and require immediate urgent assistance, please <strong>do not use this contact form</strong>. Trigger the dedicated <strong>Emergency SOS Button</strong> inside the CarPe mobile app to instantly broadcast your live GPS location to your 3 trusted contacts and alert our 24/7 Safety Command Center.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate('services', 'emergency-features')}
            className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs shrink-0 cursor-pointer"
          >
            Review SOS Protocol
          </motion.button>
        </div>
      </motion.section>

      {/* 3. CONTACT FORM & SUPPORT INFO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-[#E7E3EB] shadow-xs"
          >
            <div className="space-y-2 mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900 font-display">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                We typically respond within 2 to 4 business hours.
              </p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#E8FBF3] rounded-2xl p-8 text-center space-y-3 border border-[#00B936]/30"
              >
                <div className="w-12 h-12 rounded-full bg-[#00B936] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-display">Message Dispatched!</h3>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  Thank you for contacting CarPe. Ticket #CP-{Math.floor(100000 + Math.random() * 900000)} has been created. A support executive will email you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F7FA] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5B16A6] outline-none text-gray-900 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F7FA] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5B16A6] outline-none text-gray-900 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F7FA] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5B16A6] outline-none text-gray-900 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Inquiry Category <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F7FA] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5B16A6] outline-none text-gray-900 text-xs"
                    >
                      <option>General Inquiry</option>
                      <option>Booking / Ride Issue</option>
                      <option>Driver Verification & 7-Photo Inspection</option>
                      <option>Safety & Seating Query</option>
                      <option>Refund & Deposit Clarification</option>
                      <option>Corporate / Fleet Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Your Message / Detail <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details of your question or booking reference ID if applicable..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8F7FA] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5B16A6] outline-none text-gray-900 text-xs"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 bg-[#5B16A6] hover:bg-[#481185] text-white rounded-xl font-bold text-xs shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Support Request</span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Channels & Hub Locations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Quick Contact Cards */}
            <div className="bg-[#F8F7FA] rounded-3xl p-6 sm:p-7 border border-gray-200 space-y-5">
              <h3 className="text-lg font-bold text-gray-900 font-display">
                Direct Support Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-[#E8FBF3] text-[#00B936] flex items-center justify-center shrink-0 font-bold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Toll-Free 24/7 Helpline</p>
                    <p className="text-[#5B16A6] font-semibold mt-0.5">1800-CARPE-GO / +91 80 4718 2000</p>
                    <p className="text-[10px] text-gray-500">Round-the-clock telephone support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-[#F4EDF9] text-[#5B16A6] flex items-center justify-center shrink-0 font-bold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Email Inquiries</p>
                    <p className="text-[#5B16A6] font-semibold mt-0.5">support@carpe.in</p>
                    <p className="text-[10px] text-gray-500">For driver onboarding & verification assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0 font-bold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Support Hours</p>
                    <p className="text-gray-700 mt-0.5">24 Hours / 7 Days a Week</p>
                    <p className="text-[10px] text-gray-500">Dedicated highway emergency dispatch desk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hubs */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E3EB] shadow-xs space-y-4">
              <h3 className="text-base font-bold text-gray-900 font-display flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#5B16A6]" />
                <span>Regional Operations Hubs</span>
              </h3>

              <div className="space-y-3 text-xs text-gray-600">
                <div className="border-b border-gray-100 pb-2">
                  <p className="font-bold text-gray-900">Hyderabad (HQ)</p>
                  <p className="text-gray-500 text-[11px]">Level 5, Cyber Gateway, Hitec City, Hyderabad 500081</p>
                </div>
                <div className="border-b border-gray-100 pb-2">
                  <p className="font-bold text-gray-900">Bengaluru Hub</p>
                  <p className="text-gray-500 text-[11px]">Outer Ring Road, Bellandur, Bengaluru 560103</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Pune Corridor Desk</p>
                  <p className="text-gray-500 text-[11px]">Hinjewadi Phase 1, Pune 411057</p>
                </div>
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className="p-4 bg-[#F4EDF9] rounded-2xl border border-[#5B16A6]/20 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-[#5B16A6]">Looking for quick answers?</p>
                <p className="text-gray-600 text-[11px]">Check our searchable FAQ knowledge base.</p>
              </div>
              <button
                onClick={() => onNavigate('faqs')}
                className="px-3.5 py-2 bg-[#5B16A6] text-white font-bold rounded-xl hover:bg-[#481185] transition-colors cursor-pointer"
              >
                Go to FAQs
              </button>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};
