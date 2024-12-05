import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // Import WhatsApp and Phone icons from react-icons
import { FaHandPointUp } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center mt-20 space-y-4">
      <a
        href="https://wa.me/16832251798?text=I%20want%20Aadhar%20ID
"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-lg transition duration-300"
      >
        <FaWhatsapp className="mr-2" />
        WhatsApp Us
      </a>
      <a
        href="https://wa.me/16832251798?text=I%20want%20Aadhar%20ID
"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition duration-300"
      >
        <FaPhoneAlt className="mr-2" />
        Call Us
      </a>
      <p className="text-lg">
        <span className="mr-2 text-blue-500 flex justify-center">
          <FaHandPointUp />
        </span>
        For Aadhaar ID, contact us on WhatsApp
      </p>
      <p className="text-lg mt-2">
        <span className="mr-2 text-green-500 flex justify-center">
          <FaHandPointUp />
        </span>
        आधार आईडी पाने के लिए व्हाट्सएप पर संपर्क करें
      </p>
    </div>
  );
};

export default LandingPage;
