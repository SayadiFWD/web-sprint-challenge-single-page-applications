import React from "react";
import {Route} from "react-router-dom"
import Home from "./components/Home"
import Pizza from "./components/Form"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
     <Route path="/" component={Home}/>
     <Pizza/>
    </>
  );
};
export default App;
