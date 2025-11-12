import { Shield, Lock, Eye, Database, UserCheck, Bell } from 'lucide-react';

export function PrivacyPolicy() {
  const sections = [
    {
      icon: Database,
      title: '1. Information We Collect',
      content: [
        'Personal Information: Name, email address, phone number, and profile information you provide during registration.',
        'Usage Data: Information about how you use our platform, including pages visited, features used, and time spent.',
        'Device Information: Device type, operating system, browser type, IP address, and unique device identifiers.',
        'Location Data: With your permission, we collect location data to provide location-based offers.',
        'Transaction Data: For businesses and partners, we collect payment and billing information.',
        'Cookies and Similar Technologies: We use cookies to enhance user experience and analyze platform usage.',
      ],
    },
    {
      icon: Eye,
      title: '2. How We Use Your Information',
      content: [
        'Provide and improve our services and platform functionality.',
        'Personalize your experience with relevant offers and recommendations.',
        'Process transactions and send confirmations and receipts.',
        'Communicate with you about updates, offers, and customer support.',
        'Analyze usage patterns to improve our platform and develop new features.',
        'Prevent fraud, spam, and other harmful activities.',
        'Comply with legal obligations and enforce our terms of service.',
      ],
    },
    {
      icon: UserCheck,
      title: '3. Information Sharing',
      content: [
        'With Business Partners: We share necessary information with businesses when you redeem offers.',
        'With Service Providers: We work with trusted third-party service providers for payment processing, analytics, and customer support.',
        'For Legal Purposes: We may disclose information when required by law or to protect our rights and users.',
        'Business Transfers: In the event of a merger or acquisition, user information may be transferred.',
        'With Your Consent: We may share information for other purposes with your explicit consent.',
        'We never sell your personal information to third parties.',
      ],
    },
    {
      icon: Lock,
      title: '4. Data Security',
      content: [
        'We implement industry-standard security measures to protect your data.',
        'All data transmission is encrypted using SSL/TLS protocols.',
        'Payment information is processed through PCI-DSS compliant payment processors.',
        'We regularly update our security practices and conduct security audits.',
        'Access to personal data is restricted to authorized personnel only.',
        'While we strive to protect your data, no method of transmission is 100% secure.',
      ],
    },
    {
      icon: UserCheck,
      title: '5. Your Rights and Choices',
      content: [
        'Access: You can request a copy of your personal data at any time.',
        'Correction: You can update or correct your personal information through your account settings.',
        'Deletion: You can request deletion of your account and associated data.',
        'Opt-Out: You can opt out of marketing communications at any time.',
        'Location Services: You can disable location tracking in your device settings.',
        'Cookies: You can manage cookie preferences through your browser settings.',
        'Data Portability: You can request your data in a machine-readable format.',
      ],
    },
    {
      icon: Bell,
      title: '6. Communications',
      content: [
        'We may send you service-related emails and notifications.',
        'You can opt out of promotional emails using the unsubscribe link.',
        'Push notifications can be disabled through your device or app settings.',
        'We may still send important account-related messages even if you opt out of marketing.',
      ],
    },
    {
      icon: Shield,
      title: '7. Children\'s Privacy',
      content: [
        'VBffer is not intended for users under the age of 18.',
        'We do not knowingly collect personal information from children.',
        'If we become aware of data collected from children, we will delete it promptly.',
        'Parents or guardians can contact us if they believe their child has provided information.',
      ],
    },
    {
      icon: Database,
      title: '8. Data Retention',
      content: [
        'We retain your personal data as long as your account is active.',
        'After account deletion, we may retain certain data for legal and business purposes.',
        'Transaction records are retained for accounting and legal compliance.',
        'Anonymized data may be retained indefinitely for analytics purposes.',
      ],
    },
    {
      icon: Shield,
      title: '9. International Data Transfers',
      content: [
        'Your data may be transferred to and processed in countries other than your own.',
        'We ensure appropriate safeguards are in place for international transfers.',
        'By using VBffer, you consent to the transfer of your data as described.',
      ],
    },
    {
      icon: Bell,
      title: '10. Changes to Privacy Policy',
      content: [
        'We may update this Privacy Policy from time to time.',
        'We will notify you of significant changes via email or platform notification.',
        'The "Last Updated" date at the top indicates the most recent revision.',
        'Continued use after changes constitutes acceptance of the updated policy.',
      ],
    },
    {
      icon: UserCheck,
      title: '11. Contact Us',
      content: [
        'For privacy-related questions or concerns, please contact us:',
        'Email: privacy@vbffer.com',
        'Phone: +1 (555) 123-4567',
        'Address: 123 Innovation Drive, San Francisco, CA 94102',
        'Data Protection Officer: dpo@vbffer.com',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3B2F2F] via-[#3B2F2F] to-[#2a2222] text-white pt-32 pb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3345B0]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EC1E79]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <Shield className="w-4 h-4 text-[#FBBF24]" />
              <span className="text-white/90 text-sm">Privacy & Security</span>
            </div>
            <h1 className="text-white max-w-3xl mx-auto">
              Privacy Policy
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
              <Shield className="w-8 h-8 text-[#3345B0] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-[#3B2F2F] mb-3">Your Privacy Matters</h3>
                <p className="text-[#3B2F2F]/70 leading-relaxed mb-4">
                  At VBffer, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, share, and protect your data when you use our platform.
                </p>
                <p className="text-[#3B2F2F]/70 leading-relaxed">
                  By using VBffer, you agree to the collection and use of information in accordance with this policy. 
                  We encourage you to read this policy carefully to understand our practices.
                </p>
              </div>
            </div>
          </div>

          {/* Key Principles */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#3345B0]/10 to-[#3345B0]/5 rounded-2xl p-6 border border-[#3345B0]/20">
              <Lock className="w-10 h-10 text-[#3345B0] mb-3" />
              <h4 className="text-[#3B2F2F] mb-2">Secure</h4>
              <p className="text-[#3B2F2F]/60 text-sm">Bank-level encryption protects your data</p>
            </div>
            <div className="bg-gradient-to-br from-[#EC1E79]/10 to-[#EC1E79]/5 rounded-2xl p-6 border border-[#EC1E79]/20">
              <Eye className="w-10 h-10 text-[#EC1E79] mb-3" />
              <h4 className="text-[#3B2F2F] mb-2">Transparent</h4>
              <p className="text-[#3B2F2F]/60 text-sm">Clear about what we collect and why</p>
            </div>
            <div className="bg-gradient-to-br from-[#FBBF24]/10 to-[#FBBF24]/5 rounded-2xl p-6 border border-[#FBBF24]/20">
              <UserCheck className="w-10 h-10 text-[#FBBF24] mb-3" />
              <h4 className="text-[#3B2F2F] mb-2">Your Control</h4>
              <p className="text-[#3B2F2F]/60 text-sm">You control your data and privacy settings</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3345B0] to-[#3345B0]/70 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-[#3B2F2F] mt-2">{section.title}</h3>
                  </div>
                  <div className="space-y-3 pl-16">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-[#3B2F2F]/70 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 bg-gradient-to-br from-[#3345B0] to-[#EC1E79] rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center space-y-4">
              <Shield className="w-12 h-12 mx-auto" />
              <h3 className="text-white">Questions About Your Privacy?</h3>
              <p className="text-white/90">
                Our privacy team is here to help. Contact us anytime with your questions or concerns.
              </p>
              <a
                href="mailto:privacy@vbffer.com"
                className="inline-flex items-center gap-2 bg-white text-[#3345B0] px-6 py-3 rounded-full hover:bg-[#FBBF24] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Privacy Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
