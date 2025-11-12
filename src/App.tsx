// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";

// // Components
// import { Navbar } from "./components/Navbar";
// import { Hero } from "./components/Hero";
// import Categories from "./components/Categories";
// import { AboutUs } from "./components/AboutUs";
// import { CEOTalk } from "./components/CEOTalk";
// import { WhyChooseUs } from "./components/WhyChooseUs";
// import { HowItWorks } from "./components/HowItWorks";
// import { ProductCards } from "./components/ProductCards";
// import { PolicySection } from "./components/PolicySection";
// import { Footer } from "./components/Footer";

// // Pages
// import ConsumerTOS from "./pages/ConsumerTOS";
// import BusinessTOS from "./pages/BusinessTOS";
// import PartnerTOS from "./pages/PartnerTOS";
// import BusinessUserBilling from "./pages/BusinessUserBilling";
// import ContactUs from "./pages/ContactAndSupport";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsOfService from "./pages/TermsOfService";
// import CookiePolicy from "./pages/CookiePolicy";
// import RefundCancellationPolicy from "./pages/RefundCancellation";
// import UserConsentStatement from "./pages/UserConsent";
// import ContactAndSupport from "./pages/ContactAndSupport";

// // ✅ This component handles scroll-to-footer navigation
// function ScrollToFooterHandler() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.scrollToFooter) {
//       const footer = document.getElementById("footer");
//       if (footer) {
//         setTimeout(() => {
//           footer.scrollIntoView({ behavior: "smooth" });
//         }, 300);
//       }
//     }
//   }, [location]);

//   return null;
// }

// export default function App() {
//   return (
//     <Router>
//       <ScrollToFooterHandler />
//       <Routes>
//         {/* === HOME PAGE === */}
//         <Route
//           path="/"
//           element={
//             <div className="min-h-screen bg-white">
//               <Navbar />
//               <Hero />
//               <Categories />
//               <ProductCards />
//               <AboutUs />
//               <CEOTalk />
//               <HowItWorks />
//               <WhyChooseUs />
//               <PolicySection />
//               <Footer />
//             </div>
//           }
//         />

//         {/* === INDIVIDUAL PAGES === */}
//         <Route path="/consumer-tos" element={<ConsumerTOS />} />
//         <Route path="/business-tos" element={<BusinessTOS />} />
//         <Route path="/partner-tos" element={<PartnerTOS />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/business-user-billing" element={<BusinessUserBilling />} />
//         <Route path="/contact-us" element={<ContactAndSupport />} />

//         {/* === SUPPORT PAGES === */}
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms-of-service" element={<TermsOfService />} />
//         <Route path="/cookie-policy" element={<CookiePolicy />} />
//         <Route
//           path="/refund-cancellation-policy"
//           element={<RefundCancellationPolicy />}
//         />
//         <Route path="/user-consent-statement" element={<UserConsentStatement />} />
//       </Routes>
//     </Router>
//   );
// }
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

// Components
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Categories from "./components/Categories";
import { AboutUs } from "./components/AboutUs";
import { CEOTalk } from "./components/CEOTalk";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { HowItWorks } from "./components/HowItWorks";
import { ProductCards } from "./components/ProductCards";
import { PolicySection } from "./components/PolicySection";
import { Footer } from "./components/Footer";

// Pages
import ConsumerTOS from "./pages/ConsumerTOS";
import BusinessTOS from "./pages/BusinessTOS";
import PartnerTOS from "./pages/PartnerTOS";
import BusinessUserBilling from "./pages/BusinessUserBilling";
import ContactUs from "./pages/ContactAndSupport";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import RefundCancellationPolicy from "./pages/RefundCancellation";
import UserConsentStatement from "./pages/UserConsent";
import ContactAndSupport from "./pages/ContactAndSupport";

// ✅ This component handles navigation to footer instantly
function JumpToFooterHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToFooter) {
      const footer = document.getElementById("footer");
      if (footer) {
        // ⏩ Instantly jump (no smooth scroll)
        footer.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <JumpToFooterHandler />
      <Routes>
        {/* === HOME PAGE === */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <Hero />
              <Categories />
              <ProductCards />
              <AboutUs />
              <CEOTalk />
              <HowItWorks />
              <WhyChooseUs />
              <PolicySection />
              <Footer />
            </div>
          }
        />

        {/* === INDIVIDUAL PAGES === */}
        <Route path="/consumer-tos" element={<ConsumerTOS />} />
        <Route path="/business-tos" element={<BusinessTOS />} />
        <Route path="/partner-tos" element={<PartnerTOS />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/business-user-billing"
          element={<BusinessUserBilling />}
        />
        <Route path="/contact-us" element={<ContactAndSupport />} />

        {/* === SUPPORT PAGES === */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/refund-cancellation-policy"
          element={<RefundCancellationPolicy />}
        />
        <Route
          path="/user-consent-statement"
          element={<UserConsentStatement />}
        />
      </Routes>
    </Router>
  );
}
