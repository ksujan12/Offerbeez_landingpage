import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const PartnerTOS: React.FC = () => {
  const navigate = useNavigate();

 
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
              Partner Terms of Service
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-3 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
              These terms govern your partnership with OfferBeez. Please read
              them carefully.
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
          <p>Service agreement for onboarding the business</p>
          <p className="mb-4">
            OffreBezz Partner - TOS Important: please read carefully This is an
            agreement between: Venturebiz Promotions Private Limited
            (“OfferBeez”), referred to as company henceforth, having its
            registered office at #2085/16, 2nd floor, Spoorthi, puttenahalli
            main road, jp Nagar 7th phase, Bangalore-560078, is an owner of
            brand and product , platform called “OfferBeez” and is engaged in
            the businesses of online/digital promotions of businesses And The
            partner (“yourself”) is referred to as “partner” henceforth. This is
            not an employment offer. You are neither an employee of OfferBeez
            (Venturebiz Promotions Pvt Ltd) nor its related businesses.
          </p>

          <p className="mb-4">
            About Venturebiz Promotions’s OfferBeez platform — The OfferBeez
            platform provides an online digital advertisement platform to
            promote businesses . The primary objective is being able to connect
            local offers to the public in the local area. OfferBeez allows
            individual businesses to get registered on the platform and then
            published their advertisement. Through direct or partner routes.
          </p>
          <p className="mb-4">
            The partner here refers to any individual above the age of 18 who is
            interested in onboarding and listing a business—which may be shops,
            retails stores, services by individuals, or any other business
            enterprise—for subscribing to the platform The partner will go door
            to door to businesses and explain about the product and platform and
            how it works and try to onboard/list the business on the platform
            for subscribing to the platform.
          </p>
          <p className="mb-4">
            The company engagement is purely contractual and works by a
            commission model, which is strictly a dynamic commission model
            payable per advertisement or payable per listing, with rates being
            fixed by the company, or the employee's salary will be determined
            and provided as per the company's rules, regulations, and salary
            structure and may be revised based on performance and company
            policies. The commissions are dynamic and can change frequently and
            will be published on the OfferBeez platform and intimated. Here: The
            platform shall include
          </p>
          <p className="mb-4">
            (a) The mobile application called OfferBeez for the Consumer , where
            general public will register and see the offers in their local areas
          </p>
          <p className="mb-4">
            (b) Partner application—a mobile application through which the
            partner will register himself using KYC documents and a verified
            mobile number.
          </p>
          <p className="mb-4">
            (c) A business application that stores will use to post their
            advertisements.
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">General terms</h2>

          {/* Section 1 */}
          <div className="text-[#1a1a1a]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">1. Partner’s Services:</h2>

            <p className="mb-4">Among the partner's services are:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                (a) Reach out to the stores and list them on the platform by
                getting their verified details for the subscription to the
                OfferBeez ad publication platform.
              </li>
              <li>
                (b) You will manage the company by registering them, supplying
                documentation, KYC documents, and so forth, and then enrolling
                them in a subscription. Following that, you will get one-time
                commissions from the subscription plan's profits.
              </li>
              <li>
                (c) Managing the company includes registering, keeping up to
                date, and making sure the business may sign up for a plan.
              </li>
              <li>
                (d) During the early stages of business onboarding, assist the
                business in creating offers until the company feels comfortable
                posting advertisements directly.
              </li>
              <li>
                (e) Limit business onboarding even more inside the regions to
                which you will be assigned.
              </li>
              <li>
                (f) Use the platform to create, oversee, and accept offers for
                the businesses that you have onboarded.
              </li>
            </ul>
            <div className="text-[#1a1a1a]">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                2. Key service level agreement (management, indication,
                onboarding registration, offer creation, and payment related)
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  a) To be eligible, you must be at least eighteen years old and
                  fulfill the KYC requirements for verified mobile, PAN, and
                  Aadhar verification.
                </li>
                <li>
                  b) You shall offer the services as an individual, as a
                  business, as a franchise, or as another type of organization.
                </li>
                <li>
                  c) You shall carry out your duties in compliance with the law
                  and the guidelines provided in Annexure 1.
                </li>
                <li>
                  d) You shall adhere rigorously to the usage document and
                  instructions that you were given for the business onboarding
                  and subscription.
                </li>
                <li>
                  e) Unless otherwise agreed and supplied by us, you are
                  responsible for making arrangements for any additional tools
                  and equipment that may be required at your own cost.
                </li>
                <li>
                  f) It is clarified that you shall be responsible for
                  performing services as per our instructions.
                </li>
                <li>
                  g) You will receive the commissions for the business
                  onboarding and subscription online post-tax deductions as per
                  applicable laws directly to the account provided by you.
                </li>
                <li>
                  h) Details of commissions will be provided to you and payment
                  will happen on weekly or monthly basis.
                </li>
                <li>
                  i) The above commission will be applicable as long as you are
                  associated as a partner with the platform and as long as there
                  are business revenues from your activities.
                </li>
                <li>
                  j) The commissions may cease when the offers subscription of
                  the onboarded businesses end or due to inactivity in
                  onboarding new businesses and/or their subscription plan or
                  due to other factors decided by the platform.
                </li>
                <li>
                  k) The commissions are calculated using different business
                  types and are intimated from time to time and will be
                  communicated to you from time to time.
                </li>
                <li>
                  l) You can end the partner agreement at your choice, and the
                  commissions will also be closed from that time immediately.
                </li>
                <li>
                  m) You will not receive any payments for the onboarding or
                  subscription in cash from any business.
                </li>
                <li>
                  n) You will not use any other channels or accounts or methods
                  to receive the subscription fees other than those provided on
                  the OfferBeez platform.
                </li>
                <li>
                  o) Not adhering to these companies' rules, using any other
                  account, or redirecting the funds is a serious offense
                  according to the Bharath Nyaya Sanhita, and it might result in
                  direct legal actions against your account as a financial
                  fraud.
                </li>
                <li>
                  p) We may also provide merchandise like t-shirts, bags, etc.,
                  for the promotion of the brand OfferBeez (branded
                  merchandise). You are required to maintain the quality of this
                  branded merchandise in a proper manner. In case of any
                  deterioration in quality resulting in replacement, we may
                  charge the quality conservation fees (plus applicable taxes)
                  from you.
                </li>
              </ul>

              <p className="mt-4">
                You are solely responsible for the claims or damages arising out
                of services provided by you to us as an independent service
                provider.
              </p>

              <div className="text-[#1a1a1a]">
                {/* ---------- 3. Procedure for onboarding as partner ---------- */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                  3. Procedure for onboarding as partner
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    a) You shall go through the verification process and meet
                    our representatives for your background verification.
                  </li>
                  <li>
                    b) Provide KYC documents or information requested by the
                    company, including a valid PAN, email ID, and other
                    documents towards identity proof, address proof and bank
                    account details for payments.
                  </li>
                </ul>

                {/* ---------- 4. Reasons for temporary or permanent suspension or ending of this agreement ---------- */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                  4. Reasons for temporary or permanent suspension or ending of
                  this agreement:
                </h2>

                <p className="mb-4">
                  We may temporarily or permanently suspend this agreement:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    a) If we suspect that you are in breach of applicable law or
                    fail to adhere to the dos and don'ts of the company.
                  </li>
                </ul>

                {/* ---------- 5. How and when can we end this agreement? ---------- */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                  5. How and when can we end this agreement?
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    a) Both parties can end the agreement at will, and there is
                    no requirement of any notice period. However, both parties
                    shall be required to notify the other party regarding their
                    intention to end the agreement.
                  </li>
                  <li>
                    b) We can end this agreement immediately if you are in
                    breach of this agreement or are non-compliant with the
                    applicable provisions of law, or you engage or support
                    directly or indirectly in any unethical practices or the
                    applicable laws, or you fail to adhere to the dos and don'ts
                    provided under Annexure 1.
                  </li>
                  <li>
                    c) If you fail to notify us as mentioned above, we shall
                    consider that you have abandoned the agreement and are no
                    longer interested in providing services (abandoned). In such
                    events, OfferBeez shall keep your account under suspension
                    and deduct all receivables plus applicable taxes from your
                    payouts.
                  </li>
                  <li>
                    d) OfferBeez shall also reserve the right to recover any
                    outstanding amounts from you besides reactivating your
                    account for rendering services under the agreement.
                  </li>
                </ul>

                {/* ---------- 6. What are the consequences of ending this agreement? ---------- */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                  6. What are the consequences of ending this agreement?
                </h2>

                <p className="mb-4">You will:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    a) Immediately stop performance of services under the
                    agreement. You will only complete the task accepted by you
                    before the ending of this agreement.
                  </li>
                  <li>
                    b) Immediately return all the items provided by us, such as
                    documents and collection settlement, if any.
                  </li>
                  <li>
                    c) Delete the partner app from the mobile phone in the event
                    of termination of services and its usage or promotion.
                  </li>
                  <li>
                    d) Sign the settlement letter/provide any similar document
                    confirming no dues.
                  </li>
                  <li>
                    e) We will ensure you are paid for the services provided by
                    you to us till the end of this agreement after deducting
                    applicable taxes. We will also deduct any amounts we are
                    allowed to deduct under clause or other parts of this
                    agreement. You receive these amounts within 30 days from the
                    end of this agreement.
                  </li>
                  <li>
                    f) The rights and obligations under clauses (a), (b), (c),
                    and (d) will continue even after this agreement has ended.
                  </li>
                </ul>

                {/* ---------- 7. What is your responsibility if you cause damage to us? ---------- */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                  7. What is your responsibility if you cause damage to us?
                </h2>

                <p className="mb-4">
                  a) You will pay us a sum equivalent to the losses or claims or
                  costs (including reasonable lawyer fees) suffered by us:
                </p>

                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Because you broke this agreement's terms or the applicable
                    laws; or
                  </li>
                  <li>
                    Because of your deficiency in services in an order, up to
                    the value of the order.
                  </li>
                  <li>
                    Because of your fraudulent acts, thefts, etc., while
                    rendering the services. Notwithstanding the above, the total
                    limit of our losses or claims or costs because of causes
                    that can be directly linked to you is the amount that the
                    customer has paid for such orders. However, in cases where
                    criminal charges have been brought against you for any
                    wrongdoing that can be directly linked to you, this limit
                    shall not apply.
                  </li>
                </ul>

                <p className="mb-4">
                  b) You are not responsible for our loss of business or
                  profits.
                </p>

                {/* ---------- 8. What is our responsibility towards you in case of any loss? ---------- */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                  8. What is our responsibility towards you in case of any loss?
                </h2>

                <p className="mb-4">
                  a) We will pay you a sum equivalent to the losses or claims or
                  costs (including reasonable lawyer fees) suffered by you:
                </p>

                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Because we broke this agreement's terms or the applicable
                    laws;
                  </li>
                </ul>

                <p className="mb-2">b) We will not be responsible:</p>

                <ul className="list-disc pl-6 mb-4">
                  <li>For your loss of business or profits.</li>
                  <li>
                    If you are not able to use the partner app for providing
                    services for any reason beyond our control.
                  </li>
                </ul>

                {/* ---------- 9. What do we do with the information provided by you? ---------- */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                  9. What do we do with the information provided by you?
                </h2>

                <p className="mb-4">
                  We may collect information from you at the time of execution
                  of this agreement or at any other time thereafter. We reserve
                  the right to store, process, access, and use the information
                  for business purposes and needs, background checks,
                  verification, marketing, service, development, analytics,
                  research, and any other purpose as we may deem fit and in
                  accordance with applicable laws. You hereby expressly consent
                  to such collection and use of your information.
                </p>

                <p className="mb-4">
                  We may also provide to a third party, governmental agency, or
                  judicial body any information or information relating to you.
                </p>

                {/* ---------- 10. What shall you do with the information provided by us? ---------- */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                  10. What shall you do with the information provided by us?
                </h2>

                <p className="mb-4">
                  a) You may collect information from us at the time of
                  execution of this agreement or at any other time thereafter.
                  You shall use the information only to provide services under
                  this agreement and for our benefit.
                </p>

                <p className="mb-4">
                  b) You may also provide to a third party, governmental agency,
                  or judicial body any information or information relating to us
                  post getting express written consent from us in this regard,
                  which shall not be unreasonably withheld.
                </p>

                {/* ---------- 11. What happens if we do not agree on some things? ---------- */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                  11. What happens if we do not agree on some things?
                </h2>

                <p className="mb-4">
                  If we do not agree on some things, we will try to resolve
                  these problems between us by mutual discussion. If we are
                  unable to sort out the problems, either party may go to the
                  court of Karnataka.
                </p>

                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Annexure 1</h2>
                  <h3 className="font-semibold mb-4 text-base">
                    Do’s and Don’ts
                  </h3>

                  <p className="mb-4 font-medium">You must:</p>

                  <ol className="list-decimal pl-6 space-y-2">
                    <li>1. Perform services with reasonable care and skill.</li>
                    <li>
                      2. Carry identity documents and partner identification ID
                      provided from the company.
                    </li>
                    <li>
                      3. Use the partner app to perform and track your services.
                    </li>
                    <li>
                      4. Attend training sessions or meetings conducted by us.
                    </li>
                    <li>
                      5. Don’t use any customer’s information, like location
                      address or contact number details for any reason other
                      than for the purposes of fulfilling the services in
                      accordance with this agreement.
                    </li>
                    <li>
                      6. Maintain and bear the cost of running a smartphone
                      unless otherwise agreed by us in writing.
                    </li>
                    <li>
                      7. Use public transport, walk, or your personal vehicle
                      (at your own discretion).
                    </li>
                    <li>
                      8. The company is not obliged to provide any travel costs
                      or fuel costs associated with travelling expenses incurred
                      for the sales and marketing and your activities as partner
                      with the company.
                    </li>
                    <li>
                      9. The company advises you to strictly go by walk in and
                      around the locality and use of private vehicles is
                      strictly at the partner's discretion, and company shall
                      not bear any cost either for fuel, or related travel
                      expenses.
                    </li>
                    <li>
                      10. Follow all traffic rules, including wearing a helmet
                      at all times, and obey the speed limits.
                    </li>
                    <li>
                      11. The company is not obliged to provide any insurance of
                      any type and the partner activity is strictly the
                      partner's own discretion.
                    </li>
                    <li>
                      12. Wear the offered t-shirt (if provided) or jacket and
                      carry the field bags bearing our logo provided by us at
                      the time of providing services, and follow hygiene
                      requirements.
                    </li>
                    <li>
                      13. Ensure that You are trained properly to onboard
                      business correctly.
                    </li>
                    <li>
                      14. Behave and communicate well with the businesses, and
                      in case of any confrontation, back off and communicate it
                      back to customer care.
                    </li>
                    <li>
                      15. Behave respectfully with the customers and our
                      personnel. If any complaint is reported against you, it
                      could result in the termination of your partner service.
                    </li>
                    <li>
                      16. You are not supposed to enter any premises without the
                      approval for the business unit.
                    </li>
                    <li>17. Strictly do not enter any residential houses.</li>
                    <li>
                      18. Do not mix up offers or information for the offers
                      across businesses.
                    </li>
                    <li>
                      19. Not incite/provoke/indulge/be involved in any act or
                      omission, either directly or indirectly, that results in
                      disruption of operations at any premises.
                    </li>
                    <li>
                      20. Not drink alcohol, chew tobacco, or take any
                      intoxicating/banned substances before or while performing
                      the services.
                    </li>
                    <li>
                      21. Do not misuse any items provided by the company,
                      including t-shirts, jackets, and identification cards.
                    </li>
                    <li>
                      22. Not use the company name, logo, venture biz,
                      “OfferBeez” or our brand for any purpose other than
                      providing services through the OfferBeez partner app.
                    </li>
                    <li>
                      23. Do not store, use, disclose, or sell business
                      information with anyone, including the information of the
                      customer, company, or other third parties that you learn
                      while using the partner app.
                    </li>
                    <li>
                      24. Do not make any statement about the company, clients,
                      or customers without permission.
                    </li>
                    <li>
                      25. Do not allow anyone other than you to use the mobile
                      application registered by your name or mobile number, or
                      allow anyone to operate the partner app on your behalf.
                    </li>
                    <li className="mb-4">
                      26. The company may take appropriate action against you
                      with regard to your partner service, including
                      termination, for violating the above rules of the partner
                      agreement of OfferBeez.
                    </li>
                  </ol>
                </div>

                <div className="mb-8 mt-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">Annexure 2</h2>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                    Collection-related
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li>
                      1. There is no cash involved in the onboarding process for
                      the business by the partner.
                    </li>
                    <li>
                      2. Strictly use the online methods only for collecting
                      payments from businesses.
                    </li>
                    <li>
                      3. Businesses will use the online payment method on their
                      registered OfferBeez business apps only; do not use your
                      application for receiving any payments.
                    </li>
                    <li>
                      4. Online payment methods strictly include online options
                      given by the company within the OfferBeez business app.
                    </li>
                    <li>
                      5. Do not accept postdated checks or demand draft or other
                      instruments.
                    </li>
                    <li>
                      6. Do not collect any additional payments other than one
                      indicated by the company specific to the business and
                      offer a subscription.
                    </li>
                  </ol>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                    Payout-related
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li>
                      1. Payouts related to commissions shall be communicated to
                      you from time to time.
                    </li>
                    <li>
                      2. All payments will be made to the personal provided
                      account only.
                    </li>
                    <li>
                      3. The payouts are strictly as per the company's
                      commission policy, which is very dynamic and can change
                      very frequently.
                    </li>
                    <li>
                      4. There could be partial or full loss of commissions in
                      case of businesses and offers not getting approved.
                    </li>
                  </ol>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-6 mb-4 drop-shadow-sm">
                    Deductions and penalties
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      1. If there is any discrepancy in the amount communicated,
                      collected, and received by the company for the business or
                      offer subscription, you will be responsible and liable for
                      the same and may have to justify the difference thereof.
                    </li>
                    <li className="mb-4">
                      2. The company has the right to take the decision to
                      terminate your partner agreement if any discrepancies in
                      handling the collections are found.
                    </li>
                  </ol>
                </div>
              </div>
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
    </div>
  );
};

export default PartnerTOS;