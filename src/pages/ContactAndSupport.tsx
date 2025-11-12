import React from "react";
import { X, Mail, Phone } from "lucide-react";

export default function ContactAndSupport({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mt-2 mb-8">
          We'd love to hear from you! Reach out anytime.
        </p>

        {/* Email */}
        <a
          href="mailto:support@offerbeez.in"
          className="flex items-center justify-center gap-4 bg-gray-100 rounded-xl py-3 mb-4 hover:bg-gray-200 transition-all"
        >
          <Mail size={20} color="#EC1E79" />
          <span className="text-gray-800 font-medium ml-4">
            support@offerbeez.in
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+919008522366"
          className="flex items-center justify-center gap-4 bg-gray-100 rounded-xl py-3 hover:bg-gray-200 transition-all"
        >
          <Phone size={20} color="#3345B0" />
          <span className="text-gray-800 font-medium ml-4">
            +91 9008522366
          </span>
        </a>

        {/* Working Hours */}
        <p className="text-gray-500 text-center text-sm mt-6">
          Monday to Sunday – 9:00 AM to 7:00 PM (GMT)
        </p>
      </div>
    </div>
  );
}