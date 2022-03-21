import * as React from "react";
import "./App.css";
import Header from "./components/header/header";
import CartProvider from "./context/cart-context";
import SneakersLandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <div className="App">
      <CartProvider>
        {/* <Header /> */}
        <SneakersLandingPage />
      </CartProvider>
    </div>
  );
}

export default App;
