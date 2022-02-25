import React, { useState, useEffect } from "react";

import * as yup from "yup";

const defaultForm = {
  name: "",
  accepted: false,
  pepperoni: false,
  cheese: false,
  mushrooms: false,
  onions: false,
};

const OrderForm = (props) => {
  const formSchema = yup.object().shape({
    name: yup.string().min(2, "name must be at least 2 characters"),
    pepperoni: yup.boolean().oneOf([true]),
    cheese: yup.boolean().oneOf([true]),
    mushrooms: yup.boolean().oneOf([true]),
    onions: yup.boolean().oneOf([true]),
  });

  const [error, setError] = useState(defaultForm);

  const [disabled, setDisabled] = useState(true);

  const { orderSubmit } = props;

  const [form, setForm] = useState(defaultForm);

  const formValid = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.name)
      .then(() => {
        setError({ ...error, [e.target.name]: "" });
      })

      .catch((error) => {
        setError({ ...error, [e.target.name]: error.errors[0] });
      });
  };

  const formChange = (e) => {
    console.log(formChange);
    formValid(e);

    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const submitForm = (e) => {
    e.prevenDefault();
    orderSubmit(form);
    setForm(defaultForm);
  };

  useEffect(() => {
    formSchema.isValid(form).then((valid) => {
      setDisabled(!valid);
    });
  }, [form]);

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
          Pie Size
          <select name="pie" id="size-dropdown">
            <option value="small">10" pie</option>
            <option value="medium">12" pie</option>
            <option value="large">15" pie</option>
            <option value="extra-large">18" pie</option>
          </select>
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
          Special Instructions
          <input type="text" name="special" id="special-text" />
        </label>
        <label>
          Submit Order:
          <input type="button" name="accepted" id="order-button" />
        </label>
      </form>
      <p>{error.name}</p>
    </article>
  );
};

export default OrderForm;
