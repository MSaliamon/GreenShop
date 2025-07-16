import { Link } from 'react-router-dom'
import logo from '../../assets/homepage/svg/Logo.svg'
import search from '../../assets/homepage/svg/search.svg'
import card from '../../assets/homepage/svg/card.svg'
import './Header.scss'
import Nav from './Nav/Nav'
function Header() {
  return (
    <header className="header">
        <Link to="/" className="logo"><img src={logo} alt="logo" className="logo__img" /></Link>
        <Nav />
        <div className="header-container">
            <img src={search} alt="search" className="header-container__img" />
            <img src={card} alt="card" className="header-container__img" />
            <button className="header-container__btn button">Login</button>
        </div>
    </header>
  )
}

export default Header