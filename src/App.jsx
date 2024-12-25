import NavbarSection from './components/NavbarSection';
import HeroSection from './components/HeroSection';
import ProductShowcaseSection from './components/ProductShowcaseSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LinkSection from './components/LinkSection';
import ProductExplorer from './components/ProductExplorer';

function App() {
  return (
    <Router>
      <div>
        Navbar always visible at the top
        <NavbarSection />

        <Routes>
          {/* Define the homepage */}
          <Route path="/" element={
            <>
              <HeroSection />
              <ProductShowcaseSection />
              <LinkSection />
              <TestimonialsSection />
              <CTASection />
            </>
          } />

          {/* Define the route for the Product Explorer page */}
          <Route path="/explore-products" element={<ProductExplorer />} />
        </Routes>

        {/* Footer always at the bottom */}
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
