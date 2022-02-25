import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import OrderForm from "./components/OrderForm";

const App = () => {
  const [orders, setOrders] = useState([]);

  const orderSubmit = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  useEffect(() => {
    console.log(orders);
  }, [orders]);

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
          <OrderForm orderSubmit={orderSubmit} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
