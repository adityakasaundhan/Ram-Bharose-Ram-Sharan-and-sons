import { motion } from 'motion/react';
import { Award, Users, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Founded In', value: '1939', icon: <Award size={24} /> },
    { label: 'Generations', value: '2nd', icon: <Users size={24} /> },
    { label: 'Patient Satisfaction', value: '98%', icon: <CheckCircle2 size={24} /> },
    { label: 'Location', value: 'Fatehpur, UP', icon: <MapPin size={24} /> }
  ];

  return (
    <div className="pt-32 pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-green font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-stone-900 mb-8 leading-tight">
              A Legacy of <br />Traditional Healing
            </h1>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Founded in 1939, <span className="font-bold text-stone-800">Ram Bharose Ram Sharan & Sons Ayurvedic Clinic</span> has been the cornerstone of Ayurvedic healthcare in Fatehpur, Uttar Pradesh for over 85 years.
              </p>
              <p>
                What started as a small local apothecary has flourished into a trusted institution, now being served by <span className="font-bold text-stone-800">Ajay Kumar Gupta (Saddam)</span>, representing the second generation of practitioners who carry forward the sacred legacy of natural healing.
              </p>
              <p>
                Our mission has always been simple: to provide pure, effective, and accessible Ayurvedic treatments that address the root cause of ailments rather than just the symptoms. We believe in the profound wisdom of the Vedas and its application in modern lifestyles.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-primary-green">{stat.icon}</div>
                  <span className="text-3xl font-serif font-bold text-stone-900">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 pill-image shadow-2xl overflow-hidden aspect-square max-w-lg mx-auto border-8 border-white">
              <img 
                src="https://raw.githubusercontent.com/antigravity-hq/antigravity-storage/refs/heads/main/input_file_0.png" 
                alt="Our Historic Shop in Fatehpur" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 p-10 bg-primary-green text-white rounded-[40px] shadow-xl max-w-[280px]">
              <p className="text-3xl font-serif font-bold mb-2">85+</p>
              <p className="text-sm border-t border-white/20 pt-2 opacity-80 uppercase tracking-widest">Years of providing Ayurvedic care to the community</p>
            </div>
          </motion.div>
        </div>

        <div className="glass-card rounded-[16px] p-8 md:p-20 shadow-sm border border-stone-100">
           <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-stone-900">Our Mission</h2>
              <p className="text-xl text-stone-600 leading-relaxed italic">
                "To preserve and promote the ancient wisdom of Ayurveda through authentic treatments and pure herbal formulations, ensuring holistic well-being for every patient who walks through our doors."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
