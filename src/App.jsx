import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Survey } from './pages/Survey';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Navbar spans full width */}
        <Navbar />

        {/* Middle: split layout */}
        <div className="flex-1 flex">
          {/* Scrollable content - left side */}
          <div className="flex-1 lg:max-w-[60%] lg:pl-12 relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/survey" element={<Survey />} />
            </Routes>
          </div>

          {/* Fixed Mags + logo - right side, desktop only */}
          <div className="hidden lg:block w-[40%] relative">
            <img
              src="/assets/mustard_by_mags_logo.png"
              alt="Mustard by Mags"
              className="fixed top-16 right-[12%] h-auto w-[35vw] opacity-80 pointer-events-none"
            />
            <img
              src="/assets/mags_holding_mustard.png"
              alt="Mags holding jars of homemade mustard"
              className="fixed bottom-0 right-8 h-[80vh] w-auto object-contain pointer-events-none z-10"
              style={{
                filter: 'drop-shadow(0 4px 20px rgba(45, 24, 16, 0.15))',
              }}
            />
          </div>
        </div>

        {/* Footer spans full width - z-20 so it covers the fixed Mags image when scrolled */}
        <div className="relative z-20">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
