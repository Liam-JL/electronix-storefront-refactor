import { useNavigate } from "react-router";
import Button from "../components/Button";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards]">
      <section className="hero flex flex-1 flex-col gap-6">
        <h1 className="orbitron font-medium text-4xl/<1.2>">
          Power Up Your Life with the Latest Tech
        </h1>
        <p>
          Discover cutting-edge electronics, unbeatable prices, and fast
          delivery - all in one place.
        </p>
        <Button
          title="Shop Now"
          onPress={() => {
            navigate("/store");
          }}
          accessibilityLabel="Go to Store"
        />
      </section>

      <section className="product-carousel flex flex-1 justify-center items-center max-h-full">
          <img src="hero-image-placeholder.png" alt="Image of an iPhone" className="object-cover w-full h-full p-16 max-h-full"/>
      </section>
    </div>
  );
}

export default Landing;
