import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const UserConsent: React.FC = () => {
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
              User Consent Statement
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-3 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
              Understand how we handle your data and your rights regarding
              consent and privacy.
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
              <strong>User Consent Statement:</strong>
            </h2>

            {/* ---------- Aadhaar & PAN User Consent Declaration ---------- */}
            <p className="mb-4">
              By proceeding, I voluntarily provide my Aadhaar and PAN card
              details to this application for identity verification and KYC
              (Know Your Customer) purposes. I understand and agree that:
            </p>

            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                My information will be used only for verifying my identity and
                enabling secure access to the services offered.
              </li>
              <li>
                My data will be stored and processed in compliance with
                applicable laws, including the Information Technology Act, 2000,
                and the Aadhaar Act, 2016.
              </li>
              <li>
                My Aadhaar number will not be shared with any unauthorised third
                parties or used for purposes beyond verification without my
                explicit consent.
              </li>
              <li>
                I confirm that the documents and details provided by me are
                genuine and accurate to the best of my knowledge.
              </li>
            </ul>

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

export default UserConsent;
