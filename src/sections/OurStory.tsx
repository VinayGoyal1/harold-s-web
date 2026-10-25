const OurStory = () => {
  return (
    <section id="story" className="bg-cream py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primaryText tracking-wide mb-6">
            GOOD FOOD. GOOD PEOPLE. GOOD HOME COOKING.
          </h2>
        </div>
        
        <div className="space-y-6 text-primaryText/90 leading-relaxed">
          <p className="text-base md:text-lg">
            Harold's Kitchen serves Southern comfort food and hearty meals to our local community here in Richmond, Virginia. 
            We take pride in offering homestyle cooking where every dish is prepared with care and served with genuine hospitality.
          </p>
          <p className="text-base md:text-lg">
            From our golden fried chicken and tender turkey wings to our creamy mac and cheese and fresh cornbread, 
            each meal brings the warmth and flavor of traditional Southern cooking to your table.
          </p>
          <p className="text-base md:text-lg">
            We're your neighborhood kitchen - a place where good food brings people together and everyone is welcomed like family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
