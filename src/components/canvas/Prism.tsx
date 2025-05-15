import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import CanvasLoader from "../layout/Loader";

const PrismVideo: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video 
        className="h-full w-full object-cover" 
        autoPlay 
        playsInline 
        loop 
        muted 
        preload="auto"
      >
        <source src="153957-806571952.mp4" type="video/webm" />
      </video>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-primary to-transparent"/>
    </div>
  );
};

const PrismCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // If there's no WebM support or it's a mobile device, we'll use the 3D canvas as fallback
  if (typeof window !== 'undefined' && !document.createElement('video').canPlayType('video/webm') || isMobile) {
    return (
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} intensity={1} />
          {/* Fallback 3D content */}
        </Suspense>

        <Preload all />
      </Canvas>
    );
  }

  // For desktop and browsers with WebM support, use the video
  return <PrismVideo />;
};

export default PrismCanvas; 