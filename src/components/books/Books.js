import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import DarkBurger from "../header/DarkBurger";

export default function Books({ dropdown, setDropdown }) {
  const context = useContext(Context);
  const bookPrice = context.state.bookPrice;

  const [books, setBooks] = useState([
    {
      bookUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYFM7A8Fn0G23_-MxQ4kzKkxsR3qUh7Gv-wYYjgSB8oYugldi_",
      bookTitle: "Stories of Hope",
      bookAuthor: "Heather Morris",
      bookDescription:
        "Heather Morris's extraordinary talents as a listener led Lale Sokolov to entrust her with his story - which she told as the bestselling novel THE TATTOOIST OF AUSCHWITZ and its follow-up, CILKA'S JOURNEY. Now she shares her inspiring voyage through writing, exploring how she learned to really listen to the stories people told her, some of which she has shared with millions of readers in her fiction. An inspiring manual for life, STORIES OF HOPE examines and explores Heather's extraordinary writing journey in the form of a series of tales of the remarkable people she has met, the incredible stories they have shared with her, and the lessons they hold for us all",
      bookPrice: bookPrice,
      bookDate: "January 22, 2021",
      typeBook: "Paperback",
      bookCategory: "Mystery",
      deliveryTime: "2-5 days.",
      bookDiscount: "Eligible for free delivery with a 15% donation.",
      isbn: 1786580497,
      bookLanguage: "English, Spanish",
      bookWeight: "15.1 ounces",
      bookDimensions: " 5.67 x 1.22 x 8.74 inches",
      bookNoPages: "364",
      id: Math.random(),
    },
  ]);

  return (
    <div>
      <DarkBurger />

      {books.map((book) => (
        <PageWrapper key={book.id}>
          <BookImage>
            <img src={book.bookUrl} alt="book" />
          </BookImage>
          <BookDescription>
            <h3>{book.bookTitle}</h3>
            <p>{book.bookDescription}</p>
          </BookDescription>

          <BookCheckout>
            <h3>
              €<span>{bookPrice}</span>
            </h3>
            <p>
              {book.bookAuthor} | {book.bookDate}
            </p>
            <p>{book.typeBook}</p>
            <p> {` Category: ${book.bookCategory}`}</p>
            <p>{`Delivery: ${book.deliveryTime}`}</p>
            <p>{book.bookDiscount}</p>
            <Link to="/preOrderForm">
              <button>Pre-Order</button>
            </Link>
          </BookCheckout>
          <ProductDetails>
            <h3>Product Details</h3>
            <h2> {book.bookTitle}</h2>
            <p>{`ISBN: ${book.isbn}`}</p>
            <p>{`Format: ${book.typeBook}`}</p>
            <p>{`Languages: ${book.bookLanguage}`}</p>
            <p>{`No. of Pages: ${book.bookNoPages}`} </p>
            <p>{`Weight: ${book.bookWeight}`}</p>
            <p>{`Dimensions${book.bookDimensions}`}</p>
          </ProductDetails>
        </PageWrapper>
      ))}
    </div>
  );
}

const ProductDetails = styled.div`
  width: 400px;
  margin: 3%;
  margin-bottom: 100px;
  h3 {
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 20px;
  }
  p {
    border-bottom: 1px lightgray solid;
    margin-bottom: 20px;
  }
`;

const PageWrapper = styled.div`
  margin: 0;
  padding: 5%;
  padding-top: 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: top;
  background-color: ${({ darkDropdown }) =>
    darkDropdown ? "rgba(0, 0, 0, 0.7)" : ""};
  transition: 1s ease;
`;
const BookImage = styled.div`
  width: 400px;
  display: inline-block;
  overflow: hidden;
  position: relative;
  margin: 3%;
  margin-bottom: 100px;

  img {
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
const BookDescription = styled.div`
  width: 400px;
  margin: 3%;
  margin-bottom: 100px;
  h3 {
    font-size: 30px;
    padding-bottom: 30px;
  }
`;
const BookCheckout = styled.div`
  height: 470px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  text-align: left;
  width: 400px;
  margin: 3%;
  margin-bottom: 100px;

  button {
    border-radius: 5px;
    width: 100%;
    height: 50px;
    text-align: center;
    background-color: white;
    border: 2px solid rgb(33, 105, 219);
    font-size: 20px;
    color: rgb(33, 105, 219);
    outline: none;
    // margin-top: 20px 20px;
  }
  button:hover {
    background-color: rgb(33, 105, 219);
    color: white;
  }
  border: 1px lightgray solid;
  border-radius: 10px;
  h3 {
    padding: 10px;
    border-bottom: 1px black solid;
    color: red;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  p {
    border-bottom: 1px black solid;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  @media (max-width: 1266px) {
    display: flex;
    flex-direction: column;
    align-content: left;
  }
`;
