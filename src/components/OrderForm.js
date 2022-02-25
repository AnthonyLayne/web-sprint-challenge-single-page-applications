import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  });

  const [error, setError] = useState({
    name: "",
  });

  const [disabled, setDiabled] = useState(true);

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
      setDiabled(!valid);
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
      <p>{error.name}</p>
    </article>
  );
};

export default OrderForm;
