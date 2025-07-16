import { NavLink } from 'react-router-dom'
import './Nav.scss'

function Nav() {
  return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink to="/" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>Home</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>Shop</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav