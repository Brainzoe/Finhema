import React from 'react';
import demoImage from '../assets/demoImage.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faStream, faUserFriends, faClock, faBuilding, faMobileAlt, faTabletAlt, faCloud, faMoneyBillAlt, faSms } from '@fortawesome/free-solid-svg-icons';
import salesAppImage from '../assets/Laptop.png';
import product from '../assets/Product.webp';
import chartImage from '../assets/chart-image.webp';
import FinMax from '../assets/FINMAX.webp';
const Home = () => {
  return (
    <div>
      <section id="home" className="bg-blue-700 text-white py-40 flex flex-col lg:flex-row items-center justify-between px-20">
        {/* Text Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left px-6 lg:px-10">
          <h1 className="text-6xl mb-2">Efficient</h1>
          <h1 className="text-6xl font-bold mb-2">And Reliable</h1>
          <h1 className="text-6xl font-bold mb-8">Financial Solution</h1>

          {/* Increased margin for more spacing */}
          <p className="text-lg mb-12">
            It all begins by choosing the right software, start with the best to simplify your financial operations.
          </p>

          <button className="bg-white text-blue-700 font-semibold py-3 px-12 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
            Request a Demo
          </button>
        </div>



        {/* Image Section */}
        <div className="lg:w-1/2 relative flex items-center justify-center">
          {/* Container for positioning both images */}
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Chart Image (Dashboard View) with reduced height */}
            <img src={chartImage} alt="Financial Solution Dashboard View" className="w-full h-52 lg:h-64 object-cover rounded-lg shadow-lg" />

            {/* Demo Image (Mobile View) with black frame, styled to resemble an iPhone */}
            <div className="absolute bottom-0 -left-8 w-32 h-64 md:w-40 md:h-80 border-8 border-gray-900 rounded-[20px] p-2 bg-white shadow-xl transform translate-y-4">
              {/* Flipping the notch to face down and pushing it slightly inside */}
              <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-bl-xl rounded-br-xl"></div> {/* Increased width of the notch */}

              {/* Smaller Earpiece and Sensor on the same horizontal line */}
              <div className="absolute top-[2px] left-1/2 transform -translate-x-1/2 w-10 h-1.5 bg-blue-500 bg-opacity-30 rounded-md"></div> {/* Smaller Earpiece */}

              {/* Round Sensor positioned to the right of the earpiece */}
              <div className="absolute top-[2px] left-[72%] transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 bg-opacity-30 rounded-full"></div> {/* Round Sensor */}

              <img src={demoImage} alt="Financial Solution Mobile View" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>


      {/* Sales App Section */}
      <section id="sales-app" className="bg-blue-100 py-40 px-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-700">Sales App</h2>
          <p className="italic text-lg text-blue-500 mt-2">Empower Your Sales Force, Elevate Your Success!</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2">
            <ul className="space-y-6">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faChartLine} className="text-2xl text-blue-700 mr-4" />
                <div>
                  <h3 className="font-semibold text-xl">Track Sales Person</h3>
                  <p>Track every visit made by the sales person to ensure further planning and effective sales.</p>
                </div>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faStream} className="text-2xl text-blue-700 mr-4" />
                <div>
                  <h3 className="font-semibold text-xl">Streamline Sales Cycle</h3>
                  <p>Know every order's stage from new orders placed to its delivery.</p>
                </div>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faUserFriends} className="text-2xl text-blue-700 mr-4" />
                <div>
                  <h3 className="font-semibold text-xl">Monitor Customer Visits</h3>
                  <p>Be informed about the customer's visit and probable new customers.</p>
                </div>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faClock} className="text-2xl text-blue-700 mr-4" />
                <div>
                  <h3 className="font-semibold text-xl">Increase Efficiency</h3>
                  <p>Increase efficiency by monitoring all the activities from marketing to sales.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <img src={salesAppImage} alt="Sales App Demo" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition duration-300">
            Request Demo
          </button>
        </div>
      </section>


      <div>
        {/* Cooperative Banking Solution Section */}
        <section id="banking-solution" className="bg-gray-100 py-40 px-20 relative">

          {/* Side-by-Side Layout */}
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">

            {/* Left Column - Image with Feature Cards Below */}
            <div className="w-full lg:w-1/2 flex flex-col h-full">
              {/* Main Image with Blue Background */}
              <div className="bg-blue-600 p-1 rounded-lg shadow-md mb-6 flex justify-center items-center">
                <img src={product} alt="Financial Solution Demo" className="w-3/4 max-w-md rounded-lg" />
              </div>

              {/* Solution Features */}
              <div className="bg-white p-4 shadow-md rounded-lg mb-4 flex items-center space-x-4">
                <div className="text-blue-700 text-3xl">&#127970;</div> {/* Icon placeholder */}
                <div>
                  <h3 className="font-semibold text-xl">Core Banking</h3>
                  <p className="text-gray-600">Take advantage of the powerful Core banking solution.</p>
                </div>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg mb-4 flex items-center space-x-4">
                <div className="text-blue-700 text-3xl">&#128241;</div> {/* Icon placeholder */}
                <div>
                  <h3 className="font-semibold text-xl">Mobile Banking</h3>
                  <p className="text-gray-600">Take advantage of the power of Mobile Banking.</p>
                </div>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg mb-4 flex items-center space-x-4">
                <div className="text-blue-700 text-3xl">&#128187;</div> {/* Icon placeholder */}
                <div>
                  <h3 className="font-semibold text-xl">Tab Banking</h3>
                  <p className="text-gray-600">Take advantage of the power of Tab Banking.</p>
                </div>
              </div>
            </div>

            {/* Right Column - Header and Chart Image */}
            <div className="w-full lg:w-1/2 flex flex-col h-full border border-gray-300 rounded-lg">

              {/* Section Header */}
              <div className="ml-4 mt-4">
                <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-600">
                  Cooperative Solution
                </button>
              </div>

              <div className="text-center mb-8 flex-none mx-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-4xl font-bold text-blue-700">Solution to your every banking problem</h2>
                <p className="italic text-lg text-gray-600 mt-2">
                  Offers a wide range of features and functionalities that are specially designed and developed to meet your requirements.
                </p>
              </div>

              {/* Chart Image */}
              <div className="flex-grow mx-4 mb-4">
                <img src={chartImage} alt="Data and Insights" className="w-full rounded-lg shadow-lg h-full object-cover" />
              </div>
            </div>

          </div>

        </section>

      </div>


      <section id="Why-FINMAX" >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-700">WHY FINHEMA</h2>
          <p className="italic text-lg text-blue-500 mt-2">Designed to provide powerful, yet easy-to-use platform that can help manage financial operations more efficiently and effectively.</p>
        </div>
        <div className="bg-white-100 py-16 px-8 m-10 border border-gray-300 rounded-lg">


          <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-1/2">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faChartLine} className="text-2xl text-blue-700 mr-4" />
                  <div>
                    <h3 className="font-semibold text-xl">Track Sales Person</h3>
                    <p>Track every visit made by the sales person to ensure further planning and effective sales.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faStream} className="text-2xl text-blue-700 mr-4" />
                  <div>
                    <h3 className="font-semibold text-xl">Streamline Sales Cycle</h3>
                    <p>Know every order's stage from new orders placed to its delivery.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faUserFriends} className="text-2xl text-blue-700 mr-4" />
                  <div>
                    <h3 className="font-semibold text-xl">Monitor Customer Visits</h3>
                    <p>Be informed about the customer's visit and probable new customers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faClock} className="text-2xl text-blue-700 mr-4" />
                  <div>
                    <h3 className="font-semibold text-xl">Increase Efficiency</h3>
                    <p>Increase efficiency by monitoring all the activities from marketing to sales.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <img src={FinMax} alt="Sales App Demo" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

