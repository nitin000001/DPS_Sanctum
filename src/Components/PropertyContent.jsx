import React from "react";
import ImageSection from "./ImageSection";
import PriceAndFloorPlans from "./PriceAndFloorPlans";

const PropertyContent = () => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Top Section */}
        <div className="top flex justify-between items-center mb-4">
          <div className="left text-sm text-gray-600 flex gap-1 flex-wrap">
            <span>Home</span>
            <span>/</span>
            <span>Mumbai</span>
            <span>/</span>
            <span>Andheri - Dahisar</span>
            <span>/</span>
            <span>Andheri West</span>
            <span>/</span>
            <span>Naumi Shresht</span>
          </div>
          <div className="right text-sm text-gray-600">
            <span>Last updated: Jan 25, 2025</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom flex flex-wrap justify-between items-start gap-6">
          {/* Left Section */}
          <div className="flex-1 min-w-[250px]">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-semibold">Naumi Shresht</h1>
              <span className="text-xs text-green-600 flex items-center gap-1">
                <span>✔</span> RERA
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              By <span className="text-blue-700">DPS Developers</span>
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              129, Jp Rd, Near Axis Bank Branch, Fish Market Area, Navneeth Colony,
              Andheri West, Western Suburbs,
              <br /> Mumbai
            </p>
          </div>

          {/* Right Section */}
          <div className="price flex-1 min-w-[250px] text-right">
            <p className="mb-2">
              <span className="text-2xl font-extrabold">₹1.26 Cr - 2.72 Cr |</span>{" "}
              <span className="text-sm text-gray-900">₹30 K/sq.ft</span>
            </p>
            <p className="text-blue-700 text-sm mb-1">
              EMI starts at ₹62.55 K
            </p>
            <p className="text-xs text-gray-700 mb-4">Basic Price Onwards</p>
            <button className="bg-[#5E23DC] px-6 py-2 text-white text-sm rounded shadow hover:bg-[#4a1bba] transition">
              Contact Developer
            </button>
          </div>
        </div>
        {/* image */}
        <ImageSection />
        <PriceAndFloorPlans />
      </div>
    </div>
  );
};

export default PropertyContent;
