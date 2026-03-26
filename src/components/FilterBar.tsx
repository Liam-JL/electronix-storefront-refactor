import Button from "./Button";
import type { Category } from "../pages/Store";

type FilterBarProps = {
  categories: Category[];
  onPress: (arg0: Category) => void;
  activeCategory: Category;
};

function FilterBar({ categories, onPress, activeCategory }: FilterBarProps) {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      {categories.map((category) => {
        return (
          <Button
            title={category.charAt(0).toUpperCase() + category.slice(1)}
            onPress={() => onPress(category)}
            defaultStyle={false}
            className={`${activeCategory === category ? "activeCategoryBtn" : "inactiveCategoryBtn"} hover:bg-accent-light hover:text-electronix-white hover:border-accent-light`}
          />
        );
      })}
    </div>
  );
}

export default FilterBar;
