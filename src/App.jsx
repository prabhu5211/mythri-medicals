import { useState } from "react";

const ProductExplorer = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  // List of instruments to filter
  const instruments = [
    { type: "Bipolar Forceps", count: 360 },
    { type: "Calipers", count: 1 },
    { type: "Calipers And Gauges", count: 2 },
    { type: "Chisels", count: 1 },
    { type: "Curettes", count: 374 },
    { type: "Dilators", count: 4 },
    { type: "Dissectors", count: 39 },
    { type: "Elevators", count: 58 },
    { type: "Forceps", count: 18 },
    { type: "Forceps - Tissue", count: 4 },
  ];

  // List of products
  const products = [
    { id: "SS1671646E", name: "#8 Suction Tube Rx Type Cer", type: "Bipolar Forceps", image: "https://via.placeholder.com/200" },
    { id: "SS1671772B", name: "14Mm X 4Cm Tubular Retractor Beveled", type: "Chisels", image: "https://via.placeholder.com/200" },
    { id: "SS1671772", name: "14Mm X 4Cm Tubular Retractor", type: "Forceps", image: "https://via.placeholder.com/200" },
    { id: "SS1671789", name: "Retractor - Sample", type: "Dilators", image: "https://via.placeholder.com/200" },
    { id: "SS1671899", name: "Suction Tube", type: "Bipolar Forceps", image: "https://via.placeholder.com/200" },
    { id: "SS1671800", name: "Sample Retractor", type: "Forceps", image: "https://via.placeholder.com/200" },
  ];

  // Handle the checkbox change to update the selected filters
  const handleFilterChange = (type) => {
    setSelectedFilters((prev) =>
      prev.includes(type)
        ? prev.filter((filter) => filter !== type)
        : [...prev, type]
    );
  };

  // Filter the products based on selected filters
  const filteredProducts = selectedFilters.length
    ? products.filter((product) => selectedFilters.includes(product.type))
    : products;

  return (
    <div className="flex p-6">
      {/* Sidebar for filter options */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h3 className="text-xl font-semibold mb-4">Instrument Type</h3>
        <ul className="space-y-2">
          {instruments.map((instrument) => (
            <li key={instrument.type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedFilters.includes(instrument.type)}
                onChange={() => handleFilterChange(instrument.type)}
              />
              <label>
                {instrument.type} ({instrument.count})
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="w-3/4 p-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 w-full object-cover rounded-lg"
                />
                <h3 className="mt-4 font-semibold text-lg">{product.id}</h3>
                <p className="mt-2 text-center">{product.name}</p>
                <button className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                  Add to Quote
                </button>
              </div>
            ))
          ) : (
            <p>No products match the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductExplorer;
