import { motion } from 'motion/react';
import { HeartPulse, Leaf, Shield, User, Droplets, Wind, Sparkles, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const categories = [
    {
      title: 'Major Organ Health',
      icon: <HeartPulse className="text-primary-green" />,
      items: [
        { name: 'Heart Health', desc: 'Arjun-based therapies to strengthen cardiac muscles and regulate circulation.' },
        { name: 'Liver Care', desc: 'Ayurvedic detoxification for fatty liver, jaundice, and bile optimization.' },
        { name: 'Kidney Function', desc: 'Natural support for renal health and urinary tract balance.' }
      ]
    },
    {
      title: 'Digestive & Metabolic',
      icon: <Droplets className="text-primary-green" />,
      items: [
        { name: 'Acidity & Gastritis', desc: 'Holistic management of digestive fire (Agni).' },
        { name: 'Chronic Constipation', desc: 'Herbal detoxification and bowel regulation.' },
        { name: 'IBS & Bloating', desc: 'Diet-based therapy and gut micro-biome restoration.' }
      ]
    },
    {
      title: 'Structural & Bone Health',
      icon: <Wind className="text-primary-green" />,
      items: [
        { name: 'Arthritis & Joint Pain', desc: 'Vata-balancing treatments and natural anti-inflammatories.' },
        { name: 'Sciatica Relief', desc: 'Ancient techniques to reduce nerve compression and pain.' },
        { name: 'Lower Back Pain', desc: 'Structural alignment and herbal oil therapies.' }
      ]
    },
    {
      title: 'Skin & Immunity',
      icon: <Shield className="text-primary-green" />,
      items: [
        { name: 'Eczema & Psoriasis', desc: 'Blood purification and toxin elimination (Pancha Karma).' },
        { name: 'General Immunity', desc: 'Rasayana therapies for long-term health and vitality.' },
        { name: 'Hair & Scalp Health', desc: 'Natural treatment for hair loss and scalp infections.' }
      ]
    },
    {
      title: 'Stress & Mental Well-being',
      icon: <Brain className="text-primary-green" />,
      items: [
        { name: 'Anxiety Management', desc: 'Calming treatments for the nervous system.' },
        { name: 'Sleep Disorders', desc: 'Restoring natural sleep cycles through Ayurveda.' },
        { name: 'Fatigue & Lethargy', desc: 'Energy rejuvenation and metabolic boost.' }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-stone-900 mb-6">Healing Services</h1>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Explore our core Ayurvedic treatments designed to restore balance to your body, mind, and spirit using time-tested traditional techniques.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {categories.map((cat, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-stone-100">
                  {cat.icon}
                </div>
                <h2 className="text-3xl font-serif font-bold text-stone-900">{cat.title}</h2>
                <div className="flex-grow h-px bg-stone-200 ml-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-8 rounded-[16px] shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
                  >
                    <div className="flex-grow">
                      <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{item.name}</h3>
                      <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-stone-50">
                       <Link to="/contact" className="text-primary-green text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                        Inquire Now <Sparkles size={14} />
                       </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 glass-card rounded-[16px] border border-stone-200 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 text-stone-900">Customized Treatment Plans</h2>
            <p className="max-w-2xl mx-auto text-stone-600 mb-6 italic">"Each individual has a unique constitution (Dosha). We provide personalized treatment plans after a thorough consultation."</p>
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-stone-400 font-serif font-bold italic text-sm">
                <span>Dabur</span>
                <span>Baidyanath</span>
                <span>Charak</span>
                <span>Dhanvantari</span>
                <span>Dhootapapeshwar</span>
                <span>& many more</span>
            </div>
            <Link to="/contact" className="bg-primary-green text-white px-10 py-4 rounded-full font-bold hover:bg-soft-green transition-all inline-block">
                Request Free Consultation
            </Link>
        </div>
      </div>
    </div>
  );
}
