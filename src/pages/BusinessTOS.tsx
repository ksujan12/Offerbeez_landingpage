import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const BusinessTOS: React.FC = () => {
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
              Business Terms of Service
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-3 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
              These terms govern your use of OfferBeez services as a business
              partner. Please read them carefully.
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
          {/* Intro */}
          <h2 className="font-bold ">OfferBezz Business TOS:</h2>
          <p className="mb-5">
            This document is an electronic record and published in accordance
            with the provisions of the Information Technology Act, 2000, and the
            rules thereunder and the Information Technology (Intermediary
            Guidelines and Digital Media Ethics Code) Rules, 2021, and generated
            by a computer system and does not require any physical or digital
            signatures.
          </p>

          {/* Section 1 */}
          <div className="text-[#1a1a1a]">
            {/* ---------- 1. Terms of Use ---------- */}
            {/* ---------- 1. Terms of Use ---------- */}
            <h2 className="font-bold mt-6 mb-4">1. Terms of Use:</h2>

            <p className="mb-4">
              a) The websites OfferBeez – One Platform. Endless Promotions. |
              Launching Soon and Venturebiz (“Website”) and the mobile
              application ‘OfferBeez’ (App) (the Website and App are
              collectively referred to as the “Platform”) are owned, operated,
              and managed by Venturebiz Promotions Private Limited, a company
              incorporated in accordance with the provisions of the Indian
              Companies Act, 2013, having its registered office situated at
              #2085/16, 2nd Floor, Spoorthi, Puttenahalli Main Road, JP Nagar
              7th Phase, Bangalore-560078.
            </p>

            <p className="mb-4">
              b) These terms of use (“Terms”) govern your use of the Platform,
              and for the purpose of these Terms, Venturebiz Promotions Private
              Limited, including its subsidiaries, its holding company, and its
              affiliates, may, wherever the context so requires, be also
              referred to as “OfferBeez”. “OfferBeez” and the term “Business
              User” refer to a user of the Platform. We value the trust you have
              placed in OfferBeez, and hence, we maintain reasonable security
              standards for securing the transactions and your information.
            </p>

            <p className="mb-4">
              c) Please read these Terms carefully before you use the Platform.
              If you do not agree to these Terms, you may not use the Offers on
              the Platform, and we request you uninstall the App and not access
              the Platform. By merely using/accessing the Platform, you shall be
              contracting with OfferBeez, and you signify your acceptance of
              these Terms and other OfferBeez policies (including but not
              limited to the cancellation & refund terms and published privacy
              policy (‘Privacy Notice’)) as posted on the Platform and amended
              from time to time, which take effect on the date on which the
              Business User uses the Platform and thereby creates a legally
              binding agreement to abide by the same. Further, by furnishing
              your personal information, Business Users consent to OfferBeez
              accessing your personal information for the purpose of enabling
              transactions. You also agree that Business Users are interested in
              availing the offers through the Platform in accordance with these
              Terms.
            </p>

            <p className="mb-4">
              d) OfferBeez retains an unconditional right to modify or amend
              these Terms. You can determine when these Terms were last modified
              by referring to the ‘Last Updated’ legend above. You can access
              the latest version of these Terms at any given time on the
              Platform. You should regularly review the Terms on the Platform.
              OfferBeez reserves the right to amend, suspend, discontinue, or
              add any or all offers without prior notice and can add or remove
              relevant terms and conditions, if necessary. Any updating of the
              Terms as a consequence of change in legal and regulatory
              compliances shall be made in compliance therewith. Your continued
              use of and access to the Platform shall be your consent to any
              changes made by OfferBeez in these Terms. In the event the
              modified Terms are not acceptable to the Business User, you should
              discontinue accessing the Platform.
            </p>

            {/* ---------- 2. Access to Offers ---------- */}
            <h2 className="font-bold mt-6 mb-4">2. Access to Offers:</h2>

            <p className="mb-4">
              a) OfferBeez enables transactions on the Platform between
              participating Business Users and end users. Business Users can
              view the products and offers offered for sale by these sellers in
              select serviceable areas across India. OfferBeez is not and cannot
              be a party to or control in any manner any transaction between the
              Platform's end users and Business Users.
            </p>

            <p className="mb-4">
              b) Business Users acknowledge that the Platform allows you to
              avail a personal, limited, non-exclusive, non-transferable, and
              revocable privilege to access and use the Platform for the
              purposes of offering consumer goods such as groceries, apparel,
              electronics, health and wellness, café products including prepared
              foods and beverages, pet care, etc., from the Business User sold
              on a business-to-consumer (B2C) basis. The registered businesses
              may be required to furnish additional details of their business,
              including, without limitation, business name, GSTIN,
              licences/registrations issued by government authorities and/or any
              other information that may be required by OfferBeez. The Business
              User shall be responsible for the accuracy of the GSTIN and legal
              entity name. OfferBeez disclaims any liabilities arising out of
              incorrect details.
            </p>

            <p className="mb-4">
              c) The Business User may, at their discretion, add, modify, and
              remove any of the product offers listed above from time to time
              without notice. The Business User and OfferBeez may also make
              applicable, at their discretion, additional terms and conditions
              specific to any category and section of product offers in addition
              to these Terms, and your purchase of any such category and section
              of product offers shall also be governed by such additional terms
              and conditions. OfferBeez reserves the right to provide the offers
              within a 3 km radius from the Business User's store location
              across India, as may be determined by OfferBeez in its sole
              discretion. Before applying for availing any of the offers, we
              request you to please check if they are available in your area or
              within a 3 km radius from the Business User's store location.
            </p>

            <p className="mb-4">
              d) OfferBeez does not:
              <br />
              • Adopt any ‘unfair trade practices’ either on the Platform or
              otherwise with respect to its Offers.
              <br />
              • Discriminate between users of the same class or make any
              arbitrary classification of the users.
              <br />• Discriminate between third-party delivery service
              providers.
            </p>

            <p className="mb-4">
              e) OfferBeez functions solely as an online marketplace and acts as
              a facilitator enabling transactions between end users and Business
              Users on the Platform. At no point does OfferBeez take possession
              of any offers made by Business Users, nor does it hold any rights,
              title, or interest in those offers. OfferBeez is not liable for
              any obligations related to non-performance or breach of contracts
              between End Users and Business Users. OfferBeez is neither
              responsible for poor or delayed offers or service performance nor
              for issues arising from offers that are out of stock or
              unavailable.
            </p>

            {/* ---------- 4. Eligibility to Use ---------- */}
            <h2 className="font-bold mt-6 mb-4">4. Eligibility to Use:</h2>

            <p className="mb-4">
              a) The offers are not available to minors, i.e., persons under the
              age of 18 (eighteen) years, undischarged insolvents, or any
              Business Users who are not competent to enter into a contract
              under the Indian Contract Act, 1872, unless otherwise provided
              hereunder, or to anyone previously suspended or removed by
              OfferBeez from availing the offers or accessing the Platform.
            </p>

            <p className="mb-4">
              You hereby represent that you are:
              <br />
              • Of legal age to form a binding contract
              <br />
              • Not a person barred from receiving the offers from the Platform
              under the applicable laws
              <br />
              • Competent to enter into a binding contract
              <br />• Have not been previously suspended or removed or
              disqualified for any reason from the Platform. If you are under
              the age of 18, you shall use and access the Platform only with the
              express consent of a parent or guardian and under their
              supervision.
            </p>

            <p className="mb-4">
              b) Business Users will not discriminate against third-party
              delivery service providers based on race, religion, caste, creed,
              national origin, disability, sexual orientation, sex, marital
              status, gender identity, age or any other metric which is deemed
              to be immoral and unlawful. Any credible proof of such
              discrimination, including any refusal to receive the above
              metrics, whether alone or in conjunction with any other metric,
              shall render you ineligible, leading to suspension of access to
              the Platform. You will not have any claim and will not have any
              liability towards any such suspension.
            </p>

            <p className="mb-4">
              c) The Business User shall not make negative, defamatory,
              misleading, deceptive, or libellous remarks about the Business
              User brand, including OfferBeez and its agnates and cognates, on
              the Platform or otherwise, or take any actions that could harm
              OfferBeez's reputation or dilute its trademarks. Additionally, You
              will not impose an excessive load on the Platform's infrastructure
              or our systems and networks.
            </p>

            {/* ---------- 4. User Account, Password and Security ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              4. User Account, Password and Security:
            </h2>

            <p className="mb-4">
              a) In order to access the offers of the Platform, you will have to
              register and create an account on the Platform by providing
              details as may be required (“Account”). When you use the Platform,
              OfferBeez may collect personal information such as your name,
              email, address, mobile number, and contact details and also
              documents pertaining to the same.
            </p>

            <p className="mb-4">
              b) Business Users are solely responsible for the information you
              provide to OfferBeez. You shall ensure and confirm that the
              Account information and all information provided by Business Users
              is complete, accurate, and up-to-date. If there is any change in
              the Account information, or if any information is found to be
              incomplete or incorrect, you shall promptly update your Account
              information on the Platform or request OfferBeez for information
              revision or update. If the information provided by you is untrue,
              inaccurate, unauthorised, not current, or incomplete (or becomes
              untrue, inaccurate, not current, or incomplete), OfferBeez
              reserves the right to refuse any and all the Offers, if OfferBeez
              has reasonable grounds to suspect that such information is untrue,
              inaccurate, not current, or incomplete. OfferBeez reserves the
              right to refuse access to the Platform at any time without notice.
            </p>

            <p className="mb-4">
              c) Confidentiality of the Account credentials shall be your
              responsibility. OfferBeez disclaims any liability for losses due
              to unauthorised access of your account.
            </p>

            {/* ---------- 5. Payment Related Information ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              5. Payment Related Information:
            </h2>

            <p className="mb-4">
              a) The information related to the accepted payment methods on the
              Platform shall be displayed during the registering process.
            </p>

            <p className="mb-4">
              To the extent permitted by applicable law and subject to the
              Privacy Notice, you acknowledge and agree that OfferBeez may use
              certain payment gateways to process payments and manage payment
              card information. Such parties are separate to OfferBeez, and you
              will be subject to their terms and conditions while making any
              payment for the Offers.
            </p>

            <p className="mb-4">
              b) Business Users undertake to provide valid details required for
              facilitating payment towards the transaction (“Payment Details”).
              By providing the Payment Details, Business Users represent,
              warrant, and covenant that:
              <br />
              • You are legally authorized to provide such Payment Details.
              <br />
              • You are legally authorized to make payments using such Payment
              Details.
              <br />• Such action does not violate the terms and conditions
              applicable to your use of such Payment Details or applicable law.
            </p>

            <p className="mb-4">
              c) Except to the extent otherwise required by applicable law,
              OfferBeez is not liable for any payments authorized through the
              Platform using your Payment Details. OfferBeez is not liable for
              any payments that do not complete a transaction due to reasons
              including but not limited to the following:
              <br />
              • Insufficient funds in your bank account;
              <br />
              • You have not provided correct Payment Details;
              <br />
              • Technical issues or interruptions in the Platform or payment
              processing systems;
              <br />
              • Violation of any terms or conditions governing the use of your
              Payment Details;
              <br />
              • Fraudulent activity or unauthorized use of your Payment Details;
              <br />
              • Your payment card has expired;
              <br />
              • Any other reason for declining of payment transaction; or
              <br />• Any other circumstances beyond OfferBeez’s reasonable
              control which prevent the execution of the transaction.
            </p>

            <p className="mb-4">
              OfferBeez shall not be responsible or obligated to refund any
              money to you for any unauthorised transactions conducted on the
              Platform using your Payment Details.
            </p>

            {/* ---------- 6. Price of Offers ---------- */}
            <h2 className="font-bold mt-6 mb-4">6. Price of Offers:</h2>

            <p className="mb-4">
              a) The prices for Offers listed by Businesses on the Platform are
              determined entirely by the Business Users themselves, and
              OfferBeez does not participate in or influence this pricing
              process in any manner. The prices of each of the Offers may vary
              due to various factors, and you may check the price on the
              Platform before purchasing the product. All the Products listed on
              the Platform will be sold in Indian Rupees, either at a discounted
              price or as otherwise specified. The prices of the Offers are an
              offer for sale by the Business User and may be modified by the
              Sellers from time to time without any prior notice. OfferBeez
              endeavours to display the Products and Offers at the most accurate
              prices possible on the Platform. There may be inadvertent errors
              with respect to the price and other information of the Products or
              Offers; you may bring such errors to our notice, and we shall make
              necessary corrections. However, Users will be informed about all
              the costs that may be levied on the purchase of the Offers on the
              Platform.
            </p>

            <p className="mb-4">
              b) The expression “Lowest Prices” pertains to the computation of
              average prices for all Products and Offers offered for sale by the
              Business Users on the Platform and is subject to availability of
              stocks. OfferBeez expressly disclaims any liability associated
              with the individual Offers sold on the Platform by the Business
              Users.
            </p>

            {/* ---------- 7. User Care ---------- */}
            <h2 className="font-bold mt-6 mb-4">7. User Care:</h2>

            <p className="mb-4">
              The User acknowledges and agrees that OfferBeez shall not be held
              liable for:
            </p>

            <p className="mb-4">
              a) The information about Products and the associated catalogue,
              including pricing, displayed on the Platform is provided by the
              Business User. OfferBeez cannot be held liable for any changes,
              correctness, errors, or omissions in the information, or
              unavailability of these Offers.
            </p>

            <p className="mb-4">
              b) OfferBeez is not and cannot be a party to any transaction
              between the End User and the Business User, nor does it have any
              control, involvement, or influence over the Products or Offers
              availed from such Business Users. Business Users acknowledge and
              agree that OfferBeez shall not, at any time, have any ownership,
              control, or title to any Product(s), which are subject to a
              bipartite sale and purchase transaction between the Business User
              and the relevant End User. OfferBeez does not provide any warranty
              or guarantee with respect to the Products and Offers offered for
              sale on the Platform and disclaims any liability with respect to
              manufacturing defects, quality, taste, or performance of the
              Products/Offers sold. All commercial and contractual arrangements
              regarding the Products and Offers offered for sale are solely
              between Users and Business Users.
            </p>

            <p className="mb-4">
              c) OfferBeez does not guarantee or endorse the specifics of any
              Business User, including aspects like legal ownership,
              creditworthiness, or identity. We recommend that you conduct your
              own due diligence to verify the legitimacy of any Seller you
              choose to engage with on the Platform and exercise your
              discretion. All offers from Business Users and third parties are
              governed by their respective terms and conditions, and OfferBeez
              assumes no responsibility for these offers.
            </p>

            <p className="mb-4">
              d) Business Users agree and understand that the Product images are
              representations of the Product and not the actual image of the
              Product sold. While every reasonable effort is made to maintain
              the accuracy of information on the Platform, actual Products may
              contain more and/or different information than what is shown on
              the Platform. It is recommended to refer to the information
              presented on the actual Product.
            </p>

            {/* ---------- 8. Beware of fraud ---------- */}
            <h2 className="font-bold mt-6 mb-4">8. Beware of fraud:</h2>

            <p className="mb-4">
              a) Please do not share your debit/credit card number, CVV number,
              OTP, UPI/ATM pin and other sensitive information with anyone
              claiming to be an OfferBeez representative. OfferBeez or its
              authorised representatives will NEVER ask you to share the
              aforesaid details. Beware of fraudsters and please report
              incidents immediately to your bank, the nearest police station and
              at https://cybercrime.gov.in/.
            </p>

            <p className="mb-4">
              b) Please exercise caution to verify the portals/website links
              claiming to be OfferBeez or a lookalike, or a payment link shared
              over social media or social messaging apps claiming to be
              OfferBeez discounts and offers, and proactive calls from
              unauthorised numbers or unauthorized social media accounts
              requesting personal/financial information.
            </p>

            {/* ---------- 9. Refund & Cancellation Policy – OfferBeez Subscription ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              9. Refund & Cancellation Policy – OfferBeez Subscription
            </h2>

            <p className="mb-4">
              1. Subscription Purchase
              <br />
              Once a user/business purchases any OfferBeez Subscription Plan,
              the service access is activated instantly, and features become
              available within the application.
            </p>

            <p className="mb-4">
              2. Cancellation Policy
              <br />
              All subscription purchases made on OfferBeez are final.
              <br />
              Users cannot cancel the subscription once the payment has been
              successfully processed.
            </p>

            <p className="mb-4">
              3. Refund Policy
              <br />
              OfferBeez follows a strict no-refund policy.
              <br />
              This means:
              <br />
              • No refund will be provided for subscription fees already paid.
              <br />
              • No refund will be issued if the subscription is used partially
              or not used at all.
              <br />• No refund will be provided due to change of mind,
              misunderstanding, or wrong purchase by the user.
            </p>

            <p className="mb-4">
              4. Auto-Expiration
              <br />
              The subscription will remain active until the end of the selected
              duration. After the subscription period ends, users may choose to
              cancel or renew or upgrade their plan.
            </p>

            <p className="mb-4">
              5. Disputes & Payment Issues
              <br />
              If any payment was unsuccessful, duplicate, or charged
              incorrectly, please contact our support team within 48 hours with
              payment proof.
              <br />
              Our team will assist in verifying the transaction.
            </p>

            <p className="mb-4">
              6. Contact Support
              <br />
              If you have any questions or clarifications, please reach out to
              our support team:
              <br />
              📧 Email: support@offerbeez.in
              <br />
              📞 Phone: +91 9008522366
              <br />
              🌐 Website: www.offerbeez.in
            </p>

            <p className="mb-4">
              Refund & Cancellation Policy
              <br />
              Once the subscription is purchased, no cancellation and no refund
              will be allowed for any reason. Please review the plan details
              carefully before making the payment.
            </p>

            {/* ---------- 10. Use of Platform ---------- */}
            <h2 className="font-bold mt-6 mb-4">10. Use of Platform:</h2>

            <p className="mb-4">
              a) Subject to compliance with the Terms, OfferBeez hereby grants
              you a personal, non-exclusive, non-transferable, limited,
              revocable privilege to access and use the Platform.
            </p>

            <p className="mb-4">
              You agree to use the Platform only:
              <br />
              • For purposes that are permitted by the Terms.
              <br />
              • In accordance with any applicable law, regulation or generally
              accepted practices or guidelines.
              <br />• For availing the Offers through the Platform. You agree
              not to engage in activities that may adversely affect the use of
              the Platform by OfferBeez and other Users.
            </p>

            <p className="mb-4">
              b) Business Users agree that the Platform and any portion of the
              Platform shall not be reproduced, duplicated, copied, sold, resold
              or otherwise exploited for commercial purposes.
            </p>

            <p className="mb-4">
              c) Business Users agree not to frame or utilise the framing
              techniques to enclose any trademark, logo or any other
              proprietorship information of the Platform.
            </p>

            <p className="mb-4">
              d) Business Users agree not to access (or attempt to access) the
              Platform by any means other than through the interface that is
              provided by OfferBeez. You shall not use any deep-link, robot,
              spider or other automatic device, program, algorithm or
              methodology, or any similar or equivalent manual process, to
              access, acquire, copy or monitor any portion of the Platform or
              Content, or in any way reproduce or circumvent the navigational
              structure or presentation of the Platform, materials or any
              Content, to obtain or attempt to obtain any materials, documents
              or information through any means not specifically made available
              through the Platform.
            </p>

            <p className="mb-4">
              e) Further, you undertake not to host, display, upload, modify,
              publish, transmit, store, update or share any information that
              belongs to another person and to which the User does not have any
              right.
            </p>

            <p className="mb-4">
              f) Is defamatory, obscene, pornographic, paedophilic, invasive of
              another's privacy, including bodily privacy, insulting, or
              harassing on the basis of gender, libellous, racially, or
              ethnically objectionable, relating or encouraging money laundering
              or gambling, or otherwise inconsistent with or contrary to the
              laws in force;
            </p>

            <p className="mb-4">g) Is harmful to child;</p>

            <p className="mb-4">
              h) Infringes any patent, trademark, copyright, or other
              proprietary rights;
            </p>

            <p className="mb-4">
              i) Violates any law for the time being in force;
            </p>

            <p className="mb-4">j) Impersonates another person;</p>

            <p className="mb-4">
              k) Threatens the unity, integrity, defence, security or
              sovereignty of India, friendly relations with foreign States, or
              public order, or causes incitement to the commission of any
              cognizable offence or prevents investigation of any offence or is
              insulting other nation;
            </p>

            <p className="mb-4">
              l) Contains software virus or any other computer code, file or
              program designed to interrupt, destroy, or limit the functionality
              of any computer resource;
            </p>

            <p className="mb-4">
              m) Is patently false and untrue, and is written or published in
              any form, with the intent to mislead or harass a person, entity,
              or agency for financial gain or to cause any injury to any person;
            </p>

            <p className="mb-4">
              n) Disrupt or interfere with the security of, or otherwise cause
              harm to, the Platform, systems resources, accounts, passwords,
              servers, or networks connected to or accessible through the
              Platform or any affiliated or linked sites;
            </p>

            <p className="mb-4">
              o) Violate the Terms contained herein or elsewhere; and
            </p>

            <p className="mb-4">
              p) Reverse engineer, modify, copy, distribute, transmit, display,
              perform, reproduce, publish, license, create derivative works
              from, transfer, or sell any information or software obtained from
              the Platform.
            </p>

            <p className="mb-4">
              q) Business Users shall solely be responsible for maintaining the
              necessary computer equipment, gadgets and internet connections
              that may be required to access, use, and transact on the Platform.
            </p>

            <p className="mb-4">
              r) Business Users understand and acknowledge that by using the
              Platform or any of the Offers, you may encounter Content that may
              be deemed by some Users to be offensive, indecent, or
              objectionable, which Content may or may not be identified as such.
              You agree to use the Platform and any Offers at your sole risk and
              that to the fullest extent permitted under applicable law,
              OfferBeez shall have no liability to you for Content that may be
              deemed offensive, indecent, or objectionable to you.
            </p>

            {/* ---------- 11. Intellectual Property Rights ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              11. Intellectual Property Rights:
            </h2>

            <p className="mb-4">
              a) The Platform and the processes, and their selection and
              arrangement, including but not limited to, texts, videos,
              graphics, user interfaces, visual interfaces, sounds and music (if
              any), artwork and computer code (and any combinations thereof)
              (collectively, the “Content”) on the Platform is either owned by
              or licensed by OfferBeez, and the design, structure, selection,
              coordination, expression, look and feel, and arrangement of such
              Content is protected by copyright, patent, and trademark laws, and
              various other intellectual property rights.
            </p>

            <p className="mb-4">
              b) The trademarks, logos and service marks displayed on the
              Platform (“Marks”) are the licensed property of OfferBeez or owned
              by third parties. You are not permitted to use the Marks without
              the prior consent of OfferBeez or the relevant third party (which
              is the owner of the Marks) respectively. Access or use of the
              Platform does not authorise any party to use trademarks, logos, or
              any other marks in any manner.
            </p>

            <p className="mb-4">
              c) OfferBeez disclaims to hold any right, title, or interest in
              and to the intellectual property rights arising out of or
              associated with the Products or Offers by the Business on the
              Platform.
            </p>

            <p className="mb-4">
              d) References on the Platform of any name, mark, Offers or
              products of third parties have been provided for your convenience,
              and in no way constitute an endorsement, sponsorship, or
              recommendation, whether express or implied.
            </p>

            <p className="mb-4">
              e) Where the Platform contains links to other sites provided by
              third parties, these links are provided for information only. We
              have no visibility or control over the contents on or available
              through those sites, and you acknowledge and agree that we have no
              liability for any such content.
            </p>

            <p className="mb-4">
              f) OfferBeez word mark and its variances together with device
              marks displayed on the Platform shall be the licensed property of
              us, and any use, unless expressly permitted in writing, shall
              amount to infringement. You hereby agree and undertake that you
              recognise our intellectual property rights, and upon acquiring
              knowledge of any infringement by any third parties, you shall
              report it to us at <strong>legal@OfferBeez.com</strong>.
            </p>

            {/* ---------- 12. Disclaimer of Warranties & Liability ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              12. Disclaimer of Warranties & Liability:
            </h2>

            <p className="mb-4">
              Business Users expressly understand and agree that, to the maximum
              extent permitted by applicable law:
            </p>

            <p className="mb-4">
              a) The Platform and other Content are provided by OfferBeez on an
              “as is” basis without warranty of any kind, express, implied,
              statutory, or otherwise, including the implied warranties of
              title, non-infringement, merchantability, or fitness for a
              particular purpose. Without limiting the foregoing, OfferBeez
              makes no warranty that the Platform or Offers will meet your
              requirements, or that your use of the Platform will be
              uninterrupted, timely, secure, or error-free. No advice or
              information, whether oral or written, obtained by you from
              OfferBeez shall create any warranty not expressly stated in the
              Terms.
            </p>

            <p className="mb-4">
              b) OfferBeez will not be liable for any loss that you may incur as
              a consequence of unauthorized use of your Account or Account
              information in connection with the Platform, either with or
              without your knowledge.
            </p>

            <p className="mb-4">
              c) OfferBeez has endeavored to ensure that all the information on
              the Platform is accurate, but OfferBeez neither warrants nor makes
              any representations regarding the quality, accuracy, or
              completeness of any data or information regarding the Offers or
              otherwise. OfferBeez shall not be responsible for the delay or
              inability to use the Platform or related functionalities, the
              provision of or failure to provide functionalities, or for any
              information, software, functionalities, and related graphics
              obtained through the Platform, or otherwise arising out of the use
              of the Platform, whether based on contract, tort, negligence,
              strict liability, or otherwise. Further, OfferBeez shall not be
              held responsible for non-availability of the Platform during
              periodic maintenance operations or any unplanned suspension of
              access to the Platform that may occur due to technical reasons or
              for any reasons beyond OfferBeez’s reasonable control.
            </p>

            <p className="mb-4">
              d) Colours of the Products displayed on the Platform are as
              accurate as possible. However, the actual colours of the Products
              you see will depend on your monitor or device, and Business Users
              do not provide any guarantee in respect of such display and will
              not be responsible or liable for the same.
            </p>

            <p className="mb-4">
              e) OfferBeez makes no representation that the Content on the
              Platform is appropriate to be used or accessed outside the
              Republic of India. Any Users who use or access the Platform from
              outside the Republic of India do so at their own risk and are
              responsible for compliance with the laws of such jurisdiction, and
              also consent to OfferBeez for use of their personal and other
              information only for the purpose of provision of Offers. By
              visiting the Platform or providing your information, you expressly
              agree to be bound by these Terms and our Privacy Notice and also
              agree to be governed by the laws of India, including but not
              limited to the laws applicable to data protection and privacy. If
              you do not agree, please do not use or access our Platform.
            </p>

            <p className="mb-4">
              f) The Terms do not constitute, nor may the Terms be used for or
              in connection with any promotional activities or solicitation by
              anyone in any jurisdiction in which such promotional activities or
              solicitation are not authorized or to any person to whom it is
              unlawful to promote or solicit.
            </p>

            <p className="mb-4">
              g) Prices for any Product(s) displayed on the Platform may be
              inaccurate due to technical issues, typographical errors, or
              incorrect information provided by the Business User.
            </p>

            <p className="mb-4">
              h) OfferBeez accepts no responsibility for any breaches of
              applicable laws, including those governing the Products and Offers
              offered by Business Users.
            </p>

            <p className="mb-4">
              i) Business Users acknowledge that third-party Offers are
              available on the Platform, and we may partner with certain third
              parties to facilitate such Offers. However, you agree that we make
              no representations or warranties regarding these third-party
              Offers or products and will not be liable for any outcomes,
              including injury, impairment, or death, resulting from their use.
              You hereby waive any rights or claims you may have against us in
              relation to third-party Offers.
            </p>

            {/* ---------- 13. Indemnification and Limitation of Liability ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              13. Indemnification and Limitation of Liability:
            </h2>

            <p className="mb-4">
              a) Business Users agree to indemnify, defend and hold harmless
              OfferBeez, Sellers, service providers, its officers, directors,
              consultants, agents, representatives and employees; and its
              third-party partners (“Indemnitees”) from and against any and all
              losses, liabilities, claims, damages, demands, costs and expenses
              (including reasonable legal fees) asserted against or incurred by
              the Indemnitees that arise out of, result from, or may be payable
              by virtue of, any breach or non-performance of any representation,
              warranty, covenant or agreement made or obligation to be performed
              by you pursuant to these Terms and/or the Privacy Notice. Further,
              you agree to hold the Indemnitees harmless against any claims made
              by any third party due to, or arising out of, or in connection
              with, your use of the Platform, any misrepresentation with respect
              to the data or information provided by you, your violation of the
              Terms and/or the Privacy Notice, your violation of applicable
              laws, or your violation of any rights of third parties, including
              any intellectual property rights.
            </p>

            <p className="mb-4">
              b) In no event shall OfferBeez, its Business Users, its service
              providers and its directors, officers, partners, consultants,
              agents, and employees and its partners, be liable to you or any
              third party for any special, incidental, indirect, consequential,
              or punitive damages whatsoever, arising out of or in connection
              with your use of or access to the Platform or Content on the
              Platform. Notwithstanding any provisions herein, OfferBeez,
              Business Users, or service providers’ maximum total liability
              shall not exceed the amount paid by the User for the purchase of
              the Product Offers under the specific order to which the liability
              relates.
            </p>

            <p className="mb-4">
              c) The limitations and exclusions in this Section apply to the
              maximum extent permitted by applicable laws.
            </p>

            {/* ---------- 14. Violation of these Terms ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              14. Violation of these Terms:
            </h2>

            <p className="mb-4">
              a) Business Users agree that any violation by Business Users of
              these Terms will likely cause irreparable harm to OfferBeez, for
              which monetary damages would be inadequate, and you consent to
              OfferBeez obtaining any injunctive or equitable relief that they
              deem necessary or appropriate in such circumstances. These
              remedies are in addition to any other remedies that OfferBeez may
              have at law or in equity.
            </p>

            {/* ---------- 15. Suspension and Termination ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              15. Suspension and Termination:
            </h2>

            <p className="mb-4">
              a) The Terms will continue to apply until terminated by either
              Business Users or OfferBeez as set forth below. If you object to
              the Terms or are dissatisfied with the Platform,
            </p>

            <p className="mb-4">
              b) Business Users may:
              <br />
              • Close your Account on the Platform.
              <br />• Stop accessing the Platform.
            </p>

            <p className="mb-4">
              c) OfferBeez may disable your access or block your future access
              to the Platform or suspend or terminate your Account if it
              believes, in its sole and absolute discretion, that you have
              violated any term of these Terms or the Privacy Notice or in any
              way otherwise acted unethically. Notwithstanding anything
              contained herein, all terms which by their nature are intended to
              survive such termination, will survive indefinitely unless and
              until OfferBeez chooses to terminate them.
            </p>

            <p className="mb-4">
              d) Any such termination shall not cancel your obligation to pay
              for a Product or a service purchased on the Platform, or any other
              obligation which has accrued, or is unfulfilled and relates to the
              period prior to termination.
            </p>

            <p className="mb-4">
              e) Business Users shall be liable to pay any fees or charges, if
              applicable, in respect of the Offers until the date of termination
              by either party whatsoever.
            </p>

            {/* ---------- 16. Governing Law and Jurisdiction ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              16. Governing Law and Jurisdiction:
            </h2>

            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of India without reference to conflict of laws
              principles, and disputes arising in relation hereto shall be
              subject to the exclusive jurisdiction of courts at Bengaluru,
              India.
            </p>

            {/* ---------- 17. Grievance Redressal Mechanism ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              17. Grievance Redressal Mechanism:
            </h2>

            <p className="mb-4">
              a) For any Offers-related issue, you may first reach out to us via
              chat support on the App for real-time resolution.
            </p>

            <p className="mb-4">
              b) Business Users may also write to us at{" "}
              <strong>support@OfferBeez.in</strong> and we will strive to
              resolve your order-related issues within the timelines prescribed
              under applicable laws.
            </p>

            <p className="mb-4">
              c) If you still have any grievances, complaints, or concerns with
              respect to the Platform, order, Content, or the Offers, or are not
              satisfied with the resolution, you can contact the designated
              Grievance cum Nodal Officer of OfferBeez as per the below details:
            </p>

            <h4 className="mb-4">
              Mr. Arun
              <br />
              Designation: Associate Director
              <br />
              Venturebiz Promotions Private Limited
              <br />
              Address: #2085/16, 2nd Floor, Spoorthi, Puttenahalli Main Road, JP
              Nagar 7th Phase, Bangalore - 560078.
              <br />
              Phone: 900852236
              <br />
              Email: grievances@OfferBeez.in
              <br />
              Time: Mon – Sat (9:00 – 18:00)
            </h4>

            <p className="mb-4">
              The aforementioned details of the Grievance cum Nodal Officer are
              provided in compliance with:
              <br />
              (1) Information Technology Act, 2000 and rules made thereunder.
              <br />
              (2) Consumer Protection (E-Commerce) Rules, 2020, as amended from
              time to time.
            </p>

            <p className="mb-4">
              a) The Grievance Officer of OfferBeez shall endeavour to
              acknowledge the User grievances, complaints, or concerns with
              respect to the Platform, the Content, or the Offers within 48
              hours of receipt of the same and shall endeavour to redress the
              same at the earliest and in no event later than 30 (thirty) days
              of receipt of such request. By lodging a complaint or grievance,
              you agree to provide complete support to the Grievance Officer and
              such reasonable information as may be sought by them from Business
              Users.
            </p>

            {/* ---------- 18. Notice of Infringement and Take Down Policy ---------- */}
            <h2 className="font-bold mt-6 mb-4">
              18. Notice of Infringement and Take Down Policy:
            </h2>

            <p className="mb-4">
              a) OfferBeez’s Take Down Policy enables intellectual property
              owners to quickly report and remove infringing listings from the
              Platform.
            </p>

            <p className="mb-4">
              b) Intellectual property owners can report potentially infringing
              Offer listings by submitting a Notice of Infringement containing
              all the details as mentioned below. OfferBeez cannot independently
              verify that Business Users have the rights to sell or distribute
              their Product Offers but is fully committed to protecting
              intellectual property rights.
            </p>

            <p className="mb-4">
              c) Steps to report a listing:
              <br />• If you have a sincere belief that a Business User on our
              Platform is infringing your intellectual property rights, please
              follow the below steps. We request you to provide the following
              information and email it to <strong>legal@OfferBeez.in</strong>.
              <br />
              The email should include:
              <br />
              • Identification or description of the copyrighted work/trademark
              that has been infringed along with registration/application
              details and images.
              <br />
              • Business User contact information.
              <br />• An undertaking from you that:
            </p>

            <p className="mb-4">
              d) You have a good faith belief that the use of the material
              complained of is not authorized by the trademark, copyright, or
              intellectual property owner, its agent, or the law.
            </p>

            <p className="mb-4">
              e) The information in the notice is accurate and that you are the
              trademark or copyright or intellectual property owner, or
              authorized to act on the trademark, copyright, or intellectual
              property owner's behalf.
            </p>

            <p className="mb-4">
              f) Such other information that you think is important for
              supporting your claim.
            </p>

            <h3 className="font-semibold mt-6 mb-4">OfferBeez’s Actions:</h3>

            <p className="mb-4">
              Upon receiving a duly completed notice with the necessary
              documentation as described above, and after confirming the
              authenticity of the claim, OfferBeez may take steps to remove or
              disable access to the alleged infringing content provided by third
              parties. OfferBeez may also inform the respective Seller who
              submitted the content in question, providing them with a copy of
              the infringement notice. We reserve the right to undertake any
              further actions as permitted by the applicable laws in effect at
              the time of notification.
            </p>

            {/* ---------- 19. Communications ---------- */}
            <h2 className="font-bold mt-6 mb-4">19. Communications:</h2>

            <p className="mb-4">
              a) You hereby expressly agree to receive communications by way of
              SMS, telephone or VOIP calls, and messaging apps like WhatsApp on
              the registered mobile phone number, and electronic communications
              such as e-mails from OfferBeez and other third parties duly
              authorised by OfferBeez. You hereby expressly consent to the
              monitoring and recording, by OfferBeez and/or any third party, of
              any and all communications between Business Users and OfferBeez or
              its agents, employees, consultants, contractors, or
              representatives of OfferBeez or of their authorised partners. Such
              monitoring or recording waives any further notice or consent
              requirement under applicable laws.
            </p>

            <p className="mb-4">
              b) Business Users can unsubscribe or opt out from receiving
              promotional communications from OfferBeez. In such a case,
              OfferBeez will only send communications solely required for the
              purposes of availing the Offers by you.
            </p>

            {/* ---------- 20. General Provisions ---------- */}
            <h2 className="font-bold mt-6 mb-4">20. General Provisions:</h2>

            <p className="mb-4">
              a) <strong>Notice:</strong> All notices from OfferBeez will be
              served by email to your registered email address or by messaging
              app on the registered mobile phone number, or by general
              notification on the Platform.
            </p>

            <p className="mb-4">
              b) <strong>Assignment:</strong> Business Users cannot assign or
              otherwise transfer any rights granted hereunder to any third
              party. OfferBeez’s rights and obligations under the Terms are
              freely transferable by OfferBeez to its successor or to its
              affiliates or any third party without the requirement of seeking
              your consent.
            </p>

            <p className="mb-4">
              c) <strong>Severability:</strong> If, for any reason, any
              provision of the Terms, or any portion thereof, is found to be
              unenforceable, that provision shall be enforced to the maximum
              extent permissible so as to give effect to the intent of the
              parties as reflected by that provision, and the remainder of the
              Terms shall continue in full force and effect.
            </p>

            <p className="mb-4">
              d) <strong>Force Majeure:</strong> OfferBeez, its Business Users,
              and its service providers shall not be liable to you for its
              failure to perform or for delay in providing you access to your
              Account or to the Platform or any Offers thereof, to the extent
              such failure or delay results from causes beyond its reasonable
              control, including, without limitation, acts of God, fires,
              explosions, wars or other hostilities, insurrections, revolutions,
              strikes, labour unrest, earthquakes, floods, riots, excessive
              rains, pandemics, epidemics, or regulatory or quarantine
              restrictions, unforeseeable governmental restrictions or controls,
              or a failure by a third-party hosting provider or internet service
              provider, or on account of any change or defect in the software
              and/or hardware of your computer system.
            </p>

            {/* ---------- 21. Advertisements ---------- */}
            <h2 className="font-bold mt-6 mb-4">21. Advertisements:</h2>

            <p className="mb-4">
              a) As part of the Offers provided by OfferBeez, we may facilitate
              and allow third-party advertisers (“Third Party Advertisers”) to
              place advertisements on the Platform. You understand that any
              content put out by Third Party Advertisers is not edited,
              reviewed, or otherwise endorsed by OfferBeez, and we disclaim, to
              the fullest extent permitted by law, any liability for the content
              published by the Third Party Advertisers. It is solely the
              responsibility of the Third Party Advertisers submitting material
              to the Platform to ensure compliance with all relevant laws. Any
              interactions or transactions you undertake with Third Party
              Advertisers found on the Platform, including related to their
              goods or Offers, are strictly between Business Users and the Third
              Party Advertisers. OfferBeez bears no liability for errors,
              omissions, or inaccuracies in advertising content or for any
              losses or damages arising from your dealings with these
              advertisers or their presence on the Platform.
            </p>

            <p className="mb-4">
              b) To the extent you are a Third Party Advertiser, you understand
              that in addition to these Terms, you will also be required to
              agree to OfferBeez’s policies and other contractual agreements
              that you will need to execute for placing your advertisement. As a
              general principle, the content in the advertisements should not be
              misleading or in violation of applicable law or guidelines issued
              by the Advertising Standards Council of India or any other
              self-regulating body. You also acknowledge that we have the sole
              right, at our discretion, to remove any Third Party Advertisement
              or require you to prove factual substantiation if we are of the
              view that it is in violation of applicable law or any
              self-regulating industry body guidelines or is otherwise
              misleading.
            </p>

            <p className="mb-4">
              c) If you are of the view that the content of a Third Party
              Advertiser is inappropriate or in violation of applicable law,
              please write to OfferBeez at the email address provided above.
            </p>

            <p className="mb-4">
              d) For any charitable campaign information shared with Users or
              displayed on the Platform, where donations may be made through
              third-party sites or accounts, OfferBeez may not be involved in
              fund collection or use. OfferBeez bears no responsibility for the
              accuracy or legality of campaign information, which is provided
              solely for reference. Users are encouraged to verify details
              independently before taking action.
            </p>

            {/* ---------- 22. Severability ---------- */}
            <h2 className="font-bold mt-6 mb-4">22. Severability:</h2>

            <p className="mb-4">
              If any part of these Terms is found to be invalid, void, or
              unenforceable, that portion will be treated as separable, and the
              remaining provisions will continue in full force and effect.
            </p>

            {/* ---------- 23. Amendments ---------- */}
            <h2 className="font-bold mt-6 mb-4">23. Amendments:</h2>

            <p className="mb-4">
              We may modify these Terms periodically, without prior notice, to
              include updates, revisions, additions, or new policies affecting
              your use of the Offers. Such changes will be posted on the
              Platform and take effect immediately upon posting. We encourage
              you to review these Terms on the Platform regularly for any
              updates. By continuing to use the Offers and/or the Platform, you
              agree to accept any revised Terms.
            </p>

            {/* ---------- 24. Transition ---------- */}
            <h2 className="font-bold mt-6 mb-4">24. Transition:</h2>

            <p className="mb-4">
              • THE PLATFORM IS UNDERGOING A TRANSITION WHERE THE PLATFORM WILL
              BE OPERATED BY{" "}
              <a
                href="https://www.venturebiz.in"
                className="text-[#3345B0] hover:underline   text-[#3345B0] font-semibold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                VENTUREBIZ PROMOTIONSPRIVATE LIMITED
              </a>{" "}
              FROM THE DATE WHICH SHALL BE COMMUNICATED TO YOU. PURSUANT TO THE
              TRANSITION, THE EXISTING USERS OF OFFERBEEZ OFFERS HEREBY CONSENT
              TO THE FOLLOWING:
            </p>

            <p className="mb-4">
              • FOR THE TRANSFER OF YOUR PAYMENT RELATED INFORMATION AND
              INSTRUMENTS AS AVAILABLE WITH THE SERVICE PROVIDER OF OFFERBEEZ TO
              ENSURE SEAMLESS EXPERIENCE FOR USERS POST TRANSITION.
            </p>

            {/* ---------- 25. Entire Agreement ---------- */}
            <h2 className="font-bold mt-6 mb-4">25. Entire Agreement:</h2>

            <p className="mb-4">
              This document, including the Privacy Notice and any policies that
              OfferBeez may introduce from time to time, represents the entire
              understanding between You and OfferBeez. It establishes the Terms
              for Your access to and use of the Offers and Platform superseding
              any earlier arrangements related to such access or use.
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

export default BusinessTOS;
