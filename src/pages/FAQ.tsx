import { motion } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
  {
    question: "How long does it take to see results with Ayurvedic medicine?",
    answer: "Ayurveda typically focuses on treating the root cause rather than suppressing symptoms. While relief from acute issues can be quick, chronic conditions often see significant sustainable improvement within 4-12 weeks of consistent treatment and lifestyle adjustments."
  },
  {
    question: "Do Ayurvedic medicines have side effects?",
    answer: "When prescribed by trained practitioners and prepared using authentic methods, Ayurvedic medicines are generally safe. However, like any therapeutic substance, incorrect usage or sub-standard preparations can cause issues. We prioritize pure herbal formulations."
  },
  {
    question: "Is it safe to take Ayurvedic medicine with Allopathic drugs?",
    answer: "Many Ayurvedic treatments can complement Allopathic medicine. However, it is critical to inform your healer about any existing medications to avoid herb-drug interactions. We always recommend a integrated approach where necessary."
  },
  {
    question: "What is the importance of 'Dosha' in treatment?",
    answer: "Doshas (Vata, Pitta, Kapha) define your unique metabolic constitution. Ayurveda believes that most ailments stem from an imbalance in these doshas. Our core focus is restoring this natural balance through customized diet, herbs, and therapies."
  },
  {
    question: "Do I need to be a vegetarian to follow Ayurveda?",
    answer: "While Ayurveda generally promotes a plant-forward, sattvic diet for optimal digestion and clarity, it is not strictly mandatory. We provide dietary recommendations based on your specific health needs and body type."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center mx-auto mb-6 text-primary-green">
              <MessageCircleQuestion size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-stone-900 mb-6">Common Questions</h1>
            <p className="text-stone-600 max-w-xl mx-auto text-lg leading-relaxed italic">
              "Understanding your journey is the first step toward healing. Find answers to frequently asked questions about Ayurveda."
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div 
                key={index}
                className={`glass-card rounded-[16px] overflow-hidden transition-all ${isActive ? 'ring-1 ring-primary-green/20 scale-[1.01]' : ''}`}

              >
                <button 
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span className={`text-lg font-serif font-bold transition-colors ${isActive ? 'text-primary-green' : 'text-stone-800'}`}>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all ${isActive ? 'bg-primary-green text-white rotate-180' : 'bg-stone-50 text-stone-400'}`}>
                    {isActive ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 text-stone-600 leading-relaxed border-t border-stone-50 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center glass-card rounded-[32px] p-8 md:p-12">
           <h3 className="text-2xl font-serif font-bold mb-4 text-stone-900">Still have questions?</h3>
           <p className="text-stone-600 mb-8 font-medium italic">"Ajay Kumar Gupta (Saddam) and our healers are here to guide you."</p>
           <a href="tel:+919044221556" className="inline-flex items-center gap-2 bg-primary-green text-white px-8 py-3 rounded-full font-bold hover:bg-soft-green transition-all shadow-lg">
             Call +91 90442 21556
           </a>
        </div>
      </div>
    </div>
  );
}
