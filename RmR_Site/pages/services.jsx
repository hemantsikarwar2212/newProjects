import React from "react";

const Services = () => {
  const services = [
    {
      title: "Small Truck Rental",
      description: "Perfect for small moves and deliveries within the city.",
      price: "Starting at ₹500/day",
      features: ["Up to 1 ton capacity", "Fuel efficient", "Easy to drive"],
    },
    {
      title: "Medium Truck Rental",
      description: "Ideal for inter-city transportation and medium loads.",
      price: "Starting at ₹1200/day",
      features: ["Up to 5 ton capacity", "Long distance ready", "GPS tracking"],
    },
    {
      title: "Heavy Truck Rental",
      description: "For large commercial transportation needs.",
      price: "Starting at ₹2500/day",
      features: [
        "Up to 15 ton capacity",
        "Commercial grade",
        "Professional drivers",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Choose from our wide range of truck rental services tailored to your
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border-t-4 border-gradient-to-r from-blue-500 to-red-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-4">
                {service.price}
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
