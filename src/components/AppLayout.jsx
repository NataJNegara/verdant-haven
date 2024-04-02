import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
