// import React, { useEffect, useState } from "react";
// import {
//   Building2,
//   ShoppingBag,
//   Handshake,
//   TrendingUp,
//   Users,
//   Star,
//   BarChart3,
//   Heart,
//   Shield,
//   Zap,
//   CheckCircle2,
//   Download,
// } from "lucide-react";
// import { motion } from "framer-motion";

// import businessVideo from "../assets/business.mp4";
// import consumerVideo from "../assets/consumer.mp4";
// import partnerVideo from "../assets/partner.mp4";

// export function ProductCards() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => setIsMobile(window.innerWidth < 768);
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   const products = [
//     {
//       id: "consumer",
//       title: "Consumer App",
//       icon: ShoppingBag,
//       tagline: "Hyperlocal Discovery for Consumers",
//       description:
//         "Discover the best hyperlocal offers near you. From spas to buffets to salons, the Offerbeez Consumer App gives personalised, location-based deals instantly — helping you save money while supporting local businesses.",
//       video: consumerVideo,
//       gradient: "linear-gradient(90deg, #EC1E79, #EC1E79cc)",
//       features: [
//         { icon: Star, text: "Browse real-time local deals" },
//         { icon: Heart, text: "Get personalised recommendations" },
//         { icon: CheckCircle2, text: "Redeem instantly at stores" },
//         { icon: Shield, text: "Smooth and secure experience" },
//       ],
//       downloadLink:
//         "https://play.google.com/store/apps/details?id=com.offerbeez_consumer",
//     },
//     {
//       id: "business",
//       title: "Business App",
//       icon: Building2,
//       tagline: "Smart Promotions for Businesses",
//       description:
//         "The Offerbeez Business App helps local businesses, retailers, and service providers compete with bigger brands using smart digital promotions. Create offers in minutes, reach nearby customers, and boost sales effortlessly.",
//       video: businessVideo,
//       gradient: "linear-gradient(90deg, #3345B0, #3345B0cc)",
//       features: [
//         { icon: CheckCircle2, text: "Create and manage offers in minutes" },
//         { icon: BarChart3, text: "Track performance with analytics" },
//         { icon: TrendingUp, text: "Attract local customers easily" },
//         { icon: Zap, text: "Compete with big brands affordably" },
//       ],
//       downloadLink:"https://play.google.com/store/apps/details?id=com.offerbeez_business",
//     },
//     {
//       id: "partner",
//       title: "Partner App",
//       icon: Handshake,
//       tagline: "Growth Tools for Partners",
//       description:
//         "Earn rewards by onboarding shops and sharing offers. The Offerbeez Partner App makes it simple to grow your income with every successful local business promotion.",
//       video: partnerVideo,
//       gradient: "linear-gradient(90deg, #FBBF24, #FBBF24cc)",
//       features: [
//         { icon: Users, text: "Onboard and promote shops" },
//         { icon: TrendingUp, text: "Earn attractive commissions" },
//         { icon: BarChart3, text: "Track performance live" },
//         { icon: CheckCircle2, text: "Join India's hyperlocal network" },
//       ],
//       downloadLink:
//         "https://play.google.com/store/apps/details?id=com.offerbeez_partner",
//     },
//   ];

//   return (
//     <section
//       id="products"
//       style={{
//         padding: isMobile ? "50px 16px" : "80px 20px",
//         background: "linear-gradient(to bottom, #F5F5F5, white)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
//       >
//         {/* Section Heading */}
//         <div
//           style={{
//             textAlign: "center",
//             marginBottom: isMobile ? "40px" : "60px",
//           }}
//         >
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "8px",
//               background: "rgba(251,191,36,0.1)",
//               padding: "8px 16px",
//               borderRadius: "9999px",
//               border: "1px solid rgba(251,191,36,0.3)",
//               backdropFilter: "blur(6px)",
//             }}
//           >
//           </div>

//           <h2
//             style={{
//               fontSize: isMobile ? "24px" : "32px",
//               fontWeight: "700",
//               color: "#3345B0",
//               marginTop: "16px",
//               marginBottom: "8px",
//             }}
//           >
//             Products Designed for Everyone
//           </h2>
//           <p
//             style={{
//               color: "#3B2F2Fcc",
//               fontSize: isMobile ? "16px" : "18px",
//               maxWidth: "600px",
//               margin: "0 auto",
//             }}
//           >
//             Tailored solutions for every stakeholder-choose the one that fits
//             your goals.
//           </p>
//         </div>

//         {/* Product Cards */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: isMobile ? "60px" : "100px",
//           }}
//         >
//           {products.map((product, index) => {
//             const Icon = product.icon;
//             const isReversed = !isMobile && index % 2 !== 0;

//             return (
//               <div
//                 id={product.id}
//                 key={product.id}
//                 style={{
//                   display: "flex",
//                   flexDirection: isReversed ? "row-reverse" : "row",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: "40px",
//                   flexWrap: "wrap",
//                   scrollMarginTop: "120px",
//                 }}
//               >
//                 {/* Phone Mockup */}
//                 <motion.div
//                   initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6 }}
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     flex: "1",
//                     minWidth: isMobile ? "250px" : "300px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       transform: isMobile ? "scale(0.9)" : "scale(1)",
//                       transition: "transform 0.3s ease",
//                     }}
//                   >
//                     {/* Tag */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         top: "-24px",
//                         right: isReversed ? "auto" : "0",
//                         left: isReversed ? "0" : "auto",
//                         zIndex: 30,
//                         background: product.gradient,
//                         color: "#fff",
//                         padding: "8px 16px",
//                         borderRadius: "9999px",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "8px",
//                         boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                         border: "1px solid rgba(255,255,255,0.2)",
//                       }}
//                     >
//                       <Icon size={20} />
//                       <span>{product.title}</span>
//                     </div>

//                     {/* Phone Mockup Frame */}
//                     <div
//                       style={{
//                         position: "relative",
//                         width: isMobile ? "220px" : "260px",
//                         height: isMobile ? "420px" : "500px",
//                         borderRadius: "36px",
//                         border: "10px solid black",
//                         background: "black",
//                         overflow: "hidden",
//                         boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//                       }}
//                     >
//                       {/* Notch */}
//                       <div
//                         style={{
//                           position: "absolute",
//                           top: "0",
//                           left: "50%",
//                           transform: "translateX(-50%)",
//                           width: "80px",
//                           height: "14px",
//                           background: "black",
//                           borderBottomLeftRadius: "10px",
//                           borderBottomRightRadius: "10px",
//                           zIndex: 10,
//                         }}
//                       ></div>

//                       {/* Video */}
//                       <div
//                         style={{
//                           position: "relative",
//                           width: "100%",
//                           height: "100%",
//                           overflow: "hidden",
//                           borderRadius: "20px",
//                         }}
//                       >
//                         <video
//                           src={product.video}
//                           style={{
//                             width: "100%",
//                             height: "100%",
//                             objectFit: "cover",
//                           }}
//                           autoPlay
//                           loop
//                           muted
//                           playsInline
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Text Section */}
//                 <motion.div
//                   initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6 }}
//                   style={{
//                     flex: "1",
//                     minWidth: "300px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       background: "#fff",
//                       borderRadius: "24px",
//                       padding: isMobile ? "20px 20px 68px" : "28px 28px 76px",
//                       boxShadow: "0 4px 25px rgba(0,0,0,0.08)",
//                       border: "1px solid rgba(0,0,0,0.05)",
//                       display: "flex",
//                       flexDirection: "column",
//                       position: "relative",
//                       minHeight: isMobile ? "380px" : "420px",
//                     }}
//                   >
//                     {/* Content */}
//                     <div style={{ flex: 1 }}>
//                       <div
//                         style={{
//                           width: "56px",
//                           height: "56px",
//                           borderRadius: "16px",
//                           background: product.gradient,
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//                         }}
//                       >
//                         <Icon color="white" size={28} />
//                       </div>

