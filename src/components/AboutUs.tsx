import aboutUsImage from "../assets/about-us-img.jpeg";
import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-white py-20 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-[#3345B0]/10 to-[#EC1E79]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-gradient-to-tl from-[#EC1E79]/10 to-[#3345B0]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "8px",
                background: "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent", // ✅ Needed for gradient text to show
                display: "inline-block",
              }}
            >
              About us
            </h2>
            <p style={{ color: "#4b5563", fontSize: "18px" }}>
              Discover offers around the worlds
            </p>
          </motion.div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative group order-2 lg:order-1 flex justify-center"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02] w-[90%] max-w-[500px]">
              <img
                src={aboutUsImage}
                alt="About Offerbeez"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3345B0]/50 to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center gap-3">
                <div className="text-3xl">🐝</div>
                <div>
                  <h4 className="font-semibold text-[#3345B0]">
                    India’s Hyperlocal Platform
                  </h4>
                  <p className="text-sm text-[#555]/70">
                    By Venturebiz Promotions Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 text-[#2F2F2F]/90 space-y-6 text-base sm:text-lg leading-relaxed"
          >
            <p>
              <strong>Offerbeez</strong> is built on the belief that the future
              of shopping is <strong>Local + Digital</strong>. Our mission is to
              help small businesses thrive by connecting them directly with
              their ideal customers.
            </p>

            <p>
              Developed by <strong>Venturebiz Promotions Pvt. Ltd.</strong>,
              Offerbeez brings India’s neighbourhood stores online — creating a
              bridge between businesses, shoppers, and partners to grow
              together.
            </p>

            <p className="text-[#EC1E79] font-semibold text-base sm:text-lg">
              Visit{" "}
              <a
                href="https://venturebiz.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3345B0] underline underline-offset-4 hover:text-[#3B82F6] transition-colors duration-300"
              >
                venturebiz.in
              </a>{" "}
              to explore more about our innovative ventures.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Boost visibility and in-store traffic for local shops.</li>
              <li>Provide customers with real-time location-based offers.</li>
              <li>Enable partners to earn by driving hyperlocal engagement.</li>
            </ul>

            <p>
              Offerbeez is not just an app — it’s a movement to strengthen local
              economies, one neighbourhood at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
