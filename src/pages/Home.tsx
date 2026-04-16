import { motion } from 'motion/react';
import { Leaf, ArrowRight, ShieldCheck, HeartPulse, UserCheck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredServices = [
    {
      title: 'Major Organ Health',
      desc: 'Specialized Arjuna and herbal therapies for Heart, Liver, and Kidney care.',
      icon: <HeartPulse className="text-primary-green" size={24} />
    },
    {
      title: 'Joint Relief',
      desc: 'Ayurvedic treatments for arthritis and persistent chronic pain.',
      icon: <Leaf className="text-primary-green" size={24} />
    },
    {
      title: 'Skin Care',
      desc: 'Natural healing for eczema, psoriasis, and deep skin detoxification.',
      icon: <UserCheck className="text-primary-green" size={24} />
    }
  ];

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-12 w-64 h-64 bg-soft-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-primary-green/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative p-10 md:p-14 glass-card rounded-[32px] overflow-hidden">
                {/* Vintage Background Overlay for Heading */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none grayscale sepia brightness-110">
                  <img 
                    src="https://picsum.photos/seed/herb-shop/800/800" 
                    alt="Vintage Ayurvedic Shop Background" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="relative z-10 font-medium">
                  <div className="inline-block bg-accent-gold text-white px-3 py-1 rounded-full text-[0.75rem] font-bold mb-4 w-fit shadow-sm">
                    Est. 1939 • 85 Years of Trust
                  </div>
                  <h1 className="text-5xl md:text-7xl font-serif font-black text-stone-900 leading-[1.1] mb-6">
                    <motion.span 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="block"
                    >
                      Ram Bharose
                    </motion.span>
                    <motion.span 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="block text-primary-green italic font-medium"
                    >
                      Ram Sharan & Sons
                    </motion.span>
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="block text-2xl md:text-3xl text-stone-500 uppercase tracking-widest mt-4 font-bold"
                    >
                      Ayurvedic Clinic
                    </motion.span>
                  </h1>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mb-10 space-y-2"
                  >
                     <p className="text-xl text-stone-700 font-bold">Ajay Kumar Gupta (Saddam)</p>
                     <p className="text-stone-600 max-w-xl leading-relaxed">
                       346 Harihar Ganj, Fatehpur (Near Hotel Shanti Ganga)
                     </p>
                     <p className="text-primary-green font-black text-lg">+91 90442 21556</p>
                  </motion.div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="bg-primary-green text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-soft-green transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                      Book Appointment <Calendar size={18} />
                    </Link>
                    <Link to="/services" className="bg-white/80 backdrop-blur-sm text-stone-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-white transition-all border border-stone-200 flex items-center justify-center gap-2">
                      View Services <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex items-center gap-8 border-t border-stone-200 pt-8">
                <div>
                  <div className="text-2xl font-serif font-bold text-stone-900">85+</div>
                  <div className="text-xs uppercase tracking-widest text-stone-500">Years of Legacy</div>
                </div>
                <div className="w-px h-8 bg-stone-200"></div>
                <div>
                  <div className="text-2xl font-serif font-bold text-stone-900">2nd</div>
                  <div className="text-xs uppercase tracking-widest text-stone-500">Gen Practitioners</div>
                </div>
                <div className="w-px h-8 bg-stone-200"></div>
                <div>
                  <div className="text-2xl font-serif font-bold text-stone-900">10k+</div>
                  <div className="text-xs uppercase tracking-widest text-stone-500">Happy Patients</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 pill-image shadow-2xl border-4 border-white aspect-[3/4] w-full max-w-md mx-auto overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/ayurveda/800/1000" 
                  alt="Traditional Ayurvedic Healing" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-stone-100">
                <p className="text-stone-800 font-medium italic mb-2">"Ayurveda is the science of life; it heals not just the body, but the soul."</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Leaf key={i} size={14} className="fill-primary-green text-primary-green" />)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <div className="bg-primary-green py-8 text-white overflow-hidden whitespace-nowrap">
        <div className="flex animate-infinite-scroll gap-12 items-center">
            {Array(10).fill(0).map((_, i) => (
                <span key={i} className="text-sm font-medium uppercase tracking-[0.2em] flex items-center gap-4 shrink-0">
                    <Leaf size={16} /> Serving patients with Ayurvedic care for generations since 1939
                </span>
            ))}
        </div>
      </div>

      {/* Featured Services */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Holistic Healing Services</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Explore our wide range of traditional treatments tailored to restore balance and vitality to your life.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[16px] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-beige-bg rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">{service.desc}</p>
              <Link to="/services" className="text-primary-green font-semibold inline-flex items-center gap-2 group">
                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-stone-500 hover:text-primary-green transition-colors font-medium">
             View all treatments and services <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Vintage Aesthetic Script Section */}
      <section className="relative overflow-hidden bg-stone-900 text-white py-32 mt-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/manuscript/1920/1080?grayscale&blur=2" 
            alt="Ancient Script Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-accent-gold font-serif italic text-2xl block border-l-2 border-accent-gold pl-6">Ancient Wisdom</span>
              <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">
                The Sacred <br />
                <span className="text-accent-gold italic">Shlokas</span> of <br />
                Healing
              </h2>
              <div className="space-y-6 text-stone-400 font-serif leading-relaxed text-lg">
                <p>
                  "Swasthyasya swasthya rakshanam, aturasya vikara prashamanam cha." <br />
                  <span className="text-stone-500 text-sm italic">— Sushruta Samhita</span>
                </p>
                <p className="border-t border-stone-800 pt-6">
                  Ayurveda is not just medicine; it is a way of life that harmonizes the soul with the rhythms of nature. Our lineage preserves these scripts to bring the timeless truth of well-being to your doorstep.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group h-full flex items-center justify-center p-8 bg-stone-800/50 backdrop-blur-sm rounded-[32px] border border-white/5"
            >
              <div className="text-center">
                <p className="font-script text-6xl md:text-8xl text-accent-gold/40 mb-4 select-none">Ayurveda</p>
                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl font-display italic text-white leading-relaxed">
                    सर्वे भवन्तु सुखिनः <br />
                    सर्वे सन्तु निरामयाः ।
                  </p>
                  <p className="text-stone-500 text-sm uppercase tracking-[0.3em] font-medium">May all be happy, May all be free from illness</p>
                </div>
                <div className="mt-12 flex justify-center">
                  <div className="w-16 h-px bg-accent-gold/30"></div>
                </div>
                <p className="mt-8 font-script text-4xl text-stone-300">Preserved by Generations</p>
              </div>
              
              {/* Aesthetic floating element */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-accent-gold/5 rounded-full blur-2xl group-hover:bg-accent-gold/10 transition-all duration-700"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary-green/5 rounded-full blur-3xl group-hover:bg-primary-green/10 transition-all duration-700"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-24 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-green font-bold uppercase tracking-widest text-xs mb-4 block">Authentic Roots</span>
            <h2 className="text-4xl font-serif font-bold text-stone-900">Brands We Trust</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 items-center">
            <div className="font-serif text-3xl font-black tracking-tighter text-stone-900">Dabur</div>
            <div className="font-serif text-3xl font-black tracking-tighter text-stone-900">Baidyanath</div>
            <div className="font-serif text-3xl font-black tracking-tighter text-stone-900">Charak</div>
            <div className="font-serif text-3xl font-black tracking-tighter text-stone-900">Dhanvantari</div>
            <div className="font-serif text-3xl font-black tracking-tighter text-stone-900">Dhootapapeshwar</div>
          </div>
          <p className="text-center mt-12 text-stone-500 text-sm font-medium italic">...and many more premium Ayurvedic medicine brands</p>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="bg-stone-900 py-24 rounded-[64px] mx-4 mb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready to experience <br /> natural healing?</h2>
          <p className="text-stone-400 text-lg mb-12 max-w-xl mx-auto">Visit our 85-year-old traditional clinic in Fatehpur or schedule a digital consultation today.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-primary-green text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-soft-green transition-all shadow-lg">
              Book Appointment
            </Link>
            <a href="tel:+919044221556" className="bg-white text-stone-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-stone-100 transition-all border border-stone-200">
              Call Us: +91 90442 21556
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
