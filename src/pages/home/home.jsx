
import splash1 from "../../assets/splash1.jpg";
import splash2 from "../../assets/splash2.jpg";
import splash3 from "../../assets/splash3.jpg";
import './homeStyle.css'
/*
TODO

- fix responsiveness

- make API work faster, it updates everytime we chose a category but we need to store it somewhere.

-loading page

-Error page
*/

export default function Home() {
  
  return (
    <div id="home" className="body-container">
      <div className="splash-container section-container">
        <div className="splash-image"><img src={splash1} alt="fashion model" /></div>
        <div className="splash-image"><img src={splash2} alt="fashion model" /></div>
        <div className="splash-image"><img src={splash3} alt="fashion model" /></div>
      </div>
      <div className="splash-prompt">
        <h3>Mystic Mode</h3>
        <p>Fashion that transends time</p>
        <button className="main-button">Shop Now</button>
      </div>
      <div className="section-container warranty-prompt">
        <div className="diamond-container">
          <div className="diamond"></div>
          <h3>QUALITY MADE</h3>
        </div>
        <h2>OUR LIFETIME GURANTEE</h2>
        <p>We mean it when we say our clothing and gear are quality made. Thats why we offer a lifetime guarantee with all of our products.</p>
        <button className="main-button">Find out more</button>
      </div>
    </div>
  )
}