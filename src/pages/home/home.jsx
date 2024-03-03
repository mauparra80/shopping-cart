import { Link } from "react-router-dom";
import splash1 from "../../assets/splash1.jpg";
import splash2 from "../../assets/splash2.jpg";
import splash3 from "../../assets/splash3.jpg";
import './homeStyle.css'
/*
TODO

-set up home page
  - think of a theme and get some pics (copy a good site)

- set up about

- implement caching cart into local memory

- make sure everything has proptypes

- make API work faster, it updates everytime we chose a category but we need to store it somewhere.

-loading page
*/

export default function Home() {
  
  return (
    <div id="home" className="body-container">
      <div className="splash-container">
        <div className="splash-image"><img src={splash1} alt="fashion model" /></div>
        <div className="splash-image"><img src={splash2} alt="fashion model" /></div>
        <div className="splash-image"><img src={splash3} alt="fashion model" /></div>
      </div>
      <div className="splash-prompt">
        <h3>Mystic Mode</h3>
        <p>Fashion that transends time</p>
        <button className="main-button">Shop Now</button>
      </div>
    </div>
  )
}