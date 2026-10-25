import { Phone, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '../data/restaurant';

const LocationSection = () => {
  return (
    <section id="contact" className="bg-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primaryText tracking-wide">
            COME FIND US
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-primaryText mb-4">Harold's Kitchen</h3>
              <div className="flex items-start space-x-3 mb-4">
                <MapPin size={20} className="text-accentCoral mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primaryText leading-relaxed">
                    {restaurantInfo.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${restaurantInfo.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-primaryText text-cream hover:bg-darkBrown transition-colors font-medium"
              >
                <Phone size={18} />
                <span>{restaurantInfo.phone}</span>
              </a>
              <a
                href={restaurantInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-primaryText text-primaryText hover:bg-primaryText hover:text-cream transition-colors font-medium"
              >
                <MapPin size={18} />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

            <div>
              <h4 className="text-lg font-serif text-primaryText mb-3 flex items-center space-x-2">
                <Clock size={18} className="text-accentCoral" />
                <span>Opening Hours</span>
              </h4>
              <div className="space-y-2">
                {restaurantInfo.hours.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-border">
                    <span className="text-primaryText">{item.day}</span>
                    <span className="text-primaryText/80">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-serif text-primaryText mb-3">General Inquiries & Catering</h4>
              <p className="text-primaryText/80 text-sm leading-relaxed">
                For catering requests and general inquiries, please call us during business hours.
              </p>
            </div>
          </div>

          {/* Right column - Map */}
          <div>
            <div className="rounded-[20px] overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
              <iframe
                src={restaurantInfo.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Harold's Kitchen Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
