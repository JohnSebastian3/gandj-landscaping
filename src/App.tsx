import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Landing from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {

  return (
    <BrowserRouter>
      <div className="font-playfair">
        <Navbar
        />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />} ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes> 
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
