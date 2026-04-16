import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send an email/API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary-green font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-stone-900 mb-8 leading-tight">
              Start Your <br />Healing Journey
            </h1>
            <p className="text-stone-600 leading-relaxed text-lg mb-12">
              Have questions about our treatments or want to book a specialized consultation? Reach out to us through any of the following channels.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="p-4 glass-card rounded-2xl shadow-sm text-primary-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-stone-900">Ajay Kumar Gupta (Saddam)</h4>
                  <p className="text-primary-green font-bold text-xl mb-1">+91 90442 21556</p>
                  <p className="text-stone-500 text-sm">Call for appointment or guidance</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 glass-card rounded-2xl shadow-sm text-primary-green">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-stone-900">WhatsApp Inquiry</h4>
                  <p className="text-stone-500 text-sm mb-2">Instant support available</p>
                  <a href="https://wa.me/919044221556" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#128C7E] transition-all w-fit mt-2">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 glass-card rounded-2xl shadow-sm text-primary-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-stone-900">Our Clinic</h4>
                  <p className="text-stone-600">346 Harihar Ganj, Fatehpur</p>
                  <p className="text-stone-600">Near Hotel Shanti Ganga</p>
                  <p className="text-stone-500 italic mt-1 font-medium">Uttar Pradesh, India - 212601</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Placeholder - Simple frame */}
            <div className="mt-12 rounded-[32px] overflow-hidden border border-stone-200 h-64 shadow-inner bg-stone-100 relative group cursor-pointer">
                <img src="https://picsum.photos/seed/map/800/400?blur=2" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white text-stone-900 px-6 py-2 rounded-full font-bold flex items-center gap-2">
                      <MapPin size={18} /> View on Google Maps
                    </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
                    <p className="text-xs font-bold text-stone-800 uppercase tracking-tighter">Fatehpur, Uttar Pradesh</p>
                </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-[16px] p-8 md:p-12 shadow-xl"
          >
            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8">Send a Message</h3>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-2">Message Sent!</h4>
                <p className="text-stone-600">Thank you for reaching out. Our healers will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary-green font-bold text-sm uppercase tracking-widest"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest">Full Name</label>
                    <input type="text" required placeholder="Name" className="w-full bg-white/40 backdrop-blur-sm border-stone-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary-green outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" required placeholder="+91" className="w-full bg-white/40 backdrop-blur-sm border-stone-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary-green outline-none transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="example@gmail.com" className="w-full bg-white/40 backdrop-blur-sm border-stone-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary-green outline-none transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest">Consultation For</label>
                  <select className="w-full bg-white/40 backdrop-blur-sm border-stone-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary-green outline-none transition-all appearance-none cursor-pointer">
                    <option>Digestive Health</option>
                    <option>Joint & Bone Pain</option>
                    <option>Skin Disorders</option>
                    <option>Chronic Fatigue</option>
                    <option>Other / General Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-widest">Tell us your concern</label>
                  <textarea rows={4} required placeholder="Message..." className="w-full bg-white/40 backdrop-blur-sm border-stone-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary-green outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary-green text-white py-5 rounded-3xl font-black text-lg shadow-lg hover:shadow-xl hover:bg-soft-green transition-all flex items-center justify-center gap-3">
                  Send Inquiry <Send size={20} />
                </button>
                <p className="text-center text-[10px] text-stone-400 uppercase tracking-[0.1em] font-medium leading-relaxed">
                  By clicking send, you agree to traditional Ayurvedic consultation principles
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
