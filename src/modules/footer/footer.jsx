import { Link } from 'react-router-dom';
import "./footerStyle.css";
import GithubMark from '../../assets/github-mark.png'

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-section footer-main">
        <a href="https://github.com/mauparra80" target='_blank' className='signature'>
          <img src={GithubMark} alt="github mark" />
          <p>Mauparra80</p>
        </a>
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <Link>Responsability</Link>
            </li>
            <li>
              <Link>Manufacturing</Link>
            </li>
            <li>
              <Link>Affiliate Dashboard</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Find Us</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="customer-care">
          <h3>Customer Care</h3>
          <ul>
            <li>
              <Link>FAQs</Link>
            </li>
            <li>
              <Link>Shipping</Link>
            </li>
            <li>
              <Link>Returns & Exchanges</Link>
            </li>
            <li>
              <Link>Product Care & Instructions</Link>
            </li>
            <li>
              <Link>Ethical Gurarantee</Link>
            </li>
            <li>
              <Link>Repairs</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='footer-line' />
      <div className="footer-section footer-bottom">
        <ul>
          <li>
            <p>&copy;2024 <Link>Company</Link></p>
          </li>
          <span>&middot;</span>
          <li>
            <Link>Refund policy</Link>
          </li>
          <span>&middot;</span>
          <li>
            <Link>Privacy policy</Link>
          </li>
          <span>&middot;</span>
          <li>
            <Link>Terms of services</Link>
          </li>
          <span>&middot;</span>
          <li>
            <Link>Contact information</Link>
          </li>
        </ul>
      </div>

      <p>UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a></p>
    </div>
  )
}