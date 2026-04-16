import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-header text-stone-600 pt-16 pb-8 mt-12 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary-green rounded-full text-white">
                <Leaf size={20} />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-primary-green">Ram Bharose</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-900 mb-1 font-bold">
              Ajay Kumar Gupta (Saddam)
            </p>
            <p className="text-sm leading-relaxed text-stone-500 mb-6 font-medium">
              Serving the legacy of traditional Ayurvedic healing for 85 years across two generations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-primary-green transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-primary-green transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-primary-green transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-stone-900 font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-primary-green transition-colors">About Our Legacy</Link></li>
              <li><Link to="/services" className="hover:text-primary-green transition-colors">Treatments & Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary-green transition-colors">Patient Stories</Link></li>
              <li><Link to="/faq" className="hover:text-primary-green transition-colors">Healing FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex gap-3">
                <Phone size={18} className="text-primary-green shrink-0" />
                <span>+91 90442 21556</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-primary-green shrink-0" />
                <span>info@rambharoseayurveda.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary-green shrink-0" />
                <span>346 Harihar Ganj, Fatehpur (Near Hotel Shanti Ganga)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 font-serif font-bold mb-6">Working Hours</h4>
            <ul className="space-y-4 text-sm text-stone-500 font-medium">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {currentYear} Ram Bharose Ram Sharan & Son Firm. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
