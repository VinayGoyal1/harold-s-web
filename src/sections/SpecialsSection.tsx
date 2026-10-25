import { specials } from '../data/restaurant';

const SpecialsSection = () => {
  return (
    <section className="bg-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primaryText tracking-wide">
            TODAY'S COMFORTS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-[40px] md:rounded-[55px] overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1000&h=800&fit=crop"
                alt="Southern comfort food plate"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column - Menu items */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            {specials.map((special) => (
              <div key={special.id} className="pb-6 border-b border-border last:border-b-0">
                <h3 className="text-lg md:text-xl font-serif text-primaryText tracking-wide mb-2 font-semibold">
                  {special.name}
                </h3>
                <p className="text-primaryText/80 text-sm md:text-base leading-relaxed">
                  {special.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
