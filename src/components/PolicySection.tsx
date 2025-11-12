import { FileText, Shield, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function PolicySection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the Offer Beez Consumer App?',
      answer: 'The Offer Beez Consumer App is a free mobile app that helps you find the best local deals, discounts, and offers near you using GPS location.',
    },
    {
      question: 'How is Offer Beez different from other deal apps?',
      answer: 'We focus on real-time, hyperlocal offers that are active right now near you. The app connects you to nearby shops, restaurants, salons, and more.',
    },
    {
      question: 'Which cities is Offer Beez available in?',
      answer: 'We are expanding across Tier-1, Tier-2, and Tier-3 cities in India. Download the app to check availability in your area.',
    },
    {
      question: 'Who can use the app?',
      answer: 'Anyone looking to save money on local shopping, dining, and services from college students to travellers etc.',
    },
    {
      question: 'Do I need to register to see offers?',
      answer: 'You can browse some offers without registering, but you need an account to save favourites, get alerts, or redeem certain deals.',
    },
    {
      question: 'How do I create an account?',
      answer: 'Sign up using your mobile number (OTP verification).',
    },
    {
      question: 'How do businesses create offers?',
      answer: 'Businesses can create and manage offers through our Business Dashboard. Our intuitive interface makes it easy to set up promotions in minutes.',
    },
    {
      question: 'Is it free to create an account?',
      answer: 'Yes, it’s completely free for consumers.',
    },
    {
      question: 'Can I have multiple accounts?',
      answer: 'We recommend one account per user to avoid confusion in saved offers and preferences.',
    },
    {
      question: 'How do I find offers near me?',
      answer: 'Turn on GPS, open the app, and the home screen will show nearby offers instantly.',
    },
    
  ];

  // Split FAQs into 2 columns evenly
  const leftColumn = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumn = faqs.slice(Math.ceil(faqs.length / 2));

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section  id="faqs"className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBBF24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3345B0]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced FAQ Header */}
        <div className="text-center mb-12 space-y-6">
          {/* Badge */}
        

          {/* BIG Highlighted Heading */}
          <div className="inline-flex items-center gap-2 bg-white/70 border border-pink-100 rounded-full px-6 py-2 shadow-sm backdrop-blur-sm">
            
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#EC1E79] via-[#F45BA0] to-[#3345B0] bg-clip-text text-transparent drop-shadow-sm">
              Help Center
            </h1>
          </div>

          <p className="text-[#3B2F2F]/60 text-lg max-w-2xl mx-auto">
            Find answers to common questions about Offerbeez
          </p>
        </div>

        {/* Two-column FAQ layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-4">
            {leftColumn.map((faq, i) => {
              const index = i;
              return (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/80 rounded-xl border border-white/40 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left"
                  >
                    <h4 className="text-[#3B2F2F] font-medium">{faq.question}</h4>
                    <ChevronDown
                      className={`w-5 h-5 text-[#3345B0] flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === index ? 'max-h-96 opacity-100 px-6 pb-6' : 'max-h-0 opacity-0 px-6 pb-0'
                    }`}
                  >
                    <p className="text-[#3B2F2F]/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {rightColumn.map((faq, i) => {
              const index = i + leftColumn.length;
              return (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/80 rounded-xl border border-white/40 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left"
                  >
                    <h4 className="text-[#3B2F2F] font-medium">{faq.question}</h4>
                    <ChevronDown
                      className={`w-5 h-5 text-[#3345B0] flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === index ? 'max-h-96 opacity-100 px-6 pb-6' : 'max-h-0 opacity-0 px-6 pb-0'
                    }`}
                  >
                    <p className="text-[#3B2F2F]/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}