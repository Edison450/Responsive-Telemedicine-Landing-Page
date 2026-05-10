import { Calendar, LogIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-12 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Center on mobile/tablet, left-aligned on desktop */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Accessible Care,{' '}
              <span className="text-[#0D9488]">Anywhere</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Connect with healthcare professionals from the comfort of your home. 
              Quality medical care is just a click away.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/register" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0D9488] text-white hover:bg-[#0c8478] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <Link 
                to="/login" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0D9488] border-2 border-[#0D9488] hover:bg-[#0D9488] hover:text-white transition-all"
              >
                <LogIn className="w-5 h-5" />
                Patient Login
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed Providers
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Support
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691463606-1493d79cc577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlbWVkaWNpbmUlMjBkb2N0b3IlMjB2aWRlbyUyMGNhbGx8ZW58MXx8fHwxNzc0MzQ2NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Doctor conducting telemedicine consultation"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-[200px] sm:max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Patients Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
