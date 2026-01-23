import { Footer } from './components/Layout/Footer';
import { SurveyContainer } from './components/Survey/SurveyContainer';

function App() {
  return (
    <div className="min-h-screen flex">
      {/* Survey content - left/main side */}
      <div className="flex-1 flex flex-col min-h-screen lg:max-w-[60%] relative z-10">
        {/* Mobile-only header */}
        <header className="lg:hidden pt-4 pb-2">
          <div className="flex items-center justify-center">
            <img
              src="/assets/logo.png"
              alt="Mustard by Mags"
              className="h-28 w-auto"
            />
          </div>
        </header>

        <main className="flex-1 flex items-start justify-center pb-8 px-4 pt-8 lg:pt-16">
          <SurveyContainer />
        </main>
        <Footer />
      </div>

      {/* Mags sticker + logo - right side, desktop only */}
      <div className="hidden lg:block w-[40%] relative">
        {/* Logo behind Mags - large and partially obscured */}
        <img
          src="/assets/logo.png"
          alt="Mustard by Mags"
          className="fixed top-2 right-5 h-auto w-[45vw] opacity-90 pointer-events-none"
        />

        {/* Mags image - in front of logo */}
        <img
          src="/assets/cropped_image.png"
          alt="Mags holding jars of homemade mustard"
          className="fixed bottom-0 right-8 h-[80vh] w-auto object-contain pointer-events-none z-10"
          style={{
            filter: 'drop-shadow(0 4px 20px rgba(45, 24, 16, 0.15))',
          }}
        />
      </div>
    </div>
  );
}

export default App;
