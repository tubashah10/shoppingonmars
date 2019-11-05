import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'Burberry Coat',
    image: 'https://cdn.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/b/u/burberry-beige-heritage-trench-coat-282408-e0f91b070004d4e56229ad598e9ace4ba5b616d5.jpg',
    description: 'Must have item for the winter wardrobe',
    price: 2000
  },
  {
    item: 'Manolo Pumps',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsqUzmSUqu4366f_vUV4fvUJL2OXGNc2rx1AD36pCXIXoWEQ3&s',
    description: 'Formal Shoes',
    price: 1500
  },
  {
    item: 'Ralph Lauren Coat',
    image: 'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/3762298_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$',
    description: 'Coat for Winter',
    price: 300
  },
  {
    item: 'Hermes slippers',
    image: 'https://cf.shopee.ph/file/cbbcbe9979dfd9cf14169197ccec420a',
    description: 'Summer slippers',
    price: 700
  }
]

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

const products = shoppingCartItems.map((singleProduct) => {
    return <Product item={singleProduct.item} image={singleProduct.image} description={singleProduct.description} price={singleProduct.price}/>
})

  return(
    <div className="cart">
      {/*  */}
      {products}
    </div>
  );
}

function Product(props) {
  return(
    <div className="product">
      <img src={props.image} width="100"/>
      <p> {props.item} </p>
      <p> {props.description} </p>
      <p> {props.price} </p>
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
