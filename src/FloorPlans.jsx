import floorPlan from "./assets/floorPlan.jpg";

const FloorPlans = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title */}
      <h1 id="PricePlans" className="text-3xl font-extrabold mb-6">Price and Floor Plans</h1>
        
      {/* Image Container */}
      <div className="relative w-full">
        <img
          src={floorPlan}
          alt="Floor Plan"
          className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default FloorPlans;
