import React from "react";

const DownloadBrochure = () => {

  const data = [
    { key: "Project Area", value: "0.42 Acres", image: "https://source.unsplash.com/600x400/?construction,area" },
    { key: "Sizes", value: "420 - 906 sq.ft.", image: "https://icon2.cleanpng.com/20180705/obc/kisspng-arrow-computer-icons-icon-text-5b3e8122c3d631.0800854615308229468022.jpg" },
    { key: "Project Size", value: "1 Building - 124 units", image: "https://icon2.cleanpng.com/lnd/20250120/j/68183542768e634594d01c17f13ce7.webp" },
    { key: "Launch Date", value: "Jun, 2024", image: "https://source.unsplash.com/600x400/?calendar,launch" },
    { key: "Avg. Price", value: "30 K/sq.ft", image: "https://source.unsplash.com/600x400/?money,price" },
    { key: "Possession Starts", value: "Mar, 2027", image: "https://source.unsplash.com/600x400/?possession,house" },
    { key: "Configurations", value: "1, 2, 3 BHK Apartments", image: "https://source.unsplash.com/600x400/?apartment,room" },
    { key: "Rera Id", value: "P51800076625", image: "https://source.unsplash.com/600x400/?document,contract" },
    { key: "Check RERA Status", value: null, image: "https://source.unsplash.com/600x400/?legal,status" }
  ];
  
  

  return (
    <div className="bg-gray-50">
    <div className="mx-auto max-w-5xl px-4 py-9">
      <div className="border p-9">
        {/* Header Section */}
        <div className="border-b-2 pb-5 flex items-center justify-between flex-wrap">
          <p className="font-bold text-2xl">DPS Sanctum Overview</p>
          <p className="text-blue-600 mt-2 sm:mt-0 cursor-pointer hover:underline">
            Download Brochure
          </p>
        </div>
        {/* Data Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.key}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-700">{item.key}</p>
                <p className="text-gray-500 text-sm">{item.value || "N/A"}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Button Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
          <button className="bg-blue-600 px-6 py-3 w-full sm:w-auto text-center hover:bg-blue-700 cursor-pointer text-white rounded">
            Share
          </button>
          <button className="bg-blue-600 px-6 py-3 w-full sm:w-auto text-center hover:bg-blue-700 cursor-pointer text-white rounded">
            Save
          </button>
          <button className="bg-blue-600 px-6 py-3 w-full sm:w-auto text-center hover:bg-blue-700 cursor-pointer text-white rounded">
            Ask for details
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default DownloadBrochure;
