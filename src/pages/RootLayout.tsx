import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";

function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col flex-1 p-8 justify-center items-center gap-8">
        <div className="md:hidden w-full">
          <Searchbar />
        </div>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
