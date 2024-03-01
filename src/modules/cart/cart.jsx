import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types';
import {addDays} from 'date-fns';
import './cartStyle.css';

class CartManager {
  constructor() {
    this.cartItems = [];
  }

  //check if item already added and add count
  addCartItem(newItem) {
    if (this.cartItems.includes(newItem)) {
      this.cartItems.map((currentItem) => {
        console.log("item already in cart");
        if(currentItem === newItem) { currentItem.itemCount++ } 
      })
    } else {
      newItem.itemCount = 1;
      this.cartItems.push(newItem);
    }

    console.log("items in the cart", this.cartItems);
  }

  addItemCount(item) {
    const existingItem = this.cartItems.find((currentItem) =>  currentItem.id === item.id);
    if(existingItem) {existingItem.itemCount++;}
  }
  subItemCount(item) {
    const existingItem = this.cartItems.find((currentItem) =>  currentItem.id === item.id);
    if(existingItem && existingItem.itemCount !== 1) {existingItem.itemCount--;}
  }
  deleteItem(item) {
    const filteredItems = this.cartItems.filter((currentItem) => currentItem !== item);
    if(filteredItems) {this.cartItems = filteredItems}
  }
  

  getCartItems() {
    return this.cartItems;
  }
  getTotalPrice() {
    let totalPrice = 0;
    this.cartItems.map((item) => {
      totalPrice += (item.itemCount) * (item.price);
    })
    return totalPrice;
  }
}
export const cartManager = new CartManager();


export default function Cart({cartOpen, exitCart}) {
  const [cartItems, setCartItems] = useState([]);
  const {expectedDateFrom, expectedDateTo} = getExpectedDate();

  //update cartItems when cart closes
  useEffect(() => {
    console.log("cart is now", cartOpen);
    const newCartItems = cartManager.getCartItems();
    setCartItems(newCartItems);

    //TODO: figure out how to get animation without timeout
    const timeout = setTimeout(() => {
      document.querySelector(".cart-module").classList.add("cart-open");
    }, 10);

    return () => {
      const timeout = setTimeout(() => {
        document.querySelector(".cart-module").classList.remove("cart-open");
      }, 1000);
      clearTimeout(timeout);
    }
  },[]);

  const addItemCount = (item) => {
    cartManager.addItemCount(item);
    setCartItems([...cartManager.getCartItems()]);
  }
  const subItemCount = (item => {
    cartManager.subItemCount(item);
    setCartItems([...cartManager.getCartItems()]);
  })
  const deleteItem = (item) => {
    cartManager.deleteItem(item);
    setCartItems([...cartManager.getCartItems()]);
  }

  return (  
    <>
      <span className="overlay" onClick={() => exitCart()}></span>
      <div  className="cart-module">
        <div className="cart-top">
          <div className="title-exit">
            <h1>Your Cart</h1>
            <button className="light-button exit-button" onClick={() => exitCart()}>X</button>
          </div>
          <div className="product-total">
            <p className="light-font">PRODUCT</p>
            <p className="light-font">TOTAL</p>
          </div>
          <hr />
        

        {cartItems.length > 0 && (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cartItem-img"/>
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="light-font item-price">{item.price}</p>
                <p className="light-font">Estimated between: {expectedDateFrom} and {expectedDateTo}</p>
              </div>
              <div className="cart-item-price_count_delete">
                <div className="item-count">
                  <button className="increase-count" aria-label="increase item count" onClick={() => addItemCount(item)}>&#43;</button>
                  <p className="item-total">{item.itemCount}</p>
                  <button className="decrease-count" aria-label="deacrease item count" onClick={() => subItemCount(item)}>&#8722;</button>
                </div>
                <p className="total-item-price item-price">{(item.price * item.itemCount).toFixed(2)}</p>
                <button className="light-button delete-item" onClick={() => deleteItem(item)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        )}
        </div>

        <div className="cart-bottom">
          <hr />
          <div className="total">
            <h4>Estimated total</h4>
            <p className="item-price total-price">{(cartManager.getTotalPrice()).toFixed(2)}</p>
          </div>
          <p>Tax included. Shipping and discounts calculated at checkout</p>
          <button className="main-button cart-checkout">Check Out</button>
        </div>
      </div>
    </>

    
  )
}

const getExpectedDate = () => {
  const today = new Date();
  const shippingTime = 5;
  const shippingVariationTime = 3;

  const rawExpectedDateFrom = addDays(today, shippingTime);
  const rawExpectedDateTo = addDays(rawExpectedDateFrom, shippingVariationTime)

  const expectedDateFrom = (rawExpectedDateFrom.toLocaleString('default', {month: 'short'})) + " " + (rawExpectedDateFrom.getDate());
  const expectedDateTo = (rawExpectedDateFrom.toLocaleString('default', {month: 'short'})) + " " + (rawExpectedDateTo.getDate());

  return {expectedDateFrom, expectedDateTo}
}

Cart.propTypes = {
  cartOpen: PropTypes.bool,
  exitCart: PropTypes.func,
};
