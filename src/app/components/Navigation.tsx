import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#0D9488] to-[#10B981] rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-900">TeleCare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-gray-600 hover:text-[#0D9488] transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-[#0D9488] transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#0D9488] transition-colors">
              Contact
            </Link>
            <Link
              to="/login"
              className="px-6 py-2 rounded-full bg-[#0D9488] text-white hover:bg-[#0c8478] transition-colors"
            >
              Patient Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link 
                to="/services" 
                className="px-4 py-2 text-gray-600 hover:text-[#0D9488] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-gray-600 hover:text-[#0D9488] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 text-gray-600 hover:text-[#0D9488] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/login" 
                className="mx-4 px-6 py-2 rounded-full bg-[#0D9488] text-white text-center hover:bg-[#0c8478] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Patient Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
