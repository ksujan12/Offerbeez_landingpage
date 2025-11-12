import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

export function TermsConditions() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using VBffer (Offerbeez), you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all users of the platform, including businesses, consumers, and partners.',
      ],
    },
    {
      title: '2. User Accounts',
      content: [
        'You must be at least 18 years old to create an account on VBffer.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree to provide accurate, current, and complete information during registration.',
        'You are responsible for all activities that occur under your account.',
        'VBffer reserves the right to suspend or terminate accounts that violate these terms.',
      ],
    },
    {
      title: '3. Platform Usage',
      content: [
        'VBffer provides a platform connecting businesses, consumers, and partners.',
        'Users must not misuse the platform for fraudulent, illegal, or unauthorized purposes.',
        'Content posted must be accurate, non-offensive, and comply with all applicable laws.',
        'VBffer reserves the right to remove content that violates these guidelines.',
      ],
    },
    {
      title: '4. Business & Partner Terms',
      content: [
        'Businesses and partners must provide accurate information about their offers and services.',
        'All promotional content must comply with advertising standards and regulations.',
        'Businesses are responsible for honoring the offers they publish on the platform.',
        'VBffer charges applicable fees for business and partner subscriptions as outlined in the pricing section.',
        'Refund policies are subject to the terms outlined in your subscription agreement.',
      ],
    },
    {
      title: '5. Consumer Terms',
      content: [
        'Consumer accounts are free to use and access.',
        'Consumers must redeem offers according to the terms specified by each business.',
        'VBffer is not responsible for disputes between consumers and businesses regarding offer fulfillment.',
        'Consumers agree not to abuse or exploit promotional offers.',
      ],
    },
    {
      title: '6. Intellectual Property',
      content: [
        'All content, trademarks, and data on VBffer are the property of VBffer or its licensors.',
        'Users may not reproduce, distribute, or create derivative works without explicit permission.',
        'By posting content, users grant VBffer a license to use, display, and distribute that content.',
      ],
    },
    {
      title: '7. Limitation of Liability',
      content: [
        'VBffer is provided "as is" without warranties of any kind.',
        'VBffer shall not be liable for any indirect, incidental, or consequential damages.',
        'Our total liability shall not exceed the amount paid by you in the past 12 months.',
        'VBffer is not responsible for third-party content or services.',
      ],
    },
    {
      title: '8. Privacy & Data Protection',
      content: [
        'Your use of VBffer is also governed by our Privacy Policy.',
        'We collect and process data as described in our Privacy Policy.',
        'You consent to the collection and use of your information as outlined.',
      ],
    },
    {
      title: '9. Modifications to Terms',
      content: [
        'VBffer reserves the right to modify these terms at any time.',
        'Users will be notified of significant changes via email or platform notification.',
        'Continued use of the platform after changes constitutes acceptance of new terms.',
      ],
    },
    {
      title: '10. Termination',
      content: [
        'Users may terminate their account at any time through account settings.',
        'VBffer may terminate or suspend accounts for violation of these terms.',
        'Upon termination, certain provisions of these terms continue to apply.',
      ],
    },
    {
      title: '11. Dispute Resolution',
      content: [
        'Any disputes shall be resolved through binding arbitration.',
        'You agree to waive any right to a jury trial or class action lawsuit.',
        'Governing law shall be the laws of the State of California, USA.',
      ],
    },
    {
      title: '12. Contact Information',
      content: [
        'For questions about these terms, please contact us at:',
        'Email: legal@vbffer.com',
        'Phone: +1 (555) 123-4567',
        'Address: 123 Innovation Drive, San Francisco, CA 94102',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3B2F2F] via-[#3B2F2F] to-[#2a2222] text-white pt-32 pb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EC1E79]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3345B0]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <FileText className="w-4 h-4 text-[#FBBF24]" />
              <span className="text-white/90 text-sm">Legal</span>
            </div>
            <h1 className="text-white max-w-3xl mx-auto">
              Terms & Conditions
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Last Updated: October 24, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#3345B0] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-[#3B2F2F] mb-3">Important Notice</h3>
                <p className="text-[#3B2F2F]/70 leading-relaxed">
                  Please read these Terms and Conditions carefully before using the VBffer platform. 
                  These terms constitute a legally binding agreement between you and VBffer. 
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-[#3345B0] flex-shrink-0 mt-1" />
                  <h3 className="text-[#3B2F2F]">{section.title}</h3>
                </div>
                <div className="space-y-3 pl-8">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-[#3B2F2F]/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 bg-gradient-to-br from-[#3345B0]/10 to-[#EC1E79]/10 rounded-2xl p-8 border-2 border-dashed border-[#3345B0]/30">
            <div className="text-center space-y-4">
              <div className="text-4xl mb-2">📋</div>
              <h3 className="text-[#3B2F2F]">Have Questions?</h3>
              <p className="text-[#3B2F2F]/70">
                If you have any questions about these Terms & Conditions, please don't hesitate to contact our legal team.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EC1E79] to-[#3345B0] text-white px-6 py-3 rounded-full hover:shadow-xl hover:shadow-[#EC1E79]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
