import styled from "styled-components";
import React, { useState, useContext } from "react";
// import { Progress } from "reactstrap";
// import { ProgressBar } from "react-bootstrap";
import axios from "axios";
import { Context } from "../../context/Context";

const TellStoryForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentMessage, setSentMessage] = useState(false);
  const [stateOfLoading, setStateOfLoading] = useState(0);
  const [uploadButton, setUploadButton] = useState("Upload");

  const context = useContext(Context);
  ///////////////// upload files
  const [filesToUpload, setFilesToUpload] = useState(null);

  const onChangeHandler = (event) => {
    // console.log(event.target.files);
    // console.log(event.target.files[0].name);
    setFilesToUpload(event.target.files);
  };

  const onClickHandler = () => {
    const data = new FormData();
    if (filesToUpload !== null) {
      // console.log(filesToUpload);
      // console.log(stateOfLoading);
      for (let i = 0; i < filesToUpload.length; i++) {
        data.append("file", filesToUpload[i]); /////????data.append("file", filesToUpload[i], filesToUpload[i].name);
        // console.log(data);
      }
      axios

        .post(
          context.state.productionOrDevelopment === "production"
            ? `https://the-authors2.herokuapp.com/upload`
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
        ? `https://the-authors2.herokuapp.com/tell-story`
        : `http://localhost:8080/tell-story`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      }
    );
    // console.log(response);
    setStatus("Submit");

    let result = await response.json();
    setSentMessage(result.status);

    setFilesToUpload(null);
    setStateOfLoading(0);
    setUploadButton("Upload");
  };

  return (
    <DivWrapper>
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
        <FormWrapper onSubmit={handleSubmit}>
          <TextSection>
            <h2>TELL YOUR STORY</h2>
          </TextSection>
          <FNameSection>
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" required />
          </FNameSection>

          {/* <LNameSection>
                <label>Last Name</label>
                <input/>
                </LNameSection> */}

          <EmailSection>
            <label htmlFor="email">Email </label>
            <input type="email" id="email" required />
          </EmailSection>

          <TopicSection>
            <label htmlFor="topic">Topic </label>
            <input type="text" id="topic" required />
          </TopicSection>
          <FileWrapper>
            <label htmlFor="file-upload">Add File</label>
            <input
              id="file-upload"
              type="file"
              // multiple- for multiple files upload
              onChange={onChangeHandler}
            />

            <Button>
              <button type="button" onClick={onClickHandler}>
                {uploadButton}
              </button>
            </Button>
            <ProgressDiv>
              {stateOfLoading > 0 && Math.round(stateOfLoading, 2) + "%"}
            </ProgressDiv>
          </FileWrapper>

          <MessageSection>
            <label htmlFor="message">Your Story: </label>
            <BoxButton>
              <textarea id="message" required />
              <button type="submit">{status}</button>
            </BoxButton>
          </MessageSection>
        </FormWrapper>
      )}
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
    </DivWrapper>
  );
};

export default TellStoryForm;
const DivWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  /* flex-direction: row; 
  text-align: right;
  align-items: right;
  justify-content: left; */

  @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const FormWrapper = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const TextSection = styled.div`
  width: 70%;
  display: block;
  text-align: left;
  margin: 20px 0 20px 0px;

  h2 {
    font-size: 25px;
    font-weight: 400;
  }
  @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const FNameSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;

  label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  }

  input {
    width: 90%;
    height: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
  }

  @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

// const LNameSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 50%;

//   label {
//     width: 20%;
//     text-align: right;
//     margin-right: 15px;
//   }

//   input {
//     width: 90%;
//     height: 30px;
//     margin-bottom: 30px;
//     border-radius: 5px;
//     border: 1px solid black;
//   }
// `;

const EmailSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;

  label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  }

  input {
    width: 90%;
    height: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
  }
  @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const TopicSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;

  label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  }

  input {
    width: 90%;
    height: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
  }
  @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;
const ProgressDiv = styled.div`
  margin-top: 2%;

  @media only screen and (max-width: 576px) {
    margin-top: 3%;
  }
`;
const MessageSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;

  label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  }
  @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const FileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-around;
  label {
    border: 1px solid black;
    display: inline-block;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }

  /* display: flex;
  flex-direction: row;
  

  label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  }

  input {
    background-color: white;
    width: 90%;
  } */
  @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
  }

  button {
    width: 75%;
    height: 35px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
    font-size: 20px;
    @media only screen and (max-width: 576px) {
      font-size: 0.9rem;
    }
  }
`;

const TextWrapper = styled.div`
  width: 40%;
  height: auto;
  text-align: left;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.2em;
  margin-top: 50px;

  p {
    margin: 0 0 40px 0;
    font-size: 12px;
  }

  h4 {
    margin: 20px 0 10px 0;
  }
  @media only screen and (max-width: 1230px) {
    width: 70%;
    p {
      margin: 0 0 40px 5%;
      font-size: 12px;
    }
    h4 {
      margin: 20px 0 10px 5%;
    }
  }
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  width: 42%;
  margin: 10px 0;

  /* div {
    margin: 5%;
  } */
  button {
    width: 100%;
    align-items: center;
    text-align: center;
    height: 25px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
    font-size: 15px;
    @media only screen and (max-width: 576px) {
      font-size: 0.9rem;
    }
  }
`;
