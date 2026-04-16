import { motion } from 'motion/react';
import { Star, Quote, Leaf } from 'lucide-react';

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Fatehpur",
    role: "Regular Patient",
    text: "I suffered from chronic acidity for 10 years and tried various medications. After just 2 months of treatment at Ram Bharose firm, my digestion is completely normal. Truly a legacy of healing.",
    rating: 5
  },
  {
    name: "Anita Sharma",
    location: "Kanpur",
    role: "Skin Treatment Patient",
    text: "The treatments for my eczema were incredible. They didn't just give me oils; they changed my diet and lifestyle. My skin cleared up within weeks. Very grateful for the 2nd generation's care.",
    rating: 5
  },
  {
    name: "Suresh P.",
    location: "Prayagraj",
    role: "Joint Pain Patient",
    text: "At 70, joint pain was making life difficult. Their combination of specialized herbal oils and traditional therapies gave me back my mobility. The experience they bring from 85 years is evident.",
    rating: 5
  },
  {
    name: "Priya Devi",
    location: "Fatehpur",
    role: "General Wellness",
    text: "This shop has been our family's go-to for generations. My grandfather used to visit and now I bring my kids. Their honesty and purity are what keep us coming back.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-stone-900 mb-6">Patient Stories</h1>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Real stories from people who found health and vitality through our traditional Ayurvedic care.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[16px] shadow-sm relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-primary-green/5 group-hover:text-primary-green/10 transition-colors">
                <Quote size={80} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent-gold text-accent-gold" />
                ))}
              </div>

              <p className="text-xl font-serif text-stone-800 leading-relaxed mb-8 relative z-10 italic">
                "{testi.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-beige-bg rounded-2xl flex items-center justify-center text-primary-green font-bold text-xl font-serif border border-stone-100">
                  {testi.name[0]}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-stone-900">{testi.name}</h4>
                  <div className="flex items-center gap-2 text-stone-500 text-xs uppercase tracking-widest font-medium">
                    <span>{testi.role}</span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                    <span>{testi.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <div className="inline-flex items-center gap-3 p-2 pr-6 bg-white rounded-full shadow-sm border border-stone-100">
                <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center text-white">
                    <Leaf size={18} />
                </div>
                <span className="font-medium text-stone-700">Trusted by over <span className="text-primary-green font-bold">10,000+</span> patients across generations.</span>
            </div>
        </div>
      </div>
    </div>
  );
}
