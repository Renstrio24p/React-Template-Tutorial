import Footer from "../components/Footer/Footer";
import Navbar from "../components/nav/Navbar";
import Home from "../components/sections/home/Home";
import Tutorial from "../components/sections/how/Tutorial";
import Upper from "../components/sections/how/Upper";

export default function HowTo() {
  return (
    <div className="how">
        <Navbar />
        <Home />
        <Footer />
    </div>
  )
}