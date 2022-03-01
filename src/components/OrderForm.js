import React, { useState, useEffect } from "react";
import * as yup from "yup";

import "./OrderForm.css";

const pizzaSizes = [
  { value: "small", displayName: '10" pie' },
  { value: "medium", displayName: '12" pie' },
  { value: "large", displayName: '15" pie' },
  { value: "extra-large", displayName: '18" pie' },
];

const DEFAULT_FORM = {
  name: "",
  accepted: false,
  pepperoni: false,
  cheese: false,
  mushrooms: false,
  onions: false,
  special: "",
};

const formSchema = yup.object().shape({
  name: yup.string().min(2, "name must be at least 2 characters"),
  pepperoni: yup.boolean().oneOf([true, false]),
  cheese: yup.boolean().oneOf([true, false]),
  mushrooms: yup.boolean().oneOf([true, false]),
  onions: yup.boolean().oneOf([true, false]),
});

const getTargetVal = (e) => (e.target.type === "checkbox" ? e.target.checked : e.target.value);

const OrderForm = ({ orderSubmit }) => {
  const [formState, setFormState] = useState(DEFAULT_FORM);
  const [errorState, setErrorState] = useState(DEFAULT_FORM);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setDisabled(!valid);
    });
  }, [formState]);

  const validateForm = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(getTargetVal(e))
      .then(() => setErrorState((prev) => ({ ...prev, [e.target.name]: "" })))
      .catch((error) => setErrorState((prev) => ({ ...prev, [e.target.name]: error.errors[0] })));
  };

  const handleFormChange = (e) => {
    if (e.target.name !== "special") {
      validateForm(e);
    }

    setFormState((prev) => ({ ...prev, [e.target.name]: getTargetVal(e) }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    return orderSubmit(formState)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setFormState(DEFAULT_FORM);
      });
  };

  return (
    <article>
      <h2>Let's build a tasty pizza!</h2>
      <form onSubmit={submitForm} id="pizza-form">
        <label>
          Enter your name here:
          <input
            className={errorState.name ? "error" : undefined}
            value={formState.name}
            onChange={handleFormChange}
            type="text"
            name="name"
            id="name-input"
          />
          <span>{errorState.name}</span>
        </label>

        <label>
          Pie Size
          <select name="pie" id="size-dropdown">
            {pizzaSizes.map(({ value, displayName }) => (
              <option key={value} value={value}>
                {displayName}
              </option>
            ))}
          </select>
        </label>

        <label>
          Pepperoni
          <input
            onChange={handleFormChange}
            type="checkbox"
            name="pepperoni"
            checked={formState.pepperoni}
          />
        </label>

        <label>
          Extra Cheese
          <input
            onChange={handleFormChange}
            type="checkbox"
            name="cheese"
            checked={formState.cheese}
          />
        </label>

        <label>
          Mushrooms
          <input
            onChange={handleFormChange}
            type="checkbox"
            name="mushrooms"
            checked={formState.mushrooms}
          />
        </label>

        <label>
          Onions
          <input
            onChange={handleFormChange}
            type="checkbox"
            name="onions"
            checked={formState.onions}
          />
        </label>

        <label>
          Here are the special instructions
          <input
            type="text"
            name="special"
            id="special-text"
            value={formState.special}
            onChange={handleFormChange}
          />
        </label>

        <input disabled={disabled} type="submit" id="order-button" value="Submit Order" readOnly />
      </form>
    </article>
  );
};

export default OrderForm;
