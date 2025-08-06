import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
            Welcome to TruckBook
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Your reliable partner for truck booking services across the nation.
            Fast, secure, and affordable transportation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn More
            </button>
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              Fast Booking
            </h3>
            <p className="text-gray-600">
              Quick and easy truck booking process in just a few clicks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-xl font-bold text-red-600 mb-3">
              Reliable Service
            </h3>
            <p className="text-gray-600">
              Trusted by thousands of customers nationwide.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-3">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Round-the-clock customer support for all your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
