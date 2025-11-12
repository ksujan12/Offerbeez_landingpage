import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import vbLogo from "../assets/vb-logo.jpeg";

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
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-8 ">
          <div className="mt-6 mb-4">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#EC1E79] via-[#F45BA0] to-[#3345B0] bg-clip-text text-transparent drop-shadow-sm">
              Business User Billing
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-3 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">
              These terms govern billing and payment processes for business users. Please read them carefully.
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
      <div
        style={{
          width: "800px",
          margin: "40px auto",
          padding: "0px 20px 20px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          color: "#000",
          backgroundColor: "#fff",
        }}
      >
        {/* ✅ Title outside border */}
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          Tax Invoice
        </h2>

        {/* ✅ Outer border box starts here */}
        <div
          style={{
            border: "1px solid #000",
            padding: "20px",
            borderRadius: "4px",
          }}
        >
          {/* Company Logo + Info */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            {/* Left: Logo */}
            <div>
              <img
                src={vbLogo}
                alt="VentureBiz Logo"
                style={{ width: "90px", height: "auto" }}
              />
            </div>

            {/* Right: Company Info */}
            <div style={{ textAlign: "right", lineHeight: "1.6" }}>
              <strong>VentureBiz Promotions Private Limited</strong>
              <br />
              #2085/16, 2nd Floor, Spoorthi, Wilson Garden Society Layout,
              <br />
              Puttenahalli Main Road, JP Nagar 7th Phase, Bangalore - 560078.
              <br />
              Phone no: +91 9008522366 Email: info@venturebiz.in / support@offerbeez.com
              <br />
              GSTIN: 29AAKCV7929E1ZR, State: 29-Karnataka
            </div>
          </div>

          {/* Bill To */}
          <div style={{ padding: "10px", marginBottom: "15px" }}>
            <strong>Bill To:</strong>
            <br />
            <strong>CETRAL AYURVEDA RESEARCH INSTITUTE</strong>
            <br />
            #12, Uttarhalli Manavrathe Kaval, Kanakapura main road, Thalaghattapura post,
            <br />
            Bengaluru - 560 109
            <br />
            GSTIN :
            <br />
            Contact No: 9916995059
          </div>

          {/* Invoice Info */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div>Place of supply: 29-Karnataka</div>
            <div>
              Invoice No.: 1
              <br />
              Dated: 31-10-2025
            </div>
          </div>

          {/* Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #000",
              marginBottom: "15px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #000", padding: "5px" }}>#</th>
                <th style={{ border: "1px solid #000", padding: "5px" }}>space</th>
                <th style={{ border: "1px solid #000", padding: "5px" }}>Quantity</th>
                <th style={{ border: "1px solid #000", padding: "5px" }}>Price/ Unit</th>
                <th style={{ border: "1px solid #000", padding: "5px" }}>GST</th>
                <th style={{ border: "1px solid #000", padding: "5px" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #000", padding: "5px", textAlign: "center" }}>
                  1
                </td>
                <td style={{ border: "1px solid #000", padding: "5px" }}>
                  Offerbeez(Yearly membership) | VVPL012MEMBERID0123 (Offerbeez-Paid-Annual-Membership-Digital)
                </td>
                <td style={{ border: "1px solid #000", padding: "5px", textAlign: "center" }}>1</td>
                <td style={{ border: "1px solid #000", padding: "5px", textAlign: "right" }}>₹4,237.29</td>
                <td style={{ border: "1px solid #000", padding: "5px", textAlign: "right" }}>₹ 762.71 (18%)</td>
                <td style={{ border: "1px solid #000", padding: "5px", textAlign: "right" }}>₹5,000.00</td>
              </tr>
              <tr>
                <td
                  colSpan={5}
                  style={{
                    border: "1px solid #000",
                    padding: "5px",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Total
                </td>
                <td style={{ border: "1px solid #000", padding: "5px", textAlign: "right" }}>
                  ₹5,000.00
                </td>
              </tr>
            </tbody>
          </table>

          {/* Tax Details */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #000",
              marginBottom: "15px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #000", padding: "5px" }}>Tax type</th>
                <th style={{ border: "1px solid #000", padding: "5px" }}>Taxable amount</th>
                <th style={{ border: "1px solid #000", padding: "5px" }}>Rate</th>
                <th style={{ border: "1px solid #000", padding: "5px" }}>Tax amount</th>
                <th style={{ border: "1px solid #000", padding: "5px" }}>Amounts:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #000", padding: "5px" }}>SGST ₹381.36</td>
                <td style={{ border: "1px solid #000", padding: "5px" }}>₹ 4,237.29</td>
                <td style={{ border: "1px solid #000", padding: "5px" }}>9%</td>
                <td style={{ border: "1px solid #000", padding: "5px" }}>₹381.36</td>
                <td style={{ border: "1px solid #000", padding: "5px" }} rowSpan={3}>
                  <div>Sub Total ₹ 5,000.00</div>
                  <div>Total ₹ 5,000.00</div>
                  <div>Received ₹ 5,000.00</div>
                  <div>Balance ₹ 0.00</div>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #000", padding: "5px" }}>CGST ₹381.36</td>
                <td style={{ border: "1px solid #000", padding: "5px" }}>₹ 4,237.29</td>
                <td style={{ border: "1px solid #000", padding: "5px" }}>9%</td>
                <td style={{ border: "1px solid #000", padding: "5px" }}>₹381.36</td>
              </tr>
            </tbody>
          </table>

          {/* Amount in Words */}
          <div style={{ padding: "8px", marginBottom: "10px" }}>
            <strong>Invoice Amount In Words:</strong> Five Thousand Rupees only
          </div>

          {/* Terms and Conditions */}
          <div
            style={{
              padding: "10px",
              fontSize: "13px",
              lineHeight: "1.6",
            }}
          >
            <strong>Terms and conditions:</strong>
            <br />
            1. The Offerbeez Business Onboarding subscription is valid for one (1) year from the date of Payment.
            <br />
            2. The subscription amount mentioned in the invoice is non-refundable once payment is processed.
            <br />
            3. All payments must be made in full before activation of the subscription.
            <br />
            4. The subscription cannot be transferred or shared with another business entity.
            <br />
            5. Any misuse of the platform, misleading advertisements, or fraudulent activities may result in suspension of the account without refund.
            <br />
            <br />
            <strong style={{ color: "black" }}>
              Note: This is an electronically generated invoice. No signature or seal is required.
            </strong>
          </div>
        </div>
        {/* ✅ Outer border box ends */}
      </div>
    </div>
  );
};

export default UserConsent;
