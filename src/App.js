import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Form";
import Note from "./components/note";

const App = () => {
 
  const [notes, setNotes] = useState([]);

  const addNewNote = (formData) => {
    const newNote = {
      id: Date.now(),
      name: formData.name,
      special: formData.special,
      positions: formData.positions,
      pineapple: formData.pineapple,
      mushroom: formData.mushroom,
      onion: formData.onion,
      olive: formData.olive,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to="/">Home</Link>
      <Link to="/pizza">Pizza</Link>
      <div>
        <Route exact path="/" component={Home} />

        <Route path="/pizza">
          <Pizza addNewNote={addNewNote}/>
        </Route>
        <Note notes={notes} />
      </div>
    </>
  );
};
export default App;
