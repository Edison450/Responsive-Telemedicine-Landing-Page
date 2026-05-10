import { Calendar, Clock, Video } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AppPreview() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Health Dashboard at a Glance
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Manage appointments, access medical records, and communicate with your care team—all from one intuitive platform.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#0D9488]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Easy Scheduling</h3>
                  <p className="text-gray-600">Book appointments in seconds with real-time availability.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">HD Video Calls</h3>
                  <p className="text-gray-600">Crystal-clear consultations with secure, HIPAA-compliant video.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#0D9488]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">24/7 Access</h3>
                  <p className="text-gray-600">Access your health records and messages anytime, anywhere.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Glassmorphic App Preview */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Background Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMHRhYmxldHxlbnwxfHx8fDE3NzQzNDY0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Healthcare technology platform"
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
              </div>

              {/* Glassmorphic Upcoming Appointment Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-md">
                <div className="backdrop-blur-xl bg-white/90 rounded-2xl shadow-2xl border border-white/20 p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Upcoming Appointment</h3>
                    <span className="px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium">
                      Confirmed
                    </span>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0D9488] to-[#10B981] flex items-center justify-center flex-shrink-0">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1666886573590-5815157da865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzQzNDY0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Dr. Sarah Chen"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Dr. Sarah Chen</div>
                      <div className="text-sm text-gray-600">General Practitioner</div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar className="w-5 h-5 text-[#0D9488]" />
                      <span>March 28, 2026</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-5 h-5 text-[#0D9488]" />
                      <span>2:30 PM - 3:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Video className="w-5 h-5 text-[#0D9488]" />
                      <span>Video Consultation</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3 rounded-full bg-gradient-to-r from-[#0D9488] to-[#10B981] text-white font-medium hover:shadow-lg transition-all">
                    Join Video Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
