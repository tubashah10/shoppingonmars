import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <SearchForm />
     <ShoppingCart />
    </div>
  );
}

function ShoppingCart() {
  return(
    <div className="cart">
      <Product />
    </div>
  );
}

function Product() {
  return(
    <div className="product">
      <img src="https://images4.penguinrandomhouse.com/cover/9781400079988" width="100"/>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
