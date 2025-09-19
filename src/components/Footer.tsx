import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, ChevronRight, Heart, Sparkles, ArrowUp, Star } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    { icon: Mail, text: 'soniahirwa@gmail.com', href: 'mailto:soniahirwa@gmail.com' },
    { icon: Phone, text: '+250 786 497 029', href: 'tel:+250786497029' },
    { icon: MapPin, text: 'Kigali, Nyarugenge, Rwanda', href: '#' }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#resume', label: 'Resume' },
    { href: '#reflection', label: 'Reflection Essay' }
  ];

  return (
    <footer className="bg-green-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-300/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-300/5 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-[12px_4px_12px_4px] flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Contact Information</h3>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a 
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span>{info.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-[12px_4px_12px_4px] flex items-center justify-center">
                <Star className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Quick Links</h3>
            </div>
            
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-[12px_4px_12px_4px] flex items-center justify-center">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Connect</h3>
            </div>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-[20px_8px_20px_8px] transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6 text-green-400 group-hover:animate-pulse" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Ikirezi Hirwa Sonia. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Sparkles className="h-4 w-4" />
            <span>Made with passion in Rwanda</span>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-green-500 text-white rounded-[15px_5px_15px_5px] shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-50 animate-bounce"
        >
          <ArrowUp className="h-6 w-6 mx-auto" />
        </button>
      )}
    </footer>
  );
};

export default Footer;