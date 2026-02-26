import { useNavigate } from "react-router";
import { IoSearch as SearchIcon } from "react-icons/io5";

function Searchbar() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.search as HTMLInputElement;
    const searchTerm = input.value;
    input.value = "";
    navigate(`/store?search=${encodeURIComponent(searchTerm)}`);
  }

  return (
    <form className="flex gap-2 w-full justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search products..."
        autoComplete="off"
        className="border-2 border-solid rounded-xl pl-4 pr-4 w-full max-w-[500px] bg-electronix-white"
      />
      <button type="submit" className="">
        <SearchIcon className="w-6 h-auto" />
      </button>
    </form>
  );
}

export default Searchbar;
