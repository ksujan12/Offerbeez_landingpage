import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const TermsOfService: React.FC = () => {
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
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#EC1E79] via-[#F45BA0] to-[#3345B0] bg-clip-text text-transparent drop-shadow-sm">
              Terms of Service
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-3 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
              These are the latest official terms maintained by OfferBeez.
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-[#EC1E79] via-[#F45BA0] to-[#3345B0] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
          >
            Back to Home
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
          {/* Intro */}
          <p className="mb-4">
            This document is an electronic record and published in accordance
            with the provisions of the Information Technology Act, 2000 and the
            rules thereunder and the Information Technology (Intermediary
            Guidelines and Digital Media Ethics Code) Rules, 2021 and generated
            by a computer system and does not require any physical or digital
            signatures.
          </p>

          {/* Section 1 */}
          <div className="text-[#1a1a1a]">
            {/* ---------- 1. Terms of Use ---------- */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">1. Terms of Use:</h2>

            <p className="mb-4">
              The websites{" "}
              <a
                href="https://www.offerbeez.in"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.OfferBeez.in
              </a>{" "}
              and{" "}
              <a
                href="https://www.venturebiz.in"
                className="text-[#3345B0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.Venturebiz.in
              </a>{" "}
              (the “Website”) and the mobile application ‘OfferBeez’ (the “App”)
              (collectively referred to as the “Platform”) are owned, operated,
              and managed by OfferBeez Marketplace Private Limited — a private
              limited company incorporated under the provisions of the Indian
              Companies Act, 2013, having its registered office at #2085/16, 2nd
              Floor, Spoorthi, Puttenahalli Main Road, JP Nagar 7th Phase,
              Bangalore – 560078.
            </p>

            <p className="mb-4">
              These terms of use (“Terms”) govern your use of the Platform, and
              for the purpose of these Terms, Venturbiz Promotions Private
              Limited, including its subsidiaries, its holding company, and its
              affiliates, may, wherever the context so requires, be also
              referred to as “OfferBeez”, “Company”, “We”, “Us”, or “Our”, and
              the terms “You”, “Your”, or “User” refer to the user of the
              Platform. We value the trust you have placed in us, and hence, we
              maintain reasonable security standards for securing the
              transactions and your information.
            </p>

            <p className="mb-4">
              Please read these terms carefully before you use the platform. If
              you do not agree to these terms, you may not use the offers on the
              platform, and we request you uninstall the app and not access the
              platform. By even merely using/accessing the Platform, You shall
              be contracting with OfferBeez, and You signify Your acceptance of
              these Terms and other OfferBeez policies (including but not
              limited to the cancellation & refund terms and published privacy
              policy (‘Privacy Notice’’) as posted on the Platform and amended
              from time to time), which takes effect on the date on which You
              use the Platform and thereby create a legally binding agreement to
              abide by the same. Further, by furnishing Your personal
              information, You consent to OfferBeez accessing Your personal
              information for the purpose of enabling transactions. You also
              agree that you are interested in availing the offers through the
              platform in accordance with these terms.
            </p>

            {/* ---------- 1. General ---------- */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">1. General:</h2>

            <p className="mb-4">
              a) OfferBeez retains an unconditional right to modify or amend
              these Terms. You can determine when these Terms were last modified
              by referring to the ‘Last Updated’ legend above. You can access
              the latest version of these Terms at any given time on the
              Platform. You should regularly review the Terms on the Platform.
              OfferBeez reserves the right to amend, suspend, discontinue or add
              any or all Offers without prior notice and can add or remove
              relevant terms and conditions, if necessary.
            </p>

            <p className="mb-4">
              b) Any updation of the Terms as a consequence of change in legal
              and regulatory compliances, shall be made in compliance thereof.
              Your continued use of and access to the Platform shall be Your
              consent to any changes made by Us in these Terms. In the event,
              the modified Terms are not acceptable to You, You should
              discontinue accessing the Platform.
            </p>

            {/* ---------- 2. Access to Offers ---------- */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">2. Access to Offers:</h2>

            <p className="mb-4">
              a) OfferBeez is a digital advertising platform that allows the
              businesses to publish their offers/advertisements. Consumers can
              view the Products (defined hereunder) and Offers offered for sale
              by these Sellers either in general or specific to the locations of
              the consumer.
            </p>

            <p className="mb-4">
              b) OfferBeez is only responsible for creating the advertising
              platform for Businesses and Users to see the ads. The company is
              not responsible for the offer advertised by businesses. The
              transactions are done offline and between the Business and User.
            </p>

            <p className="mb-4">
              c) OfferBeez is not a party to or in control of in any manner any
              transaction between the Platform's Users and Sellers.
            </p>

            <p className="mb-4">
              d) You acknowledge that the Platform allows You to avail a
              personal, limited, non-exclusive, non-transferable, and revocable
              privilege to access and use the Platform for the purposes of
              seeing the advertisement on consumer goods or services businesses
              and individuals for grocery, apparel, electronics, health and
              wellness products including prepared foods and beverages (Café
              orders), pet care etc. (collectively,
            </p>

            <p className="mb-4">
              e) “Product(s)”) from the Sellers on a business to consumer (B2C).
              The registered businesses may be required to furnish additional
              details of their business including, without limitation, business
              name, GSTIN, licences/registrations issued by Government
              Authorities and/or any other information that may be required by
              OfferBeez. The User shall not be responsible for the accuracy of
              the GSTIN and legal entity name. OfferBeez disclaims any
              liabilities arising out of incorrect details.
            </p>

            <p className="mb-4">
              f) Businesses publishing their offers are solely responsible for
              all the details of the offer including the business name,
              location, actual offer, pricing, discounts, quality, availability,
              etc.
            </p>

            <p className="mb-4">
              g) The aforesaid revocable privilege to access does not
              include/permit resale or commercial use of the Platform or its
              Content (as defined below) in any manner. The Sellers may, at
              their discretion, add, modify or remove any of the Products and
              Offers listed above from time to time without notice.
            </p>

            <p className="mb-4">
              h) The Sellers and/or OfferBeez may also make applicable, at its
              discretion, additional terms and conditions specific to any
              category or section of Products or Offers in addition to these
              Terms, and Your purchase of any of such category or section of
              Products or Offers shall also be governed by such additional terms
              and conditions. OfferBeez reserves the right to provide the Offers
              in any area or city in India, as may be determined by OfferBeez in
              its sole discretion. Before applying or registering for availing
              any of the Offers, We request You to please check if the Offers
              are available in Your area or city.
            </p>

            <p className="mb-4">
              i) Offers are ranked organically unless promoted through
              advertisements. Ranking is based on popularity indicators like
              impressions, user preferences, relevance, add-to-cart actions,
              etc. Newly launched products receive a temporary visibility boost
              to enhance exposure and assess popularity. OfferBeez does not: (i)
              adopt any ‘unfair trade practices’ either on the Platform or
              otherwise with respect to its Offers; (ii) discriminate between
              Users of the same class or make any arbitrary classification of
              the Users; and (iii) discriminate between the third-party delivery
              service providers.
            </p>

            <p className="mb-4">
              j) OfferBeez functions as a platform and acts as a facilitator
              between Users and Sellers on the Platform. At no point does
              OfferBeez take possession of any Products offered by Sellers nor
              does it hold any rights, title or interest in those Products and
              Offers. OfferBeez is not liable for any obligations related to
              non-performance or breach of contracts between Users and Sellers,
              as that is a bilateral arrangement between You and the Seller.
              Furthermore, OfferBeez is neither responsible for poor or delayed
              Product or service performance nor for issues arising from
              Products that are out of stock or unavailable.
            </p>

            {/* ---------- 3. Terms and Conditions Applicable for the User who is a Registered Business ---------- */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
              3. Terms and Conditions Applicable for the User who is a
              Registered Business:
            </h2>

            <p className="mb-4">• The User represents and undertakes</p>
            <p className="mb-4">
              • That the documents and information provided are genuine and
              complete.
            </p>
            <p className="mb-4">
              • That the User shall not act as an agent of OfferBeez.
            </p>
            <p className="mb-4">
              • To adhere to such other terms as may be applicable or displayed
              on the Platform from time to time.
            </p>

            {/* ---------- 4. Age and Eligibility ---------- */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">4. Age and Eligibility:</h2>

            <p className="mb-4">
              The Products and Offers are not available to minors i.e., persons
              under the age of 18 (eighteen) years, undischarged insolvent, any
              Users who are not competent to enter into a contract under the
              Indian Contract Act, 1872, unless otherwise provided hereunder, or
              to anyone previously suspended or removed by OfferBeez from
              availing the Products or Offers or accessing the Platform. You
              hereby represent that You are:
            </p>

            <p className="mb-4">a) Of legal age to form a binding contract,</p>

            <p className="mb-4">
              b) Not a person barred from receiving the offers from the Platform
              under the applicable laws;
            </p>

            <p className="mb-4">
              c) Competent to enter into a binding contract;
            </p>

            <p className="mb-4">
              d) Have not been previously suspended or removed or disqualified
              for any reason from the Platform. If you are under the age of 18,
              you shall use and access the Platform only with the express
              consent of a parent or guardian and under their supervision.
            </p>

            <p className="mb-4">
              e) You shall not make negative, defamatory, misleading, deceptive,
              or libelous remarks about Us or Our brand, including OfferBeez and
              its agnates and cognates, on the Platform or otherwise, or take
              any actions that could harm OfferBeez's reputation or dilute its
              trademarks. Additionally, You will not impose an excessive load on
              the Platform's infrastructure or Our systems and networks.
            </p>

            {/* ---------- 5. User Account and Security ---------- */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
              5. User Account and Security:
            </h2>

            <p className="mb-4">
              a) In order to access the Offers of the Platform, You will have to
              register and create an account on the Platform by providing
              details as may be required (“Account”). When You use the Platform,
              OfferBeez may collect personal information such as Your name,
              email, age, photograph, address, mobile number, and contact
              details and also documents pertaining to the same. This includes
              demographic information like gender, occupation, and education, as
              well as Your activity on the Platform such as visited pages,
              clicked links, and transaction details, including financial
              information needed to provide Offers and manage the Platform
              effectively.
            </p>

            <p className="mb-4">
              b) You are solely responsible for the information You provide to
              Us. You shall ensure and confirm that the Account information and
              all information provided by You is complete, accurate, and
              up-to-date. If there is any change in the Account information, or
              if any information is found to be incomplete or incorrect, You
              shall promptly update Your Account information on the Platform or
              request OfferBeez for information revision or update. If the
              information provided by You is untrue, inaccurate, unauthorised,
              not current, or incomplete (or becomes untrue, inaccurate, not
              current, or incomplete), OfferBeez reserves the right to refuse
              any and all the Offers, if OfferBeez has reasonable grounds to
              suspect that such information is untrue, inaccurate, not current,
              or incomplete or for any reasons of Government policy (State or
              Central) or anything offensive or hurting on religious grounds or
              anything that OfferBeez thinks is not in the right sense of
              promotion of the business. OfferBeez reserves the right to refuse
              access to the Platform at any time without notice.
            </p>

            <p className="mb-4">
              c) Confidentiality of the Account credentials shall be Your
              responsibility. OfferBeez disclaims any liability for losses due
              to unauthorised access of Your account.
            </p>

            {/* ---------- 6. Price of Products and Offers ---------- */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
              6. Price of Products and Offers:
            </h2>

            <p className="mb-4">
              a) The prices for Products and Offers listed by Sellers on the
              Platform are determined entirely by the Sellers themselves and
              OfferBeez does not participate in or influence this pricing
              process in any manner. The prices of each of the Products and
              Offers may vary due to various factors, and You may check the
              price with the business before purchasing the product.
            </p>

            <p className="mb-4">
              b) All the Products listed on the Platform will be sold in Indian
              Rupees either at Maximum Retail Price (MRP) (inclusive of all
              taxes) or at a discounted price unless otherwise specified
              directly by the Business. The prices of the Products and Offers
              are an offer for sale by the Sellers and may be modified by the
              Sellers from time to time without any prior notice. OfferBeez
              endeavours to display the Products and Offers at the most accurate
              prices possible on the Platform. There may be inadvertent errors
              with respect to the price and other information of the Products or
              Offers; You may bring such errors to Our notice, and We shall make
              the necessary corrections.
            </p>

            <p className="mb-4">
              c) The Users will be informed about all the costs that may be
              levied on the purchase of the Products or Offers on the Platform.
            </p>

            <p className="mb-4">
              d) The expression “Lowest Prices” pertains to the computation of
              average prices for all Products and Offers offered for sale by the
              Sellers on the Platform (in comparison to competitors in the quick
              commerce segment for groceries, in most cases) and is subject to
              availability of stocks. OfferBeez expressly disclaims any
              liability associated with the individual Products or Offers sold
              on the Platform by the Sellers.
            </p>

            <p className="mb-4">
              e) Alcoholic beverages, tobacco products, and other banned
              products are strictly prohibited from being sold by the Businesses
              either directly, indirectly, or through reference, or in any
              concealed manner, nor may they provide any leads to banned
              products or anything that is not approved by the Government.
            </p>

            <p className="mb-4">
              f) Businesses and Consumers are directly responsible in the event
              of such activities, and OfferBeez is not responsible for the
              legalities. OfferBeez will make all necessary coordination and
              efforts with legal authorities to ensure the Platform is not used
              for any banned activities.
            </p>

            <p className="mb-4">
              g) Terms and Conditions for Purchase of Pharmaceutical Products
              and Telemedicine Consultations — OfferBeez’s Role and Disclaimer
              of Liability: OfferBeez operates solely as a digital advertising
              marketplace platform and does not sell pharmaceutical products.
              The medical stores may post their offers and discounts as per
              applicable laws and permissions or for their locations to help get
              discovered.
            </p>

            <p className="mb-4">
              h) Any medical-related services are solely the responsibility of
              the individual service providers, such as telemedicine
              consultations, etc. OfferBeez does not offer medical advice or
              consultations on health matters. All materials accessible through
              the Platform, including articles, blogs, images, and other
              informational content, serve purely educational purposes and do
              not substitute for direct professional healthcare advice.
              Telemedicine consultations available on the Platform are offered
              through independent contractors ("TeleMedicine Consultants")
              engaged by the User solely at their discretion. The opinions and
              guidance provided by TeleMedicine Consultants are independent, and
              Users are encouraged to consult in-person healthcare providers as
              needed to confirm any information or recommendations received from
              TeleMedicine Consultants.
            </p>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">7) User Care</h2>

              <p>
                The User acknowledges and agrees that OfferBeez shall not be
                held liable for the quality of the Seller’s Offers or Products,
                or for any issues arising from Offers provided by third-party
                delivery service providers that do not meet User expectations,
                potentially resulting in loss, harm, or damage.
              </p>

              <p className="mt-3">
                a) Non-availability of Products or Offers, incorrect Orders
                fulfilled by Sellers, or any liability associated with Products
                sold by Sellers.
              </p>

              <p className="mt-2">
                b) The information about Products and their catalogues,
                including pricing, displayed on the Platform is provided by the
                Sellers. OfferBeez cannot be held liable for any changes,
                inaccuracies, errors, or omissions in such information, or for
                the unavailability of Products and Offers.
              </p>

              <p className="mt-2">
                c) OfferBeez is not and cannot be a party to any transaction
                between Consumers and Sellers, nor does it have any control,
                involvement, or influence over the Products purchased or Offers
                availed by You from such Sellers. You acknowledge and agree that
                OfferBeez shall not, at any time, have any ownership, control,
                or title to any Product(s) involved in a sale and purchase
                transaction between You and the relevant Seller.
              </p>

              <p className="mt-2">
                d) OfferBeez does not provide any warranty or guarantee with
                respect to the Products and/or Offers offered for sale on the
                Platform and disclaims any liability concerning manufacturing
                defects, quality, taste, or performance of the Products or
                Offers sold.
              </p>

              <p className="mt-2">
                e) All commercial and contractual arrangements regarding the
                Products and Offers offered for sale are solely between Users
                and Sellers. These arrangements include, but are not limited to,
                pricing, product and service quality, applicable taxes, delivery
                and other fees, payment terms, warranties (if any), and
                after-sales support.
              </p>

              <p className="mt-2">
                f) OfferBeez may, however, provide support services to Sellers
                with respect to order fulfilment, payment modes, payment
                collection, customer support, technology, and other ancillary
                services, pursuant to independent contracts executed between
                OfferBeez and the Sellers.
              </p>

              <p className="mt-2">
                g) OfferBeez does not guarantee or endorse the specifics of any
                Seller, including legal ownership, creditworthiness, or
                identity. Users are strongly encouraged to perform their own due
                diligence to verify the legitimacy of any Seller they choose to
                engage with on the Platform and to exercise discretion. All
                offers from Sellers or third parties are governed by their
                respective terms and conditions, and OfferBeez assumes no
                responsibility for them. While OfferBeez makes reasonable
                efforts to review business data provided by Sellers, it cannot
                verify or validate such information. Users act at their own
                discretion before making any purchase.
              </p>

              <p className="mt-2">
                h) Users acknowledge that Product images displayed on the
                Platform are for representation purposes only and may not
                reflect the actual Product sold. Users must refer to the
                physical product label for accurate information such as
                calorific and nutritional values, usage instructions, batch
                number, manufacturing date, expiry/shelf life, content, weight,
                manufacturer details, and customer support information before
                consuming or using any Product, including but not limited to
                Café orders.
              </p>

              <p className="mt-2 font-semibold">
                Disclaimer: While every reasonable effort is made to maintain
                accuracy of information on the Platform, actual Products may
                contain more and/or different information than what is shown. It
                is strongly recommended that Users verify details directly with
                the Business and refer to the actual Product packaging for the
                most accurate and updated information.
              </p>

              <p className="mt-2">
                i) OfferBeez reserves the right to reject Orders or disable
                access to the Platform if it is not satisfied with the
                credibility or genuineness of a User. Transactions on the
                Platform may be delayed, suspended, or cancelled at OfferBeez’s
                sole discretion for reasons including, but not limited to,
                suspicious activity, concerns regarding User authenticity,
                unusually high transaction volumes, safety concerns, or to
                ensure fair use and integrity of the Platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">8) Beware of Fraud</h2>

              <p>
                Please do not share Your debit/credit card number, CVV number,
                OTP, UPI/ATM PIN, or any other sensitive information with anyone
                claiming to be an OfferBeez representative. OfferBeez or its
                authorised representatives will <strong>NEVER</strong> ask You
                to share such details. Beware of fraudsters and report any
                suspicious activity immediately to Your bank, the nearest police
                station, and at
                <a
                  href="https://cybercrime.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline ml-1"
                >
                  https://cybercrime.gov.in/
                </a>
                .
              </p>

              <p className="mt-3">
                a) For assistance regarding OfferBeez orders or refund-related
                issues, click on the <strong>‘Get Help’</strong> or{" "}
                <strong>‘Contact Us’</strong> section on the App, or reach out
                via email at
                <a
                  href="mailto:support@offerbeez.in"
                  className="text-blue-600 underline ml-1"
                >
                  support@offerbeez.in
                </a>
                .
              </p>

              <p className="mt-2">
                b) Please exercise caution when verifying portals, websites, or
                payment links claiming to be OfferBeez or its lookalikes. Avoid
                engaging with payment links shared over social media, messaging
                apps, or calls from unauthorised numbers or fake social media
                accounts requesting personal or financial information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">9) Use of Platform</h2>

              <p className="mb-3">
                Subject to compliance with the Terms, OfferBeez hereby grants
                You a personal, non-exclusive, non-transferable, limited,
                revocable privilege to access and use the Platform. You agree to
                use the Platform only:
              </p>

              <ul className="list-disc ml-6 mb-3 space-y-1">
                <li>For purposes that are permitted by the Terms.</li>
                <li>
                  In accordance with any applicable law, regulation, or
                  generally accepted practices or guidelines.
                </li>
                <li>
                  For availing the Offers through the Platform. You agree not to
                  engage in activities that may adversely affect the use of the
                  Platform by OfferBeez and/or other Users.
                </li>
              </ul>

              <p className="mb-2">
                a) You agree that the Platform or any portion of the Platform
                shall not be reproduced, duplicated, copied, sold, resold, or
                otherwise exploited for commercial purposes.
              </p>

              <p className="mb-2">
                b) You agree not to frame or utilise the framing techniques to
                enclose any trademark, logo, or any other proprietorship
                information of the Platform.
              </p>

              <p className="mb-2">
                c) You agree not to access (or attempt to access) the Platform
                by any means other than through the interface that is provided
                by OfferBeez. You shall not use any deep-link, robot, spider, or
                other automatic device, program, algorithm, or methodology, or
                any similar or equivalent manual process, to access, acquire,
                copy, or monitor any portion of the Platform or Content, or in
                any way reproduce or circumvent the navigational structure or
                presentation of the Platform, materials, or any Content, to
                obtain or attempt to obtain any materials, documents, or
                information through any means not specifically made available
                through the Platform.
              </p>

              <p className="mb-2">
                d) You undertake not to host, display, upload, modify, publish,
                transmit, store, update, or share any information that:
              </p>
              <ul className="list-decimal ml-8 mb-3 space-y-1">
                <li>
                  Belongs to another person and to which the User does not have
                  any right.
                </li>
                <li>
                  Is defamatory, obscene, pornographic, paedophilic, invasive of
                  another's privacy, insulting, or harassing on the basis of
                  gender, libellous, racially or ethnically objectionable,
                  relating or encouraging money laundering or gambling, or
                  otherwise inconsistent with or contrary to the laws in force.
                </li>
                <li>Is harmful to a child.</li>
                <li>
                  Infringes any patent, trademark, copyright, or other
                  proprietary rights.
                </li>
                <li>Violates any law for the time being in force.</li>
                <li>Impersonates another person.</li>
                <li>
                  Threatens the unity, integrity, defence, security, or
                  sovereignty of India, friendly relations with foreign States,
                  or public order, or causes incitement to the commission of any
                  cognizable offence or prevents investigation of any offence or
                  is insulting to another nation.
                </li>
                <li>
                  Contains software virus or any other computer code, file, or
                  program designed to interrupt, destroy, or limit the
                  functionality of any computer resource.
                </li>
                <li>
                  Is patently false and untrue, and is written or published in
                  any form, with the intent to mislead or harass a person,
                  entity, or agency for financial gain or to cause any injury to
                  any person.
                </li>
              </ul>

              <p className="mb-2">
                e) Disrupt or interfere with the security of, or otherwise cause
                harm to, the Platform, system resources, accounts, passwords,
                servers, or networks connected to or accessible through the
                Platform or any affiliated or linked sites.
              </p>

              <p className="mb-2">
                f) Violate the Terms contained herein or elsewhere.
              </p>

              <p className="mb-2">
                g) Reverse engineer, modify, copy, distribute, transmit,
                display, perform, reproduce, publish, license, create derivative
                works from, transfer, or sell any information or software
                obtained from the Platform.
              </p>

              <p className="mb-2">
                h) You shall solely be responsible for maintaining the necessary
                computer equipment, gadgets, and internet connections that may
                be required to access, use, and transact on the Platform.
              </p>

              <p className="mb-2">
                i) You understand and acknowledge that by using the Platform or
                any of the Offers, You may encounter Content that may be deemed
                by some Users to be offensive, indecent, or objectionable, which
                Content may or may not be identified as such. You agree to use
                the Platform and any Offers at Your sole risk, and to the
                fullest extent permitted under applicable law, OfferBeez shall
                have no liability to You for Content that may be deemed
                offensive, indecent, or objectionable to You.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                10) Intellectual Property Rights Related
              </h2>

              <p className="mb-2">
                a) The Non-Offer-related content — Platform and the processes,
                and their selection and arrangement, including but not limited
                to texts, videos, graphics, user interfaces, visual interfaces,
                sounds and music (if any), artwork, and computer code (and any
                combinations thereof) (collectively, the “Content”) on the
                Platform is either owned by or licensed by OfferBeez. The
                design, structure, selection, coordination, expression, look and
                feel, and arrangement of such Content are protected by
                copyright, patent, and trademark laws, and various other
                intellectual property rights.
              </p>

              <p className="mb-2">
                b) The trademarks, logos, and service marks displayed on the
                Platform (“Marks”) are the licensed property of OfferBeez. You
                are not permitted to use the Marks without the prior consent of
                OfferBeez. Access or use of the Platform does not authorise any
                party to use trademarks, logos, or any other marks in any
                manner.
              </p>

              <p className="mb-2">
                c) OfferBeez disclaims holding any right, title, or interest in
                and to the intellectual property rights arising out of or
                associated with the Products and Offers sold by the Sellers on
                the Platform.
              </p>

              <p className="mb-2">
                d) References on the Platform to any name, mark, Offers, or
                products of third parties have been provided for Your
                convenience and in no way constitute an endorsement,
                sponsorship, or recommendation, whether express or implied.
              </p>

              <p className="mb-2">
                e) Where the Platform contains links to other sites provided by
                third parties, these links are provided for information only. We
                have no visibility or control over the contents on or available
                through those sites, and You acknowledge and agree that We have
                no liability for any such content.
              </p>

              <p className="mb-2">
                f) OfferBeez word/term mark and its variants, together with
                device marks displayed on the Platform, are licensed property of
                the Company. Any use, unless expressly permitted in writing,
                shall amount to infringement. You hereby agree and undertake
                that You recognise Our intellectual property rights and, upon
                acquiring knowledge of any infringement by third parties, shall
                report it to Us at{" "}
                <a
                  href="mailto:legal@OfferBeez.in"
                  className="text-blue-600 underline"
                >
                  legal@OfferBeez.in
                </a>
                .
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                11) Disclaimer of Warranties & Liability:
              </h2>

              <p className="mb-2">
                a) You expressly understand and agree that, to the maximum
                extent permitted by applicable law.
              </p>

              <p className="mb-2">
                b) The Platform and other Content are provided by OfferBeez on
                an “as is” basis without warranty of any kind, express, implied,
                statutory, or otherwise, including the implied warranties of
                title, non-infringement, merchantability, or fitness for a
                particular purpose. Without limiting the foregoing, OfferBeez
                makes no warranty that the Platform or Offers will meet Your
                requirements, or Your use of the Platform will be uninterrupted,
                timely, secure, or error-free. No advice or information, whether
                oral or written, obtained by You from OfferBeez shall create any
                warranty not expressly stated in the Terms.
              </p>

              <p className="mb-2">
                c) OfferBeez will not be liable for any loss that You may incur
                as a consequence of unauthorized use of Your Account or Account
                information in connection with the Platform either with or
                without Your knowledge.
              </p>

              <p className="mb-2">
                d) OfferBeez shall not nor is it obligated to mediate or resolve
                any disputes or disagreements that may arise between You and the
                Sellers.
              </p>

              <p className="mb-2">
                e) OfferBeez does not endorse either implicitly or explicitly,
                any sale or purchase of Products or Offers listed on the
                Platform. However, upon receiving a written request from You
                following the purchase of any Products and/or Offers on the
                Platform, OfferBeez may provide additional information about the
                Sellers involved in the transaction as available to facilitate
                direct communication between You and Sellers for the purpose of
                dispute resolution.
              </p>

              <p className="mb-2">
                f) OfferBeez has endeavored to ensure that all the information
                on the Platform is accurate, but OfferBeez neither warrants nor
                makes any representations regarding the quality, accuracy or
                completeness of any data, information regarding the Offers or
                otherwise. OfferBeez shall not be responsible for the delay or
                inability to use the Platform or related functionalities, the
                provision of or failure to provide functionalities, or for any
                information, software, functionalities, and related graphics
                obtained through the Platform, or otherwise arising out of the
                use of the Platform, whether based on contract, tort,
                negligence, strict liability or otherwise.
              </p>

              <p className="mb-2">
                g) Further, OfferBeez shall not be held responsible for
                non-availability of the Platform during periodic maintenance
                operations or any unplanned suspension of access to the Platform
                that may occur due to technical reasons or for any reasons
                beyond OfferBeez’s reasonable control.
              </p>

              <p className="mb-2">
                h) OfferBeez makes no representation that the Content on the
                Platform is appropriate to be used or accessed outside the
                Republic of India. Any Users who use or access the Platform from
                outside the Republic of India, do so at their own risk and are
                responsible for compliance with the laws of such jurisdiction
                and also consent to OfferBeez for use of their personal and
                other information only for the purpose of provision of Offers.
                By visiting the Platform or providing Your information, You
                expressly agree to be bound by these Terms and Our Privacy
                Notice and also agree to be governed by the laws of India
                including but not limited to the laws applicable to data
                protection and privacy. If You do not agree please do not use or
                access our Platform.
              </p>

              <p className="mb-2">
                i) The Terms do not constitute, nor may the Terms be used for or
                in connection with any promotional activities or solicitation by
                anyone in any jurisdiction in which such promotional activities
                or solicitation are not authorized or to any person to whom it
                is unlawful to promote or solicit.
              </p>

              <p className="mb-2">
                j) Prices for any Product(s) displayed on the Platform may be
                inaccurate due to technical issues, typographical errors, or
                incorrect information provided by the Seller. In such cases, the
                Seller are responsible and reserves the right to cancel the
                User’s Order(s). The Offer listing does not a binding agreement
                between user and businesses.
              </p>

              <p className="mb-2">
                k) OfferBeez accepts no responsibility for any breaches of
                applicable laws, including those governing the Products and
                Offers offered by Sellers or third-party delivery service
                providers or by payment gateway service providers.
              </p>

              <p className="mb-2">
                l) You acknowledge that third-party Offers are available on the
                Platform, and We may partner with certain third parties to
                facilitate such Offers. However, You agree that We make no
                representations or warranties regarding these third-party Offers
                or products and will not be liable for any outcomes, including
                injury, impairment, or death, resulting from their use. You
                hereby waive any rights or claims You may have against Us in
                relation to third-party Offers.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                12) Indemnification and Limitation of Liability:
              </h2>

              <p className="mb-2">
                a) You agree to indemnify, defend and hold harmless OfferBeez,
                Partners, Sellers, service providers, its officers, directors,
                consultants, agents, representatives and employees; and its
                third party partners (“Indemnitees”) from and against any and
                all losses, liabilities, claims, damages, demands, costs and
                expenses (including reasonable legal fees) asserted against or
                incurred by the Indemnitees that arise out of, result from, or
                may be payable by virtue of, any breach or non-performance of
                any representation, warranty, covenant or agreement made or
                obligation to be performed by You pursuant to these Terms and/or
                the Privacy Notice. Further, You agree to hold the Indemnitees
                harmless against any claims made by any third party due to, or
                arising out of, or in connection with, Your use of the Platform,
                any misrepresentation with respect to the data or information
                provided by You, Your violation of the Terms and/or the Privacy
                Notice, Your violation of applicable laws, or Your violation of
                any rights of third parties, including any intellectual property
                rights.
              </p>

              <p className="mb-2">
                b) In no event shall OfferBeez, its Sellers, its service
                providers and its directors, officers, partners, consultants,
                agents, and employees and its partners, be liable to You or any
                third party for any special, incidental, indirect,
                consequential, or punitive damages whatsoever, arising out of or
                in connection with Your use of or access to the Platform or
                Content on the Platform.
              </p>

              <p className="mb-2">
                c) Notwithstanding any provisions herein, OfferBeez, Sellers,
                service providers’ maximum total liability shall not exceed the
                amount paid by the User for the purchase of the Product and/or
                Offers under the specific order to which the liability relates.
              </p>

              <p className="mb-2">
                d) The limitations and exclusions in this Section apply to the
                maximum extent permitted by applicable laws.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                13) Violation of these Terms:
              </h2>

              <p className="mb-2">
                You agree that any violation by You of these Terms will likely
                cause irreparable harm to OfferBeez, for which monetary damages
                would be inadequate and You consent to OfferBeez obtaining any
                injunctive or equitable relief that they deem necessary or
                appropriate in such circumstances. These remedies are in
                addition to any other remedies that OfferBeez may have at law or
                in equity.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                14) Suspension and Termination:
              </h2>
              <p className="mb-2">
                a) The Terms will continue to apply until terminated by either
                You or OfferBeez as set forth below. If You object to the Terms
                or are dissatisfied with the Platform, You may:
              </p>

              <ul className="list-disc ml-6 mb-2">
                <li>Close Your Account on the Platform</li>
                <li>Stop accessing the Platform</li>
              </ul>

              <p className="mb-2">
                b) OfferBeez may disable Your access or block Your future access
                to the Platform or suspend or terminate Your Account if it
                believes, in its sole and absolute discretion, that You have
                violated any term of these Terms or the Privacy Notice or in any
                way otherwise acted unethically. Notwithstanding contained
                herein, all terms which by their nature are intended to survive
                such termination, will survive indefinitely unless and until
                OfferBeez chooses to terminate them.
              </p>

              <p className="mb-2">
                c) Any such termination shall not cancel Your obligation to pay
                for a Product or a service purchased on the Platform, or any
                other obligation which has accrued, or is unfulfilled and
                relates to the period, prior to termination.
              </p>

              <p className="mb-2">
                d) You shall be liable to pay any fees or charges, if applicable
                in respect of the Offers until the date of termination by either
                party whatsoever.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                15) Governing Law and Jurisdiction:
              </h2>

              <p className="mb-2">
                These Terms shall be governed by and construed in accordance
                with the laws of India, without reference to conflict of laws
                principles, and disputes arising in relation hereto shall be
                subject to the exclusive jurisdiction of courts at Bengaluru,
                Karnataka, India.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                16) Grievance Redressal Mechanism:
              </h2>

              <p className="mb-2">
                a) For any order-related issue, You may first reach out to Us
                via chat support on the App for real-time resolution.
              </p>

              <p className="mb-2">
                b) You may also write to Us at{" "}
                <span className="font-medium">support@OfferBeez.in</span> and We
                will strive to resolve Your order-related issues within the
                timelines prescribed under applicable laws.
              </p>

              <p className="mb-2">
                c) If You still have any grievances, complaints, or concerns
                with respect to the Platform or order, or are not satisfied with
                the resolution, the Content, or the Offers, You can contact the
                designated Grievance cum Nodal Officer of OfferBeez as per the
                below details:
              </p>

              <div className="ml-4 mb-2">
                <p>Mr. Arun</p>
                <p>Designation: Associate Director</p>
                <p>Venturebiz Promotions Private Limited</p>
                <p>#2085/16, 2nd Floor, Spoorthi,</p>
                <p>Puttenahalli Main Road,</p>
                <p>JP Nagar 7th Phase,</p>
                <p>Bangalore - 560078</p>
                <p>Phone: 900852236</p>
                <p>Email: grievances@offerbeez.in</p>
                <p>Time: Mon – Sat (9:00 – 18:00)</p>
              </div>

              <p className="mb-2">
                d) The aforementioned details of the Grievance cum Nodal Officer
                are provided in compliance with the Information Technology Act,
                2000, and rules made thereunder.
              </p>

              <p className="mb-2">
                e) Consumer Protection (E-Commerce) Rules 2020, as amended from
                time to time.
              </p>

              <p>
                f) The Grievance Officer of OfferBeez shall endeavour to
                acknowledge the User grievances, complaints, or concerns with
                respect to the Platform, the Content, or the Offers within 48
                hours of receipt of the same and shall endeavour to redress them
                at the earliest and in no event later than 30 (thirty) days of
                receipt of such request.
              </p>

              <p>
                By lodging a complaint or grievance, You agree to provide
                complete support to the Grievance Officer and such reasonable
                information as may be sought by them from You.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                17) Notice of Infringement and Take Down Policy
              </h2>

              <p className="mb-2">
                a) OfferBeez’s Take Down Policy enables intellectual property
                owners to quickly report and remove infringing listings from the
                Platform.
              </p>

              <p className="mb-2">
                b) Intellectual property owners can report potentially
                infringing Products or listings by submitting a Notice of
                Infringement containing all the details as mentioned below.
                OfferBeez cannot independently verify that Sellers have the
                rights to sell or distribute their Products or Offers but is
                fully committed to protecting intellectual property rights.
              </p>

              <p className="mb-2">
                c) Steps to report a listing: If You have a sincere belief that
                a Seller on Our Platform is infringing Your intellectual
                property rights, please follow the below steps. We request You
                to provide the following information and email it to{" "}
                <span className="font-medium">legal@OfferBeez.in</span>. The
                email should include:
              </p>

              <div className="ml-4 mb-2">
                <p>
                  1) Identification or description of the copyrighted
                  work/trademark that has been infringed along with
                  registration/application details and images.
                </p>
                <p>2) Your contact information.</p>
                <p>
                  3) An undertaking from You that You have a good faith belief
                  that the use of the material complained of is not authorized
                  by the trademark or copyright or intellectual property owner,
                  its agent, or the law.
                </p>
                <p>
                  4) The information in the notice is accurate and that You are
                  the trademark or copyright or intellectual property owner or
                  authorized to act on their behalf.
                </p>
                <p>
                  5) Such other information that You think is important for
                  supporting Your claim.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                18) OfferBeez’s Actions
              </h2>

              <p className="mb-3">
                a) Upon receiving a duly completed notice with the necessary
                documentation as described above, and after confirming the
                authenticity of the claim, OfferBeez may take appropriate steps
                to
                <strong> remove or disable access </strong>
                to the alleged infringing content provided by third parties.
              </p>

              <p className="mb-3">
                b) OfferBeez may also
                <strong> notify the respective Seller </strong>
                who submitted the content in question, providing them with a
                <strong> copy of the infringement notice </strong>
                for their reference and response.
              </p>

              <p>
                c) OfferBeez reserves the right to
                <strong> undertake any further actions </strong>
                as permitted under the
                <strong> applicable laws </strong>
                in effect at the time of receiving such notification.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">19) Communications</h2>

              <p className="mb-3">
                a) You hereby expressly agree to receive communications by way
                of
                <strong>
                  {" "}
                  SMS, telephone or VOIP calls, messaging apps like WhatsApp,{" "}
                </strong>
                or electronic communications such as emails from OfferBeez and
                other third parties duly authorized by OfferBeez.
              </p>

              <p className="mb-3">
                b) You hereby expressly consent to the
                <strong> monitoring and recording </strong>
                by OfferBeez and/or any third party of any and all
                communications between You and OfferBeez or its agents,
                employees, consultants, contractors, or representatives of
                OfferBeez or their authorized partners. Such monitoring or
                recording waives any further notice or consent requirement under
                applicable laws.
              </p>

              <p>
                c) You can <strong> unsubscribe </strong> or{" "}
                <strong> opt-out </strong> from receiving promotional
                communications from OfferBeez. In such cases, OfferBeez will
                send only those communications that are
                <strong> necessary for availing the Offers </strong> by You.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                20) General Provisions
              </h2>

              <h3 className="font-medium mb-2">Notice:</h3>
              <p className="mb-3">
                a) All notices from OfferBeez will be served by email to Your
                registered email address, by messaging app on the registered
                mobile phone number, or by general notification on the Platform.
              </p>

              <h3 className="font-medium mb-2">Assignment:</h3>
              <p className="mb-3">
                b) You cannot assign or otherwise transfer any rights granted
                hereunder to any third party. OfferBeez’s rights and obligations
                under the Terms are freely transferable by OfferBeez to its
                successor, affiliates, or any third party without requiring Your
                consent.
              </p>

              <h3 className="font-medium mb-2">Severability:</h3>
              <p className="mb-3">
                c) If, for any reason, any provision of the Terms, or any
                portion thereof, is found to be unenforceable, that provision
                shall be enforced to the maximum extent permissible so as to
                give effect to the intent of the parties, and the remainder of
                the Terms shall continue in full force and effect.
              </p>

              <h3 className="font-medium mb-2">Force Majeure:</h3>
              <p>
                d) OfferBeez, its Sellers, or its service providers shall not be
                liable to You for failure to perform or for delay in providing
                access to Your Account, the Platform, or any Offers, to the
                extent such failure or delay results from causes beyond its
                reasonable control, including but not limited to acts of God,
                fires, explosions, wars, hostilities, insurrections,
                revolutions, strikes, labour unrest, earthquakes, floods, riots,
                excessive rains, pandemics, epidemics, regulatory restrictions,
                government controls, hosting or internet service provider
                failures, or any software/hardware defects in Your computer
                system.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">21) Advertisements</h2>

              <p className="mb-3">
                a) As part of the Offers provided by Us, We may facilitate and
                allow third-party advertisers (“Third Party Advertisers”) to
                place advertisements on the Platform. You understand that any
                content put out by Third Party Advertisers is not endorsed by
                OfferBeez, and We disclaim, to the fullest extent permitted by
                law, any liability for the content published by such Third Party
                Advertisers. It is solely the responsibility of the Third Party
                Advertisers submitting material to the Platform to ensure
                compliance with all relevant laws. Any interactions or
                transactions You undertake with Third Party Advertisers found on
                the Platform — including payments, delivery, and terms or
                representations related to their goods or Offers — are strictly
                between You and the Third Party Advertiser. OfferBeez bears no
                liability for errors, omissions, or inaccuracies in advertising
                content or for any losses or damages arising from Your dealings
                with these advertisers or their presence on the Platform.
              </p>

              <p className="mb-3">
                b) To the extent You are a Third Party Advertiser, You
                understand that in addition to these Terms, You will also be
                required to agree to OfferBeez’s policies and other contractual
                agreements that You will need to execute for placing Your
                advertisement.
              </p>

              <p className="mb-3">
                c) As a general principle, the content in the advertisements
                should not be misleading or in violation of applicable law or
                guidelines issued by the Advertising Standards Council of India
                or any other self-regulating body. You also acknowledge that We
                have the sole right, at Our discretion, to remove any Third
                Party Advertisement or require You to prove factual
                substantiation if We are of the view that it violates applicable
                law or any self-regulating industry guidelines, or is otherwise
                misleading.
              </p>

              <p className="mb-3">
                d) If You are of the view that the content of a Third Party
                Advertiser is inappropriate or in violation of applicable law,
                please write to Us at the email address provided above.
              </p>

              <p>
                e) For any charitable campaign information shared with Users or
                displayed on the Platform, where donations may be made through
                third-party sites or accounts, OfferBeez may not be involved in
                fund collection or use. OfferBeez bears no responsibility for
                the accuracy or legality of campaign information, which is
                provided solely for reference. Users are encouraged to verify
                details independently before taking any action.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">22) Severability</h2>

              <p>
                a) If any part of these Terms is found to be invalid, void, or
                unenforceable, that portion will be treated as separable, and
                the remaining provisions will continue in full force and effect.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">23) Amendments</h2>

              <p>
                a) We may modify these Terms periodically, without prior notice,
                to include updates, revisions, additions, or new policies
                affecting Your use of the Offers. Such changes will be posted on
                the Platform and take effect immediately upon posting. We
                encourage You to review these Terms on the Platform regularly
                for any updates. By continuing to use the Offers and/or the
                Platform, You agree to accept any revised Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">24) Transition</h2>

              <p className="mb-4">
                a) THE PLATFORM IS UNDERGOING A TRANSITION WHERE THE PLATFORM
                WILL BE OPERATED BY VENTUREBIZ PROMOTIONS PRIVATE LIMITED FROM
                THE DATE WHICH SHALL BE COMMUNICATED TO YOU. PURSUANT TO THE
                TRANSITION THE EXISTING USER OF OFFERBEEZ OFFERS HEREBY CONSENT
                TO THE FOLLOWING:
              </p>

              <p>
                b) FOR THE TRANSFER OF YOUR PAYMENT RELATED INFORMATION AND
                INSTRUMENTS AS AVAILABLE WITH THE SERVICE PROVIDER OF OFFERBEEZ
                TO ENSURE SEAMLESS EXPERIENCE FOR USERS POST TRANSITION.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                OfferBeez Business TOS
              </h2>

              <p className="mb-4">
                This document is an electronic record and published in
                accordance with the provisions of the Information Technology
                Act, 2000 and the rules there under and the Information
                Technology (Intermediary Guidelines and Digital Media Ethics
                Code) Rules, 2021 and generated by a computer system and does
                not require any physical or digital signatures.
              </p>

              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Terms of Use:</h3>

              <p className="mb-4">
                a) The websites <strong>www.OfferBeez.in</strong>,{" "}
                <strong>www.venturebiz.in</strong> (“Website”) and mobile
                application ‘OfferBeez’ (“App”) (Website and App collectively
                referred to as the “Platform”) are owned, operated and managed
                by <strong>Venturebiz Promotions Private Limited</strong>, a
                company incorporated in accordance with the provisions of the
                Indian Companies Act, 2013 and having its registered office
                situated at #2085/16, 2nd Floor, Spoorthi, Puttenahalli Main
                Road, JP Nagar 7th Phase, Bangalore – 560078.
              </p>

              <p className="mb-4">
                b) These terms of use (“Terms”) govern Your use of the Platform,
                and for the purpose of these Terms, Venturebiz Promotions
                Private Limited including its subsidiaries, its holding company,
                and its affiliates may, wherever the context so requires, be
                referred to as “OfferBeez”. “OfferBeez” and the term “Business
                User” refer to users of the Platform. We value the trust You
                have placed in OfferBeez and hence We maintain reasonable
                security standards for securing the transactions and Your
                information.
              </p>

              <p className="mb-4">
                c) Please read these Terms carefully before You use the
                Platform. If You do not agree to these Terms, You may not use
                the Offers on the Platform, and We request You to uninstall the
                App and not access the Platform. By merely using or accessing
                the Platform, You shall be contracting with OfferBeez and
                signify Your acceptance to these Terms and other OfferBeez
                policies (including but not limited to the cancellation & refund
                terms and published Privacy Policy (“Privacy Notice”)) as posted
                on the Platform and amended from time to time, which take effect
                on the date on which the Business User uses the Platform and
                thereby create a legally binding agreement to abide by the same.
                Further, by furnishing Your personal information, Business User
                consents to OfferBeez accessing Your personal information for
                the purpose of enabling transactions. You also agree that You
                are interested in availing the Offers through the Platform in
                accordance with these Terms.
              </p>

              <p>
                d) OfferBeez retains an unconditional right to modify or amend
                these Terms. You can determine when these Terms were last
                modified by referring to the ‘Last Updated’ legend above. You
                can access the latest version of these Terms at any given time
                on the Platform. You should regularly review the Terms on the
                Platform. OfferBeez reserves the right to amend, suspend,
                discontinue or add any or all Offers without prior notice and
                can add or remove relevant terms and conditions, if necessary.
                Any updating of the Terms as a consequence of change in legal
                and regulatory compliances shall be made in compliance thereof.
                Your continued use of and access to the Platform shall be Your
                consent to any changes made by OfferBeez in these Terms. In the
                event the modified Terms are not acceptable to Business User,
                You should discontinue accessing the Platform.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Access to Offers
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  a) OfferBeez enables transactions on the Platform between
                  participating Business Users and End Users. Business Users can
                  view the Products and Offers offered for sale by these Sellers
                  in select serviceable areas across India. OfferBeez is not and
                  cannot be a party to or control in any manner any transaction
                  between the Platform's End Users and Business Users.
                </p>

                <p>
                  b) Business Users acknowledge that the Platform allows You to
                  avail a personal, limited, non-exclusive, non-transferable,
                  and revocable privilege to access and use the Platform for the
                  purposes of Offering consumer goods such as grocery, apparel,
                  electronics, health and wellness, café products including
                  prepared foods and beverages, pet care, etc., sold on a
                  business-to-consumer (B2C) basis. The registered businesses
                  may be required to furnish additional details of their
                  business including, without limitation, business name, GSTIN,
                  licenses/ registrations issued by Government Authorities,
                  and/or any other information that may be required by
                  OfferBeez. Business Users shall be responsible for the
                  accuracy of the GSTIN and legal entity name. OfferBeez
                  disclaims any liabilities arising out of incorrect details.
                </p>

                <p>
                  c) The Business User may, at their discretion, add, modify,
                  and remove any of the Products or Offers listed above from
                  time to time without notice. The Business User and OfferBeez
                  may also make applicable, at its discretion, additional terms
                  and conditions specific to any category and section of
                  Products or Offers in addition to these Terms. Your purchase
                  of any such category and section of Products or Offers shall
                  also be governed by such additional terms and conditions.
                  OfferBeez reserves the right to provide the Offers within a 3
                  Km radius from the business user’s store location across
                  India, as may be determined by OfferBeez in its sole
                  discretion. Before applying for or availing any of the Offers,
                  We request You to please check if the Offers are available in
                  Your area or within a 3 Km radius from the business user’s
                  store location.
                </p>

                <div>
                  <p>d) OfferBeez does not:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      Adopt any ‘unfair trade practices’ either on the Platform
                      or otherwise with respect to its Offers.
                    </li>
                    <li>
                      Discriminate between Users of the same class or make any
                      arbitrary classification of the Users.
                    </li>
                    <li>
                      Discriminate between the third-party delivery service
                      providers.
                    </li>
                  </ul>
                </div>

                <p>
                  e) OfferBeez functions solely as an online marketplace and
                  acts as a facilitator enabling transactions between End Users
                  and Business Users on the Platform. At no point does OfferBeez
                  take possession of any items offered by Business Users, nor
                  does it hold any rights, title, or interest in those Offers.
                  OfferBeez is not liable for any obligations related to
                  non-performance or breach of contracts between End Users and
                  Business Users. OfferBeez is neither responsible for poor or
                  delayed Offers or service performance nor for issues arising
                  from Offers that are out of stock or unavailable.
                </p>

                <div>
                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    1) Terms and conditions applicable for the Business User who
                    is a registered business
                  </h3>
                  <p className="mb-2">
                    The Business User represents and undertakes:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      That the Business User has full legal authorization and
                      power to Offer on behalf of the registered business.
                    </li>
                    <li>
                      That the documents and information provided are genuine
                      and complete.
                    </li>
                    <li>
                      That the Business User shall not act as an agent of
                      OfferBeez.
                    </li>
                    <li>
                      To adhere to such other terms as may be applicable or
                      displayed on the Platform from time to time.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Eligibility to Use
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  a) The Offers are not available to minors i.e., persons under
                  the age of 18 (eighteen) years, undischarged insolvents, or
                  any Business Users who are not competent to enter into a
                  contract under the Indian Contract Act, 1872, unless otherwise
                  provided hereunder or to anyone previously suspended or
                  removed by OfferBeez from availing the Offers or accessing the
                  Platform.
                </p>

                <p className="font-semibold">
                  You hereby represent that You are:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Of legal age to form a binding contract.</li>
                  <li>
                    Not a person barred from receiving the Offers from the
                    Platform under the applicable laws.
                  </li>
                  <li>Competent to enter into a binding contract.</li>
                  <li>
                    Have not been previously suspended, removed, or disqualified
                    for any reason from the Platform. If You are under the age
                    of 18, You shall use and access the Platform only with the
                    express consent of a parent or guardian and under their
                    supervision.
                  </li>
                </ul>

                <p>
                  b) Business Users will not discriminate against third-party
                  delivery service providers based on race, religion, caste,
                  creed, national origin, disability, sexual orientation, sex,
                  marital status, gender identity, age, or any other metric
                  deemed immoral and unlawful. Any credible proof of such
                  discrimination, including any refusal to receive the Offers
                  based on the above metrics, whether alone or in conjunction
                  with any other metric, shall render You ineligible, leading to
                  suspension of access to the Platform. You will not have any
                  claim, and We will not have any liability towards any such
                  suspension.
                </p>

                <p>
                  c) Business Users shall not make negative, defamatory,
                  misleading, deceptive, or libellous remarks about the
                  OfferBeez brand, including its affiliates, on the Platform or
                  otherwise, or take any actions that could harm OfferBeez’s
                  reputation or dilute its trademarks. Additionally, You will
                  not impose an excessive load on the Platform’s infrastructure
                  or our systems and networks.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                User Account, Password and Security
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  a) In order to access the Offers of the Platform, You will
                  have to register and create an account on the Platform by
                  providing details as may be required (“Account”). When You use
                  the Platform, OfferBeez may collect personal information such
                  as Your name, email, address, mobile number, and contact
                  details and also documents pertaining to the same.
                </p>

                <p>
                  b) Business Users are solely responsible for the information
                  You provide to OfferBeez. You shall ensure and confirm that
                  the Account information and all information provided by You is
                  complete, accurate, and up to date. If there is any change in
                  the Account information, or if any information is found to be
                  incomplete or incorrect, You shall promptly update Your
                  Account information on the Platform or request OfferBeez for
                  information revision or update. If the information provided by
                  You is untrue, inaccurate, unauthorised, not current, or
                  incomplete (or becomes untrue, inaccurate, not current, or
                  incomplete), OfferBeez reserves the right to refuse any and
                  all the Offers if it has reasonable grounds to suspect such
                  information. OfferBeez also reserves the right to refuse
                  access to the Platform at any time without notice.
                </p>

                <p>
                  c) Confidentiality of the Account credentials shall be Your
                  responsibility. OfferBeez disclaims any liability for losses
                  due to unauthorised access of Your Account.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Payment Related Information
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  a) The information related to the accepted payment methods on
                  the Platform shall be displayed during the registering
                  process.
                </p>

                <p>
                  To the extent permitted by applicable law and subject to the
                  Privacy Notice, You acknowledge and agree that OfferBeez may
                  use certain payment gateways to process payments and manage
                  payment card information. Such parties are separate from
                  OfferBeez, and You will be subject to their terms and
                  conditions while making any payment for the Offers.
                </p>

                <p>
                  b) Business Users undertake to provide valid details required
                  for facilitating payment towards the transaction (“Payment
                  Details”). By providing the Payment Details, Business Users
                  represent, warrant, and covenant that:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    You are legally authorized to provide such Payment Details.
                  </li>
                  <li>
                    You are legally authorized to make payments using such
                    Payment Details.
                  </li>
                  <li>
                    Such action does not violate the terms and conditions
                    applicable to Your use of such Payment Details or applicable
                    law.
                  </li>
                </ul>

                <p>
                  c) Except to the extent otherwise required by applicable law,
                  OfferBeez is not liable for any payments authorized through
                  the Platform using Your Payment Details. OfferBeez is not
                  liable for any payments that do not complete a transaction due
                  to reasons including but not limited to the following:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>Insufficient funds in Your bank account.</li>
                  <li>You have not provided correct Payment Details.</li>
                  <li>
                    Technical issues or interruptions in the Platform or payment
                    processing systems.
                  </li>
                  <li>
                    Violation of any terms or conditions governing the use of
                    Your Payment Details.
                  </li>
                  <li>
                    Fraudulent activity or unauthorized use of Your Payment
                    Details.
                  </li>
                  <li>Your payment card has expired.</li>
                  <li>
                    Any other reason for declining of payment transaction.
                  </li>
                  <li>
                    Any other circumstances beyond OfferBeez’s reasonable
                    control which prevent the execution of the transaction.
                  </li>
                </ul>

                <p>
                  OfferBeez shall not be responsible or obligated to refund any
                  money to You for any unauthorized transactions conducted on
                  the Platform using Your Payment Details.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Price of Offers:</h3>

              <div className="mb-4">
                <p>
                  a) The prices for Offers listed by Business on the Platform
                  are determined entirely by the Business user themselves and
                  OfferBeez does not participate in or influence this pricing
                  process in any manner. The prices of each of the Offers may
                  vary due to various factors and You may check the price on the
                  Platform before purchasing the product. All the Products
                  listed on the Platform will be sold at Indian Rupees either at
                  a discounted price unless otherwise specified. The prices of
                  the Offers are an offer for sale by the Business user and may
                  be modified by the Sellers from time to time without any prior
                  notice. OfferBeez endeavour to display the Products and Offers
                  at the accurate prices as possible on the Platform. There may
                  be inadvertent errors with respect to the price and other
                  information of the Products or Offers that You may bring to
                  Our notice of such errors and We shall effect necessary
                  corrections, however the Users will be informed about all the
                  costs that may be levied on the purchase of the Offers on the
                  platform.
                </p>
              </div>

              <div>
                <p>
                  b) The expression like 'Lowest Prices' pertains to the
                  computation of average prices for all Products and Offers
                  offered for sale by the Business user on the Platform are
                  subject to availability of stocks. OfferBeez expressly
                  disclaims any liability associated with the individual Offers
                  sold on the Platform by the Business user.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">User Care:</h3>

              <div className="mb-4">
                <p>
                  a) The information about Products and the associated
                  catalogue, including pricing, displayed on the Platform is
                  provided by the Business user. OfferBeez cannot be held liable
                  for any changes, correctness or errors or omissions of the
                  information, or unavailability of these Offers.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  b) OfferBeez is not and cannot be a party to any transaction
                  between End User and have any control, involvement or
                  influence over the Products Offers availed by from such
                  Business user. Business user acknowledge and agree that
                  OfferBeez shall not, at any time, have any ownership, control,
                  and title to any Product(s), which is subject to a bipartite
                  sale and purchase transaction between Business user and the
                  relevant End user. OfferBeez does not provide any warranty or
                  guarantee with respect to the Products and Offers offered for
                  sale on the Platform and disclaims any liability with respect
                  to the manufacturing defects, quality, taste, performance of
                  the Products/Offers sold. All commercial and contractual
                  arrangements regarding the Products and Offers offered for
                  sale are solely between Users and Business user.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  c) OfferBeez does not guarantee or endorse the specifics of
                  any Business user including aspects like legal ownership,
                  creditworthiness, or identity. We recommend that You conduct
                  Your own due diligence to verify the legitimacy of any Seller
                  You choose to engage with on the Platform and exercise Your
                  discretion. All offers from Business user and third parties
                  are governed by their respective terms and conditions and
                  OfferBeez assumes no responsibility for these offers.
                </p>
              </div>

              <div>
                <p>
                  d) Business user agree and understand that the Product images
                  are representation of the Product and not actual image of the
                  Product sold. WHILE EVERY REASONABLE EFFORT IS MADE TO
                  MAINTAIN ACCURACY OF INFORMATION ON THE PLATFORM, ACTUAL
                  PRODUCT, MAY CONTAIN MORE AND/OR DIFFERENT INFORMATION THAN
                  WHAT IS SHOWN ON THE PLATFORM. IT IS RECOMMENDED TO REFER THE
                  INFORMATION PRESENTED ON THE ACTUAL PRODUCT.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Beware of Fraud:</h3>

              <div className="mb-4">
                <p>
                  a) Please do not share Your debit/credit card number, CVV
                  number, OTP, UPI/ATM pin and other sensitive information with
                  anyone claiming to be a OfferBeez representative. OfferBeez or
                  its authorised representatives will NEVER ask You to share the
                  aforesaid details. Beware of fraudsters and please report
                  incidents immediately to Your bank, the nearest police station
                  and at{" "}
                  <a
                    href="https://cybercrime.gov.in/"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cybercrime.gov.in/
                  </a>
                  .
                </p>
              </div>

              <div>
                <p>
                  b) Please exercise caution to verify the portals/website links
                  claiming to be OfferBeez or a lookalike, or a payment link
                  shared over social media or social messaging apps claiming to
                  be OfferBeez discounts and offers, and proactive calls from
                  unauthorised numbers or unauthorized social media accounts
                  requesting for personal/financial information.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Use of Platform:</h3>

              <div className="mb-4">
                <p>
                  a) Subject to compliance with the Terms, OfferBeez hereby
                  grants You a personal, non-exclusive, non-transferable,
                  limited, revocable privilege to access and use the Platform.
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>For purposes that are permitted by the Terms</li>
                  <li>
                    In accordance with any applicable law, regulation or
                    generally accepted practices or guidelines
                  </li>
                  <li>
                    For availing the Offers through the Platform. You agree not
                    to engage in activities that may adversely affect the use of
                    the Platform by OfferBeez and other Users
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p>
                  b) Business user agree that the Platform and any portion of
                  the Platform shall not be reproduced, duplicated, copied,
                  sold, resold or otherwise exploited for commercial purposes.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  c) Business user agree to not frame or utilise the framing
                  techniques to enclose any trademark, logo or any other
                  proprietorship information of the Platform.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  d) Business user agree not to access (or attempt to access)
                  the Platform by any means other than through the interface
                  provided by OfferBeez. You shall not use any deep-link, robot,
                  spider, or other automatic device, program, algorithm or
                  methodology, or any similar or equivalent manual process, to
                  access, acquire, copy, or monitor any portion of the Platform
                  or Content, or in any way reproduce or circumvent the
                  navigational structure or presentation of the Platform,
                  materials or any Content.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  e) You undertake not to host, display, upload, modify,
                  publish, transmit, store, update or share any information that
                  belongs to another person and to which You do not have any
                  right.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  f-p) Business user shall not upload, share or transmit any
                  Content that:
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    Is defamatory, obscene, pornographic, harmful to children,
                    invasive of privacy, insulting, harassing, or otherwise
                    inconsistent with laws in force
                  </li>
                  <li>Infringes intellectual property rights</li>
                  <li>
                    Violates any law in force or impersonates another person
                  </li>
                  <li>
                    Threatens the unity, integrity, defence, security, or
                    sovereignty of India
                  </li>
                  <li>Contains software viruses or harmful code</li>
                  <li>
                    Is patently false or misleading with intent to harass or
                    cause harm
                  </li>
                  <li>
                    Disrupts or interferes with the security of the Platform,
                    systems, servers, or networks
                  </li>
                  <li>Violates these Terms</li>
                  <li>
                    Reverse engineers, modifies, copies, distributes, displays,
                    performs, reproduces, publishes, licenses, creates
                    derivative works from, transfers, or sells any information
                    or software from the Platform
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p>
                  q) Business user shall be solely responsible for maintaining
                  the necessary computer equipment, gadgets, and internet
                  connections required to access, use, and transact on the
                  Platform.
                </p>
              </div>

              <div>
                <p>
                  r) Business user understand and acknowledge that by using the
                  Platform or any of the Offers, You may encounter Content that
                  some Users may deem offensive, indecent, or objectionable.
                  Youagree to use the Platform at Your sole risk and OfferBeez
                  shall have no liability for Content that may be deemed
                  offensive or objectionable.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Intellectual Property Rights:
              </h3>

              <div className="mb-4">
                <p>
                  a) The Platform and its processes, including but not limited
                  to texts, videos, graphics, user interfaces, visual
                  interfaces, sounds and music (if any), artwork, and computer
                  code (and any combinations thereof) (collectively, the
                  “Content”) are either owned by or licensed by OfferBeez. The
                  design, structure, selection, coordination, expression, look
                  and feel, and arrangement of such Content are protected by
                  copyright, patent, trademark laws, and other intellectual
                  property rights.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  b) The trademarks, logos, and service marks displayed on the
                  Platform (“Marks”) are the licensed property of OfferBeez or
                  owned by third parties. You are not permitted to use the Marks
                  without prior consent of OfferBeez or the relevant third
                  party. Access or use of the Platform does not authorize any
                  party to use trademarks, logos, or any other marks in any
                  manner.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  c) OfferBeez disclaims holding any right, title, or interest
                  in the intellectual property rights arising out of or
                  associated with the Products or Offers by the Business on the
                  Platform.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  d) References on the Platform to any name, mark, Offers, or
                  products of third parties are provided for Your convenience
                  and do not constitute endorsement, sponsorship, or
                  recommendation, whether express or implied.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  e) Where the Platform contains links to other sites provided
                  by third parties, these links are for information only.
                  OfferBeez has no visibility or control over the contents on
                  those sites and You acknowledge that We have no liability for
                  any such content.
                </p>
              </div>

              <div>
                <p>
                  f) The OfferBeez word mark, variances, and device marks
                  displayed on the Platform are the licensed property of
                  OfferBeez. Any use, unless expressly permitted in writing,
                  shall amount to infringement. You agree to recognize Our
                  intellectual property rights and report any infringement by
                  third parties to legal@OfferBeez.com.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Disclaimer of Warranties & Liability:
              </h3>

              <div className="mb-4">
                <p>
                  a) The Platform and other Content are provided by OfferBeez on
                  an “as is” basis without warranty of any kind, express,
                  implied, statutory, or otherwise, including the implied
                  warranties of title, non-infringement, merchantability, or
                  fitness for a particular purpose. OfferBeez makes no warranty
                  that the Platform or Offers will meet Your requirements, or
                  Your use of the Platform will be uninterrupted, timely,
                  secure, or error-free. No advice or information, whether oral
                  or written, obtained from OfferBeez shall create any warranty
                  not expressly stated in the Terms.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  b) OfferBeez will not be liable for any loss that You may
                  incur as a consequence of unauthorized use of Your Account or
                  Account information in connection with the Platform either
                  with or without Your knowledge.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  c) OfferBeez has endeavored to ensure that all information on
                  the Platform is accurate, but does not warrant or represent
                  the quality, accuracy, or completeness of any data or
                  information regarding the Offers. OfferBeez shall not be
                  responsible for delays, inability to use the Platform,
                  non-provision of functionalities, or any information,
                  software, graphics obtained through the Platform. OfferBeez
                  shall not be held responsible for non-availability of the
                  Platform during maintenance or unplanned suspension due to
                  technical reasons or beyond reasonable control.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  d) Colours of the Products displayed on the Platform are as
                  accurate as possible. However, actual colours depend on Your
                  monitor or device, and OfferBeez does not guarantee or assume
                  liability for such display differences.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  e) OfferBeez makes no representation that the Content is
                  appropriate for use outside the Republic of India. Users
                  accessing the Platform from outside India do so at their own
                  risk and are responsible for compliance with local laws. Users
                  consent to OfferBeez using their information solely to provide
                  Offers. By using the Platform, You agree to these Terms and
                  Our Privacy Notice, and to be governed by Indian laws.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  f) The Terms do not constitute or authorize promotional
                  activities or solicitation in jurisdictions where such
                  activities are prohibited or unlawful.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  g) Prices for any Product(s) displayed on the Platform may be
                  inaccurate due to technical issues, typographical errors, or
                  incorrect information provided by the Business user.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  h) OfferBeez accepts no responsibility for any breaches of
                  applicable laws, including those governing the Products and
                  Offers offered by Business user.
                </p>
              </div>

              <div>
                <p>
                  i) Business user acknowledge that third-party Offers are
                  available on the Platform. OfferBeez may partner with third
                  parties to facilitate such Offers but makes no representations
                  or warranties regarding them and is not liable for any
                  outcomes, including injury, impairment, or death. You hereby
                  waive any rights or claims against OfferBeez in relation to
                  third-party Offers.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Indemnification and Limitation of Liability:
              </h3>

              <div className="mb-4">
                <p>
                  a) Business user agree to indemnify, defend, and hold harmless
                  OfferBeez, Sellers, service providers, its officers,
                  directors, consultants, agents, representatives, employees,
                  and third-party partners (“Indemnitees”) from and against any
                  and all losses, liabilities, claims, damages, demands, costs,
                  and expenses (including reasonable legal fees) asserted
                  against or incurred by the Indemnitees that arise out of,
                  result from, or may be payable by virtue of any breach or
                  non-performance of any representation, warranty, covenant or
                  agreement made or obligation to be performed by You pursuant
                  to these Terms and/or the Privacy Notice. You further agree to
                  hold the Indemnitees harmless against any claims made by any
                  third party due to, or arising out of, Your use of the
                  Platform, any misrepresentation with respect to the data or
                  information provided by You, Your violation of the Terms
                  and/or the Privacy Notice, Your violation of applicable laws,
                  or Your violation of any rights of third parties, including
                  any intellectual property rights.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  b) In no event shall OfferBeez, its Business user, service
                  providers, directors, officers, partners, consultants, agents,
                  employees, or its partners, be liable to You or any third
                  party for any special, incidental, indirect, consequential, or
                  punitive damages whatsoever, arising out of or in connection
                  with Your use of or access to the Platform or Content on the
                  Platform. Notwithstanding any provisions herein, OfferBeez,
                  Business user, and service providers’ maximum total liability
                  shall not exceed the amount paid by the User for the purchase
                  of the Product Offers under the specific order to which the
                  liability relates.
                </p>
              </div>

              <div>
                <p>
                  c) The limitations and exclusions in this Section apply to the
                  maximum extent permitted by applicable laws.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Violation of these Terms:
              </h3>
              <div className="mb-4">
                <p>
                  a) Business user agree that any violation by Business user of
                  these Terms will likely cause irreparable harm to OfferBeez,
                  for which monetary damages would be inadequate and You consent
                  to OfferBeez obtaining any injunctive or equitable relief that
                  they deem necessary or appropriate in such circumstances.
                  These remedies are in addition to any other remedies that
                  OfferBeez may have at law or in equity.
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Suspension and Termination:
              </h3>
              <div className="mb-4">
                <p>
                  a) The Terms will continue to apply until terminated by either
                  Business user or OfferBeez as set forth below. If You object
                  to the Terms or are dissatisfied with the Platform,
                </p>
              </div>

              <div className="mb-4">
                <p>b) Business user may:</p>
                <ul className="list-disc list-inside ml-5">
                  <li>Close Your Account on the Platform</li>
                  <li>Stop accessing the Platform.</li>
                </ul>
              </div>

              <div className="mb-4">
                <p>
                  c) OfferBeez may disable Your access or block Your future
                  access to the Platform or suspend or terminate Your Account if
                  it believes, in its sole and absolute discretion, that You
                  have violated any term of these Terms or the Privacy Notice or
                  in any way otherwise acted unethically. Notwithstanding
                  anything contained herein, all terms which by their nature are
                  intended to survive such termination, will survive
                  indefinitely unless and until OfferBeez chooses to terminate
                  them.
                </p>
              </div>

              <div className="mb-4">
                <p>
                  d) Any such termination shall not cancel Your obligation to
                  pay for a Product or a service purchased on the Platform, or
                  any other obligation which has accrued, or is unfulfilled and
                  relates to the period prior to termination.
                </p>
              </div>

              <div>
                <p>
                  e) Business user shall be liable to pay any fees or charges,
                  if applicable, in respect of the Offers until the date of
                  termination by either party whatsoever.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Governing Law and Jurisdiction:
              </h3>
              <div>
                <p>
                  These Terms shall be governed by and constructed in accordance
                  with the laws of India without reference to conflict of laws
                  principles and disputes arising in relation hereto shall be
                  subject to the exclusive jurisdiction of courts at Bengaluru,
                  India.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Grievance Redressal Mechanism:
              </h3>
              <div className="ml-4 space-y-2">
                <p>
                  a) For any Offers related issue, You may first reach out to Us
                  via chat support on the App for real time basis resolution.
                </p>
                <p>
                  b) Business user may also write to Us at{" "}
                  <a
                    href="mailto:support@OfferBeez.in"
                    className="text-blue-600 underline"
                  >
                    support@OfferBeez.in
                  </a>{" "}
                  and We will strive to resolve Your order related issues within
                  the timelines prescribed under applicable laws.
                </p>
                <p>
                  c) If You still have any grievances, complaints or concerns
                  with respect to the Platform or order, or are not satisfied
                  with the resolution, the Content, or the Offers, You can
                  contact the designated Grievance cum Nodal Officer of
                  OfferBeez:
                </p>
                <div className="ml-4">
                  <p>Mr. Arun</p>
                  <p>Designation: Associate Director</p>
                  <p>Venturebiz Promotions Private Limited</p>
                  <p>
                    Address: #2085/16, 2nd Floor, Spoorthi, Puttenahalli Main
                    Road, JP Nagar 7th Phase, Bangalore- 560078
                  </p>
                  <p>Phone: 900852236</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:grievances@OfferBeez.in"
                      className="text-blue-600 underline"
                    >
                      grievances@OfferBeez.in
                    </a>
                  </p>
                  <p>Time: Mon – Sat (9:00 – 18:00)</p>
                </div>
                <p>
                  The aforementioned details of the Grievance cum Nodal Officer
                  are provided in compliance with:
                </p>
                <ol className="ml-6 list-decimal">
                  <li>
                    Information Technology Act, 2000 and rules made there under.
                  </li>
                  <li>
                    Consumer Protection (E-Commerce) Rules 2020, as amended from
                    time to time.
                  </li>
                </ol>
                <p>
                  a) The Grievance Officer of OfferBeez shall endeavour to
                  acknowledge the User grievances, complaints, or concerns
                  within 48 hours of receipt and redress the same at the
                  earliest and in no event later than 30 (thirty) days. By
                  lodging a complaint or grievance, You agree to provide
                  complete support to the Grievance Officer and such reasonable
                  information as may be sought from Business user.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Notice of Infringement and Take Down Policy:
              </h3>
              <div className="ml-4 space-y-2">
                <p>
                  a) OfferBeez’s Take Down Policy enables intellectual property
                  owners to quickly report and remove infringing listings from
                  the Platform.
                </p>
                <p>
                  b) Intellectual property owners can report potentially
                  infringing Offers listings by submitting a Notice of
                  Infringement containing all the details as mentioned below.
                  OfferBeez cannot independently verify that Business user have
                  the rights to sell or distribute their Products Offers but is
                  fully committed to protecting intellectual property rights.
                </p>
                <p>c) Steps to report a listing:</p>
                <div className="ml-4 space-y-1">
                  <p>
                    • If You have a sincere belief that a Business user on Our
                    Platform is infringing Your intellectual property rights,
                    please follow the steps below. We request You to provide the
                    following information and email it to{" "}
                    <a
                      href="mailto:legal@OfferBeez.in"
                      className="text-blue-600 underline"
                    >
                      legal@OfferBeez.in
                    </a>
                    :
                  </p>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Identification or description of the copyrighted
                      work/trademark that has been infringed, along with
                      registration/application details and images.
                    </li>
                    <li>Business user contact information.</li>
                    <li>
                      An undertaking from You that:
                      <ul className="ml-6 list-disc space-y-1">
                        <li>
                          You have a good faith belief that the use of the
                          material complained of is not authorized by the
                          trademark or copyright or intellectual property owner,
                          its agent, or the law.
                        </li>
                        <li>
                          The information in the notice is accurate and that You
                          are the trademark or copyright or intellectual
                          property owner or authorized to act on their behalf.
                        </li>
                        <li>
                          Such other information that You think is important for
                          supporting Your claim.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                OfferBeez’s Actions:
              </h3>
              <div className="ml-4 space-y-2">
                <p>
                  Upon receiving a duly completed notice with the necessary
                  documentation as described above, and after confirming the
                  authenticity of the claim, OfferBeez may take steps to remove
                  or disable access to the alleged infringing content provided
                  by third parties.
                </p>
                <p>
                  OfferBeez may also inform the respective Seller who submitted
                  the content in question, providing them with a copy of the
                  infringement notice.
                </p>
                <p>
                  We reserve the right to undertake any further actions as
                  permitted by the applicable laws in effect at the time of
                  notification.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Communications:</h3>
              <div className="ml-4 space-y-2">
                <p>
                  a) You hereby expressly agree to receive communications by way
                  of SMS, telephone or VOIP calls, messaging app like WhatsApp
                  on the registered mobile phone number / electronic
                  communications like e-mails from OfferBeez and other third
                  parties duly authorised by OfferBeez. You hereby expressly
                  consent to the monitoring and recording, by OfferBeez and/or
                  any third party of any and all communications between Business
                  user and OfferBeez or its agents, employees, consultants,
                  contractors, or representatives of OfferBeez or of their
                  authorised partners, and such monitoring or recording waives
                  any further notice or consent requirement under the applicable
                  laws.
                </p>
                <p>
                  b) Business user can unsubscribe or opt-out from receiving
                  promotional communications from OfferBeez. In which case,
                  OfferBeez will only send communications solely required for
                  the purposes of availing the Offers by You.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                General Provisions:
              </h3>
              <div className="ml-4 space-y-2">
                <p>
                  a) <strong>Notice:</strong> All notices from OfferBeez will be
                  served by email to Your registered email address or by
                  messaging app on the registered mobile phone number or by
                  general notification on the Platform.
                </p>
                <p>
                  b) <strong>Assignment:</strong> Business user cannot assign or
                  otherwise transfer any rights granted hereunder to any third
                  party. OfferBeez’s rights and obligations under the Terms are
                  freely transferable by OfferBeez to its successor or to its
                  affiliates or any third party without the requirement of
                  seeking Your consent.
                </p>
                <p>
                  c) <strong>Severability:</strong> If, for any reason, any
                  provision of the Terms, or any portion thereof, is found to be
                  unenforceable, that provision shall be enforced to the maximum
                  extent permissible so as to give effect to the intent of the
                  parties as reflected by that provision, and the remainder of
                  the Terms shall continue in full force and effect.
                </p>
                <p>
                  d) <strong>Force Majeure:</strong> OfferBeez, its Business
                  user, and its service providers shall not be liable to You for
                  failure to perform or for delay in providing You access to
                  Your Account or to the Platform or any Offers thereof, to the
                  extent such failure or delay results from causes beyond its
                  reasonable control, including, without limitation, acts of
                  God, fires, explosions, wars or other hostilities,
                  insurrections, revolutions, strikes, labour unrest,
                  earthquakes, floods, riots, excessive rains, pandemic,
                  epidemics or regulatory or quarantine restrictions,
                  unforeseeable governmental restrictions or controls, or a
                  failure by a third party hosting provider or internet service
                  provider, or on account of any change or defect in the
                  software and/or hardware of Your computer system.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Advertisements:</h3>
              <div className="ml-4 space-y-2">
                <p>
                  a) As part of the Offers provided by OfferBeez, We may
                  facilitate and allow third party advertisers (“Third Party
                  Advertisers”) to place advertisements on the Platform. You
                  understand that any content put out by Third Party Advertisers
                  is not edited, reviewed or otherwise endorsed by OfferBeez and
                  We disclaim to the fullest extent permitted by law any
                  liability for the content published by the Third Party
                  Advertisers. It is solely the responsibility of the Third
                  Party Advertisers submitting material to the Platform to
                  ensure compliance with all relevant laws. Any interactions or
                  transactions You undertake with Third Party Advertisers found
                  on the Platform including related to their goods or Offers are
                  strictly between Business user and the Third Party Advertiser.
                  OfferBeez bears no liability for errors, omissions, or
                  inaccuracies in advertising content or for any losses or
                  damages arising from Your dealings with these advertisers or
                  their presence on the Platform.
                </p>
                <p>
                  b) To the extent You are a Third Party Advertiser, You
                  understand that in addition to these Terms You will also be
                  required to agree to OfferBeez’s policies and other
                  contractual agreements that You will need to execute for
                  placing Your advertisement. As a general principle, the
                  content in the advertisements should not be misleading or in
                  violation of applicable law or guidelines issued by the
                  Advertising Standards Council of India or any other
                  self-regulating body. You also acknowledge that We have the
                  sole right at Our discretion to remove any Third Party
                  Advertisement or require You to prove factual substantiation
                  if We are of the view that it is in violation of applicable
                  law or any self-regulating industry body guidelines or is
                  otherwise misleading.
                </p>
                <p>
                  c) If You are of the view that the content of a Third Party
                  Advertiser is inappropriate or in violation of applicable law,
                  please write to OfferBeez at the email address provided above.
                </p>
                <p>
                  d) For any charitable campaign information shared with Users
                  or displayed on the Platform, where donations may be made
                  through third-party sites or accounts, OfferBeez may not be
                  involved in fund collection or use. OfferBeez bears no
                  responsibility for the accuracy or legality of campaign
                  information, which is provided solely for reference. Users are
                  encouraged to verify details independently before taking
                  action.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Severability:</h3>
              <div className="ml-4 mb-4">
                <p>
                  If any part of these Terms is found to be invalid, void, or
                  unenforceable, that portion will be treated as separable, and
                  the remaining provisions will continue in full force and
                  effect.
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Amendments:</h3>
              <div className="ml-4 mb-4">
                <p>
                  We may modify these Terms periodically, without prior notice,
                  to include updates, revisions, additions, or new policies
                  affecting Your use of the Offers. Such changes will be posted
                  on the Platform and take effect immediately upon posting. We
                  encourage You to review these Terms on the Platform regularly
                  for any updates. By continuing to use the Offers and/or the
                  Platform, You agree to accept any revised Terms.
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Transition:</h3>
              <div className="ml-4 mb-4 space-y-1">
                <p>
                  · THE PLATFORM IS UNDERGOING A TRANSITION WHERE THE PLATFORM
                  WILL BE OPERATED BY VENTUREBIZ PROMOTIONS PRIVATE LIMITED FROM
                  THE DATE WHICH SHALL BE COMMUNICATED TO YOU. PURSUANT TO THE
                  TRANSITION THE EXISTING USER OF OFFERBEEZ OFFERS HEREBY
                  CONSENT TO THE FOLLOWING:
                </p>
                <p>
                  · FOR THE TRANSFER OF YOUR PAYMENT RELATED INFORMATION AND
                  INSTRUMENTS AS AVAILABLE WITH THE SERVICE PROVIDER OF
                  OFFERBEEZ TO ENSURE SEAMLESS EXPERIENCE FOR USERS POST
                  TRANSITION.
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Entire Agreement:</h3>
              <div className="ml-4 mb-4">
                <p>
                  This document, including the Privacy Notice and any policies
                  that OfferBeez may introduce from time to time, represents the
                  entire understanding between You and OfferBeez. It establishes
                  the Terms for Your access to and use of the Offers and
                  Platform superseding any earlier arrangements related to such
                  access or use.
                </p>
                <p>
                  © 2025 Venturebiz promotions Private Limited, All rights
                  reserved.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Entire Agreement:</h3>
              <div className="ml-4 mb-4">
                <p>
                  This document, including the Privacy Notice and any policies
                  that OfferBeez may introduce from time to time, represents the
                  entire understanding between You and OfferBeez. It establishes
                  the Terms for Your access to and use of the Offers and
                  Platform superseding any earlier arrangements related to such
                  access or use.
                </p>
                <p>
                  © 2025 Venturebiz Promotions Private Limited, All rights
                  reserved.
                </p>
              </div>

              <h3 >
                Service Agreement for Onboarding the Business
              </h3>
              <div className="ml-4 mb-4">
                <p>
                  <strong>OffreBezz Partner - TOS</strong>
                </p>
                <p>
                  <strong>Important: please read carefully</strong>
                </p>

                <p>This is an agreement between:</p>
                <p>
                  <strong>Venturebiz Promotions Private Limited</strong>{" "}
                  (“company” / “OfferBeez”), referred to as company henceforth
                  having its registered office at #2085/16, 2nd Floor, Spoorthi,
                  Puttenahalli Main Road, JP Nagar 7th Phase, Bangalore- 560078
                  and is the owner of the brand, product, and platform called
                  'OfferBeez', engaged in the business of online/digital
                  promotions of businesses.
                </p>

                <p>And</p>

                <p>
                  The partner (“yourself”) is referred to as “partner”
                  henceforth.
                </p>

                <p>
                  <strong>Note:</strong> This is not an employment offer. You
                  are neither an employee of OfferBeez (Venturebiz Promotions
                  Pvt Ltd) nor its related businesses.
                </p>

                <h4 className="font-semibold mt-2 mb-1">
                  About Venturebiz Promotions’ OfferBeez platform:
                </h4>
                <p>
                  The OfferBeez platform provides an online digital
                  advertisement platform to promote businesses. The primary
                  objective is to connect local offers to the public in the
                  local area. OfferBeez allows individual businesses to get
                  registered on the platform and then publish their
                  advertisement, through direct or partner routes.
                </p>

                <p>
                  The partner refers to any Indian individual above the age of
                  18 who is interested in onboarding and listing a business –
                  which may include shops, retail stores, services by
                  individuals, or any other business enterprise – for
                  subscribing to the platform.
                </p>

                <p>
                  The partner will go door-to-door to businesses and explain the
                  product and platform, how it works, and try to onboard/list
                  the business on the platform for subscribing.
                </p>

                <p>
                  The company engagement is purely contractual and works on a
                  commission model, which is strictly a dynamic commission model
                  payable per advertisement or per listing, with rates fixed by
                  the company. The commissions are dynamic, can change
                  frequently, and will be published on the OfferBeez platform
                  and communicated to the partners.
                </p>

                <h4 className="font-semibold mt-2 mb-1">Platform Includes:</h4>
                <ul className="ml-6 list-disc space-y-1">
                  <li>
                    The mobile application called OfferBeez for the consumer,
                    where the general public will register and see the offers in
                    their local areas.
                  </li>
                  <li>
                    Partner application – a mobile application through which the
                    partner will register themselves using KYC documents and a
                    verified mobile number.
                  </li>
                  <li>
                    Business application which the shops will use to publish
                    their ads.
                  </li>
                </ul>
              </div>
            </div>

            <div className="terms-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">General Terms</h3>

              <h4 className="font-semibold mt-2 mb-1">
                1. Services of the Partner include:
              </h4>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Contact businesses and list them on the platform by getting
                  verified details for subscribing to the OfferBeez ad
                  publishing platform.
                </li>
                <li>
                  Manage the business by registering them, submitting KYC
                  documents, signing them for a subscription, and earn one-time
                  commissions through subscription revenue.
                </li>
                <li>
                  Register, update, and ensure businesses are able to subscribe
                  to a plan.
                </li>
                <li>
                  Help businesses create offers during initial onboarding until
                  they are comfortable posting ads directly.
                </li>
                <li>
                  Restrict business onboarding to the geographies
                  assigned/allocated to you.
                </li>
                <li>
                  Create, manage, and approve offers on the platform for
                  businesses you have onboarded.
                </li>
              </ul>

              <h4 className="font-semibold mt-2 mb-1">
                2. Important Service Level Agreement:
              </h4>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Minimum eligibility: over 18 years old and completion of KYC
                  (verified mobile, PAN, Aadhaar).
                </li>
                <li>
                  Services to be provided as an individual, not as a company,
                  franchisee, or other entity.
                </li>
                <li>
                  Perform services according to the law and the dos and don’ts
                  listed in Annexure 1.
                </li>
                <li>
                  Operate strictly according to the usage documents and
                  guidelines for onboarding and subscription.
                </li>
                <li>
                  Arrange necessary equipment and tools at your own expense
                  unless provided by OfferBeez.
                </li>
                <li>
                  Responsible for performing services as per instructions.
                </li>
                <li>
                  Receive commissions for onboarding and subscription online
                  post-tax deductions.
                </li>
                <li>
                  Commissions details provided and payments made weekly or
                  monthly.
                </li>
                <li>
                  Commissions applicable while associated with the platform and
                  active in business revenue generation.
                </li>
                <li>
                  Commissions may cease if subscriptions end or due to
                  inactivity or other factors decided by the platform.
                </li>
                <li>
                  Commissions are calculated based on business types and
                  communicated periodically.
                </li>
                <li>
                  You may end the partner agreement at your choice; commissions
                  will close immediately.
                </li>
                <li>No cash payments to be received from any business.</li>
                <li>
                  Only use OfferBeez-provided channels/accounts for subscription
                  fee collection.
                </li>
                <li>
                  Violation of rules or misrouting funds is a serious offense
                  under Indian law and may lead to legal action.
                </li>
                <li>
                  Branded merchandise provided must be maintained; replacement
                  costs may be charged if damaged.
                </li>
                <li>
                  You are solely responsible for claims or damages arising from
                  services provided as an independent service provider.
                </li>
              </ul>

              <h4 className="font-semibold mt-2 mb-1">
                3. Procedure for Onboarding as Partner:
              </h4>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Complete the verification process and meet representatives for
                  background verification.
                </li>
                <li>
                  Provide KYC documents including PAN, email ID, identity proof,
                  address proof, and bank account details.
                </li>
              </ul>

              <h4 className="font-semibold mt-2 mb-1">
                4. Reasons for Temporary or Permanent Suspension:
              </h4>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  If suspected of breaching applicable law or the company dos
                  and don’ts.
                </li>
              </ul>

              <h4 className="font-semibold mt-2 mb-1">
                5. Ending the Agreement:
              </h4>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Both parties may end the agreement at will with notification.
                </li>
                <li>
                  Immediate termination if in breach, non-compliant, or involved
                  in unethical practices.
                </li>
                <li>
                  Failure to notify is considered abandonment; account may be
                  suspended and receivables deducted.
                </li>
                <li>
                  OfferBeez reserves the right to recover outstanding amounts if
                  necessary.
                </li>
              </ul>

              <h4 className="font-semibold mt-2 mb-1">
                6. Consequences of Ending the Agreement:
              </h4>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Stop all services under the agreement except pending accepted
                  tasks.
                </li>
                <li>
                  Return all items provided, including documents and settlement
                  materials.
                </li>
                <li>Delete the partner app from mobile devices.</li>
                <li>Sign a settlement letter confirming no dues.</li>
                <li>
                  Receive payments for services provided till the end of the
                  agreement, minus applicable taxes or deductions, within 30
                  days.
                </li>
                <li>
                  Certain rights and obligations continue even after
                  termination.
                </li>
              </ul>

              <h4 className="font-semibold mt-2 mb-1">
                7. Responsibility for Damages Caused by Partner:
              </h4>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Pay losses, claims, or costs (including legal fees) caused by
                  breach, deficiency, or fraudulent acts.
                </li>
                <li>
                  Maximum liability linked to customer payments; criminal
                  charges override this limit.
                </li>
                <li>
                  Not responsible for OfferBeez’s loss of business or profits.
                </li>
              </ul>

              <h4 className="font-semibold mt-2 mb-1">
                8. OfferBeez’s Responsibility to Partner:
              </h4>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Pay losses, claims, or costs (including legal fees) if
                  OfferBeez breaches terms or laws.
                </li>
                <li>
                  Not responsible for loss of business/profits or inability to
                  use the partner app due to external reasons.
                </li>
              </ul>

              <h4 className="font-semibold mt-2 mb-1">
                9. Use of Information Provided by Partner:
              </h4>
              <p className="ml-6 mb-2">
                Information collected from the partner may be stored, processed,
                accessed, and used for business needs, background checks,
                verification, marketing, analytics, service, development,
                research, and other purposes in accordance with applicable laws.
                Consent is given for collection and use, and information may
                also be provided to third parties, governmental, or judicial
                bodies.
              </p>

              <h4 className="font-semibold mt-2 mb-1">
                10. Use of Information Provided by OfferBeez:
              </h4>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Collect information only to provide services under the
                  agreement.
                </li>
                <li>
                  Provide information to third parties, governmental, or
                  judicial bodies only with express written consent from
                  OfferBeez.
                </li>
              </ul>

              <h4 className="font-semibold mt-2 mb-1">
                11. Dispute Resolution:
              </h4>
              <p className="ml-6">
                If disagreements arise, parties will try to resolve via mutual
                discussion. If unresolved, either party may approach the courts
                of Karnataka.
              </p>
            </div>

            <div className="annexure-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Annexure 1: Do’s and Don’ts
              </h3>

              <p className="mb-2 font-medium">You must:</p>
              <ul className="ml-6 list-decimal space-y-1">
                <li>1. Perform services with reasonable care and skill.</li>
                <li>
                  2. Carry identity documents and partner identification ID
                  provided by the company.
                </li>
                <li>
                  3. Use the partner app to perform and track your services.
                </li>
                <li>
                  4. Attend training sessions or meetings conducted by the
                  company.
                </li>
                <li>
                  5. Do not use any customer information, like location,
                  address, or contact details, for any reason other than
                  fulfilling services under this agreement.
                </li>
                <li>
                  6. Maintain and bear the cost of running a smartphone unless
                  otherwise agreed in writing.
                </li>
                <li>
                  7. Use public transport, walk, or your personal vehicle at
                  your discretion.
                </li>
                <li>
                  8. The company does not provide travel or fuel costs for
                  partner activities.
                </li>
                <li>
                  9. It is advised to walk in the local area; use of private
                  vehicles is at partner’s discretion, and company bears no
                  travel/fuel cost.
                </li>
                <li>
                  10. Follow all traffic rules, including wearing a helmet and
                  obeying speed limits.
                </li>
                <li>
                  11. The company does not provide insurance; all activities are
                  at partner’s discretion.
                </li>
                <li>
                  12. Wear offered t-shirt/jacket and carry field bags bearing
                  the company logo during services; maintain hygiene standards.
                </li>
                <li>
                  13. Ensure proper training before onboarding businesses.
                </li>
                <li>
                  14. Behave and communicate professionally with businesses;
                  report any confrontations to customer care.
                </li>
                <li>
                  15. Behave respectfully with customers and company personnel;
                  complaints may result in termination.
                </li>
                <li>
                  16. Do not enter any premises without prior approval from the
                  business unit.
                </li>
                <li>17.Strictly avoid entering residential houses.</li>
                <li>18. Do not mix offers or information across businesses.</li>
                <li>
                  19. Do not provoke, incite, or engage in any act disrupting
                  operations at any premises.
                </li>
                <li>
                  20. Do not consume alcohol, chew tobacco, or take
                  intoxicating/banned substances before or during services.
                </li>
                <li>
                  21. Do not misuse items provided by the company, including
                  t-shirts, jackets, and ID cards.
                </li>
                <li>
                  22. Do not use the company name, logo, “Venturebiz,”
                  “OfferBeez,” or brand for any purpose other than official
                  partner services.
                </li>
                <li>
                  23. Do not store, disclose, or sell business information
                  obtained through the partner app.
                </li>
                <li>
                  24. Do not make statements about the company, clients, or
                  customers without permission.
                </li>
                <li>
                  25. Do not allow anyone else to use your registered mobile
                  number or operate the partner app on your behalf.
                </li>
                <li>
                  26. The company may take appropriate action, including
                  termination, for violating these rules.
                </li>
              </ul>
            </div>

            <div className="annexure-section">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                Annexure 2: Collection, Payouts, and Deductions
              </h3>

              <p className="mb-1 font-medium">Collection-related:</p>
              <ul className="ml-6 list-decimal space-y-1">
                <li>
                  1. No cash is involved in the onboarding process for
                  businesses by the partner.
                </li>
                <li>
                  2. Strictly use the online methods provided for collecting
                  payments from businesses.
                </li>
                <li>
                  3. Businesses will use the online payment method on their
                  registered OfferBeez business app only; do not use your
                  partner app for receiving payments.
                </li>
                <li>
                  4. Online payment methods strictly include options given by
                  the company within the OfferBeez business app.
                </li>
                <li>
                  5. Do not accept postdated cheques, demand drafts, or other
                  instruments.
                </li>
                <li>
                  6. Do not collect any additional payments other than the one
                  indicated by the company for the business and offer
                  subscription.
                </li>
              </ul>

              <p className="mt-4 mb-1 font-medium">Payout-related:</p>
              <ul className="ml-6 list-decimal space-y-1">
                <li>
                  1. Payouts related to commissions shall be communicated to you
                  from time to time.
                </li>
                <li>
                  2. All payments will be made to the personal account provided
                  by you only.
                </li>
                <li>
                  3. Payouts are strictly as per the company's commission
                  policy, which is dynamic and may change frequently.
                </li>
                <li>
                  4. Partial or full loss of commissions may occur if businesses
                  and offers are not approved.
                </li>
              </ul>

              <p className="mt-4 mb-1 font-medium">Deductions and Penalties:</p>
              <ul className="ml-6 list-decimal space-y-1">
                <li>
                  1. If there is any discrepancy in the amount communicated,
                  collected, and received by the company for the business or
                  offer subscription, you will be responsible and liable and may
                  have to justify the difference.
                </li>
                <li>
                  2. The company reserves the right to terminate your partner
                  agreement if discrepancies in handling collections are found.
                </li>
              </ul>
            </div>

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

      {/* Footer */}
      <footer className="w-full bg-[#3345B0] text-white py-6 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>© 2025 OfferBeez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
