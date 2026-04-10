import Button from "./Button";

function FeaturedCarousel() {
  return (
    <div className="w-full flex justify-center items-center gap-4">
      <Button title={"<"} onPress={() => {}} className="h-10" />
      <div>
        <article>
          <img src="hero-image-placeholder.png" alt="" className="w-60 h-60" />
          <h3 className="text-electronix-black">Example Product</h3>
          {/* Put price here next */}
        </article>
      </div>
      <Button title={">"} onPress={() => {}} className="h-10" />
    </div>
  );
}

export default FeaturedCarousel;
