import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const PrivacyPolicy: React.FC = () => {
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
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-3 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
              This is the latest official policy content maintained by OfferBeez.
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
        <div className="space-y-10 text-justify leading-relaxed text-[#1e1e1e]">
          {/* Section 1 */}
          <div className="text-[#1a1a1a]">
            {/* ---------- PRIVACY POLICY ---------- */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
              <strong>PRIVACY POLICY:</strong>
            </h2>

            <p className="mb-4">
              This Notice applies to{" "}
              <strong>Venturebiz Promotions Private Limited</strong>,
              hereinafter referred to as <strong>“OfferBeez”</strong> (the
              Product/Platform) or <strong>“The Company”</strong>, a company
              incorporated under the Companies Act, 2013, and having its
              registered office at #2085/16, 2nd Floor, Spoorthi, Puttenahalli
              Main Road, JP Nagar 7th Phase, Bangalore-560078, and its
              subsidiaries, its holding company, and its affiliates. The Company
              is the owner of the websites{" "}
              <a
                href="https://www.offerbeez.in"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.offerbeez.in
              </a>{" "}
              and{" "}
              <a
                href="https://www.venturebiz.in"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.venturebiz.in
              </a>{" "}
              and the mobile application ‘OfferBeez’ (collectively, the
              “Product/Platform”).
            </p>

            <p className="mb-4">
              This privacy notice describes the policies and procedures
              applicable to the collection, use, storage, disclosure, and
              protection of your information shared with us while you use the
              Platform. For the purpose of this privacy notice,{" "}
              <strong>OfferBeez</strong> refers to{" "}
              <strong>Venturebiz Promotions Private Limited</strong> and its
              subsidiaries, its holding company, and its affiliates, wherever
              the context so requires. The terms “you”, “your”, “yourself” or
              “user” refer to the user of the Platform.
            </p>

            <p className="mb-4">
              We value the trust you place in OfferBeez. That is why we maintain
              reasonable security standards for securing the transactions and
              your information. Please read the Privacy Notice carefully prior
              to using or registering on the Platform or accessing any material
              or information or availing any services through the Platform.
            </p>

            <p className="mb-4">
              This Privacy Notice specifies the manner in which your information
              is collected, received, stored, processed, disclosed, transferred,
              dealt with or otherwise handled by us. This Privacy Notice does
              not apply to information that you provide to, or that is collected
              by, any third party through the Platform, and any Third-Party
              Sites that you access or use in connection with the services
              offered on the Platform.
            </p>

            <p className="mb-4">
              <strong>OfferBeez</strong> values the trust you place in us and
              recognises the importance of secure transactions and information
              privacy. This Privacy Policy describes how{" "}
              <strong>Venturebiz Promotions Private Limited</strong> and its
              affiliates, group companies, and related parties (collectively “
              <strong>OfferBeez</strong>”, “<strong>offerbeez</strong>”, “our”,
              “us”) collect, use, share, or otherwise process your personal data
              through the <strong>OfferBeez</strong> website{" "}
              <a
                href="https://offerbeez.in"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://offerbeez.in
              </a>
              , its mobile application, and website (hereinafter referred to as
              the “Platform”).
            </p>

            <p className="mb-4">
              While you can browse sections of the Platform without the need to
              share any information with us, please note that{" "}
              <strong>OfferBeez</strong> does not offer any product or service
              under this Platform outside India, and your personal data will
              primarily be stored and processed in India. By visiting this
              Platform, providing your information, or availing yourself of our
              products/services, you expressly agree to be bound by this Privacy
              Policy, the Terms of Use, and the applicable service/product terms
              and conditions, and the laws of India, including but not limited
              to the laws applicable to data protection and privacy. If you do
              not agree, please do not use or access our Platform.
            </p>

            <p className="mb-4">
              When you use our platform, OfferBeez collects and stores your
              information, which is provided by you from time to time. Once you
              give us your personal data, you are not anonymous to us. Where
              possible, OfferBeez indicates which fields are required and which
              fields are optional. You always have the option to not provide
              data by choosing not to use a particular service, product or
              feature on the platform.
            </p>

            <p className="mb-4">
              OfferBeez collects and analyses your personal data relating to
              your buying behaviour, browsing patterns, preferences, and other
              information that you choose to provide while interacting with our
              platform. OfferBeez uses this information to do internal research
              on our users' demographics, interests, usage trends, and behaviour
              to better understand your needs and provide you with an enhanced
              user experience and protect and serve our users. Additionally,
              this information may also be compiled and analysed on an
              aggregated basis. This information may include the URL that you
              just came from (whether this URL is on our platform or not), which
              URL you next go to (whether this URL is on our platform or not),
              your computer browser information, and your IP address. Such
              insights enable us to personalise and optimise our products,
              services, marketing communications, and the checkout process to
              better align with your preferences. The insights derived from this
              analysis may be shared with our group companies, affiliates,
              related companies, business partners, and third parties who offer
              services to OfferBeez or to whom OfferBeez provides our products
              or services. These group companies, affiliates, related companies,
              business partners and third parties may use such insights for
              promotions, advertisements and marketing, product development and
              other commercial purposes. They may also leverage these insights
              to personalise your browsing experience and customise various
              aspects of the user journey, such as the checkout flow, payment
              options, delivery recommendations, either on our Platform or their
              own platforms. Please note that any processing of your personal
              data by third parties will be governed by their own privacy
              policies. OfferBeez does not control, endorse, or assume
              responsibility for the privacy practices of third parties, and
              OfferBeez encourages you to review their privacy policies.
            </p>

            <p className="mb-4">
              OfferBeez may collect personal data (such as email address, store
              address, name, phone number and other payment instrument details)
              from you when you set up an account or transact with us or
              participate in any event or contest. While you can browse some
              sections of our platform without being a registered member,
              certain activities (such as placing an order or consuming our
              online content or services) do require registration. OfferBeez
              uses your contact information to send you offers based on your
              previous products and your interests.
            </p>

            <p className="mb-4">
              If you choose to post messages on our message boards, chat rooms
              or other message areas or leave feedback on the Platform or the
              social media handles maintained by us, or if you use voice
              commands or virtual try-and-buy or similar features to shop on the
              Platform, OfferBeez will collect that information you provide to
              us. OfferBeez retains this information as necessary to resolve
              disputes, provide customer support, troubleshoot problems or for
              internal research and analysis as permitted by law.
            </p>

            <p className="mb-4">
              If you send us personal correspondence, such as emails or letters,
              or if other users or third parties send us correspondence about
              your activities or postings on the platform, OfferBeez may collect
              such information into a file specific to you.
            </p>

            <p className="mb-4">
              If you enrol in the OfferBeez platform, it will collect and store
              your personal data, such as name, contact number, email address,
              communication address, date of birth, gender, zip code, lifestyle
              information, demographic and work details, which is provided by
              you to OfferBeez. OfferBeez will also collect your information
              related to your transactions on the OfferBeez platform and such
              third-party business partner platforms. When such a third-party
              business partner collects your personal data directly from you,
              you will be governed by their privacy policies. Additionally,
              OfferBeez collects your UPI ID if you choose to pay via our
              OfferBeez UPI platform. OfferBeez shall not be responsible for the
              third-party business partner’s privacy practices or the content of
              their privacy policies, and OfferBeez requests you to read their
              privacy policies prior to disclosing any information.
            </p>

            <p className="mb-4">
              OfferBeez uses your personal data to take and fulfil promotional
              offers. OfferBeez uses your personal data to assist sellers and
              business partners in handling and fulfilling offers, enhancing
              customer experience, resolving disputes, troubleshooting problems,
              helping promote a safe service, measuring consumer interest in our
              products and services, inform you about online offers, customising
              and enhance your experience, report to regulatory authorities
              wherever required, detect and protect us against error, fraud and
              other criminal activity. enforce our terms and conditions and as
              otherwise described to you at the time of collection of
              information.
            </p>

            <p className="mb-4">
              With your consent, OfferBeez may have access to your SMS, instant
              messages, contacts in your directory, location, camera, photo
              gallery and device information and OfferBeez may also request you
              to provide your PAN, credit information report (from credit
              agencies), GST Number, Government issued ID cards/number and
              Know-Your-Customer (KYC) details to: (i) check your eligibility
              for certain products and services like insurance, credit and
              payment products; (ii) issue GST your business requirements; (iii)
              enhance your experience on the Platform and provide you access to
              the products and services being offered by OfferBeez, sellers,
              affiliates, lending partners, business partners or third-parties
              who offer services to OfferBeez or to whom OfferBeez provide our
              products or services. You understand that your access to these
              products/services may be affected in the event when consent is not
              provided to us.
            </p>

            <p className="mb-4">
              In our efforts to continually improve our product and service
              offerings, OfferBeez and our affiliates collect and analyse
              demographic and profile data about our users' activity on our
              platform. OfferBeez identifies and uses your IP address to help
              diagnose problems with our server and to administer our platform.
              Your IP address is also used to help identify you and to gather
              broad demographic information.
            </p>

            <p className="mb-4">
              OfferBeez will occasionally ask you to participate in optional
              surveys conducted either by us or through a third-party market
              research agency. These surveys may ask you for personal data,
              contact information, date of birth, demographic information (like
              zip code, age, or income level), attributes such as your
              interests, household or lifestyle information, your purchasing
              behaviour or history, preferences, and other such information that
              you may choose to provide. The surveys may involve the collection
              of voice data or video recordings, the participation of which
              would purely be voluntary in nature. OfferBeez uses this data to
              tailor your experience at our platform, providing you with content
              that OfferBeez thinks you might be interested in and displaying
              content according to your preferences.
            </p>

            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
              Cookies Policy
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
              here:{" "}
              <a
                href="https://www.google.com/intl/en/policies/privacy/"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.google.com/intl/en/policies/privacy/
              </a>
              . You can opt out of Google Analytics here:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              . You can also control the use of cookies at the individual
              browser level, but if you choose to disable cookies, it may limit
              your use of certain features or functions on the services.
            </p>

            {/* ---------- Sharing of Personal Data ---------- */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
              Sharing of Personal Data:
            </h2>

            <p className="mb-4">
              Additionally, OfferBeez may also disclose your personal data to
              third parties, such as our sellers and business partners. This
              disclosure may be required for us to provide you access to our
              products and services; for fulfilment of your offers; for
              enhancing your experience; for providing feedback on products; to
              comply with our market research or surveys; to enforce our Terms
              of Use; to facilitate our marketing and advertising activities; to
              analyse data; for customer service assistance; and to prevent,
              detect, mitigate, and investigate fraudulent or illegal activities
              related to our product and services. In addition, OfferBeez may
              share your personal data with business partners and third parties
              who offer services to us or to whom OfferBeez provides our
              products or services to enable them to offer, advertise, and
              personalise your browsing experience and customise various aspects
              of the user journey, such as the checkout flow, auto-filling
              sign-up details to facilitate a faster checkout process, or
              promote their own products and services to you, and this may
              include, without limitation, conducting marketing campaigns,
              personalised customer engagement, curated product or service
              recommendations, and other outreach activities designed to align
              with your interests and preferences.
            </p>

            <p className="mb-4">
              OfferBeez may disclose personal data if required to do so by law
              or in the good faith belief that such disclosure is reasonably
              necessary to respond to subpoenas, court orders, or other legal
              processes. OfferBeez may disclose personal data to law enforcement
              agencies, third-party rights owners, or others in the good faith
              belief that such disclosure is reasonably necessary to enforce our
              Terms of Use or Privacy Policy; respond to claims that an
              advertisement, posting, or other content violates the rights of a
              third party; or protect the rights, property, or personal safety
              of our users or the general public.
            </p>

            <p className="mb-4">
              OfferBeez and our affiliates will share/sell some or all of your
              personal data with another business entity should OfferBeez (or
              our assets) plan to merge with or be acquired by that business
              entity or undergo reorganisation, amalgamation, or restructuring
              of business. Should such a transaction occur, another business
              entity (or the new combined entity) will be required to follow
              this Privacy Policy with respect to your personal data.
            </p>

            <p className="mb-4">
              OfferBeez Partner App respects your privacy. We collect only the
              necessary data to provide app functionality, onboard businesses,
              and track partner performance. Your personal data, location,
              photos, and documents are used solely to improve your experience
              and help local businesses grow. We do not share, sell, or misuse
              your information.
            </p>

            {/* ---------- OfferBeez Partner App Privacy Policy ---------- */}

            <p className="font-bold mt-6 ">1. Information We Collect</p>

            <p className="">
              a. <span className="font-semibold">Personal information:</span>{" "}
              name, email, phone number (provided during registration and
              business information when onboarding stores)
            </p>

            <p className="">
              b. <span className="font-semibold">Permissions</span>
              <br />
              Camera: To capture business/store images and upload documents
              <br />
              Storage: To select and upload images or files from your device
            </p>

            <p className="mb-4 ">
              c. <span className="font-semibold">Location:</span> To identify
              nearby businesses and verify their location. All collected data is
              used only within the app and is stored securely.
            </p>

            <p className="font-bold mt-6 ">
              2. How We Use Your Information
            </p>

            <ul className="list-disc list-inside  mb-4 space-y-1">
              <li>To create and manage your partner account</li>
              <li>To onboard local businesses and verify store information</li>
              <li>
                To track business onboarding progress and commission calculation
              </li>
              <li>
                To provide location-based services and improve app functionality
              </li>
              <li>To communicate with you regarding app updates or support</li>
            </ul>

            <p className="font-bold mt-6 ">3. Data Sharing and Security</p>

            <ul className="list-disc list-inside mb-4  space-y-1">
              <li>
                Your data is not sold, rented, or shared with third parties
              </li>
              <li>
                All information is stored securely using industry-standard
                practices
              </li>
              <li>
                Only authorized OfferBeez personnel have access for operational
                purposes
              </li>
            </ul>

            <p className="font-bold ">4. User Control</p>

            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                You can deny camera, storage, or location permissions, but some
                app features may not work
              </li>
              <li>
                You can update or delete personal information by contacting
                support
              </li>
              <li>You may manage app permissions from your device settings</li>
            </ul>

            <p className="font-bold mt-6  ">5. Third-Party Services</p>

            <p className="mb-4 ">
              The app may use third-party services (like analytics, messages,
              and storing data) without sharing personal data. Only aggregated,
              anonymised information may be used for improving the app.
            </p>

            <p className="font-bold mt-6  ">6. Children’s Privacy</p>

            <p className="mb-4 ">
              OfferBeez Partner App is not intended, as per law, for children
              under 13. We do not knowingly collect personal information from
              minors.
            </p>

            <p className="font-bold mt-6 ">7. Changes to Privacy Policy</p>

            <p className="mb-4">
              We may update this policy periodically. The latest version will
              always be available in the app. Users will be notified about
              significant changes.
            </p>

            <p className="font-bold mt-6 ">8. Contact Us</p>

            <p className="mb-4">
              For any questions or concerns regarding your privacy or data
              usage, please contact us at
              <br />
              <span className="font-semibold">Email:</span> support@offerbeez.in
              <br />
              <span className="font-semibold">Company:</span> Venturebiz
              Promotions Private Limited
            </p>

            {/* ---------- Govern the Collection of Aadhaar and PAN Information ---------- */}
            <p className="font-bold mt-6 ">Govern the Collection:</p>

            <p className="mb-4">
              Use, storage, and processing of your Aadhaar and PAN information
              by Venturebiz Promotions Private Limited, operating the
              application (“We”, “Us”, “Our”). By using this application and
              submitting your information, you agree to these terms.
            </p>

            {/* ---------- 1. Purpose of Collection ---------- */}
            <p className="font-bold mt-6 ">1. Purpose of Collection</p>

            <p className="mb-4">
              We collect your Aadhaar and/or PAN details only for the following
              purposes: identity verification/KYC, prevention of fraud /
              duplicate accounts, and compliance with applicable laws (if
              required). We do not use your identity details for any other
              purpose.
            </p>

            {/* ---------- 2. User Consent ---------- */}
            <p className="font-bold mt-6 ">2. User Consent</p>

            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>You are voluntarily providing these details.</li>
              <li>
                You understand the purpose for which they are being collected.
              </li>
              <li>
                You grant us permission to verify your details through
                authorised verification systems or approved KYC service
                providers.
              </li>
              <li>
                You may withdraw your consent at any time by contacting us at:
                <br />
                <span className="font-semibold">📧 support:</span>{" "}
                <a
                href="https://offerbeez.in/privacy-policy"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                offerbeez.in
              </a>{" "}
              </li>
            </ul>

            {/* ---------- 3. Aadhaar Collection & Usage Policy ---------- */}
            <p className="font-bold mt-6 ">
              3. Aadhaar Collection & Usage Policy
            </p>

            <p className="">As per the Aadhaar Act, 2016 (Amended 2019):</p>

            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                We do not store raw Aadhaar numbers, photocopies, or Aadhaar
                card images.
              </li>
              <li>
                Aadhaar verification is performed only through the
                UIDAI-approved Offline e-KYC / QR Code method or via licensed
                KYC service providers.
              </li>
              <li>
                We will not share or disclose Aadhaar details to any person or
                third party unless required by law.
              </li>
            </ul>

            {/* ---------- 4. PAN Collection & Usage Policy ---------- */}
            <p className="font-bold mt-6 ">
              4. PAN Collection & Usage Policy
            </p>

            <p className="mb-4">
              PAN details are collected only for identity verification,
              taxation, or compliance purposes. PAN may be securely stored and
              used only for the stated purpose. We do not share PAN information
              with any unauthorised third party.
            </p>

            {/* ---------- 5. Data Security ---------- */}
            <p className="font-bold mt-6 ">5. Data Security</p>

            <p className="mb-4">
              We follow industry-standard security practices to protect your
              data, including encryption of stored and transmitted data,
              restricted internal access controls, secure servers, and audit
              logs. However, no system is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            {/* ---------- 6. User Rights ---------- */}
            <p className="font-bold mt-6">6. User Rights</p>

            <ul className="list-disc list-inside  space-y-1">
              <li>You have the right to request access to your data.</li>
              <li>Request correction of incorrect details.</li>
              <li>
                Request deletion of your Aadhaar/PAN records (if legally
                permissible).
              </li>
            </ul>

            <p className="mb-4">
              To request, contact:
              <br />
              <a
                href="https://offerbeez.in/privacy-policy"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                📧 support@offerbeez.in
              </a>{" "}
            </p>

            {/* ---------- 7. Data Sharing ---------- */}
            <p className="font-bold mt-6 ">7. Data Sharing</p>

            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                Your information will only be shared with government-authorised
                KYC providers.
              </li>
              <li>Regulatory or legal authorities, if required by law.</li>
              <li>We never sell or rent your personal identity data.</li>
            </ul>

            {/* ---------- 8. Changes to Terms ---------- */}
            <p className="font-bold mt-6 ">8. Changes to Terms</p>

            <p className="mb-4">
              We may update this privacy policy periodically. Continued use of
              the app will mean you accept the revised terms.
            </p>


            {/* ---------- 9. Contact Information ---------- */}
<p className="font-bold mt-6 ">9. Contact Information</p>

<p className="mb-4">
  If you have any questions or complaints, contact us at:
</p>

<p className="mb-4">
  📧 <span className="font-semibold">support@offerbeez.in</span><br />
  📞 <span className="font-semibold">9008522366</span>
</p>

{/* ---------- User Consent Statement ---------- */}
<p className="font-bold mt-6 ">User Consent Statement (Show Before Upload Page)</p>

<p className="mb-4">
  I hereby provide voluntary consent to <span className="font-semibold">[Your Company Name]</span> to collect and verify my Aadhaar
  and/or PAN details for identity verification purposes. I understand that my data will be processed securely
  and will not be misused, shared, or stored beyond the stated purpose. I have read and agree to the Terms &
  Conditions and Privacy Policy.
</p>

<p className="font-semibold ">[✓] I Agree</p>

{/* ---------- Links to Other Sites ---------- */}
<p className="font-bold mt-6">Links to Other Sites</p>

<p className="mb-4">
  OfferBeez shall not be responsible for the privacy practices or the content of their privacy policies, and
  OfferBeez requests you to read their privacy policies prior to disclosing any information.
</p>

{/* ---------- Security Precautions ---------- */}
<h3 className="font-bold mt-6 mb-4">Security Precautions</h3>

<p className="mb-4">
  OfferBeez maintains reasonable physical, electronic and procedural safeguards to protect your information.
  Whenever you access your account information, OfferBeez offers the use of a secure server. Once your
  information is in our possession, OfferBeez adheres to our security guidelines to protect it against
  unauthorised access. By using OfferBeez, the users accept the inherent security implications of data
  transmission over the internet and the World Wide OfferBeez, which cannot always be guaranteed as completely
  secure, and therefore, there would always remain certain inherent risks regarding use of the Platform. Users
  are responsible for ensuring the protection of login and password records for their account.
</p>

{/* ---------- Choice / Opt-Out ---------- */}
<h3 className="font-bold mt-6 mb-4">Choice / Opt-Out</h3>

<p className="mb-4">
  OfferBeez provides all users with the opportunity to opt out of receiving non-essential (promotional,
  marketing-related) communications after setting up an account with us. If you do not wish to receive
  promotional communications from us, then please mail to:
  <span className="font-semibold"> offerbeez@support.in</span>
</p>

{/* ---------- Advertisements on Platform ---------- */}
<h3 className="font-bold mt-6 mb-4">Advertisements on Platform</h3>

<p className="mb-4">
  OfferBeez uses third-party advertising companies to serve ads when you visit our platform. These companies
  may use information (not including your name, address, email address, or telephone number) about your visits
  to provide personalised advertisements about goods and services of interest to you. If you want to avoid
  this, then please mail to:
  <span className="font-semibold"> offerbeez@support.in</span>
</p>

{/* ---------- Children's Information ---------- */}
<h3 className="font-bold mt-6 mb-4">Children's Information</h3>

<p className="mb-4">
  Use of our platform is available only to persons who can form a legally binding contract under the Indian
  Contract Act, 1872. OfferBeez does not knowingly solicit or collect personal data from children under the
  age of 18 years. If you have shared any personal data of children under the age of 18 years, you represent
  that you have the authority to do so and permit us to use the information in accordance with this Privacy
  Policy.
</p>

{/* ---------- Data Retention ---------- */}
<h3 className="font-bold mt-6 mb-4">Data Retention</h3>

<p className="mb-4">
  OfferBeez retains your personal data in accordance with applicable laws for a period no longer than is
  required for the purpose for which it was collected or as required under any applicable law. However,
  OfferBeez may retain data related to you if OfferBeez believes it may be necessary to prevent fraud or future
  abuse, to enable OfferBeez to exercise its legal rights and/or defend against legal claims, or if required by
  law, or OfferBeez may continue to retain your data in anonymised form for analytical and research purposes.
</p>

{/* ---------- Your Rights ---------- */}
<h3 className="font-bold mt-6 mb-4">Your Rights</h3>

<p className="mb-4">
  OfferBeez takes every reasonable step to ensure that your personal data that OfferBeez processes is accurate
  and, where necessary, kept up to date, and any of your personal data that OfferBeez has that you inform us is
  inaccurate (having regard to the purposes for which they are processed) is erased or rectified. You may
  access, correct, and update your personal data directly through the functionalities provided on the Platform.
  You may delete certain non-mandatory information by logging into our OfferBeez site and visiting the Profile
  and Settings sections. You can also write to us at the contact information provided below to assist you with
  these requests.
</p>

<p className="mb-4">
  You have an option to withdraw your consent that you have already provided by writing to us at the contact
  information provided below. Please mention “for withdrawal of consent” in the subject line of your
  communication. OfferBeez will verify such requests before acting upon your request. Please note, however,
  that withdrawal of consent will not be retroactive and will be in accordance with the terms of this Privacy
  Policy, related Terms of Use and applicable laws. In the event you withdraw consent given to us under this
  Privacy Policy, such withdrawal may hamper your access to the Platform or restrict provision of our services
  to you for which OfferBeez considers that information to be necessary.
</p>

{/* ---------- Your Consent ---------- */}
<h3 className="font-bold mt-6 mb-4">Your Consent</h3>

<p className="mb-4">
  By visiting our platform or by providing your personal data, you consent to the collection, use, storage,
  disclosure and other processing of your personal data on the platform in accordance with this privacy policy.
  If you disclose to us any personal data relating to other people, you represent that you have the authority
  to do so and to permit us to use the data in accordance with this Privacy Policy.
</p>

<p className="mb-4">
  You, while providing your personal data over the Platform or any partner platforms or establishments, consent
  to us (including our other corporate entities, affiliates, lending partners, technology partners, marketing
  channels, business partners and other third parties like credit bureaus) contacting you through SMS, instant
  messaging apps, calls and/or e-mail for the purposes specified in this Privacy Policy.
</p>

{/* ---------- Changes to this Privacy Policy ---------- */}
<h3 className="font-bold mt-6 mb-4">Changes to this Privacy Policy</h3>

<p className="mb-4">
  Please check our Privacy Policy periodically for changes. OfferBeez may update this Privacy Policy to
  reflect changes to our information practices. OfferBeez will alert you to significant changes by posting the
  date our policy was last updated, placing a notice on our platform, or by sending you an email when OfferBeez
  is required to do so by applicable law.
</p>

<p className="mb-4">
  If you have a query, concern, or complaint in relation to collection or usage of your personal data under
  this Privacy Policy please contact us at <span className="font-semibold">offerbeez.in</span>
</p>

<p className="mb-4">
  You can reach our customer support team to address any of your queries or complaints related to product and
  services by clicking the link, selecting your order and choosing “Need Help” option:
  <a
                href="https://offerbeez.in/privacy-policy"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                📧 support@offerbeez.in
              </a>{" "}
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

export default PrivacyPolicy;
