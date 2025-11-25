import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MainContent } from "../../constants/maincontant";

const TopNavBar = () => {
  return (
    <div className="w-full bg-[#526066] text-white py-2 px-6 flex items-center justify-between">
      
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt size={14} />
          <span>{MainContent.address}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaPhoneAlt size={14} />
          <span>{MainContent.contactNo}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaEnvelope size={14} />
          <span>{MainContent.email}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {[FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
          (Icon, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#526066] transition"
            >
              <Icon size={14} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
