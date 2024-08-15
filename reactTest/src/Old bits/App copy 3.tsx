import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import { useState } from "react";

function App() {
  // const cartItems = ["dog", "fish", "cat"];

  const [getCart, setCart] = useState(["Dog","Fish","Cat"])

  const onClear = () => {
    let newCart : string[] = []
    setCart(newCart)
  }

  return (
    <div>
      <NavBar cartItemsCount={getCart.length}></NavBar>
      <br></br>
      <Cart cartItems={getCart} onClear={onClear}></Cart>
    </div>
  );
}

export default App;
