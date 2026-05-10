import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CheckCircle, Users, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-12 md:py-20 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-[#0D9488]">TeleCare</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We're revolutionizing healthcare by making quality medical care accessible to everyone,
                everywhere, through innovative telemedicine solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 md:py-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To bridge the gap between patients and healthcare providers by leveraging technology
                  to deliver convenient, high-quality medical care regardless of location or circumstances.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Accessible healthcare for all</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Quality care that meets the highest standards</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Innovation in telemedicine technology</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <Users className="w-16 h-16 text-[#0D9488] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">50,000+</h3>
                  <p className="text-gray-600">Patients Served</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-[#0D9488] mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <p className="text-gray-600">Patient Satisfaction</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-[#0D9488] mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <p className="text-gray-600">Support Available</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-[#0D9488] mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <p className="text-gray-600">Licensed Providers</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-[#0D9488] mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">HIPAA</div>
                <p className="text-gray-600">Compliant</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}