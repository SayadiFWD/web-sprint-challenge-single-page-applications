import React, { useState, useEffect } from "react";
import * as yup from "yup";


export default function Form(props) {
  const [post, setPost] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    special: "",
    positions: "",
    pineapple: "",
    mushroom:"",
    onion:"",
    olive:""

  });

  //////////////////////////////////////////
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    special: "",
    positions: "",
    pineapple: "",
    mushroom:"",
    onion:"",
    olive:""
  });

  const fromSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),





    pineapple: yup.boolean().oneOf([true]),
    mushroom: yup.boolean().oneOf([true]),
    onion: yup.boolean().oneOf([true]),
    olive: yup.boolean().oneOf([true]),





    positions: yup.string(),
    special: yup.string().required("Anything special"),
  });

  const validateChange = (e) => {
    yup
      .reach(fromSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log("error!", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };
  console.log("error state", errors);
  useEffect(() => {
    fromSchema.isValid(formState).then((valid) => {
      console.log(valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  ///////////////////////////////////////////
  const inputChange = (e) => {
    console.log(e.target.value);
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    props.addNewNote(formState);
  
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name:
        <br />
        <input
          id="name"
          type="text"
          name="name"
          onChange={inputChange}
          value={formState.name}
        />
      </label>
      <br />
      {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}

      <label htmlFor="positions">
        Select a Pizza size :<br />
        <select id="positions" name="positions" onChange={inputChange}>
          <option />
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>

          <option value="Large">Large</option>

          <option value="Extra Large">Extra Large</option>
        </select>
      </label>
      <br />
      <label htmlFor="pineapple">
       
        <input
          type="checkbox"
          name="pineapple"
          checked={formState.pineapple}
          onChange={inputChange}
        />
         Pineapple
      </label>
      <br />
      <label htmlFor="mushroom">
       
       <input
         type="checkbox"
         name="mushroom"
         checked={formState.mushroom}
         onChange={inputChange}
       />
        Mushroom
     </label>
     <br />
     <label htmlFor="onion">
       
       <input
         type="checkbox"
         name="onion"
         checked={formState.nion}
         onChange={inputChange}
       />
       Onion
     </label>
     <br />
     <label htmlFor="olive">
       
       <input
         type="checkbox"
         name="olive"
         checked={formState.olive}
         onChange={inputChange}
       />
       Olive
     </label>
     <br />
      <label htmlFor="specialInput">
        Special Instructions :<br />
        <textarea id="specialInput" name="special" onChange={inputChange} />
      </label>
      {errors.special.length > 0 ? <p className="error">{errors.special}</p> : null}
      <br />

      <button type="submit" disabled={isButtonDisabled}>
        Submit
      </button>
    </form>
  );
}
