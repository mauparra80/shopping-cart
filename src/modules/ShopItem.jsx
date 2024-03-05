
import PropTypes from 'prop-types';
import { cartManager } from "./cart/cart";

export default function ShopItem({item, getTotalCartItems}){

  return (
    <div className="item">
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

ShopItem.propTypes = {
  item: PropTypes.object,
  getTotalCartItems: PropTypes.func
}