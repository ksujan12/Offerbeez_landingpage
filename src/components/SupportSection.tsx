import { MessageCircle, Phone, Smartphone, ExternalLink } from 'lucide-react';

export function SupportSection() {
  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F5F5] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#EC1E79]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3345B0]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/80 px-4 py-2 rounded-full border border-[#3345B0]/20 shadow-md">
            <div className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></div>
            <span className="text-[#3345B0]">We're Here to Help</span>
          </div>
          <h2 className="text-[#3B2F2F]">
            Support & Resources
          </h2>
          <p className="text-[#3B2F2F]/60 text-lg max-w-2xl mx-auto">
            Get the assistance you need, whenever you need it
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Help Center Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3345B0] to-[#3345B0]/70 flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-[#3B2F2F] mb-3 group-hover:text-[#3345B0] transition-colors">
              Help Center
            </h3>
            <p className="text-[#3B2F2F]/70 leading-relaxed mb-6">
              Find answers and guides instantly.
            </p>

            {/* CTA Link */}
            <a
              href="#faq"
              className="inline-flex items-center gap-2 text-[#3345B0] hover:text-[#EC1E79] transition-colors group/link"
            >
              <span>Browse FAQs</span>
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Get in Touch Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EC1E79] to-[#EC1E79]/70 flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-[#3B2F2F] mb-3 group-hover:text-[#EC1E79] transition-colors">
              Get in Touch
            </h3>
            <p className="text-[#3B2F2F]/70 leading-relaxed mb-6">
              We're always here to help you.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-[#3B2F2F]/60">
                <span>📧</span>
                <a href="mailto:support@vbffer.com" className="hover:text-[#EC1E79] transition-colors">
                  support@vbffer.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#3B2F2F]/60">
                <span>📞</span>
                <a href="tel:+919876543210" className="hover:text-[#EC1E79] transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* CTA Link */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#EC1E79] hover:text-[#3345B0] transition-colors group/link"
            >
              <span>Contact Us</span>
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Download Apps Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FBBF24] to-[#FBBF24]/70 flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-[#3B2F2F] mb-3 group-hover:text-[#FBBF24] transition-colors">
              Download Our Apps
            </h3>
            <p className="text-[#3B2F2F]/70 leading-relaxed mb-6">
              Get the app and stay connected.
            </p>

            {/* App Store Buttons */}
            <div className="space-y-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-[#3B2F2F] to-[#3B2F2F]/90 text-white px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-[#3B2F2F]/30 transition-all duration-300 group/btn"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-[#3345B0] to-[#3345B0]/90 text-white px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-[#3345B0]/30 transition-all duration-300 group/btn"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-sm">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#3345B0]/10 via-[#EC1E79]/10 to-[#FBBF24]/10 rounded-2xl p-8 text-center border border-[#3345B0]/20">
          <p className="text-[#3B2F2F]/70">
            <span className="text-[#3345B0]">Need immediate assistance?</span> Our support team is available Monday to Saturday, 9 AM - 6 PM IST
          </p>
        </div>
      </div>
    </section>
  );
}
