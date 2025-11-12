import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const CookiePolicy: React.FC = () => {
  const navigate = useNavigate();

  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1e1e1e] flex flex-col">
      {/* Header */}
      <header className="w-full bg-white sticky top-0 z-10 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#EC1E79] via-[#F45BA0] to-[#3345B0] bg-clip-text text-transparent drop-shadow-sm ">
              Cookie Policy
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-3 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
              This policy explains how we use cookies and similar technologies
              on our website.
            </p>
          </div>

          <button
            onClick={() => navigate("/", { state: { scrollToFooter: true } })}
            className="bg-gradient-to-r from-[#EC1E79] via-[#F45BA0] to-[#3345B0] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
          >
            Back
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto w-full flex flex-col gap-10 px-6 py-16 text-gray-800 leading-relaxed text-[15px]">
        {/* Version and Logo */}
        {/* <div className="flex justify-between items-start flex-wrap mb-8">
                <p className="text-sm text-gray-500 mt-2">Version 1.0</p>
                <img
                  src={logo}
                  alt="OfferBeez Logo"
                  className="w-[120px] md:w-[180px] object-contain mt-6 opacity-90"
                />
              </div> */}

        {/* Version and Logo */}
        <div className="relative mb-8">
          {/* Watermark Image */}
          <img
            src={logo}
            alt="OfferBeez Logo Watermark"
            className="absolute inset-0 mx-auto opacity-10 w-[250px] md:w-[400px] object-contain select-none pointer-events-none"
            style={{
              top: "950%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
            }}
          />

          {/* Foreground Content */}
          <div className="relative flex justify-between items-start flex-wrap z-10">
            <p className="text-sm text-gray-500 mt-2">Version 1.0</p>
          </div>
        </div>

        {/* Last Updated */}
        <p className="text-sm text-gray-700 mb-10">
          <span className="font-semibold">Last updated:</span>{" "}
          <span className="text-[#EC1E79] font-semibold">
            24th October 2025
          </span>
        </p>

        {/* TOS Content */}
        <div className="space-y-10 text-justify leading-relaxed text-[#1e1e1e] mt-6">
          {/* Section 1 */}
          <div className="text-[#1a1a1a]">
            {/* ---------- PRIVACY POLICY ---------- */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
              <strong>Cookie Policy:</strong>
            </h2>

            <p className="mb-4">
              OfferBeez uses data collection devices such as "cookies" on
              certain pages of the platform to help analyse our OfferBeez page
              flow, measure promotional effectiveness, and promote trust and
              safety. Cookies are small files placed on your hard drive that
              assist us in providing our services. Cookies do not contain any of
              your personal data. OfferBeez offers certain features that are
              only available through the use of a "cookie". OfferBeez also uses
              cookies to allow you to enter your password less frequently during
              a session. Cookies can also help us provide information that is
              targeted to your interests. Most cookies are "session cookies",
              meaning that they are automatically deleted from your hard drive
              at the end of a session. You are always free to decline/delete our
              cookies if your browser permits, although in that case you may not
              be able to use certain features on the Platform, and you may be
              required to re-enter your password more frequently during a
              session. Additionally, you may encounter "cookies" or other
              similar devices on certain pages of the Platform that are placed
              by third parties. OfferBeez do not control the use of cookies by
              third parties. OfferBeez uses cookies from third-party partners
              such as Google Analytics for marketing and analytical purposes.
              Google Analytics helps us understand how our customers use the
              site. You can read more about how Google uses your personal data
              here: 
              <a
                href="https://www.google.com/intl/en/policies/privacy/"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              > https://www.google.com/intl/en/policies/privacy
              </a>{" "}. You can
              opt out of Google Analytics here:

              
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              > https://tools.google.com/dlpage/gaoptout
              </a>{" "}. You can also control the
              use of cookies at the individual browser level, but if you choose
              to disable cookies, it may limit your use of certain features or
              functions on the services.
            </p>

            {/* Footer */}
            <p className="mb-4 font-semibold">
              <a
                href="https://www.venturebiz.in"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                © 2025 Venturebiz Promotions Private Limited
              </a>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
