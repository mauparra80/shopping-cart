import { Link } from "react-router-dom";
import logoImg from "../assets/wm.svg";

export default function Header() {
  return (
    <div id="header">
      <Link to="/" ><img className="logoImg" src={logoImg} alt="company logo" /></Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link>Categories</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link>search</Link>
          </li>
          <li>
            <Link>profile</Link>
          </li>
          <li>
            <Link>cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}