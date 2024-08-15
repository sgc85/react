import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "bread", quantity: 1 },
      { id: 2, title: "cheese", quantity: 1 },
    ],
  });

  const updateQuantity = (id: number) => {
    const newItems = [...cart.items]
    newItems.map(item => {
      item.id === id? item.quantity++  : item.quantity;
    })
    const newCart = {...cart, items: newItems}
    setCart(newCart)
    
  }

  return <div>
    <h1>shopping cart</h1>
    <ul>
      {cart.items.map( item => <li key = {item.id}>{item.title} : {item.quantity} <button onClick = { () => { updateQuantity(item.id) } } > + </button></li>)}
    </ul>
    
  </div>;
}

export default App;
