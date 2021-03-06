import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";

const topics = ["Press", "Partnership", "Feedback", "Other"];

const GetInTouchForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  const [topicChosen, setTopicChosen] = useState("");

  const context = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      topicChosen,
    };

    let response = await fetch(
      context.state.productionOrDevelopment === "production"
        ? `https://authxrs.herokuapp.com/get-in-touch`
        : `http://localhost:8080/get-in-touch`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      }
    );
    setStatus("Submit");
    let result = await response.json();
    setSentMessage(result.status);
    setTopicChosen("");
  };

  return (
    <SendMessageWrapper>
      {sentMessage ? (
        <ResultDiv>
          {sentMessage === "SENT" && (
            <p>THANK YOU! WE'LL GET BACK TO YOU ASAP</p>
          )}
          {sentMessage === "ERROR" && (
            <p>SOMETHING WENT WRONG. TRY AGAIN PLEASE</p>
          )}
          <button onClick={() => setSentMessage(false)}>
            sent another message
          </button>
        </ResultDiv>
      ) : (
        <FormWrapper onSubmit={handleSubmit}>
          <h4>Get In Touch</h4>
          <NameSection>
            <input type="text" id="name" placeholder="Full name" required />
          </NameSection>
          <Email>
            <input type="email" id="email" placeholder="Email" required />
          </Email>
          <Topic>
            <select
              onChange={(event) => setTopicChosen(event.target.value)}
              required
            >
              <option>Select a topic...</option>
              {topics.map((element) => (
                <option key={element} value={element} id="topic">
                  {element}
                </option>
              ))}
            </select>
          </Topic>

          <Message>
            <textarea id="message" placeholder="Your Message" required />
            <button type="submit">{status}</button>
          </Message>
        </FormWrapper>
      )}
    </SendMessageWrapper>
  );
};

export default GetInTouchForm;

const SendMessageWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 5%;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  margin: 0 5%;
  margin-bottom: 50px;
  width: 400px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7), 0 5px 15px rgba(0, 0, 0, 0.1);

  button {
    font-size: 1.2rem;
    align-self: center;
    width: 130px;
    height: 42px;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    letter-spacing: 1px;
    transition: transform 0.8s;

    &:hover {
      cursor: pointer;
      transition: 1s ease;
      transform: scale(1.1);
    }
  }

  h4 {
    text-align: center;
    margin: 15px;
    font-size: 24px;
  }
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  input {
    height: 42px;
    margin-bottom: 30px;
    width: 100%;
    margin: 15px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 10px;
  }
`;

const Email = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  input {
    width: 100%;
    height: 42px;
    margin-bottom: 30px;
    margin: 15px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 10px;
  }
`;

const Topic = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  select {
    width: 100%;
    height: 42px;
    margin-bottom: 30px;
    margin: 15px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 10px;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  textarea {
    height: 150px;
    margin: 15px;
    border-radius: 5px;
    border: 1px solid black;
    overflow: scroll;
    padding: 10px;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  button {
    margin: 15px;
  }
`;

const ResultDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.75%;

  button {
    margin-left: 33%;
    width: 30%;
    align-items: center;
    text-align: center;
    height: 25px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
    font-size: 15px;

    @media only screen and (max-width: 1600px) {
      width: 40%;
      margin-left: 30%;
    }
    @media only screen and (max-width: 1550px) {
      width: 45%;
      margin-left: 30%;
    }

    @media only screen and (max-width: 1230px) {
      width: 45%;
      margin-left: 25%;
      font-size: 0.9rem;
    }
    @media only screen and (max-width: 900px) {
      width: 60%;
      margin-left: 20%;
    }
    @media only screen and (max-width: 780px) {
      width: 70%;
      font-size: 0.9rem;
      margin-left: 15%;
    }
    @media only screen and (max-width: 576px) {
      width: 100%;
      margin-left: 0;
      font-size: 0.8rem;
    }
  }
`;
