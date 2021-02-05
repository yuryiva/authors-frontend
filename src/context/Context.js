import React, { Component } from "react";

export const Context = React.createContext();

class Provider extends Component {
  state = {
    // Add state properties
    amount: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
    message: "",
    totalOrder: 0,
    bookPrice: 25.75,
  };

  //   Component did mount section
  componentDidMount() {}

  //   Methods section

  //preOrderForm function in charge of updating state..

  getDataFromForm = (data) => {
    console.log("Hello from context", data);

    this.setState({
      amount: data.amount,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      state: data.state,
      country: data.country,
      postcode: data.postcode,
      message: data.message,
      totalOrder: data.totalOrder,
    });
  };

  //   //get book price from books.js and pass it to pre-order form.
  // getBookPrice = (data) => {
  //   // console.log("Hello from CONTEXT");
  //   this.setState({
  //     bookPrice: data.bookPrice,
  //   });
  // };

  render() {
    return (
      <Context.Provider
        value={{
          //same function as above getDataFromForm : this.getDataFromForm
          getDataFromForm: this.getDataFromForm,
          // getBookPrice: this.getBookPrice,
          state: this.state,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
