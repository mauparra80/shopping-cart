import { Link } from "react-router-dom";
import APImanager from "../modules/APImanger"
import Header from "../modules/header/header";

/*
TODO
-set up categories 
  -add category title to shop page

-set up home page
  - think of a theme and get some pics (copy a good site)

- set up about

- implement caching cart into local memory

- make sure everything has proptypes

- make API work faster, it updates everytime we chose a category but we need to store it somewhere.
*/

export default function Home() {
  
  return (
    <div id="home" className="body-container">
      <Link to="/shop">Go to Store Page</Link>
    </div>
  )
}