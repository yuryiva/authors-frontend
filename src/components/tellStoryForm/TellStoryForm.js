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
            {/* <label htmlFor="name">First Name</label> */}
            <input type="text" id="name" placeholder="First Name" required />
          </FNameSection>

          {/* <LNameSection>
                <label>Last Name</label>
                <input/>
                </LNameSection> */}

          <EmailSection>
            {/* <label htmlFor="email">Email </label> */}
            <input type="email" id="email" placeholder="Email" required />
          </EmailSection>

          <TopicSection>
            {/* <label htmlFor="topic">Topic </label> */}
            <input type="text" id="topic" placeholder="Topic" required />
          </TopicSection>

          <MessageSection>
            {/* <label htmlFor="message">Your Story: </label> */}
            <BoxButton>
              <textarea id="message" placeholder="Your Story" required />              
            </BoxButton>
          </MessageSection>

          <FileWrapper>
            <label htmlFor="file-upload">Add File</label>
            <input
              id="file-upload"
              type="file"
              // multiple- for multiple files upload
              onChange={onChangeHandler}
            />

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
  /* margin-top: 100px; */
  /* background: hsl(210, 36%, 96%); */
  margin: 0;
  padding: 5%;
  padding-top: 140px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;  

  /* @media only screen and (max-width: 1249px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  } */

  /* @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;
  } */
`;

const FormWrapper = styled.form`
  background: #fff;
  display: flex;
  flex-direction: column;  
  /* width: 50%; */
  width: 400px;
  margin: 0 5%;
  margin-bottom: 50px;
  padding: 15px;
  border-radius: 10px;
  /* display: flex;
  flex-direction: column; */
  /* text-align: center; */
  text-align: left;
  box-shadow: 0 4px 6px rgba(0,0,0,0.7), 0 5px 15px rgba(0,0,0,0.1);
  /* align-items: center; */
  /* justify-content: center; */
  /* overflow: hidden; */

  button {
    /* width: 30%;
    height: 35px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
    font-size: 1rem; */

    /* width: 30%; */
    font-size: 1.2rem;
    align-self: center;
    width: 130px;    
    height: 42px;
    /* border-radius: 5px; */
    /* background-color: white; */
    background-color: transparent;
    /* border: 1px solid black; */
    border: none;
    text-decoration: underline;
    letter-spacing: 1px; 
    transition: transform 0.8s;   

    &:hover {
      /* background-color: lightgray; */      
      cursor: pointer;
      transition: 1s ease;
      transform: scale(1.1);
      /* transform-origin: 50% 50%; */
    }
  }
  /* @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  } */
  /* @media only screen and (max-width: 576px) {
    width: 95%;
    margin-left:auto;
    margin-right:auto;

  } */
`;

const TextSection = styled.div`
  /* width: 70%; */
  width: 100%;  
  display: flex;
  justify-content: center;
  /* text-align: left; */
  /* margin: 20px 0 20px 0px; */

  h4 {
    font-size: 24px;
    /* font-weight: 600; */
    margin-bottom: 40px;    
    /* text-decoration: underline; */
  }
  /* @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  } */
`;

const FNameSection = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 70%; */
  width: 100%; 

  /* label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  } */

  input {
    /* width: 90%; */
    width: 100%;
    /* height: 30px; */
    height: 42px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
    /* padding: 0.75%; */
    padding: 0 10px;
  }

  /* @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  } */
`;

const EmailSection = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 70%; */
  width: 100%;

  /* label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  } */

  input {
    /* width: 90%; */
    width: 100%;
    /* height: 30px; */
    height: 42px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
    /* padding: 0.75%; */
    padding: 0 10px;
  }
  /* @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  } */
`;

const TopicSection = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 70%; */
  width: 100%;

  /* label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  } */

  input {
    /* width: 90%; */
    width: 100%;
    /* height: 30px; */
    height: 42px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
    /* padding: 0.75%; */
    padding: 0 10px;
  }
  /* @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  } */
`;

const MessageSection = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 70%; */
  width: 100%;

  /* label {
    width: 20%;
    text-align: right;
    margin-right: 15px;
  } */
  /* @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  } */
`;

const FileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 70%; */
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  /* margin-bottom: 4%; */
  margin-bottom: 30px;

  label {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 7px 0;    */
    /* width: 25%;  */
    width: 130px; 
    height: 42px;   
    margin-top: auto;
    margin-bottom: auto;
    border: 1px solid black;
    /* display: inline-block; */
    border-radius: 5px;
    /* cursor: pointer; */

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
    /* width: 25%; */
    width: 130px;
    align-items: center;
    text-align: center;
    /* height: 25px; */
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
    
    /* @media only screen and (max-width: 576px) {
      font-size: 0.9rem;
    } */
  }

  /* @media only screen and (max-width: 1230px) {
    width: 80%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  } */
`;

const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 90%; */
  width: 100%;

  textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid black;
    /* padding: 0.75%; */
    padding: 10px;

    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  

    /* @media only screen and (max-width: 576px) {
      font-size: 0.9rem;
    } */
  
`;

const TextWrapper = styled.div`  
  /* width: 50%; */
  width: 500px;
  /* height: auto; */
  text-align: left;
  margin: 0 5%;
  margin-bottom: 50px;
  /* font-size: 15px; */
  /* font-weight: 300; */
  /* line-height: 1.2em; */
  /* margin-top: 50px; */

  p {
    margin: 0 0 40px 0;
    /* font-size: 12px; */
    font-size: 14px;
  }

  h4 {
    /* margin: 20px 0 10px 0; */
    text-align: center;
    margin-bottom: 40px;
    font-size: 24px;
    /* font-weight: 600; */
  }
  /* @media only screen and (max-width: 1230px) {
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
  } */
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
