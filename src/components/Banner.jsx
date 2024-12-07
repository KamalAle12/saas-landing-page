import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaBolt, FaLightbulb, FaLock, FaUser, FaCogs, FaHeadset, FaChartLine, FaCloud, FaMobileAlt, FaExpand } from 'react-icons/fa';
import '../style/Banner.css';

const features = [
  { id: 1, title: 'Fast Performance', description: 'Experience blazing fast load times with optimized performance that ensures your application runs smoothly even during peak usage times', icon: <FaBolt size={40} className="text-indigo-500" /> },
  { id: 2, title: 'Innovative Ideas', description: 'Explore cutting-edge features and technologies designed to keep your business ahead of the curve, providing you with a competitive edge in the market', icon: <FaLightbulb size={40} className="text-yellow-500" /> },
  { id: 3, title: 'Secure & Reliable', description: 'Built with top-notch security protocols, our solution ensures your data is protected against breaches while maintaining reliable uptime for your operations', icon: <FaLock size={40} className="text-green-500" /> },
  { id: 4, title: 'User Friendly', description: 'Our user interface is simple and intuitive, providing a seamless experience for both beginners and advanced users, ensuring easy navigation and quick task completion', icon: <FaUser size={40} className="text-blue-500" /> },
  { id: 5, title: 'Customizable', description: 'Fully customizable to fit your unique needs, allowing you to tailor every aspect of the platform to suit your business processes and workflows', icon: <FaCogs size={40} className="text-purple-500" /> },
  { id: 6, title: '24/7 Support', description: 'Our support team is available around the clock to assist you with any issues, ensuring you have continuous access to expert help whenever needed', icon: <FaHeadset size={40} className="text-pink-500" /> },
  { id: 7, title: 'Data Analytics', description: 'Gain valuable insights from your data with advanced analytics tools, enabling you to make informed decisions that drive your business forward', icon: <FaChartLine size={40} className="text-red-500" /> },
  { id: 8, title: 'Cloud Integration', description: 'Seamlessly integrate with cloud services, providing flexibility, scalability, and accessibility from anywhere, without worrying about infrastructure management', icon: <FaCloud size={40} className="text-cyan-500" /> },
  { id: 9, title: 'Mobile Friendly', description: 'Optimized for all devices, ensuring a smooth and consistent user experience whether you are using a desktop, tablet, or mobile phone', icon: <FaMobileAlt size={40} className="text-orange-500" /> },
  { id: 10, title: 'Scalable Solutions', description: 'Our platform grows with your business, providing scalable solutions that can adapt to increasing demand and expanding operations as your business evolves', icon: <FaExpand size={40} className="text-teal-500" /> },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  // Move to the next feature, looping around seamlessly
  const nextFeature = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex === features.length + 1 ? 1 : nextIndex;
    });
  };

  // Move to the previous feature, looping around seamlessly
  const prevFeature = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexCalculated = prevIndex - 1;
      return prevIndexCalculated === 0 ? features.length : prevIndexCalculated;
    });
  };

  return (
    <div id="features" className="banner mt-0">
      <div className="content">
        <h1 data-content="FEATURES">FEATURES</h1>
        <div className="model"></div>
        <div className="carousel-container relative">
          <div className="relative w-full bg-white py-12 overflow-hidden">
            <div className="flex items-center justify-center relative w-full">
              {/* Carousel */}
              <div className="w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${(currentIndex - 1) * (100 / 4)}%)`, // Adjusting to currentIndex - 1
                  }}
                >
                  {/* Duplicate the first and last features to make the loop seamless */}
                  {features.slice(features.length - 1).map((feature) => (
                    <div
                      key={`duplicate-last-${feature.id}`}
                      className="w-1/4 flex-shrink-0 px-4"
                      style={{ height: '350px' }}
                    >
                      <div className="bg-primary rounded-lg shadow-xl p-6 h-full flex flex-col justify-center items-center">
                        {feature.icon}
                        <h3 className="text-[25px] font-palanquin font-bold text-gray-800 mt-4">{feature.title}</h3>
                        <p className="mt-4 text-gray-600 text-center">{feature.description}</p>
                      </div>
                    </div>
                  ))}

                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="w-1/4 flex-shrink-0 px-4"
                      style={{ height: '350px' }}
                    >
                      <div className="bg-primary rounded-lg shadow-xl p-6 h-full flex flex-col justify-center items-center">
                        {feature.icon}
                        <h3 className="text-[25px] font-palanquin font-bold text-gray-800 mt-4">{feature.title}</h3>
                        <p className="mt-4 text-gray-600 text-center">{feature.description}</p>
                      </div>
                    </div>
                  ))}

                  {/* Duplicate the first feature to the end */}
                  {features.slice(0, 1).map((feature) => (
                    <div
                      key={`duplicate-first-${feature.id}`}
                      className="w-1/4 flex-shrink-0 px-4"
                      style={{ height: '350px' }}
                    >
                      <div className="bg-primary rounded-lg shadow-xl p-6 h-full flex flex-col justify-center items-center">
                        {feature.icon}
                        <h3 className="text-[25px] font-palanquin font-bold text-gray-800 mt-4">{feature.title}</h3>
                        <p className="mt-4 text-gray-600 text-center">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Centered Buttons */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button
                  onClick={prevFeature}
                  className="bg-indigo-500 text-white p-3 rounded-full shadow hover:bg-indigo-600 mx-4"
                >
                  <FaChevronLeft size={30} />
                </button>
                <button
                  onClick={nextFeature}
                  className="bg-indigo-500 text-white p-3 rounded-full shadow hover:bg-indigo-600 mx-4"
                >
                  <FaChevronRight size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
