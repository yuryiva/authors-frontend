import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";

const topics = ["Press", "Partnership", "Feedback", "Other"];

const GetInTouchForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  const [topicChosen, setTopicChosen] = useState("");

  const context = useContext(Context);

  // const handleTopicChoice = (event) => {
  //   event.preventDefault();
  //   setTopicChosen(event.target.value);
  //   console.log(event.target.value);
  // };

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
          <h2>Get In Touch</h2>
          <NameSection>
            {/* <label htmlFor="name"></label> */}
            <input type="text" id="name" placeholder="Full name" required />
          </NameSection>
          <Email>
            {/* <label htmlFor="email"></label> */}
            <input type="email" id="email" placeholder="Email" required />
          </Email>
          <Topic>
            {/* <label htmlFor="topic"></label> */}
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
            {/* <label htmlFor="message"></label> */}

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
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  width: 70%;
  border-radius: 10px;
  background-color: white;

  button {
    width: 30%;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
  }
  h2 {
    text-align: left;
    margin: 15px;
    @media only screen and (max-width: 576px) {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  } */
  input {
    width: 70%;
    border: 0;
    margin: 15px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.75%;
  }
`;

const Email = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  } */
  input {
    width: 70%;
    border: 0;
    margin: 15px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.75%;
  }
`;

const Topic = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  } */
  select {
    width: 70%;
    border: 0;
    margin: 15px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.75%;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* label {
    width: 23%;
    text-align: right;
    margin-right: 15px;
  } */
  textarea {
    width: 70%;
    height: 150px;
    margin: 15px;
    border-radius: 5px;
    border: 1px solid black;
    overflow: scroll;
    padding: 0.75%;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  button {
    margin: 15px;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
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

// const SendMessageButton = styled.button`
// font-size: ${({ Initial }) => Initial ? '50px': '20px'}
// `;
