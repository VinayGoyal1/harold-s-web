import { MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/restaurant';

const Footer = () => {
  return (
    <footer className="bg-darkBrown text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
                HAROLD'S KITCHEN
              </div>
              <div className="text-xs tracking-[0.3em] text-cream/80 mt-1">
                SOUTHERN COMFORT FOOD
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed max-w-md">
              A neighborhood restaurant serving Southern comfort food and hearty meals with genuine hospitality.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-cream/80 hover:text-cream transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#menu" className="text-cream/80 hover:text-cream transition-colors text-sm">Menu</a>
              </li>
              <li>
                <a href="#story" className="text-cream/80 hover:text-cream transition-colors text-sm">About</a>
              </li>
              <li>
                <a href="#contact" className="text-cream/80 hover:text-cream transition-colors text-sm">Contact</a>
              </li>
              <li>
                <a href="#catering" className="text-cream/80 hover:text-cream transition-colors text-sm">Catering</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-accentCoral mt-1 flex-shrink-0" />
                <span className="text-cream/80 text-sm">
                  {restaurantInfo.address}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-accentCoral flex-shrink-0" />
                <a href={`tel:${restaurantInfo.phone.replace(/[^0-9]/g, '')}`} className="text-cream/80 hover:text-cream transition-colors text-sm">
                  {restaurantInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} Harold's Kitchen. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={restaurantInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-cream transition-colors text-sm"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
