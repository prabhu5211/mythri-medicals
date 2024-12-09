import { useState, useEffect } from "react";

const HeroSection = () => {
  const slides = [
    {
      image: "src/assets/mythri-image-1.jpg",
      title: "Welcome to My Landing Page",
      description: "We offer the best products for you",
    },
    {
      image: "src/assets/mythri-image-2.jpg",
      title: "Discover Quality Products",
      description: "High-quality medical equipment just for you",
    },
    {
      image: "src/assets/mythri-image-3.jpg",
      title: "Your Health, Our Priority",
      description: "Providing the best healthcare solutions",
    },
    {
      image: "src/assets/mythri-image-4.jpg",
      title: "Affordable and Reliable",
      description: "Trust us for all your medical needs",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Start at the first slide
  const [isAnimating, setIsAnimating] = useState(false);

  // Set up the continuous slide change
  const handleSlideChange = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);
    let newIndex;

    if (direction === "next") {
      newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    } else if (direction === "prev") {
      newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    }

    setCurrentIndex(newIndex);
  };

  // Handle animation reset after slide transition
  useEffect(() => {
    if (!isAnimating) return;
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match the CSS transition duration

    return () => clearTimeout(timeout);
  }, [currentIndex, isAnimating]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            {/* Overlay */}
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="text-center text-white p-8">
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="mt-4 text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-5 w-full flex justify-center items-center space-x-4">
        <button
          onClick={() => handleSlideChange("prev")}
          className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-80"
        >
          &lt;
        </button>
        <button
          onClick={() => handleSlideChange("next")}
          className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-80"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
