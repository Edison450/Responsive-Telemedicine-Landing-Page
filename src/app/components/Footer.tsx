import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Medical Emergency? Call 911 immediately</span>
            <span className="hidden sm:inline">|</span>
            <span>Crisis Hotline: 1-800-273-8255</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0D9488] to-[#10B981] rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">TeleCare</span>
            </div>
            <p className="text-gray-400 mb-4">
              Making quality healthcare accessible to everyone, everywhere.
            </p>
            <div className="flex gap-4">
              <a href="#facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0D9488] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0D9488] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0D9488] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#linkedin" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0D9488] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#0D9488] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#0D9488] transition-colors">Our Services</Link></li>
              <li><a href="#how-it-works" className="hover:text-[#0D9488] transition-colors">How It Works</a></li>
              <li><a href="#providers" className="hover:text-[#0D9488] transition-colors">Find a Provider</a></li>
              <li><a href="#careers" className="hover:text-[#0D9488] transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-[#0D9488] transition-colors">Health Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#help" className="hover:text-[#0D9488] transition-colors">Help Center</a></li>
              <li><a href="#faq" className="hover:text-[#0D9488] transition-colors">FAQs</a></li>
              <li><a href="#privacy" className="hover:text-[#0D9488] transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-[#0D9488] transition-colors">Terms of Service</a></li>
              <li><a href="#hipaa" className="hover:text-[#0D9488] transition-colors">HIPAA Notice</a></li>
              <li><a href="#accessibility" className="hover:text-[#0D9488] transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white">1-800-TELECARE</div>
                  <div className="text-sm text-gray-400">Mon-Fri 8AM-8PM EST</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white">support@telecare.com</div>
                  <div className="text-sm text-gray-400">24-48 hour response</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white">123 Health Street</div>
                  <div className="text-sm text-gray-400">Boston, MA 02101</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="font-semibold text-white">Medical Disclaimer:</span> The information provided on this platform is for general informational purposes only and does not constitute medical advice. 
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. 
              Never disregard professional medical advice or delay in seeking it because of something you have read on this platform. 
              If you think you may have a medical emergency, call 911 immediately.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 TeleCare Health Services. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#sitemap" className="hover:text-[#0D9488] transition-colors">Sitemap</a>
              <a href="#accessibility" className="hover:text-[#0D9488] transition-colors">Accessibility</a>
              <a href="#cookies" className="hover:text-[#0D9488] transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
