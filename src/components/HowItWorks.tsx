import {
  UserPlus,
  Settings,
  Gift,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Sign Up",
      description:
        "Register as a business, consumer, or sales partner in just minutes",
      subSteps: [
        "Complete a quick and simple registration process",
        "Choose your role: Business, Consumer, or Partner easily",
        "Verify your account securely to get started",
      ],

      color: "from-[#3266CC] to-[#3266CC]/70",
      bgColor: "bg-[#3266CC]/5",
      borderColor: "border-[#3266CC]/20",
    },
    {
      number: "02",
      icon: Settings,
      title: "Set Up",
      description: "Customize your profile and preferences based on your role",
      subSteps: [
        "Businesses: Create offers tailored for your market",
        "Consumers: Set preferences for personalized deals",
        "Partners: Seamlessly onboard shops through your dashboard",
      ],
      color: "from-[#FF4FA2] to-[#FF4FA2]/70",
      bgColor: "bg-[#FF4FA2]/5",
      borderColor: "border-[#FF4FA2]/20",
    },
    {
      number: "03",
      icon: Gift,
      title: "Engage",
      description: "Start using the platform to achieve your goals",
      subSteps: [
        "Businesses: Promote offers and reach nearby customers",
        "Consumers: Browse, save, and redeem real-time deals",
        "Partners: Start earning with every new business onboarded",
      ],
      color: "from-[#3266CC] to-[#FF4FA2]",
      bgColor: "bg-gradient-to-br from-[#3266CC]/5 to-[#FF4FA2]/5",
      borderColor: "border-[#3266CC]/20",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Grow",
      description: "Monitor your progress and scale your success",
      subSteps: [
        "Businesses: Refine strategies with analytics",
        "Consumers: Enjoy continuous savings",
        "Partners: Expand your network and commissions",
      ],
      color: "from-[#FF4FA2] to-[#3266CC]",
      bgColor: "bg-gradient-to-br from-[#FF4FA2]/5 to-[#3266CC]/5",
      borderColor: "border-[#FF4FA2]/20",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F5F5F5] to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FF4FA2]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3266CC]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#FF4FA2]/5 to-[#3266CC]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "8px",
            background: "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="text-[#3B2F2F] text-3xl sm:text-4xl font-bold">
            How It Works
          </h2>
          
          <p className="text-[#3B2F2F]/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Getting started with Offerbeez is easy. Follow these four simple
            steps to unlock the full potential of hyperlocal businesses.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Mobile Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3266CC] via-[#FF4FA2] to-[#3266CC]"></div>

          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5">
            <div className="relative h-full max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3266CC] via-[#FF4FA2] to-[#3266CC] opacity-30"></div>
            </div>
          </div>

          {/* Equal Card Layout */}
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative flex lg:flex-col gap-6 lg:gap-0 h-full"
                >
                  {/* Desktop Icon */}
                  <div className="hidden lg:flex lg:justify-center lg:mb-8">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl border-4 border-white`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Step Card - Equal Size */}
                  <div className="flex-1 lg:flex-none w-full flex justify-center">
                    <div
                      className={`relative backdrop-blur-sm bg-white border ${step.borderColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col justify-between text-left w-[300px] h-[420px]`}
                    >
                      <div>
                        {/* Number */}
                        <div className="absolute -top-3 -left-3 lg:-top-3 lg:left-1/2 lg:-translate-x-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-white to-[#F5F5F5] shadow-lg border-2 border-white flex items-center justify-center">
                          <span
                            className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent font-semibold`}
                          >
                            {step.number}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="mb-4 pt-2">
                          <h3 className="text-[#3B2F2F] mb-2 font-semibold text-lg group-hover:text-[#3266CC] transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-[#3B2F2F]/60 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Divider */}
                        <div
                          className={`h-px bg-gradient-to-r ${step.color} opacity-20 mb-4`}
                        ></div>

                        {/* Sub Steps */}
                        <div className="space-y-3">
                          {step.subSteps.map((sub, subIndex) => (
                            <div
                              key={subIndex}
                              className="flex items-start gap-3 group/item"
                            >
                              <div
                                className={`w-5 h-5 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`}
                              >
                                <CheckCircle2 className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-[#3B2F2F]/70 text-sm leading-relaxed group-hover/item:text-[#3B2F2F] transition-colors">
                                {sub}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div
                        className={`absolute bottom-0 right-0 w-20 h-20 ${step.bgColor} rounded-tl-full opacity-30`}
                      ></div>
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-3 z-20">
                      <div className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <ArrowRight
                          className={`w-4 h-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}