import { breakfastItems } from '../data/restaurant';

const BreakfastSection = () => {
  return (
    <section className="bg-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primaryText tracking-wide">
            GOOD MORNING, RICHMOND
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Image */}
          <div>
            <div className="rounded-[40px] md:rounded-[55px] overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1000&h=800&fit=crop"
                alt="Breakfast plate"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column - Menu list */}
          <div className="space-y-5">
            {breakfastItems.map((item) => (
              <div key={item.name} className="flex items-start space-x-4">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-serif text-primaryText tracking-wide font-semibold mb-1">
                    {item.name.toUpperCase()}
                  </h3>
                  <p className="text-primaryText/70 text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="flex-1 border-b border-border mt-3 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakfastSection;