//                       <h3
//                         style={{
//                           fontSize: isMobile ? "20px" : "24px",
//                           color: "#3345B0",
//                           fontWeight: "600",
//                           marginTop: "12px",
//                           marginBottom: "4px",
//                         }}
//                       >
//                         {product.title}
//                       </h3>

//                       <p
//                         style={{
//                           background: product.gradient,
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           fontWeight: "500",
//                           fontSize: isMobile ? "16px" : "18px",
//                           marginBottom: "12px",
//                         }}
//                       >
//                         {product.tagline}
//                       </p>

//                       <p
//                         style={{
//                           color: "#3B2F2FCC",
//                           fontSize: isMobile ? "15px" : "16px",
//                           lineHeight: "1.6",
//                         }}
//                       >
//                         {product.description}
//                       </p>

//                       <div style={{ marginTop: "20px" }}>
//                         {product.features.map((feature, idx) => {
//                           const FeatureIcon = feature.icon;
//                           return (
//                             <div
//                               key={idx}
//                               style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "12px",
//                                 marginBottom: "12px",
//                               }}
//                             >
//                               <div
//                                 style={{
//                                   width: "32px",
//                                   height: "32px",
//                                   borderRadius: "12px",
//                                   background: product.gradient,
//                                   display: "flex",
//                                   justifyContent: "center",
//                                   alignItems: "center",
//                                 }}
//                               >
//                                 <FeatureIcon size={18} color="white" />
//                               </div>
//                               <span style={{ color: "#3B2F2F" }}>
//                                 {feature.text}
//                               </span>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     </div>

