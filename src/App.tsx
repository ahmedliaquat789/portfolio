import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  PrismCanvas,
  Footer,
} from "./components";
import { useEffect, useState } from "react";
import { config } from "./constants/config";
import SiteLoader from "./components/layout/SiteLoader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      {isLoading ? (
        <SiteLoader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="bg-primary relative z-0">
          <div className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <PrismCanvas />
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
