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
          <ImageBook>
            <img src={context.state.bookUrl} />
          </ImageBook>
          <h5>PRICE PER BOOK: {bookPrice} EUR</h5>
          <div>
            <label htmlFor="amount"> </label>
            {/* need to fix burgermenu component */}
            <input
              // style={{ zIndex: 999 }}
              type="number"
              id="amount"
              min="0"
              required
              placeholder="Amount of books"
            />
          </div>

          <h5>TOTAL EUR: {totalOrder}</h5>

          <div>
            <label htmlFor="name"></label>
            <input type="text" id="name" placeholder="Full name" required />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input type="email" id="email" required placeholder="Email" />
          </div>
          <div>
            <label htmlFor="phone"></label>
            <input type="tel" id="phone" required placeholder="Phone number" />
          </div>
          <div>
            <label htmlFor="address"></label>
            <input type="text" id="address" required placeholder="Address" />
          </div>
          <div>
            <label htmlFor="city"></label>
            <input type="text" id="city" required placeholder="City/Town" />
          </div>
          <div>
            <label htmlFor="state"></label>
            <input type="text" id="state" placeholder="State" />
          </div>
          <div>
            <label htmlFor="country"></label>
            <input type="text" id="country" required placeholder="Country" />
          </div>
          <div>
            <label htmlFor="postcode"></label>
            <input
              type="text"
              id="postcode"
              required
              placeholder="Postal Code/ZIP"
            />
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea id="message" placeholder="Additional Info" />
          </div>
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
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: 180px;
  margin-bottom: 3%;

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
    margin-bottom: 25px;
  }
  button:hover {
    background-color: lightgrey;
    color: white;
  }
`;

const SentMessageForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 50px;

  textarea {
    height: 100px;
    width: 180%;
    margin-top: 10px;
    padding: 2%;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  h5 {
    margin-bottom: 5px;
    color: red;
  }
  div {
    ${"" /* width: 100%; */}
    display: flex;
    flex-direction: row;
    flex-wrap: no wrap;
  }
  input {
    width: 180%;
    height: 100%;
    border: 1px solid black;
    border-radius: 4px;
    margin: 10px 0;
    text-decoration: 0;
    outline: none;
    cursor: pointer;
    font-size: 18px;
    padding: 2%;
  }

  input:hover {
    background-color: rgba(192, 192, 192, 0.3);
  }
`;

const ImageBook = styled.div`
  padding: 20px;
  margin-bottom: 3%;
  justify-content: center;
  img {
    height: 300px;
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
