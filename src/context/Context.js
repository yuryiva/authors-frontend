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
    productionOrDevelopment: "production",
    bookPrice: 23.75,
    bookUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYFM7A8Fn0G23_-MxQ4kzKkxsR3qUh7Gv-wYYjgSB8oYugldi_",
  };
  
  //   Methods section

  //preOrderForm function in charge of updating state..

  getDataFromForm = (data) => {  

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

  render() {
    return (
      <Context.Provider
        value={{          
          getDataFromForm: this.getDataFromForm,          
          state: this.state,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
