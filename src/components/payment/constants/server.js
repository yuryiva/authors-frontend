// const PAYMENT_SERVER_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://the-authors2.herokuapp.com"
//     : "https://the-authors2.herokuapp.com";

// export default PAYMENT_SERVER_URL;



const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://myapidomain.com"
    // : "http://localhost:8080";
    : "https://the-authors2.herokuapp.com";

export default PAYMENT_SERVER_URL;

