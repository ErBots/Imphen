
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Community from '@/components/Community';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update document title
    document.title = "Imphen - Programmer Handal Tanpa Ngoding";
    
    // Force loading screen to complete if it gets stuck
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Safety timeout
    
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <div className="min-h-screen bg-dark-900 text-white">
          <Navbar />
          <Hero />
          <Features />
          <Community />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
