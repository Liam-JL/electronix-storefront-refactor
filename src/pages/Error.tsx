import Button from "../components/Button";
import { useNavigate } from "react-router";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-xl">Page not found!</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        velit quo soluta assumenda tenetur dignissimos, aspernatur quos placeat
        perferendis vero, asperiores minus magnam? Eaque nam, corporis commodi
        recusandae magnam consequatur.
      </p>
      <Button
        title="Continue Shopping"
        onPress={() => {
          navigate("/store");
        }}
        accessibilityLabel="Go to Store"
      />
    </div>
  );
}

export default Error;
