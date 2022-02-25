import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const defaultForm = {
  name: "",
  accepted: false,
  pepperoni: false,
  cheese: false,
  mushrooms: false,
  onions: false,
};

const OrderForm = (props) => {
  const { orderSubmit } = props;

  const [form, setForm] = useState(defaultForm);
  const formChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setForm({ ...form, [e.target.name]: value });
  };

  const submitForm = (e) => {
    e.prevenDefault();
    orderSubmit(form);
    setForm(defaultForm);
  };

  useEffect(() => {}, [form]);

  return (
    <article>
      <h2>Let's build a tasty pizza!</h2>
      <form onSubmit={submitForm}>
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
