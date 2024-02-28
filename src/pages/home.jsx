import { Link } from "react-router-dom";
import APImanager from "../modules/APImanger"
import Header from "../modules/header";

/*
TODO
- set up full cart system
  - add to cart button adds item to cart object
  - cart can be viewed from cart button
    -add num of item, delete

-set up categories 
  - create dropdown menu only
  - each category will print a shop page with only listed items

-set up home page
  - think of a theme and get some pics (copy a good site)

- set up about

- implement caching cart into local memory

- make sure everything has proptypes
*/

export default function Home() {
  
  return (
    <div id="home" className="body-container">
      <Link to="/shop">Go to Store Page</Link>
    </div>
  )
}