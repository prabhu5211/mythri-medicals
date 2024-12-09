import { FaFirstAid, FaHandsHelping, FaEnvelope } from "react-icons/fa";

const LinkSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Explore Our Services</h2>
        <div className="flex justify-center space-x-10">
          {/* Products Section */}
          <div className="link-item bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaFirstAid className="text-4xl text-[#1BA59E] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <p className="text-lg text-gray-600 mb-6">
              Browse our premium surgical instruments and equipment.
            </p>
            <a 
              href="#" 
              className="text-[#1BA59E] hover:text-white hover:bg-[#1BA59E] px-6 py-2 rounded-full transition-colors duration-300 font-poppins"
            >
              Shop Now
            </a>
          </div>

          {/* Services Section */}
          <div className="link-item bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaHandsHelping className="text-4xl text-[#F39425] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <p className="text-lg text-gray-600 mb-6">
              Learn more about our services and how we can assist you.
            </p>
            <a 
              href="#" 
              className="text-[#F39425] hover:text-white hover:bg-[#F39425] px-6 py-2 rounded-full transition-colors duration-300 font-poppins"
            >
              Learn More
            </a>
          </div>

          {/* Contact Section */}
          <div className="link-item bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-4xl text-[#F39425] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-lg text-gray-600 mb-6">
              Get in touch with us for any queries or support.
            </p>
            <a 
              href="#" 
              className="text-[#F39425] hover:text-white hover:bg-[#F39425] px-6 py-2 rounded-full transition-colors duration-300 font-poppins"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkSection;
