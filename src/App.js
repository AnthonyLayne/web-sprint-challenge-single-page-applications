import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import OrderForm from "./components/OrderForm";

import "./App.css";

const orderEndpoint = "https://reqres.in/api/orders";

const App = () => {
  const orderSubmit = (newOrder) => axios.post("https://reqres.in/api/orders", newOrder);

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
