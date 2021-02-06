import React, { useState, useContext } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Context } from "../../context/Context";

import STRIPE_PUBLISHABLE from "./constants/stripe";
import PAYMENT_SERVER_URL from "./constants/server";

const Checkout = ({ name, description, amount, label, type, email }) => {
  const context = useContext(Context);
  const CURRENCY = "EUR";

  const fromDollarToCent = (amount) => parseInt(amount * 100);

  const localOrRemoteServer = "";
  context.state.productionOrDevelopment === "production"
    ? (localOrRemoteServer = `https://the-authors2.herokuapp.com`)
    : (localOrRemoteServer = `http://localhost:8080`);

  const successPayment = async (data) => {
    console.log(
      "productionOrDevelopment in Checkout.js = ",
      context.state.productionOrDevelopment
    );
    alert("Payment Successful");

    // fetch(`${localOrRemoteServer}/preorder`, {
    fetch(`https://the-authors2.herokuapp.com/preorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        amount: context.state.amount,
        name: context.state.name,
        email: context.state.email,
        phone: context.state.phone,
        address: context.state.address,
        city: context.state.city,
        state: context.state.state,
        country: context.state.country,
        postcode: context.state.postcode,
        message: context.state.message,
        totalOrder: context.state.totalOrder,
      }),
    });
  };

  const errorPayment = (data) => {
    alert("Payment Error");
  };

  const onToken = (amount, description) => (token) =>
    axios
      .post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromDollarToCent(amount),
      })
      .then(successPayment)
      .catch(errorPayment);

  return (
    <StripeCheckout
      name={name}
      type={type}
      label={label}
      description={description}
      amount={fromDollarToCent(amount)}
      token={onToken(amount, description)}
      currency={CURRENCY}
      stripeKey={
        "pk_test_51IAcqYDle1Cl217pMufz4egXcGPGMG2Ooko3tiOqf60DtUEz7ujPSkDfPbmga6qvel7NbmK9S0o5rOtfj8pSsbWq00vW0qtt4U"
      }
      zipCode
      email={email}
      allowRememberMe
    />
  );
};
export default Checkout;
