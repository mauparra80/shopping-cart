import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import './headerStyle.css';
import logoImg from "../../assets/wm.svg";
import Cart from "../cart/cart";
import { cartManager } from "../cart/cart";
import APIManager from "../APImanger";
import Categories from "../Categories";

let totalItems = 0;

export default function Header({totalCartItems}) {
  const [cartOpen, setCartOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  
  useEffect(() => {
    async function getCategories() {
      const data = await APIManager.fetchCategories();
      setCategoryData(data);
    }
    getCategories();
  },[])

  

  const handleCartClick = () => {
    setCartOpen((previousSet) => !previousSet)
    document.querySelector("body").classList.add("prevent-scroll");
  }

  const exitCart = () => {
    setCartOpen(false);
    document.querySelector("body").classList.remove("prevent-scroll");
  }

  const handleCategoriesClick = () => {
    setCategoriesOpen(true);
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
            <Link to='/shop'><h3>Shop</h3></Link>
          </li>
          <li className="categories-dropdown-container">
            <h3 className="categories" onClick={() => handleCategoriesClick()}>Categories</h3>
            <Categories categoryData={categoryData} />
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
          <li className="cart-icon-container">
            <i className="fi fi-rr-shopping-cart icon" onClick={() => handleCartClick()}></i>
            <span className="live-cartCount">{totalCartItems}</span>
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
