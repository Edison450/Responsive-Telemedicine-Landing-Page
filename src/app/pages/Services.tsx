import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Stethoscope, Video, MessageSquare, FileText, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Primary Care",
      description: "Comprehensive primary healthcare services including routine checkups, preventive care, and chronic disease management.",
      features: ["Annual physicals", "Chronic care management", "Preventive screenings", "Health counseling"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Consultations",
      description: "Face-to-face virtual appointments with licensed healthcare providers from the comfort of your home.",
      features: ["HD video calls", "Real-time consultations", "Follow-up care", "Prescription management"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Mental Health",
      description: "Professional mental health support including therapy, counseling, and psychiatric care.",
      features: ["Individual therapy", "Couples counseling", "Psychiatric evaluations", "Crisis support"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Specialty Care",
      description: "Access to specialists across various medical fields for specialized treatment and care.",
      features: ["Dermatology", "Cardiology", "Endocrinology", "Neurology"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Women's Health",
      description: "Comprehensive women's healthcare services including gynecology, obstetrics, and reproductive health.",
      features: ["Gynecological exams", "Prenatal care", "Family planning", "Menopause management"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Urgent Care",
      description: "Quick access to medical care for non-emergency urgent health concerns.",
      features: ["Same-day appointments", "Minor injury treatment", "Infection treatment", "Diagnostic services"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-12 md:py-20 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#0D9488]">Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive healthcare services delivered through innovative telemedicine technology,
                ensuring you receive the care you need when and where you need it.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-[#0D9488]">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/register" className="mt-6 w-full px-6 py-3 rounded-full bg-[#0D9488] text-white hover:bg-[#0c8478] transition-colors text-center block">
                    Book Appointment
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-[#0D9488]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#E0F2F1] mb-8 max-w-2xl mx-auto">
              Join thousands of patients who trust TeleCare for their healthcare needs.
              Book your first appointment today.
            </p>
            <Link to="/register" className="px-8 py-4 rounded-full bg-white text-[#0D9488] hover:bg-gray-100 transition-colors font-semibold">
              Book Your Appointment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}