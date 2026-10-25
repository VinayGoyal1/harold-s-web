import { Phone, MapPin } from 'lucide-react';
import { restaurantInfo } from '../data/restaurant';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top utility bar */}
      <div className="bg-darkBrown text-cream text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center space-x-6">
              <a href="#story" className="hover:text-accentCoral transition-colors">Our Story</a>
              <a href="#contact" className="hover:text-accentCoral transition-colors">Gift Cards</a>
            </div>
            <div className="hidden md:flex items-center">
              <span className="text-xs tracking-wider">806 E 22nd St, Richmond, VA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-cream border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6 space-y-4 md:space-y-0">
            {/* Left navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-primaryText hover:text-accentCoral transition-colors text-sm tracking-widest font-medium">HOME</a>
              <a href="#menu" className="text-primaryText hover:text-accentCoral transition-colors text-sm tracking-widest font-medium">MENU</a>
              <a href="#story" className="text-primaryText hover:text-accentCoral transition-colors text-sm tracking-widest font-medium">ABOUT US</a>
            </nav>

            {/* Logo */}
            <div className="text-center">
              <a href="#home" className="block">
                <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wide text-primaryText leading-tight">
                  HAROLD'S
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-wide text-primaryText leading-tight">
                  KITCHEN
                </div>
                <div className="text-xs md:text-sm tracking-[0.3em] text-secondarySage mt-1">
                  {restaurantInfo.tagline}
                </div>
              </a>
            </div>

            {/* Right navigation */}
            <div className="flex items-center space-x-4">
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="#catering" className="text-primaryText hover:text-accentCoral transition-colors text-sm tracking-widest font-medium">CATERING</a>
                <a href="#contact" className="text-primaryText hover:text-accentCoral transition-colors text-sm tracking-widest font-medium">CONTACT</a>
              </nav>
              <div className="flex items-center space-x-2 md:space-x-3">
                <a 
                  href={`tel:${restaurantInfo.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center space-x-2 px-3 md:px-4 py-2 border-2 border-primaryText text-primaryText hover:bg-primaryText hover:text-cream transition-colors text-xs md:text-sm tracking-widest font-medium"
                >
                  <Phone size={16} />
                  <span className="hidden sm:inline">CALL TO ORDER</span>
                </a>
                <a 
                  href={restaurantInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 md:px-4 py-2 border-2 border-primaryText text-primaryText hover:bg-primaryText hover:text-cream transition-colors text-xs md:text-sm tracking-widest font-medium"
                >
                  <MapPin size={16} />
                  <span className="hidden sm:inline">GET DIRECTIONS</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <nav className="lg:hidden flex items-center justify-center space-x-4 pb-4 flex-wrap gap-2">
            <a href="#home" className="text-primaryText hover:text-accentCoral transition-colors text-xs tracking-widest font-medium">HOME</a>
            <span className="text-border">|</span>
            <a href="#menu" className="text-primaryText hover:text-accentCoral transition-colors text-xs tracking-widest font-medium">MENU</a>
            <span className="text-border">|</span>
            <a href="#story" className="text-primaryText hover:text-accentCoral transition-colors text-xs tracking-widest font-medium">ABOUT US</a>
            <span className="text-border">|</span>
            <a href="#catering" className="text-primaryText hover:text-accentCoral transition-colors text-xs tracking-widest font-medium">CATERING</a>
            <span className="text-border">|</span>
            <a href="#contact" className="text-primaryText hover:text-accentCoral transition-colors text-xs tracking-widest font-medium">CONTACT</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
