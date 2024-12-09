
import { useNavigate } from "react-router-dom";

const ProductShowcaseSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handler for button click to navigate
  const handleExploreProducts = () => {
    navigate("/explore-products"); // Navigate to ProductExplorer page
  };

  return (
    <section id="product-showcase" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Products</h2>
        <p className="mt-4 text-lg text-gray-600">
          Explore our wide range of high-quality medical equipment
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Product Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <img
              src="src/assets/mythri-image-3.jpg"
              alt="Product 1"
              className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out"
            />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">
              Product 1
            </h3>
            <p className="mt-2 text-gray-500">
              High-quality medical equipment for all your needs.
            </p>
          </div>
          {/* Product Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <img
              src="src/assets/mythri-image-1.jpg"
              alt="Product 2"
              className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out"
            />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">
              Product 2
            </h3>
            <p className="mt-2 text-gray-500">
              Reliable and efficient for healthcare professionals.
            </p>
          </div>
          {/* Product Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <img
              src="src/assets/mythri-image-2.jpg"
              alt="Product 3"
              className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out"
            />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">
              Product 3
            </h3>
            <p className="mt-2 text-gray-500">
              Durable equipment for all environments.
            </p>
          </div>
        </div>

        {/* Add the Explore Products Button */}
        <button
          onClick={handleExploreProducts}
          className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition-all"
        >
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
