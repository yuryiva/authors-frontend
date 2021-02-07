import React, { useContext, useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { Context } from "../../context/Context";

const topics = ["Press", "Partnership", "Feedback", "Other"];

const GetInTouchForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  const [topicChosen, setTopicChosen] = useState("");

  const context = useContext(Context);

  const handleTopicChoice = (event) => {
    event.preventDefault();
    setTopicChosen(event.target.value);
    console.log(event.target.value);
  };

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
        ? `https://the-authors2.herokuapp.com/get-in-touch`
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
        <div>
          {sentMessage === "SENT" && (
            <p>THANK YOU! WE'LL GET BACK TO YOU ASAP</p>
          )}
          {sentMessage === "ERROR" && (
            <p>SOMETHING WENT WRONG. TRY AGAIN PLEASE</p>
          )}
          <button onClick={() => setSentMessage(false)}>
            sent another message
          </button>
        </div>
      ) : (
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <h2>Get In Touch</h2>
            <NameSection>
              <label htmlFor="name">Full name </label>
              <input type="text" id="name" required />
            </NameSection>
            <Email>
              <label htmlFor="email">Email </label>
              <input type="email" id="email" required />
            </Email>
            <Topic>
              <label htmlFor="topic">Topic </label>
              <select onChange={handleTopicChoice} required>
                <option></option>
                {topics.map((element) => (
                  <option key={nanoid()} id="topic">
                    {element}
                  </option>
                ))}
              </select>
            </Topic>

            <Message>
              <label htmlFor="message">Your Message </label>
              <textarea id="message" required />
            </Message>
            <button type="submit">{status}</button>
          </form>
        </FormWrapper>
      )}
    </SendMessageWrapper>
  );
};

export default GetInTouchForm;

// const Pr = styled.div`
// height: 20px;
// background-color: yellow;
// text-align: center;
// `
const SendMessageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  align-items: center;
  width: 60%;
  border-radius: 10px;
  background-color: white;

  button {
    width: 30%;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
  }
`;

const NameSection = styled.div`
  input {
    width: 300px;
    border: 0;
    margin: 15px;
    border-bottom: 1px solid black;
  }
`;

const Email = styled.div`
  input {
    width: 300px;
    border: 0;
    margin: 15px;
    border-bottom: 1px solid black;
  }
`;

const Topic = styled.div`
  select {
    width: 300px;
    border: 0;
    margin: 15px;
    border-bottom: 1px solid black;
  }
`;

const Message = styled.div`
  textarea {
    width: 300px;
    height: 100px;
    margin: 0 15px;
  }
`;

// const SendMessageButton = styled.button`
// font-size: ${({ Initial }) => Initial ? '50px': '20px'}
// `;
