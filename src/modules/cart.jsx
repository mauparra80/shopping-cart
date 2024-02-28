import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types';

class CartManager {
  constructor() {
    this.cartItems = [];
  }

  addCartItem(item) {
    this.cartItems.push(item);
    console.log("items in the cart", this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }
}
export const cartManager = new CartManager();


export default function Cart({cartOpen, exitCart}) {
  const [cartItems, setCartItems] = useState(null);
  console.log(cartOpen);
  // function addItem(item){
  //  setCartItems((prevItems) => [cartItems]);
  // }

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

  console.log("the date is", getExpectedDate())


  return (  
    <div  className="cart-module">
      {console.log(cartItems)}
      <div className="title-exit">
        <h1>Your Cart</h1>
        <button onClick={() => exitCart()}>X</button>
      </div>
      <div className="product-total">
        <p>PRODUCT</p>
        <p>Total</p>
      </div>
      <hr />
      <div className="cart-items">
        {cartItems.map((item) => {
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>Estimated between: </p>
            </div>
            <div className="cart-item-price_count_delete">
              <p>price</p>
              <div>count</div>
              <button>delete</button>
            </div>
          </div>
        })}
        
      </div>
      <hr />
      <div className="total">
        <h4>Estimated total</h4>
        <p>price</p>
      </div>
      <p>Tax included. Shipping and discounts calculated at checkout</p>
      <button className="main-button">Check Out</button>
      
    </div>
  )
}

const getExpectedDate = () => {
  const today = new Date();
  console.log(today.getDate());
}

Cart.propTypes = {
  cartOpen: PropTypes.bool,
  exitCart: PropTypes.func,
};
