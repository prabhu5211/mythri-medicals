import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex justify-center mt-8 space-x-8">
          {/* Testimonial 1 */}
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src="src/assets/mythri-face-1.jpg" // Replace with the actual image URL
                alt="John Doe"
                className="w-20 h-20 rounded-full object-cover border-4 border-[#1BA59E] mx-auto"
              />
            </div>
            <div className="relative">
              <FaQuoteLeft className="absolute left-0 top-0 text-6xl text-[#F39425] -ml-6 -mt-6" />
              <p className="text-lg italic">Amazing products! Highly recommend.</p>
              <p className="mt-4 font-semibold text-[#1BA59E]">- John Doe</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src="src/assets/mythri-face-2.jpg" // Replace with the actual image URL
                alt="Jane Smith"
                className="w-20 h-20 rounded-full object-cover border-4 border-[#1BA59E] mx-auto"
              />
            </div>
            <div className="relative">
              <FaQuoteLeft className="absolute left-0 top-0 text-6xl text-[#F39425] -ml-6 -mt-6" />
              <p className="text-lg italic">Fast delivery and excellent service.</p>
              <p className="mt-4 font-semibold text-[#1BA59E]">- Jane Smith</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src="src/assets/mythri-face-3.jpg" // Replace with the actual image URL
                alt="Alex Johnson"
                className="w-20 h-20 rounded-full object-cover border-4 border-[#1BA59E] mx-auto"
              />
            </div>
            <div className="relative">
              <FaQuoteLeft className="absolute left-0 top-0 text-6xl text-[#F39425] -ml-6 -mt-6" />
              <p className="text-lg italic">Great quality at affordable prices!</p>
              <p className="mt-4 font-semibold text-[#1BA59E]">- Alex Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
