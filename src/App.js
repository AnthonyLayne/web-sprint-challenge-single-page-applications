import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import OrderForm from "./components/OrderForm";

import "./App.css";

const ORDER_ENDPOINT = "https://reqres.in/api/orders";

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
