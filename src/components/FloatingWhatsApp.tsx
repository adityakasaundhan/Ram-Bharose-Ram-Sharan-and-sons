import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const phoneNumber = '919044221556'; 
  const message = 'Hello! I would like to inquire about Ayurvedic treatments.';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
    >
      <MessageCircle size={32} fill="currentColor" />
    </motion.a>
  );
}
