import React, { useState, useContext } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Context } from "../../context/Context";
import SuccessfulModal from "./SuccessfulModal";
import ErrorModal from "./ErrorModal";
import PAYMENT_SERVER_URL from "./constants/server";

const Checkout = ({ name, description, amount, label, type, email }) => {
  const context = useContext(Context);

  let [showSuccessModal, setShowSuccessModal] = useState(false);
  let [showErrorModal, setShowErrorModal] = useState(false);
  const CURRENCY = "EUR";

  const fromDollarToCent = (amount) => parseInt(amount * 100);

  const SuccessPayment = async (data) => {
    fetch(
      context.state.productionOrDevelopment === "production"
        ? `https://authxrs.herokuapp.com/preorder`
        : `http://localhost:8080/preorder`,

      {
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
      }
    );

    setShowSuccessModal(true);
  };

  const ErrorPayment = (data) => {
    setShowErrorModal(true);
  };

  const onToken = (amount, description) => (token) =>
    axios
      .post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromDollarToCent(amount),
      })
      .then(SuccessPayment)
      .catch(ErrorPayment)
      .then(setShowSuccessModal(false))
      .then(setShowErrorModal(false));
  {
  }

  return (
    <div>
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

      {showSuccessModal === true && <SuccessfulModal />}
      {showErrorModal === true && <ErrorModal />}
    </div>
  );
};

export default Checkout;
