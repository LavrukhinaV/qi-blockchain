import { NavLink } from 'react-router-dom';
import SocialNetworks from "../SocialNetworks/SocialNetworks"
import './Header.css'
import logoImage from '../../images/logo-image.svg';
import logoText from '../../images/logo-text.svg';

function Header() {

  return (
    <header className="header">
      <div className="logo">
        <img className="logo__image" alt="Лого сайта" src={logoImage}/>
        <img className="logo__text" alt="Лого сайта" src={logoText}/>
      </div>
      <div className="header__container">
        <NavLink to="/movies" activeClassName= "header__link_active" className="header__link">
          Docs
        </NavLink>
        <NavLink to="/saved-movies" activeClassName= "header__link_active" className="header__link">
          FAQ
        </NavLink>
        <NavLink to="/saved-movies" activeClassName= "header__link_active" className="header__link">
          Terms of Service
        </NavLink>
      </div>
      <SocialNetworks />
    </header>
  )
}

export default Header;