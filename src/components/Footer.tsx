// import React, { useState } from "react";
// import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logoImage from "../assets/logo.png";
// import ContactAndSupport from "../pages/ContactAndSupport";

// export function Footer() {
//   const [showModal, setShowModal] = useState(false);

//   const consumerPlayStoreLink =
//     "https://play.google.com/store/apps/details?id=com.offerbeez_consumer";
//   const consumerAppStoreLink =
//     "https://apps.apple.com/app/offerbeez-consumer/id123456789";

//   return (
//     <>
//       <footer
//         id="footer"
//         className="bg-gradient-to-br from-[#3B2F2F] via-[#3B2F2F] to-[#2a2222] text-white relative overflow-hidden"
//       >
//         {/* Background Effects */}
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EC1E79]/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3345B0]/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FBBF24]/5 rounded-full blur-3xl"></div>

//         <div className="relative z-10">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//             {/* ===== TOP SECTION ===== */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
//               {/* Logo Section */}
//               <div className="space-y-6 text-left">
//                 <img
//                   src={logoImage}
//                   alt="Offerbeez Logo"
//                   className="h-12 mx-auto sm:mx-0"
//                 />
//                 <div className="flex items-center justify-start gap-2 text-[#FBBF24]">
//                   <span className="text-2xl">🐝</span>
//                   <span>Empowering local businesses</span>
//                 </div>
//                 <p className="text-white/80 text-sm leading-relaxed max-w-sm">
//                   India's emerging hyperlocal platform connecting neighbourhood
//                   shops, small businesses, and consumers through smart, digital
//                   promotions.
//                 </p>
//               </div>

//               {/* Products */}
//               <div className="space-y-4 text-left">
//                 <h4 className="text-white font-semibold">Products</h4>
//                 <div className="space-y-3">
//                   <Link
//                     to="/consumer-tos"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     Consumer TOS
//                   </Link>

//                   <Link
//                     to="/business-tos"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     Business TOS
//                   </Link>

//                   <Link
//                     to="/partner-tos"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     Partner TOS
//                   </Link>
//                 </div>
//               </div>

//               {/* Company */}
//               <div className="space-y-4 text-left">
//                 <h4 className="text-white font-semibold">Company</h4>
//                 <div className="space-y-3">
//                   <a
//                     href="#about"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     About Us
//                   </a>

//                   <a
//                     href="https://venturebiz.in/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     Venturebiz Pvt Ltd.
//                   </a>

//                   <button
//                     onClick={() => setShowModal(true)}
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition w-full text-left"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     Contact & Support
//                   </button>

//                   <Link
//                     to="/business-user-billing"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     Business User Billing
//                   </Link>
//                 </div>
//               </div>

//               {/* Support */}
//               <div className="space-y-4 text-left">
//                 <h4 className="text-white font-semibold">Support</h4>
//                 <div className="space-y-3">
//                   <Link
//                     to="/privacy-policy"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     Privacy Policy
//                   </Link>

//                   <Link
//                     to="/terms-of-service"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     Terms of Service
//                   </Link>

//                   <Link
//                     to="/cookie-policy"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     Cookie Policy
//                   </Link>

//                   <Link
//                     to="/refund-cancellation-policy"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     Refund & Cancellation Policy
//                   </Link>

//                   <Link
//                     to="/user-consent-statement"
//                     className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
//                   >
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     User Consent Statement
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* ===== CONTACT + DOWNLOAD + CONNECT ===== */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-white/10">
//               {/* Contact Us */}
//               <div className="space-y-6 text-left">
//                 <h4 className="text-white font-semibold text-xl">Contact Us</h4>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <Mail className="w-5 h-5 text-[#FBBF24]" />
//                     <div className="text-white/80 text-sm">
//                       <p className="text-white/50 text-xs">Email</p>
//                       <a
//                         href="mailto:info@offerbeez.in"
//                         className="hover:text-[#FBBF24] transition"
//                       >
//                         info@offerbeez.in
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Phone className="w-5 h-5 text-[#FBBF24]" />
//                     <div className="text-white/80 text-sm">
//                       <p className="text-white/50 text-xs">Phone</p>
//                       <a
//                         href="tel:+919008522366"
//                         className="hover:text-[#FBBF24] transition"
//                       >
//                         +91 9008522366
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <MapPin className="w-5 h-5 text-[#FBBF24]" />
//                     <div className="text-white/80 text-sm leading-relaxed max-w-xs">
//                       <p className="text-white/50 text-xs mb-1">Address</p>
//                       #2085/16, 2nd Floor, Spoorthi, Wilson Garden Society
//                       Layout, Puttenahalli Main Road, JP Nagar 7th Phase,
//                       Bangalore - 560078.
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Download Now */}
//               <div id="download" className="space-y-6 text-left">
//                 <h4 className="text-white font-semibold text-xl">
//                   Download Now
//                 </h4>
//                 <p className="text-white/70 text-sm max-w-sm">
//                   Experience Offerbeez - the ultimate app for your local deals
//                   and savings.
//                 </p>

