import { Context } from "../../../context/Context";
import { useContext } from "react";

const context = useContext(Context)

const PAYMENT_SERVER_URL =
context.state.productionOrDevelopment === "production"
? `https://the-authors2.herokuapp.com/preorder`
: `http://localhost:8080/preorder`

export default PAYMENT_SERVER_URL;


// const PAYMENT_SERVER_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://the-authors2.herokuapp.com"
//     : "https://the-authors2.herokuapp.com";

// export default PAYMENT_SERVER_URL;



