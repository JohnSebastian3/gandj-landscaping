import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Main from "./pages/Main";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="font-playfair">
      <Navbar />
      <Hero />
      <Main />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
