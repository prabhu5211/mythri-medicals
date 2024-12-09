

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">High-Quality Products</h3>
            <p className="text-lg text-gray-600">
              Our products are crafted with precision and designed for longevity, ensuring optimal performance in medical settings.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Excellent Customer Support</h3>
            <p className="text-lg text-gray-600">
              We offer 24/7 customer support to address all your queries and ensure smooth operations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
            <p className="text-lg text-gray-600">
              Our products are competitively priced, providing great value for the quality and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
