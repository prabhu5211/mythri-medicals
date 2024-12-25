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

  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide
  const [isAnimating, setIsAnimating] = useState(false);

  // Duplicate slides for seamless looping
  const slidesWithClones = [
    slides[slides.length - 1], // Add last slide at the beginning
    ...slides,
    slides[0], // Add first slide at the end
  ];

  // Automatically transition slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 1000); // Change slide every 1 second

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Handle transition reset for seamless looping
  useEffect(() => {
    if (!isAnimating) return;

    const timeout = setTimeout(() => {
      setIsAnimating(false);

      // Reset to the first real slide if we're at the end
      if (currentIndex === slidesWithClones.length - 1) {
        setCurrentIndex(1);
      }

      // Reset to the last real slide if we're at the beginning
      if (currentIndex === 0) {
        setCurrentIndex(slides.length);
      }
    }, 700); // Match the CSS transition duration

    return () => clearTimeout(timeout);
  }, [currentIndex, isAnimating, slides.length, slidesWithClones.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? "transform 0.7s ease-in-out" : "none",
        }}
      >
        {slidesWithClones.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="text-center text-white p-8">
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="mt-4 text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
