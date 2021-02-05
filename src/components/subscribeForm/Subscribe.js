import React, { useState } from "react";

const SubscribeForm = () => {
  const [status, setStatus] = useState("Subscribe");
  const [email, setEmail] = useState("");
  const [sentMessage, setSentMessage] = useState(false);
  const [showSubscribeComponent, setShowSubscribeComponent] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    let details = {
      email: email,
    };

    // let response = await fetch(`http://localhost:8080/subscribe`, {
    let response = await fetch(`https://the-authors.herokuapp.com/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Subscribe");
    let result = await response.json();
    setSentMessage(result.status);
  };

  return (
    <>
      {showSubscribeComponent === true && (
        <div>
          {sentMessage ? (
            <div>
              {sentMessage === "ERROR" && (
                <>
                  <p>Something went wrong...</p>
                  <button onClick={() => setSentMessage(false)}>
                    Try again please
                  </button>
                </>
              )}

              {sentMessage === "SENT" && (
                <div>
                  <p>Thank you for subscribing!</p>
                  <button onClick={() => setShowSubscribeComponent(false)}>
                    Close
                  </button>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  id="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Please insert email"
                  required
                />
              </div>
              <button type="submit">{status}</button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default SubscribeForm;
