import Button from "./Button";

function FeaturedCarousel() {
  return (
    <div className="w-full flex justify-center items-center gap-4">
      <Button title={"<"} onPress={() => {}} className="h-10" />
      <div>
        <article>
          <img src="hero-image-placeholder.png" alt="" className="w-60 h-60" />
        </article>
      </div>
      <Button title={">"} onPress={() => {}} className="h-10" />
    </div>
  );
}

export default FeaturedCarousel;
