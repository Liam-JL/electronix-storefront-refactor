import { redirect } from "react-router";
import { IoSearch as SearchIcon } from "react-icons/io5";
import { Form } from "react-router-dom";

export const search = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    query: data.get("search"),
  };
  const input = document.getElementById("searchBar") as HTMLInputElement;
  input.value = "";
  return redirect(`/store?search=${encodeURIComponent(submission.query)}`);
};

function Searchbar() {
  return (
    <Form className="flex gap-2 justify-center" method="post" action="/store">
      <input
        id="searchBar"
        type="text"
        name="search"
        placeholder="Search products..."
        autoComplete="off"
        className="border-2 border-solid rounded-xl pl-4 pr-4 w-full bg-electronix-white"
      />
      <button
        type="submit"
        className="cursor-pointer transition-all duration-200 ease-in-out hover:scale-105"
      >
        <SearchIcon className="w-6 h-auto" />
      </button>
    </Form>
  );
}

export default Searchbar;
