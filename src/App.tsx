import Header from './components/Header';
import WelcomeSection from './sections/WelcomeSection';
import FeaturedDishes from './sections/FeaturedDishes';
import SpecialsSection from './sections/SpecialsSection';
import SouthernFavorites from './sections/SouthernFavorites';
import BreakfastSection from './sections/BreakfastSection';
import OurStory from './sections/OurStory';
import LocationSection from './sections/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <WelcomeSection />
        <FeaturedDishes />
        <SpecialsSection />
        <SouthernFavorites />
        <BreakfastSection />
        <OurStory />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App
