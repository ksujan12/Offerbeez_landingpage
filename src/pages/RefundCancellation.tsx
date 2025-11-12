import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const RefundCancellation: React.FC = () => {
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
              Refund & Cancellation Policy
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-3 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
              These terms govern refunds and cancellations for OfferBeez
              services. Please read them carefully.
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
              <strong>
                Refund & Cancellation Policy – OfferBeez Subscription
              </strong>
            </h2>

            {/* ---------- Refund & Cancellation Policy ---------- */}
            <h3 className="text-sm text-gray-600 mb-2">
              Effective Date: 30/10/2025
            </h3>
            <h3 className="text-sm text-gray-600 mb-4">
              Last Updated: 25/10/2025
            </h3>

            <h2 className="mb-4">
              Thank you for choosing OfferBeez. Please read this Refund &amp;
              Cancellation Policy carefully before purchasing any subscription
              plan.
            </h2>

            <h2 className="text-1xl md:text-3xl font-extrabold text-black mt-6  drop-shadow-sm">
              <strong>1. Subscription Purchase</strong>
            </h2>

            <p className="mb-4">
              Once a user/business purchases any OfferBeez Subscription Plan,
              the service access is activated instantly, and features become
              available within the application.
            </p>

            <h2 className="text-1xl md:text-3xl font-extrabold text-black mt-6  drop-shadow-sm">
              <strong>2. Cancellation Policy</strong>
            </h2>
            <p className="mb-4">
              All subscription purchases made on OfferBeez are final. Users
              cannot cancel the subscription once the payment has been
              successfully processed.
            </p>

            <h2 className="text-1xl md:text-3xl font-extrabold text-black mt-6  drop-shadow-sm">
              <strong>3. Refund Policy</strong>
            </h2>
            <p className="">
              OfferBeez follows a strict no-refund policy. This means:
            </p>

            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                No refund will be provided for subscription fees already paid.
              </li>
              <li>
                No refund will be issued if the subscription is used partially
                or not used at all.
              </li>
              <li>
                No refund will be provided due to change of mind,
                misunderstanding, or wrong purchase by the user.
              </li>
            </ul>

            <h2 className="text-1xl md:text-3xl font-extrabold text-black mt-6  drop-shadow-sm">
              <strong>4. Auto-Expiration</strong>
            </h2>
            <p className="mb-4">
              The subscription will remain active until the end of the selected
              duration. After the subscription period ends, users may choose to
              cancel, renew, or upgrade their plan.
            </p>

            <h2 className="text-1xl md:text-3xl font-extrabold text-black mt-6  drop-shadow-sm">
              <strong>5. Disputes &amp; Payment Issues</strong>
            </h2>
            <p className="mb-4">
              If any payment was unsuccessful, duplicate, or charged
              incorrectly, please contact our support team within 48 hours with
              payment proof. Our team will assist in verifying the transaction.
            </p>

            <h2 className="text-1xl md:text-3xl font-extrabold text-black mt-6  drop-shadow-sm">
              <strong>6. Contact Support</strong>
            </h2>
            <p className="mb-2">
              If you have any questions or clarifications, please reach out to
              our support team:
            </p>

            <a
              href="mailto:support@offerbeez.in"
              className="text-[#3345B0] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              📧 Email:{" "}
              <span className="font-semibold">support@offerbeez.in</span>
            </a>

            <p className="mb-2">
              📞 Phone: <span className="font-semibold">+91 9008522366</span>
            </p>
            
            <a
              href="https://www.offerbeez.in"
              className="text-[#3345B0] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              📧 Email:{" "}
              <span className="font-semibold">🌐 Website:{" "}
              <span className="font-semibold">www.offerbeez.in</span></span>
            </a>

            <p className="font-bold mt-6 mb-4">
              Refund &amp; Cancellation Policy
            </p>

            <p className="mb-4">
              Once the subscription is purchased, no cancellation and no refund
              will be allowed for any reason. Please review the plan details
              carefully before making the payment.
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

export default RefundCancellation;
