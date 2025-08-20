import { Link } from 'react-router-dom'
import logo from '../../assets/homepage/svg/Logo.svg'
import card from '../../assets/homepage/svg/card.svg'
import './Header.scss'
function Header() {
  return (
    <header className="header">
        <Link to="/" className="logo"><img src={logo} alt="logo" className="logo__img" /></Link>
        <div className="header-container">
            <Link to="/cart" className="header-container__link"><img src={card} alt="card" className="header-container__img" /></Link>
            <button className="header-container__btn button">Login</button>
        </div>
    </header>
  )
}

export default Header