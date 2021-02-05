
const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://the-authors.herokuapp.com"
    : "https://the-authors.herokuapp.com";

export default PAYMENT_SERVER_URL;



