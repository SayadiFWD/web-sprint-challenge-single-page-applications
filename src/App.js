import React from "react";
import {Route ,Link} from "react-router-dom"
import Home from "./components/Home"
import Pizza from "./components/Form"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to="/">Home</Link>
      <Link to="/pizza">Pizza</Link>
      <div>

    
     <Route exact path="/" component={Home}/>
     <Route  path="/pizza" component={Pizza}/>
     </div>
    </>
  );
};
export default App;
