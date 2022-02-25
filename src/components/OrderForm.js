import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OrderForm = () => {
  const { topping } = useParams();

  const [form, setForm] = useState({
    name: "",
    accepted: false,
    pepperoni: false,
    cheese: false,
    mushrooms: false,
    onions: false,
  });
  const formChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <article>
      <h2>Let's build a tasty pizza!</h2>
      <form>
        <label>
          Enter your name here:
          <input
            onChange={formChange}
            type="text"
            name="name"
            id="name-input"
          />
        </label>
        <label>
          Pepperoni
          <input
            onChange={formChange}
            type="checkbox"
            name="pepperoni"
            checked={form.pepperoni}
          />
        </label>
        <label>
          Extra Cheese
          <input
            onChange={formChange}
            type="checkbox"
            name="cheese"
            checked={form.cheese}
          />
        </label>
        <label>
          Mushrooms
          <input
            onChange={formChange}
            type="checkbox"
            name="mushrooms"
            checked={form.mushrooms}
          />
        </label>
        <label>
          Onions
          <input
            onChange={formChange}
            type="checkbox"
            name="onions"
            checked={form.onions}
          />
        </label>
        <label>
          Submit Order:
          <input type="button" name="accepted" id="order-button" />
        </label>
      </form>
    </article>
  );
};

export default OrderForm;
