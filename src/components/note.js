import React from "react";

const Notes = (props) => {
 

  return (
    <div >
      {props.notes.map((note) => (
        <div key={note.id}>
          <h2>{note.name}</h2>
          <p>{note.special}</p>
          <p>{note.positions}</p>
          <p>{note.pineapple}</p>
          <p>{note.mushroom}</p>
          <p>{note.onion}</p>
          <p>{note.olive}</p>
         
        </div>
      ))}
    </div>
  );
};

export default Notes;

