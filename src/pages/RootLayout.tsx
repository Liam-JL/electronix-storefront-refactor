import {Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center items-center flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
