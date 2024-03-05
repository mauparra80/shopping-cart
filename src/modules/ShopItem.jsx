import React, {useState} from "react"
import { cartManager } from "./cart/cart";

export default function ShopItem({item, getTotalCartItems}){
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  }

  return (
    <div className="item"
         onMouseEnter={() => handleMouseEnter()}
         onMouseLeave={() => handleMouseLeave()}
         >
        <div className="img-container">
          <img src={item.image} alt="" />
        </div>
        
        <div className="text-container">
          <h3 className="item-title">{item.title}</h3>
          <p className="item-price">{item.price}</p>
          <button 
            className="main-button pointer"
            onClick={() => {
            cartManager.addCartItem(item)
            getTotalCartItems();
            }} >Add to cart</button>
        </div>
        
    </div>
  )
}