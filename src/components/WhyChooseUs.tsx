import { Award, Building2, ShoppingBag, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function WhyChooseUs() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 👇 Swapped "business" and "consumer" positions
  const sections = [
    {
      id: "business",
      title: "Businesses",
      icon: Building2,
      description:
        "With Offerbeez, local shops don't just advertise - they grow. Our smart digital promotions, geo-targeted campaigns, and real-time analytics help small businesses attract the right customers at the right time. This means more walk-ins, better visibility, and growth without the high costs of competing with big brands.",
      color1: "#3345B0",
      color2: "#5A6AE6",
    },
    {
      id: "consumer", // 👈 Center highlighted card
      title: "Consumers",
      icon: ShoppingBag,
      description:
        "Most websites flood you with irrelevant offers - but Offerbeez delivers location-based, personalised deals tailored to your lifestyle. Whether it's a spa nearby, a lunch buffet, or a weekend shopping plan, you discover instant, authentic savings from businesses around you, not random discounts you'll never use.",
      color1: "#EC1E79",
      color2: "#F45BA0",
    },
    {
      id: "partner",
      title: "Partners",
      icon: Handshake,
      description:
        "Unlike other platforms, Offerbeez gives individuals the chance to earn while empowering local businesses. By onboarding shops and promoting offers, partners enjoy attractive commissions and real-time performance tracking, turning their networks into a steady income stream.",
      color1: "#FBBF24",
      color2: "#FCD34D",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden py-20 px-6 bg-gradient-to-br from-[#f9fafc] to-[#f2f6ff]"
    >
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-pink-100 rounded-full px-6 py-2 shadow-sm backdrop-blur-sm">
            <Award className="w-5 h-5 text-[#EC1E79]" />
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#EC1E79] via-[#F45BA0] to-[#3345B0] bg-clip-text text-transparent drop-shadow-sm">
              Why Choose Offerbeez
            </h1>
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mt-5">
            Transforming Hyperlocal Businesses in India
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-[16px] md:text-[17px] leading-relaxed">
            Unlike traditional deal websites, Offerbeez is built to create
            lasting value for businesses, consumers, partners, and communities.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`relative flex ${
            isMobile
              ? "flex-col items-center gap-8"
              : "flex-row justify-center items-center gap-12"
          }`}
        >
          {sections.map((section) => {
            const Icon = section.icon;
            const isConsumer = section.id === "consumer";
            const isHovered = hovered === section.id;
            const zIndex = isHovered ? 50 : isConsumer ? 30 : 10;

            const scale =
              isMobile && isConsumer
                ? 1
                : isHovered
                ? 1.12
                : isConsumer
                ? 1.05
                : hovered
                ? 0.9
                : 0.85;

            return (
              <motion.div
                key={section.id}
                onMouseEnter={() => !isMobile && setHovered(section.id)}
                onMouseLeave={() => !isMobile && setHovered(null)}
                className="relative w-full md:w-[320px] transition-all duration-500"
                style={{ zIndex }}
                animate={{
                  scale,
                  y:
                    isMobile
                      ? 0
                      : isHovered
                      ? -20
                      : isConsumer
                      ? 0
                      : hovered
                      ? 20
                      : 40,
                  opacity: isConsumer ? 1 : isHovered ? 0.95 : 0.8,
                }}
                transition={{ type: "spring", stiffness: 140, damping: 20 }}
              >
                <div
                  className={`relative p-8 rounded-2xl backdrop-blur-xl transition-all duration-500 ${
                    isConsumer
                      ? "bg-white shadow-2xl border-2 border-pink-400/50"
                      : "bg-white/80 shadow-lg border border-gray-200/50"
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? `0 25px 60px ${section.color1}44`
                      : isConsumer
                      ? "0 25px 60px rgba(236,30,121,0.25)"
                      : "0 12px 30px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-[75px] h-[75px] mx-auto rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${section.color1}, ${section.color2})`,
                      boxShadow: `0 10px 35px ${section.color1}66`,
                    }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] md:text-[16px] max-w-[320px] mx-auto">
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}