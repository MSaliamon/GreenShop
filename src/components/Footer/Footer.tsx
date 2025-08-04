import './Footer.scss'
import plant1 from '../../assets/homepage/svg/plant1.svg'
import plant2 from '../../assets/homepage/svg/plant2.svg'
import plant3 from '../../assets/homepage/svg/plant3.svg'
import logo from '../../assets/homepage/svg/Logo.svg'
import Location from '../../assets/homepage/svg/Location.svg'
import Message from '../../assets/homepage/svg/Message.svg'
import Calling from '../../assets/homepage/svg/Calling.svg'
import facebook from '../../assets/homepage/svg/Facebook.svg'
import instagram from '../../assets/homepage/svg/Instagram.svg'
import twitter from '../../assets/homepage/svg/Twitter.svg'
import linkedin from '../../assets/homepage/svg/Linkedin.svg'
import union from '../../assets/homepage/svg/union.svg'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container1">
            <div className="footer-box">
              <img src={plant1} alt="plant1" className="footer-box__img" />
              <p className="footer-box__name">Garden Care</p>
              <p className="footer-box__text">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className="footer-box">
              <img src={plant2} alt="plant2" className="footer-box__img" />
              <p className="footer-box__name">Plant Renovation</p>
              <p className="footer-box__text">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className="footer-box">
              <img src={plant3} alt="plant3" className="footer-box__img" />
              <p className="footer-box__name">Watering Graden</p>
              <p className="footer-box__text">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className="footer-box1">
              <p className="footer-box1__text">Would you like to join newsletters?</p>
              <label className="footer-box1__label">
                <input type="text" className="footer-box1__label-input" placeholder='enter your email address' />
                <button className="footer-box1__label-btn button">Join</button>
              </label>
              <p className="footer-box1__text2">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>
        </div>
        <div className="footer-container2">
          <Link to="/" className="logo"><img src={logo} alt="logo" className="logo__img" /></Link>
          <div className="footer-box">
            <img src={Location} alt="Location" className="footer-box__img" />
            <p className="footer-box__text">70 West Buckingham Ave.Farmingdale, NY 11735</p>
          </div>
          <div className="footer-box">
            <img src={Message} alt="Message" className="footer-box__img" />
            <a href="mailto:contact@greenshop.com" className="footer-box__text">contact@greenshop.com</a>
          </div>
          <div className="footer-box">
            <img src={Calling} alt="Calling" className="footer-box__img" />
            <a href="tel:8801911717490" className="footer-box__text">+88 01911 717 490</a>
          </div>
        </div>
        <div className="footer-container3">
          <ul className="footer-list">
            <p className="footer-list__text">My Account</p>
            <li className="footer__item">
              <a href="" className="footer-list__link">My Account</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">Our stores</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">Contact us</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">Career</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">Specials</a>
            </li>
          </ul>
          <ul className="footer-list">
            <p className="footer-list__text">Help & Guide</p>
            <li className="footer__item">
              <a href="" className="footer-list__link">Help Center</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">How to Buy</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">Shipping & Delivery</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">Product Policy</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">How to Return</a>
            </li>
          </ul>
          <ul className="footer-list">
            <p className="footer-list__text">Categories</p>
            <li className="footer__item">
              <a href="" className="footer-list__link">House Plants</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">Potter Plants</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">Seeds</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">Small Plants</a>
            </li>
            <li className="footer__item">
              <a href="" className="footer-list__link">Accessories</a>
            </li>
          </ul>
          <div className="footer-box">
              <p className="footer-box__text">Social Media</p>
              <div className="footer-box__socials">
                <img src={facebook} alt="facebook" className="footer-box__socials-img" />
                <img src={instagram} alt="instagram" className="footer-box__socials-img" />
                <img src={twitter} alt="twitter" className="footer-box__socials-img" />
                <img src={linkedin} alt="linkedin" className="footer-box__socials-img" />
                <img src={union} alt="union" className="footer-box__socials-img" />
              </div>
          </div>
        </div>
        <div className="footer-container4">
          <p className="footer-container4__text">© 2021 GreenShop. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer