
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleJoinCommunity = () => {
    window.open("https://facebook.com/groups/programmerhandal/", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-600">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Imphen</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleScrollTo('root')} 
            className="text-white/80 hover:text-white transition-colors"
          >
            Beranda
          </button>
          <button 
            onClick={() => handleScrollTo('features')} 
            className="text-white/80 hover:text-white transition-colors"
          >
            Fitur
          </button>
          <button 
            onClick={() => handleScrollTo('community')} 
            className="text-white/80 hover:text-white transition-colors"
          >
            Komunitas
          </button>
          <Button 
            className="bg-gradient-to-r from-accent1 to-accent2 text-white"
            onClick={handleJoinCommunity}
          >
            Gabung Sekarang
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800 border-b border-dark-600 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => handleScrollTo('root')} 
              className="text-white/80 hover:text-white transition-colors py-2 text-left"
            >
              Beranda
            </button>
            <button 
              onClick={() => handleScrollTo('features')} 
              className="text-white/80 hover:text-white transition-colors py-2 text-left"
            >
              Fitur
            </button>
            <button 
              onClick={() => handleScrollTo('community')} 
              className="text-white/80 hover:text-white transition-colors py-2 text-left"
            >
              Komunitas
            </button>
            <Button 
              className="bg-gradient-to-r from-accent1 to-accent2 text-white w-full"
              onClick={handleJoinCommunity}
            >
              Gabung Sekarang
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
