import { Link } from "react-router-dom";
import React, {useState} from "react";
import logoImg from "../assets/wm.svg";
import Cart from "./cart";



export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen((previousSet) => !previousSet)
  }

  const exitCart = () => {
    setCartOpen(false);
  }

  return (
    <div id="header">
      <Link to="/" ><img className="logoImg" src={logoImg} alt="company logo" /></Link>
      <nav className="page-menu">
        <ul>
          <li>
            <Link to="/"><h3>Home</h3></Link>
          </li>
          <li>
            <Link to="/shop"><h3>Shop</h3></Link>
          </li>
          <li>
            <Link><h3>Categories</h3></Link>
          </li>
          <li>
            <Link><h3>About</h3></Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
          <i className="fi fi-rr-search icon"></i>
          </li>
          <li>
          <i className="fi fi-rr-user icon"></i>
          </li>
          <li>
            <i className="fi fi-rr-shopping-cart icon" onClick={() => handleCartClick()}></i>
          </li>
        </ul>
      </nav>
      {cartOpen && (
        <Cart 
        cartOpen={cartOpen}
        exitCart={exitCart}
        />)}
      
    </div>
  )
}