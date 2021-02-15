//import hook for useContext
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import Checkout from "../payment/Checkout";

const PreOrderForm = () => {
  const [status, setStatus] = useState("Pay With Card");
  const [sentMessage, setSentMessage] = useState(false);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [usState, setUsState] = useState();
  const [postcode, setPostcode] = useState();
  const [message, setMessage] = useState();

  //storing context in variable that I named context, to have access to everything
  const context = useContext(Context);
  // console.log(context);

  const bookPrice = context.state.bookPrice;

  const totalOrder = context.state.bookPrice * amount;

  const handleAnotherOrder = () => {
    setSentMessage(false);
    setAmount(0);
  };

  const handleChange = async (e) => {
    e.preventDefault();

    /* setStatus("Sending..."); */

    e.target.id === "amount" && setAmount(e.target.value);
    e.target.id === "name" && setName(e.target.value);
    e.target.id === "email" && setEmail(e.target.value);
    e.target.id === "phone" && setPhone(e.target.value);
    e.target.id === "address" && setAddress(e.target.value);
    e.target.id === "city" && setCity(e.target.value);
    e.target.id === "state" && setUsState(e.target.value);
    e.target.id === "country" && setCountry(e.target.value);
    e.target.id === "postcode" && setPostcode(e.target.value);
    e.target.id === "message" && setMessage(e.target.value);

    let details = {
      amount: amount,
      name: name,
      email: email,
      phone: phone,
      address: address,
      city: city,
      state: usState,
      country: country,
      postcode: postcode,
      message: message,
      totalOrder: totalOrder,
    };

    context.getDataFromForm(details);
    /* details["totalOrder"] = totalOrder;  */

    /* let response = await fetch(`http://localhost:8080/preorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setSentMessage(result.status); */
  };
  return (
    <SendMessageWrapper>
      {sentMessage ? (
        <ResponseDiv>
          {sentMessage === "SENT" && (
            <p>THANK YOU FOR THE PREORDER! WE'LL GET BACK TO YOU ASAP</p>
          )}
          {sentMessage === "ERROR" && (
            <p>SOMETHING WENT WRONG. TRY AGAIN PLEASE</p>
          )}
          <button onClick={() => handleAnotherOrder()}>
            Make another order
          </button>
        </ResponseDiv>
      ) : (
        <SentMessageForm onChange={handleChange}>
          <h5>PRICE PER BOOK: {bookPrice} EUR</h5>
          <div>
            <label htmlFor="amount">Amount of books: </label>
            {/* need to fix burgermenu component */}
            <input
              // style={{ zIndex: 999 }}
              type="number"
              id="amount"
              min="0"
              required
            />
          </div>

          <h5>TOTAL EUR: {totalOrder}</h5>

          <div>
            <label htmlFor="name">Full name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="phone">Phone number:</label>
            <input type="tel" id="phone" required />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" required />
          </div>
          <div>
            <label htmlFor="city">City/town:</label>
            <input type="text" id="city" required />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input type="text" id="state" />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" required />
          </div>
          <div>
            <label htmlFor="postcode">Post code/ZIP:</label>
            <input type="text" id="postcode" required />
          </div>
          <div>
            <label htmlFor="message">Additional info:</label>
            <textarea id="message" />
          </div>
          {/* send email button */}
          {/* <SubmitDiv>
            <button type="submit">{status}</button>
          </SubmitDiv> */}
          {/* checkout button */}
          {/* <Checkout
            name={"Authors LLC."}
            description={"Book(s) you bought"}
            amount={context.state.totalOrder}
          /> */}
        </SentMessageForm>
      )}
      <Checkout
        name={"Authors LLC."}
        description={"Book(s) you bought"}
        amount={context.state.totalOrder}
        email={context.state.email}
        label={status}
      />
    </SendMessageWrapper>
  );
};

export default PreOrderForm;

const SendMessageWrapper = styled.div`
  width: 60%;
  //height: 40%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin: 20px;

  margin: auto;

  padding: 10px;

  border: 1px lightgray solid;
  button {
    border-radius: 5px;
    width: auto;
    height: 40px;
    text-align: center;
    background-color: white;
    border: 1px lightgray solid;
    font-size: 20px;
    color: grey;
    outline: none;
    margin-top: 25px;
  }
  button:hover {
    background-color: lightgrey;
    color: white;
  }
`;

const SentMessageForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 100px;
  label {
    width: 40%;
    margin-right: 30px;
    text-align: right;
    align-items: bottom;
  }
  textarea {
    height: 100px;
    width: 100%;
    margin-top: 10px;
  }
  h5 {
    margin-bottom: 5px;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    // justify-content: right;
    flex-wrap: no wrap;
  }
  input {
    width: 100%;
    height: 30px;
    border: 0;
    border-bottom: 1px solid black;
    margin: 10px 0;
    text-decoration: 0;
    outline: none;
    cursor: pointer;
    font-size: 18px;
  }

  input:hover {
    background-color: rgba(192, 192, 192, 0.3);
  }
`;
// const PriceTotal = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   text-align: center;
// `;
const ResponseDiv = styled.div`
  height: 80%;
  button {
    height: 80%;
    width: 50%;
  }
`;
const SubmitDiv = styled.div`
  display: flex;
  justify-content: center;
`;
