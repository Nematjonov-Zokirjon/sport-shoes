import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Cart from "./pages/Cart";
import Listingpage from "./pages/Listingpage";
import Mijozlar from "./pages/Mijozlar";
import Productpage from "./pages/Productpage";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="flex flex-col gap-2 min-h-screen">
        <Header />

        {/* Page content */}
        <div className="grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/listing" element={<Listingpage />} />
            <Route path="/mijozlar" element={<Mijozlar />} />
            <Route path="/product" element={<Productpage />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
