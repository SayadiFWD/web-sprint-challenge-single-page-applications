import React, { useState } from "react";

function Form() {
  const [orders, setOrders] = useState({
    name: "",
    sizs: "",
    pinapple: "",
    olive: "",
    sausage: "",
    mushroom: "",
    onion: "",
    special: "",
  });

  const inputChange = (e) => {
    setOrders({
      ...orders,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <form>
      <label htmlFor="nameInput">
        Name:
        <input type="text" id="nameInput" name="name" />
      </label>
      <br />
      {/* Size */}
      <label htmlFor="sizeInput">
        <select id="sizeInput" name="size">
          <option></option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra Large">Extra Large</option>
        </select>
      </label>
      <br />

      {/* Toppings */}
      <label htmlFor="toppingP">
        <input
          type="checkbox"
          id="toppingP"
          name="pinapple"
          checked={orders.pinapple}
          onChange={inputChange}
        />
        Pineapple :
      </label>
      <br />
      <label htmlFor="oTopping">
        <input
          type="checkbox"
          id="oTopping"
          name="olive"
          checked={orders.oliver}
          onChange={inputChange}
        />
        Olive :
      </label>
      <br />
      <label htmlFor="sTopping">
        <input
          type="checkbox"
          id="sTopping"
          name="sausage"
          checked={orders.sausage}
          onChange={inputChange}
        />
        Sausage :
      </label>
      <br />

      <label htmlFor="mToppoing">
        <input
          type="checkbox"
          id="mTopping"
          name="mushroom"
          checked={orders.mushroom}
          onChange={inputChange}
        />
        Mushroom :
      </label>
      <br />

      <label htmlFor="onTopping">
        <input
          type="checkbox"
          id="onTopping"
          name="onion"
          checked={orders.onion}
          onChange={inputChange}
        />
        Onion :
      </label>
      <br />
      {/* special instructions */}
      <label htmlFor="specialInputs">
        Special Instructions :<br />
        <textarea id="spicialInputs" name="special" />
      </label>
      <br />
      <button type="submit">Order</button>
    </form>
  );
}

export default Form;
