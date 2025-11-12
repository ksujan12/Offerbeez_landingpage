import { ImageWithFallback } from "./figma/ImageWithFallback";
import CEO_Img from "../assets/CEO_Img.jpeg";
import { Quote } from "lucide-react";

export function CEOTalk() {
  return (
    <section className="bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#3345B0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#EC1E79]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center mb-20">
        {/* Highlighted Gradient Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#EC1E79] via-[#3345B0] to-[#FBBF24] bg-clip-text text-transparent inline-block tracking-tight drop-shadow-sm">
          Message from Our CEO
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: CEO Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Gradient Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EC1E79] via-[#FBBF24] to-[#3345B0] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#EC1E79] via-[#FBBF24] to-[#3345B0] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"></div>

            {/* Image */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/20 to-transparent z-10"></div>
              <ImageWithFallback
                src={CEO_Img}
                alt="CEO Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/90 px-6 py-3 rounded-full border border-white/40 shadow-xl">
              <div className="text-[#EC1E79] text-center font-semibold">
                Ananth Somayaji
              </div>
              <div className="text-[#3345B0] opacity-70 text-center">CEO</div>
            </div>
          </div>
        </div>

        {/* Right: Quote Card */}
        <div className="relative">
          {/* Floating Quote Icon */}
          <div className="absolute -top-10 left-6 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#EC1E79] to-[#FBBF24] flex items-center justify-center shadow-xl z-10">
            <Quote className="w-8 h-8 text-white" />
          </div>

          {/* Quote Card */}
          <div className="relative mt-10 backdrop-blur-md bg-white/80 rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/40 transform hover:scale-105 transition-all duration-500">
            <div className="space-y-6 text-[#3345B0] leading-relaxed">
              <p>
                "At OfferBeez, our vision is to make local businesses stronger,
                communities closer, and shopping smarter."
              </p>
              <p>
                "We believe hyperlocal is the future of India's retail economy.
                By connecting consumers, businesses, and partners in one digital
                ecosystem, we're not just enabling transactions - we're building
                trust, relationships, and growth."
              </p>
              <p>
                "OfferBeez is here to ensure neighbourhood shops continue to
                thrive in a digital-first world, while customers enjoy the best
                local deals right around the corner."
              </p>

              {/* CTA Section */}
              <div className="pt-6 border-t border-[#FBBF24]/30">
                <p className="text-[#3B2F2F]/80 mb-4 italic">
                  Ready to experience the future of shopping? Sign up with
                  OfferBeez today to discover, save, and grow in your
                  neighbourhood.
                </p>
                <p className="text-[#EC1E79] font-medium">
                  Because the best deals are not far away - they're right around
                  the corner.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Corner */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#3345B0]/20 to-transparent rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}