import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { featuredDishes } from '../data/restaurant';

const FeaturedDishes = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="menu" className="bg-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primaryText tracking-wide mb-6">
            OUR MENU
          </h2>
          
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            <button className="px-6 py-2 text-sm tracking-widest text-accentCoral border-b-2 border-accentCoral font-medium">
              BREAKFAST
            </button>
            <button className="px-6 py-2 text-sm tracking-widest text-primaryText hover:text-accentCoral transition-colors font-medium">
              LUNCH & DINNER
            </button>
            <button className="px-6 py-2 text-sm tracking-widest text-primaryText hover:text-accentCoral transition-colors font-medium">
              SIDES
            </button>
            <button className="px-6 py-2 text-sm tracking-widest text-primaryText hover:text-accentCoral transition-colors font-medium">
              DESSERTS
            </button>
          </div>
        </div>

        {/* Horizontal category navigation */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex items-center space-x-6 md:space-x-8 min-w-max pb-2">
            <button className="text-sm tracking-widest text-accentCoral font-medium border-b-2 border-accentCoral pb-1">
              FEATURED
            </button>
            <button className="text-sm tracking-widest text-primaryText hover:text-accentCoral transition-colors pb-1">
              BREAKFAST
            </button>
            <button className="text-sm tracking-widest text-primaryText hover:text-accentCoral transition-colors pb-1">
              SOUL FOOD PLATES
            </button>
            <button className="text-sm tracking-widest text-primaryText hover:text-accentCoral transition-colors pb-1">
              SIDES
            </button>
            <button className="text-sm tracking-widest text-primaryText hover:text-accentCoral transition-colors pb-1">
              SANDWICHES
            </button>
            <button className="text-sm tracking-widest text-primaryText hover:text-accentCoral transition-colors pb-1">
              SEAFOOD
            </button>
            <button className="text-sm tracking-widest text-primaryText hover:text-accentCoral transition-colors pb-1">
              DESSERTS
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-primaryText tracking-wide mb-6">
            HOUSE FAVORITES
          </h3>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cream/90 hover:bg-cream p-2 rounded-full shadow-lg border border-border hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-primaryText" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cream/90 hover:bg-cream p-2 rounded-full shadow-lg border border-border hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-primaryText" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="flex-shrink-0 w-64 md:w-72 lg:w-80 snap-start"
              >
                <div className="relative rounded-[40px] md:rounded-[55px] overflow-hidden shadow-lg group cursor-pointer">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-[400px] md:h-[480px] object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                    <h4 className="text-white font-serif text-sm md:text-base tracking-wide">
                      {dish.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
