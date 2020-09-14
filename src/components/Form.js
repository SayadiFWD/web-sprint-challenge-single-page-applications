import React, { useState ,useEffect } from "react";
import * as yup from "yup";

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
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    sizs: "",
    pinapple: "",
    olive: "",
    sausage: "",
    mushroom: "",
    onion: "",
    special: "",
  });

  //   Validation
  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    size: yup.string().required(),

    pinapple: yup.boolean().oneOf([true], "Please Choose a topping"),
    olive: yup.boolean().oneOf([true], "Please Choose a topping"),
    sausage: yup.boolean().oneOf([true], "Please Choose a topping"),
    mushroom: yup.boolean().oneOf([true], "Please Choose a topping"),
    onion: yup.boolean().oneOf([true], "Please Choose a topping"),

    spcial: yup.string(),
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .the((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => setErrors({ ...errors, [e.target.name]: err.errors[0] }));
  };

  useEffect(() => {
    formSchema.isValid(orders).then((valid) => {
      setIsButtonDisabled(!valid);
    });
  }, [orders]);







  const inputChange = (e) => {
    e.persist();
    validateChange(0);
    setOrders({
      ...orders,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefaulte();
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="nameInput">
        Name:
        <input
          type="text"
          id="nameInput"
          name="name"
          value={orders.name}
          onChange={inputChange}
        />
      </label>
      <br />
      {/* Size */}
      <label htmlFor="sizeInput">
        Select Pizza Size :<br />
        <select
          id="sizeInput"
          name="size"
          value={orders.size}
          onChange={inputChange}
        >
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
        <textarea
          id="spicialInputs"
          name="special"
          value={orders.special}
          onChange={inputChange}
        />
      </label>
      <br />
      <button type="submit">Order</button>
    </form>
  );
}

export default Form;
