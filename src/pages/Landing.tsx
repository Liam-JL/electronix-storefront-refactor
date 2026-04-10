import { useNavigate } from "react-router";
import Button from "../components/Button";
import FeaturedCarousel from "../components/FeaturedCarousel";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards] text-center px-6 py-10 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 mb-12">
        <h1 className="orbitron font-semibold text-4xl md:text-5xl leading-tight max-w-2xl">
          Power Up Your Life with the Latest Tech
        </h1>

        <p className="text-gray-500 max-w-xl text-base md:text-lg">
          Discover cutting-edge electronics, unbeatable prices, and fast
          delivery — all in one place.
        </p>

        <div className="mt-2">
          <Button
            title="Shop Now"
            onPress={() => navigate("/store")}
            accessibilityLabel="Go to Store"
            className="px-6 py-3 shadow-md hover:shadow-lg"
          />
        </div>
      </section>

      {/* Product Image Section */}
      <section>
        <FeaturedCarousel />
      </section>
      
    </div>
  );
}
export default Landing;
