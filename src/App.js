import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import OrderForm from "./components/OrderForm";

const App = () => {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>

        <Link to="/pizza">Pizza</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>Lambda Eats</h1>
          <p>You can remove this code and create your own header</p>
        </Route>
        <Route exact path="/pizza">
          <OrderForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