//                     {/* Download Button - Bottom Right, No Overlap */}
//                     <a
//                       href={product.downloadLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{
//                         alignSelf: "flex-end",
//                         marginTop: "16px",
//                         background: product.gradient,
//                         color: "white",
//                         display: "inline-flex",
//                         alignItems: "center",
//                         gap: "8px",
//                         padding: "10px 18px",
//                         borderRadius: "9999px",
//                         fontWeight: "500",
//                         textDecoration: "none",
//                         boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//                         transition: "transform 0.2s ease, box-shadow 0.2s ease",
//                       }}
//                       onMouseEnter={(e) =>
//                         (e.currentTarget.style.transform = "scale(1.05)")
//                       }
//                       onMouseLeave={(e) =>
//                         (e.currentTarget.style.transform = "scale(1)")
//                       }
//                     >
//                       <Download size={18} />
//                       <span>Download App</span>
//                     </a>
//                   </div>
//                 </motion.div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Pulse Animation */}
//       <style jsx>{`
//         @keyframes pulse {
//           0% {
//             box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.7);
//           }
//           70% {
//             box-shadow: 0 0 0 10px rgba(251, 191, 36, 0);
//           }
//           100% {
//             box-shadow: 0 0 0 0 rgba(251, 191, 36, 0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import {
  Building2,
  ShoppingBag,
  Handshake,
  TrendingUp,
  Users,
  Star,
  BarChart3,
  Heart,
  Shield,
  Zap,
  CheckCircle2,
  Download,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

import businessVideo from "../assets/business.mp4";
import consumerVideo from "../assets/consumer.mp4";
import partnerVideo from "../assets/partner.mp4";

