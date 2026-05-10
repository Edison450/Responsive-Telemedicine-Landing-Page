import { Shield, Lock, Award, CheckCircle2 } from 'lucide-react';

export function TrustBanner() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-gray-600">
            Your privacy and security are our top priorities
          </p>
        </div>

        {/* Security & Compliance Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-[#0D9488]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">HIPAA Compliant</h3>
            <p className="text-sm text-gray-600">Certified Security</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
              <Lock className="w-8 h-8 md:w-10 md:h-10 text-[#0D9488]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">256-bit SSL</h3>
            <p className="text-sm text-gray-600">Encrypted Data</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-[#0D9488]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">SOC 2 Type II</h3>
            <p className="text-sm text-gray-600">Audited Systems</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-[#0D9488]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">FDA Registered</h3>
            <p className="text-sm text-gray-600">Medical Device</p>
          </div>
        </div>

        {/* Partner Hospitals/Clinics */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600 mb-6">
            Partnered with leading healthcare institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {/* Partner Logos as Text (you can replace with actual logos) */}
            <div className="text-xl font-semibold text-gray-700">
              Mayo Clinic
            </div>
            <div className="text-xl font-semibold text-gray-700">
              Cleveland Clinic
            </div>
            <div className="text-xl font-semibold text-gray-700">
              Johns Hopkins
            </div>
            <div className="hidden md:block text-xl font-semibold text-gray-700">
              Kaiser Permanente
            </div>
            <div className="hidden lg:block text-xl font-semibold text-gray-700">
              Mass General
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#0D9488] mb-2">50K+</div>
            <div className="text-sm text-gray-600">Patients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#0D9488] mb-2">500+</div>
            <div className="text-sm text-gray-600">Healthcare Providers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#0D9488] mb-2">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#0D9488] mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
