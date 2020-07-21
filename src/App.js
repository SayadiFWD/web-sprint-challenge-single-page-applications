import React from "react";
import { Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to="/">Home</Link>
      <Link to="/pizza">Shop</Link>

      <Route exact path="/" component={Home} />

      <Route path="/pizza/" component={Form} />
    </>
  );
};
export default App;