export function ProductCards() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const products = [
    {
      id: "consumer",
      title: "Consumer App",
      icon: ShoppingBag,
      tagline: "Hyperlocal Discovery for Consumers",
      description:
        "Discover the best hyperlocal offers near you. From spas to buffets to salons, the Offerbeez Consumer App gives personalised, location-based deals instantly - helping you save money while supporting local businesses.",
      video: consumerVideo,
      gradient: "linear-gradient(90deg, #EC1E79, #EC1E79cc)",
      features: [
        { icon: Star, text: "Browse real-time local deals" },
        { icon: Heart, text: "Get personalised recommendations" },
        { icon: CheckCircle2, text: "Redeem instantly at stores" },
        { icon: Shield, text: "Smooth and secure experience" },
      ],
      downloadLink:
        "https://play.google.com/store/apps/details?id=com.offerbeez_consumer",
      websiteLink: "https://offerbeez.in",
    },
    {
      id: "business",
      title: "Business App",
      icon: Building2,
      tagline: "Smart Promotions for Businesses",
      description:
        "The Offerbeez Business App helps local businesses, retailers, and service providers compete with bigger brands using smart digital promotions. Create offers in minutes, reach nearby customers, and boost sales effortlessly.",
      video: businessVideo,
      gradient: "linear-gradient(90deg, #3345B0, #3345B0cc)",
      features: [
        { icon: CheckCircle2, text: "Create and manage offers in minutes" },
        { icon: BarChart3, text: "Track performance with analytics" },
        { icon: TrendingUp, text: "Attract local customers easily" },
        { icon: Zap, text: "Compete with big brands affordably" },
      ],
      downloadLink:
        "https://play.google.com/store/apps/details?id=com.offerbeez_business",
      websiteLink: "https://business.offerbeez.in",
    },
    {
      id: "partner",
      title: "Partner App",
      icon: Handshake,
      tagline: "Growth Tools for Partners",
      description:
        "Earn rewards by onboarding shops and sharing offers. The Offerbeez Partner App makes it simple to grow your income with every successful local business promotion.",
      video: partnerVideo,
      gradient: "linear-gradient(90deg, #FBBF24, #FBBF24cc)",
      features: [
        { icon: Users, text: "Onboard and promote shops" },
        { icon: TrendingUp, text: "Earn attractive commissions" },
        { icon: BarChart3, text: "Track performance live" },
        { icon: CheckCircle2, text: "Join India's hyperlocal network" },
      ],
      downloadLink:
        "https://play.google.com/store/apps/details?id=com.offerbeez_partner",
      websiteLink: "https://partner.offerbeez.in",
    },
  ];

  return (
    <section
      id="products"
      style={{
        padding: isMobile ? "50px 16px" : "80px 20px",
        background: "linear-gradient(to bottom, #F5F5F5, white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Section Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "60px",
          }}
        >
          <h2
           style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "8px",
            background: "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          >
            Products Designed for Everyone
          </h2>
          <p
            style={{
              color: "#3B2F2Fcc",
              fontSize: isMobile ? "16px" : "18px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Tailored solutions for every stakeholder - choose the one that fits
            your goals.
          </p>
        </div>

        {/* Product Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "60px" : "100px",
          }}
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            const isReversed = !isMobile && index % 2 !== 0;

            return (
              <div
                id={product.id}
                key={product.id}
                style={{
                  display: "flex",
                  flexDirection: isReversed ? "row-reverse" : "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "40px",
                  flexWrap: "wrap",
                  scrollMarginTop: "120px",
                }}
              >
                {/* Phone Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                    minWidth: isMobile ? "250px" : "300px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      transform: isMobile ? "scale(0.9)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {/* Tag */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-24px",
                        right: isReversed ? "auto" : "0",
                        left: isReversed ? "0" : "auto",
                        zIndex: 30,
                        background: product.gradient,
                        color: "#fff",
                        padding: "8px 16px",
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <Icon size={20} />
                      <span>{product.title}</span>
                    </div>

                    {/* Phone Mockup Frame */}
                    <div
                      style={{
                        position: "relative",
                        width: isMobile ? "220px" : "260px",
                        height: isMobile ? "420px" : "500px",
                        borderRadius: "36px",
                        border: "10px solid black",
                        background: "black",
                        overflow: "hidden",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                      }}
                    >
                      {/* Notch */}
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "80px",
                          height: "14px",
                          background: "black",
                          borderBottomLeftRadius: "10px",
                          borderBottomRightRadius: "10px",
                          zIndex: 10,
                        }}
                      ></div>

                      {/* Video */}
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                          borderRadius: "20px",
                        }}
                      >
                        <video
                          src={product.video}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    flex: "1",
                    minWidth: "300px",
                  }}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "24px",
                      padding: isMobile ? "20px 20px 68px" : "28px 28px 76px",
                      boxShadow: "0 4px 25px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      minHeight: isMobile ? "380px" : "420px",
                    }}
                  >
                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "16px",
                          background: product.gradient,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                        }}
                      >
                        <Icon color="white" size={28} />
                      </div>

                      <h3
                        style={{
                          fontSize: isMobile ? "20px" : "24px",
                          color: "#3345B0",
                          fontWeight: "600",
                          marginTop: "12px",
                          marginBottom: "4px",
                        }}
                      >
                        {product.title}
                      </h3>

                      <p
                        style={{
                          background: product.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "500",
                          fontSize: isMobile ? "16px" : "18px",
                          marginBottom: "12px",
                        }}
                      >
                        {product.tagline}
                      </p>

                      <p
                        style={{
                          color: "#3B2F2FCC",
                          fontSize: isMobile ? "15px" : "16px",
                          lineHeight: "1.6",
                        }}
                      >
                        {product.description}
                      </p>

                      <div style={{ marginTop: "20px" }}>
                        {product.features.map((feature, idx) => {
                          const FeatureIcon = feature.icon;
                          return (
                            <div
                              key={idx}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "12px",
                              }}
                            >
                              <div
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  borderRadius: "12px",
                                  background: product.gradient,
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <FeatureIcon size={18} color="white" />
                              </div>
                              <span style={{ color: "#3B2F2F" }}>
                                {feature.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Buttons: Web + Download */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: "10px",
                        marginTop: "16px",
                      }}
                    >
                      {/* 🌐 Website Icon Button */}
                      <a
                        href={product.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: product.gradient,
                          color: "white",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                          transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        <Globe size={20} />
                      </a>

                      {/* ⬇️ Download Button */}
                      <a
                        href={product.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: product.gradient,
                          color: "white",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 18px",
                          borderRadius: "9999px",
                          fontWeight: "500",
                          textDecoration: "none",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                          transition:
                            "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        <Download size={18} />
                        <span>Download App</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(251, 191, 36, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(251, 191, 36, 0);
          }
        }
      `}</style>
    </section>
  );
}
