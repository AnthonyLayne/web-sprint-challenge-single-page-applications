import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

// Components
import OrderForm from "./components/OrderForm";

import "./App.css";

const App = () => {
  const [ordersState, setOrdersState] = useState([]);

  const orderSubmit = (newOrder) => setOrdersState((prev) => [...prev, newOrder]);

  useEffect(() => {
    console.log(ordersState);
  }, [ordersState]);

  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>

        <Link to="/pizza">Pizza</Link>
      </header>

      <Switch>
        <Route exact path="/">
          <h1>Lambda Eats</h1>
          <p>Let's Eat Pizza!</p>
        </Route>

        <Route exact path="/pizza">
          <OrderForm orderSubmit={orderSubmit} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
