import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";

function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-electronix-white shadow-md z-1">
        <Navbar />
      </header>
      <main className="flex flex-col flex-1 p-8 justify-center items-center gap-8 bg-linear-to-br from-electronix-white to-electronix-light-grey z-0">
        <div className="md:hidden w-full">
          <Searchbar />
        </div>
        <Outlet />
        <div className="page-background absolute bg-[url(circuit-board.svg)] h-full w-full -z-1 mask-[linear-gradient(to_bottom_right, transparent_50%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom_right,transparent_55%,black_100%)]"></div> 
      </main>
      <footer className="z-1">
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
