import { useState, useEffect } from 'react';
import { User, Briefcase, FileText, Target, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: User },
    { href: '#portfolio', label: 'Portfolio', icon: Briefcase },
    { href: '#resume', label: 'Resume', icon: FileText },
    { href: '#reflection', label: 'Reflection', icon: Target }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl' 
        : 'bg-white/90 backdrop-blur-sm shadow-md'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div>
            <span className="text-3xl font-bold bg-green-600 bg-clip-text text-transparent">
              Ikirezi Sonia Hirwa
            </span>
            <div className="text-lg text-gray-500">Entrepreneurial Leader</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a 
                key={item.href}
                href={item.href} 
                className="group px-4 py-2 text-gray-600 hover:text-green-600 transition-all duration-300 rounded-[15px_5px_15px_5px] hover:bg-green-50 flex items-center gap-2"
              >
                <Icon className="h-4 w-4 group-hover:animate-pulse" />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 rounded-[10px_3px_10px_3px] hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 rounded-[15px_5px_15px_5px]"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;