//                 <div className="flex flex-wrap gap-4">
//                   {/* Google Play */}
//                   <button
//                     onClick={() => window.open(consumerPlayStoreLink, "_blank")}
//                     className="transition-all duration-300 rounded-xl flex items-center gap-3 hover:scale-105"
//                   >
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//                       alt="Google Play"
//                       className="h-10"
//                     />
//                   </button>

//                   {/* App Store */}
//                   <button
//                     onClick={() => window.open(consumerAppStoreLink, "_blank")}
//                     className="transition-all duration-300 rounded-xl flex items-center gap-3 hover:scale-105"
//                   >
//                     <img
//                       src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//                       alt="App Store"
//                       className="h-10"
//                     />
//                   </button>
//                 </div>
//               </div>

//               {/* Connect With Us */}
//               <div className="space-y-6 text-left">
//                 <h4 className="text-white font-semibold text-xl">
//                   Connect With Us
//                 </h4>
//                 <div className="flex flex-wrap gap-3">
//                   <a
//                     href="https://www.facebook.com/profile.php?id=61580276036568"
//                     className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#1877F2] hover:scale-110 transition-all duration-300 shadow-lg "
//                   >
//                     <FaFacebookF className="text-white text-lg" />
//                   </a>
//                   <a
//                     href="https://x.com/offerbeez_in"
//                     className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#1DA1F2] hover:scale-110 transition-all duration-300 shadow-lg"
//                   >
//                     <FaTwitter className="text-white text-lg" />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/offerbeez.in?igsh=dXdiMzRuM3lnYWl6"
//                     className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#285AEB] hover:scale-110 transition-all duration-300 shadow-lg"
//                   >
//                     <FaInstagram className="text-white text-lg" />
//                   </a>
//                   <a
//                     href="https://youtube.com/@offerbeez_in?si=BT4NCWIn3mtJ-OXa"
//                     className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#FF0000] hover:scale-110 transition-all duration-300 shadow-lg"
//                   >
//                     <FaYoutube className="text-white text-lg" />
//                   </a>
//                   <a
//                     href="https://wa.me/919008522366"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#25D366] hover:scale-110 transition-all duration-300 shadow-lg"
//                   >
//                     <FaWhatsapp className="text-white text-lg" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Copyright */}
//             <p className="text-center text-white/60 text-sm">
//               © {new Date().getFullYear()} Offerbeez. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* ===== MODAL ===== */}
//       {showModal && <ContactAndSupport onClose={() => setShowModal(false)} />}
//     </>
//   );
// }

import React, { useState } from "react";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";
import ContactAndSupport from "../pages/ContactAndSupport";

