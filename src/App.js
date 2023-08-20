import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./components/providerComponent/CartProvider";
import Header from "./components/header/Header";
import Vegetables from "./components/vegetables/Vegetables";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Vegetables />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
