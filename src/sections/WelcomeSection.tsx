const WelcomeSection = () => {
  return (
    <section className="bg-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-accentCoral tracking-wide mb-4">
            WELCOME TO HAROLD'S
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
          {/* Divider lines for desktop */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-border"></div>
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-border"></div>

          {/* Block 1 */}
          <div className="text-center px-4 md:px-8 py-6">
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl md:text-7xl font-serif text-secondarySage font-bold">01</span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-primaryText mb-3 tracking-wide">
              HOMESTYLE COOKING
            </h3>
            <p className="text-primaryText/80 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
              Traditional comfort food prepared with care.
            </p>
          </div>

          {/* Block 2 */}
          <div className="text-center px-4 md:px-8 py-6">
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl md:text-7xl font-serif text-secondarySage font-bold">02</span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-primaryText mb-3 tracking-wide">
              BIG COMFORT, REAL FLAVOR
            </h3>
            <p className="text-primaryText/80 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
              Hearty meals inspired by Southern cooking traditions.
            </p>
          </div>

          {/* Block 3 */}
          <div className="text-center px-4 md:px-8 py-6">
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl md:text-7xl font-serif text-secondarySage font-bold">03</span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-primaryText mb-3 tracking-wide">
              YOUR NEIGHBORHOOD KITCHEN
            </h3>
            <p className="text-primaryText/80 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
              A local spot where good food and hospitality come together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
