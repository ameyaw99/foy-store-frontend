import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import Signin from "./scenes/auth/SignIn";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import About from "./components/About";
import Terms from "./components/Terms";
import ShippingPolicy from "./components/ShippingPolicy";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
    {/*<Subscribe/> */}
         <Routes>
          <Route path="/" element={<Subscribe />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="item/:itemId" element={<ItemDetails />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="checkout/success" element={<Confirmation />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/shipping" element={<ShippingPolicy />} />
                  <Route path="/side" element={<Sidebar />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
                <CartMenu />
              </>
            }
          />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
