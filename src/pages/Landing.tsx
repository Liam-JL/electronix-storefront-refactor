import { Link } from "react-router";
import { Navigate } from "react-router";
import Button from "../components/Button";
function Landing() {
  return (
    <div>
      <section className="hero">
        <h1 className="orbitron font-medium">
          Power Up Your Life with the Latest Tech
        </h1>
        <p>
          Discover cutting-edge electronics, unbeatable prices, and fast
          delivery - all in one place.
        </p>
        <Button
          title="Shop Now"
          onPress={() => {
            console.log("button pressed");
          }}
          accessibilityLabel="Go to Shop"
        />
      </section>
    </div>
  );
}

export default Landing;


