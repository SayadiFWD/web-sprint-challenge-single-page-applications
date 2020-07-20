import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  size: yup.string().required("Must slick a Pizza size"),
  original: yup.boolean().oneOf([true]),
  garlic: yup.boolean().oneOf([true]),
  bbq: yup.boolean().oneOf([true]),
  spinach: yup.boolean().oneOf([true]),
  pepperoni: yup.boolean().oneOf([true]),
  sausage: yup.boolean().oneOf([true]),
  canadian: yup.boolean().oneOf([true]),
  spicy: yup.boolean().oneOf([true]),
  onions: yup.boolean().oneOf([true]),
});

function Form() {
  const [pizzaState, setPizzaState] = useState({
    size: "",
    original: false,
    garlic: false,
    bbq: false,
    spinach: false,
    pepperoni: false,
    sausage: false,
    canadian: false,
    spicy: false,
    onions: false,
  });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    setPizzaState({ size: "",
    original: "",
    garlic: "",
    bbq: "",
    spinch: "",
    pepperoni: "",
    sausage: "",
    canadian: "",
    spicy: "",
    onions: "",})
    axios
      .post("https://reqres.in/api/users", pizzaState)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const [errors, setErrors] = useState({
    size: "",
    original: "",
    garlic: "",
    bbq: "",
    spinch: "",
    pepperoni: "",
    sausage: "",
    canadian: "",
    spicy: "",
    onions: "",
  });

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    console.log(e.target.name, e.target.value, e.target.checked);

    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setPizzaState({ ...pizzaState, [e.target.name]: value });
  };

  return (
    <div>
      <h1>Build Your Own Pizza</h1>

      <form onSubmit={formSubmit}>
        <h6>
          Choice of Size
          <br />
          Requird
        </h6>
        <label htmlFor="size">
          <select
            name="size"
            id="size"
            value={pizzaState.size}
            onChange={inputChange}
          >
            <option vlaue="small">Small </option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="exl">Extra Large</option>
          </select>
        </label>
        <br />
        <h6>
          Choice of Souce
          <br /> Required
        </h6>
        <label htmlFor="original">
          <input
            name="original"
            id="original"
            type="checkbox"
            checked={pizzaState.original}
            onChange={inputChange}
          />
          Original Red
        </label>
        <br />
        <label htmlFor="garlic">
          <input
            name="garlic"
            id="garlic"
            type="checkbox"
            checked={pizzaState.garlic}
            onChange={inputChange}
          />
          Garlic Ranch
        </label>
        <br />
        <label htmlFor="bbq">
          <input
            name="bbq"
            id="bbq"
            type="checkbox"
            checked={pizzaState.bbq}
            onChange={inputChange}
          />
          BBQ Sauce
        </label>
        <br />
        <label htmlFor="spinach">
          <input
            name="spinach"
            id="spinach"
            type="checkbox"
            checked={pizzaState.spinach}
            onChange={inputChange}
          />
          Spinach Alfredo
        </label>
        <br />
        <h6>
          Add Toppings
          <br /> Choose up to 5
        </h6>
        <label htmlFor="pepperoni">
          <input
            name="pepperoni"
            id="pepperoni"
            type="checkbox"
            checked={pizzaState.pepperoni}
            onChange={inputChange}
          />
          Pepperoni
        </label>
        <br />
        <label htmlFor="sausage">
          <input
            name="sausage"
            id="sausage"
            type="checkbox"
            checked={pizzaState.sausage}
            onChange={inputChange}
          />
          Sausage
        </label>
        <br />
        <label htmlFor="canadian">
          <input
            name="canadian"
            id="canadian"
            type="checkbox"
            checked={pizzaState.canadian}
            onChange={inputChange}
          />
          Canadian Bacon
        </label>
        <br />
        <label htmlFor="spicy">
          <input
            name="spicy"
            id="spicy"
            type="checkbox"
            checked={pizzaState.spicy}
            onChange={inputChange}
          />
          Spicy Italian Sausage
        </label>
        <br />
        <label htmlFor="onions">
          <input
            name="onions"
            id="onions"
            type="checkbox"
            checked={pizzaState.onions}
            onChange={inputChange}
          />
          Onions
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
