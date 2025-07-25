import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Experince from "./components/Experince";
import Why from "./components/Why";
import Returns from "./components/Returns";
import Companies from "./components/Companies";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="bg-white font-sans text-[#475569]">
      <Navbar />
      <main>
        <Landing />
        <Experince />
        <Why />
        <Returns />
        <Companies />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
