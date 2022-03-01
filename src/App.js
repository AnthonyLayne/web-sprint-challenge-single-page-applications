import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";

// Components
import OrderForm from "./components/OrderForm";

import "./App.css";

const ORDER_ENDPOINT = "https://reqres.in/api/orders";

/*
- [ ] Toggle form component for gluten free crust
- [ ] Turn form element sections into nested routes
- [ ] Test more of the application with Cypress
- [ ] Build UI for the eventuality of a network error when POSTing the order
- [ ] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order
*/

const App = () => {
  const orderSubmit = (newOrder) => axios.post(ORDER_ENDPOINT, newOrder);

  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>

        <Link to="/pizza" id="order-pizza">
          Pizza
        </Link>
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
