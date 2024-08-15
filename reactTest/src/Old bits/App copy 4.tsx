import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Ham and Pineapple",
    toppings: ["Ham"],
  });

  const addTopping = () => {
    // const newToppings : string[] = [...pizza.toppings, "Pineapple"];
    // const newPizza = {...pizza, toppings: newToppings}
    // setPizza(newPizza)

    //or...
    setPizza({...pizza, toppings: [...pizza.toppings, "Pineapple"]})
  };

  return (
    <div>
      <h1>{pizza.name}</h1>
      <ul>
        {pizza.toppings.map((topping) => (
          <li>{topping}</li>
        ))}
      </ul>
      <button onClick={addTopping}>Add Topping</button>
    </div>
  );
}

export default App;
