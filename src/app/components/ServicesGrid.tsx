import { Video, Pill, Heart, Users } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Virtual Consults',
    description: 'Connect with board-certified physicians via secure video calls for diagnosis and treatment.',
    color: 'from-[#0D9488] to-[#0c8478]',
  },
  {
    icon: Pill,
    title: 'Prescription Refills',
    description: 'Request and manage your prescription refills online. Delivered to your preferred pharmacy.',
    color: 'from-[#10B981] to-[#059669]',
  },
  {
    icon: Heart,
    title: 'Mental Health Support',
    description: 'Access licensed therapists and counselors for confidential mental health consultations.',
    color: 'from-[#0D9488] to-[#10B981]',
  },
  {
    icon: Users,
    title: 'Student/Staff Care',
    description: 'Specialized healthcare programs for educational institutions and corporate wellness.',
    color: 'from-[#10B981] to-[#0D9488]',
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Care Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From routine check-ups to specialized care, we provide a full spectrum of telehealth services.
          </p>
        </div>

        {/* Services Grid - 4 columns desktop, 2x2 tablet, stacked mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0D9488]/20 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Link */}
                <a 
                  href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 mt-4 text-[#0D9488] font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