export function Footer() {
  const [showModal, setShowModal] = useState(false);

  const consumerPlayStoreLink =
    "https://play.google.com/store/apps/details?id=com.offerbeez_consumer";

  // ❌ App Store link temporarily commented — app not yet available
  // const consumerAppStoreLink =
  //   "https://apps.apple.com/app/offerbeez-consumer/id123456789";

  return (
    <>
      <footer
        id="footer"
        className="bg-gradient-to-br from-[#3B2F2F] via-[#3B2F2F] to-[#2a2222] text-white relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EC1E79]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3345B0]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FBBF24]/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* ===== TOP SECTION ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
              {/* Logo Section */}
              <div className="space-y-6 text-left">
                <img
                  src={logoImage}
                  alt="Offerbeez Logo"
                  className="h-12 mx-auto sm:mx-0"
                />
                <div className="flex items-center justify-start gap-2 text-[#FBBF24]">
                  <span className="text-2xl">🐝</span>
                  <span>Empowering local businesses</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                  India's emerging hyperlocal platform connecting neighbourhood
                  shops, small businesses, and consumers through smart, digital
                  promotions.
                </p>
              </div>

              {/* Products */}
              <div className="space-y-4 text-left">
                <h4 className="text-white font-semibold">Products</h4>
                <div className="space-y-3">
                  <Link
                    to="/consumer-tos"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Consumer TOS
                  </Link>

                  <Link
                    to="/business-tos"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Business TOS
                  </Link>

                  <Link
                    to="/partner-tos"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Partner TOS
                  </Link>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-4 text-left">
                <h4 className="text-white font-semibold">Company</h4>
                <div className="space-y-3">
                  <a
                    href="#about"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    About Us
                  </a>

                  <a
                    href="https://venturebiz.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Venturebiz Pvt Ltd.
                  </a>

                  <button
                    onClick={() => setShowModal(true)}
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition w-full text-left"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Contact & Support
                  </button>

                  <Link
                    to="/business-user-billing"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Business User Billing
                  </Link>
                </div>
              </div>

              {/* Support */}
              <div className="space-y-4 text-left">
                <h4 className="text-white font-semibold">Support</h4>
                <div className="space-y-3">
                  <Link
                    to="/privacy-policy"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Privacy Policy
                  </Link>

                  <Link
                    to="/terms-of-service"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Terms of Service
                  </Link>

                  <Link
                    to="/cookie-policy"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Cookie Policy
                  </Link>

                  <Link
                    to="/refund-cancellation-policy"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Refund & Cancellation Policy
                  </Link>

                  <Link
                    to="/user-consent-statement"
                    className="group flex items-center gap-2 text-white/70 hover:text-[#FBBF24] transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    User Consent Statement
                  </Link>
                </div>
              </div>
            </div>

            {/* ===== CONTACT + DOWNLOAD + CONNECT ===== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-white/10">
              {/* Contact Us */}
              <div className="space-y-6 text-left">
                <h4 className="text-white font-semibold text-xl">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#FBBF24]" />
                    <div className="text-white/80 text-sm">
                      <p className="text-white/50 text-xs">Email</p>
                      <a
                        href="mailto:info@offerbeez.in"
                        className="hover:text-[#FBBF24] transition"
                      >
                        info@offerbeez.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#FBBF24]" />
                    <div className="text-white/80 text-sm">
                      <p className="text-white/50 text-xs">Phone</p>
                      <a
                        href="tel:+919008522366"
                        className="hover:text-[#FBBF24] transition"
                      >
                        +91 9008522366
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FBBF24]" />
                    <div className="text-white/80 text-sm leading-relaxed max-w-xs">
                      <p className="text-white/50 text-xs mb-1">Address</p>
                      #2085/16, 2nd Floor, Spoorthi, Wilson Garden Society
                      Layout, Puttenahalli Main Road, JP Nagar 7th Phase,
                      Bangalore - 560078.
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Now */}
              <div id="download" className="space-y-6 text-left">
                <h4 className="text-white font-semibold text-xl">
                  Download Now
                </h4>
                <p className="text-white/70 text-sm max-w-sm">
                  Experience Offerbeez - the ultimate app for your local deals
                  and savings.
                </p>

                <div className="flex flex-wrap gap-4">
                  {/* ✅ Google Play */}
                  <button
                    onClick={() => window.open(consumerPlayStoreLink, "_blank")}
                    className="transition-all duration-300 rounded-xl flex items-center gap-3 hover:scale-105"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-10"
                    />
                  </button>

                  {/* ❌ App Store (Currently Disabled) */}
                  {/*
                  <button
                    onClick={() => window.open(consumerAppStoreLink, "_blank")}
                    className="transition-all duration-300 rounded-xl flex items-center gap-3 hover:scale-105"
                  >
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="App Store"
                      className="h-10"
                    />
                  </button>
                  */}
                </div>
              </div>

              {/* Connect With Us */}
              <div className="space-y-6 text-left">
                <h4 className="text-white font-semibold text-xl">
                  Connect With Us
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61580276036568"
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#1877F2] hover:scale-110 transition-all duration-300 shadow-lg "
                  >
                    <FaFacebookF className="text-white text-lg" />
                  </a>
                  <a
                    href="https://x.com/offerbeez_in"
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#1DA1F2] hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <FaTwitter className="text-white text-lg" />
                  </a>
                  <a
                    href="https://www.instagram.com/offerbeez.in?igsh=dXdiMzRuM3lnYWl6"
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#285AEB] hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <FaInstagram className="text-white text-lg" />
                  </a>
                  <a
                    href="https://youtube.com/@offerbeez_in?si=BT4NCWIn3mtJ-OXa"
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#FF0000] hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <FaYoutube className="text-white text-lg" />
                  </a>
                  <a
                    href="https://wa.me/919008522366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#25D366] hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <FaWhatsapp className="text-white text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-center text-white/60 text-sm">
              © {new Date().getFullYear()} Offerbeez. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ===== MODAL ===== */}
      {showModal && <ContactAndSupport onClose={() => setShowModal(false)} />}
    </>
  );
}
