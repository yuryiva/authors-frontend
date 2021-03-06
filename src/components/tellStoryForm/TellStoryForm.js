import styled from "styled-components";
import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import DarkBurger from '../header/DarkBurger';

const TellStoryForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  const [stateOfLoading, setStateOfLoading] = useState(0);
  const [uploadButton, setUploadButton] = useState("Upload");

  const context = useContext(Context);
  ///////////////// upload files
  const [filesToUpload, setFilesToUpload] = useState(null);

  const onChangeHandler = (event) => {
    setFilesToUpload(event.target.files);
  };

  const onClickHandler = () => {
    const data = new FormData();
    if (filesToUpload !== null) {
      for (let i = 0; i < filesToUpload.length; i++) {
        data.append("file", filesToUpload[i]);
      }
      axios

        .post(
          context.state.productionOrDevelopment === "production"
            ? `https://authxrs.herokuapp.com/upload`
            : `http://localhost:8080/upload`,

          data,
          {
            onUploadProgress: (ProgressEvent) => {
              setStateOfLoading(
                (ProgressEvent.loaded / ProgressEvent.total) * 100
              );
            },
          }
        )
        .then(
          (res) => {
            console.log(res.statusText, "FILE UPLOADED");
            console.log(res);
            {
              setUploadButton("Uploaded");
            }
          },
          (error) => {
            console.log(error, "FILE NOT UPLOADED");
          }
        );
    } else {
      alert("Please choose a file to upload");
    }
  };
  ////////////////////

  const handleSubmit = async (e) => {
    console.log(
      "production OR DEVELOPMENT IN TELLSTORYFORM = ",
      context.state.productionOrDevelopment
    );

    e.preventDefault();
    setStatus("Sending...");
    const { name, email, topic, message } = e.target.elements;

    const imageName = filesToUpload ? filesToUpload[0].name : "";
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      filesToUpload,
      imageName: imageName,
      topic: topic.value,
    };

    let response = await fetch(
      context.state.productionOrDevelopment === "production"
        ? `https://authxrs.herokuapp.com/tell-story`
        : `http://localhost:8080/tell-story`,

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

    setFilesToUpload(null);
    setStateOfLoading(0);
    setUploadButton("Upload");
  };

  return (
    <DivWrapper>
      <TextWrapper>
        <h4>Why Share?</h4>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.{" "}
        </p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.{" "}
        </p>
      </TextWrapper>
      {sentMessage ? (
        <ResultDiv>
          {sentMessage === "SENT" && (
            <p>THANK YOU! WE'LL GET BACK TO YOU ASAP</p>
          )}
          {sentMessage === "ERROR" && (
            <p>SOMETHING WENT WRONG. TRY AGAIN PLEASE</p>
          )}
          <button onClick={() => setSentMessage(false)}>
            Send another message
          </button>
        </ResultDiv>
      ) : (
        <FormWrapper onSubmit={handleSubmit}>
          <TextSection>
            <h4>Tell Your Story</h4>
          </TextSection>
          <FNameSection>
            <input type="text" id="name" placeholder="First Name" required />
          </FNameSection>
          <EmailSection>
            <input type="email" id="email" placeholder="Email" required />
          </EmailSection>
          <TopicSection>
            <input type="text" id="topic" placeholder="Topic" required />
          </TopicSection>

          <MessageSection>
            <BoxButton>
              <textarea id="message" placeholder="Your Story" required />
            </BoxButton>
          </MessageSection>

          <FileWrapper>
            <label htmlFor="file-upload">Add File</label>
            <input id="file-upload" type="file" onChange={onChangeHandler} />

            <button type="button" onClick={onClickHandler}>
              {uploadButton}
            </button>

            {stateOfLoading > 0 && Math.round(stateOfLoading, 2) + "%"}
          </FileWrapper>

          <button type="submit">{status}</button>
        </FormWrapper>
      )}
    </DivWrapper>
  );
};

export default TellStoryForm;

const DivWrapper = styled.div`
  margin: 0;
  padding: 5%;
  padding-top: 140px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-content: center;
  flex-wrap: wrap;
`;

const FormWrapper = styled.form`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 5%;
  margin-bottom: 50px;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
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
`;

const TextSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h4 {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

const FNameSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  input {
    width: 100%;
    height: 42px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 0 10px;
  }
`;

const EmailSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  input {
    width: 100%;
    height: 42px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 0 10px;
  }
`;

const TopicSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  input {
    width: 100%;
    height: 42px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 0 10px;
  }
`;

const MessageSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const FileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  label {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 42px;
    margin-top: auto;
    margin-bottom: auto;
    border: 1px solid black;
    border-radius: 5px;

    &:hover {
      background-color: lightgray;
      transform: none;
      transition: none;
      cursor: pointer;
    }
  }

  input[type="file"] {
    display: none;
  }

  button {
    margin-left: 5%;
    margin-right: 5%;
    width: 130px;
    align-items: center;
    text-align: center;
    height: 42px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
    font-size: 15px;
    text-decoration: none;

    &:hover {
      background-color: lightgray;
      transform: none;
      transition: none;
      cursor: pointer;
    }
  }
`;

const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 10px;

    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const TextWrapper = styled.div`
  width: 500px;
  text-align: left;
  margin: 0 5%;
  margin-bottom: 50px;

  p {
    margin: 0 0 40px 0;
    font-size: 14px;
  }

  h4 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 24px;
  }
`;

// Please style as above
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
