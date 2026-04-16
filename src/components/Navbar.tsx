import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Leaf, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-header py-3 h-[70px]' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 h-full flex items-center">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="p-2 bg-primary-green rounded-full text-white"
            >
              <Leaf size={24} />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight text-primary-green leading-none">Ram Bharose</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">Ayurvedic Clinic</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-green ${location.pathname === link.path ? 'text-primary-green underline underline-offset-8' : 'text-stone-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-primary-green text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-soft-green transition-colors shadow-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary-green p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden glass-header border-b border-glass-border overflow-hidden"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-stone-600 hover:text-primary-green hover:bg-stone-50 rounded-lg"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-primary-green text-white py-4 rounded-full font-medium mt-4 shadow-sm"
          >
            Book Appointment
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
