import React from "react";

export default function Home(props) {
  const {push} = props.history;
  return (
    <div>
      <img
        className="home-image"
        src="https://source.unsplash.com/x00CzBt4Dfk"
       
        alt=""
      />
       <button onClick={()=>push("/pizza")}>Order</button>

    </div>
  );
}
