import { NavLink } from 'react-router-dom';
import './Header.css'
import logoImage from '../../images/logo-image.svg';
import logoText from '../../images/logo-text.svg';
import reddit from '../../images/reddit.svg'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import weibo from '../../images/weibo.svg'
import github from '../../images/github.svg'
import discord from '../../images/discord.svg'
import telegram from '../../images/telegram.svg'
import us from '../../images/US.svg'
import cn from '../../images/CN.svg'
import ru from '../../images/RU.svg'

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
      <nav className="header__links">
          <ul className="header__links-list" >
            <li className="header__link-item">
              <img className="header__link-img" src={reddit} alt="reddit"></img>
            </li>
            <li className="header__link-item">
              <img className="header__link-img" src={instagram} alt="instagram"></img>
            </li>
            <li className="header__link-item">
              <img className="header__link-img" src={facebook} alt="facebook"></img>
            </li>
            <li className="header__link-item">
              <img className="header__link-img" src={twitter} alt="twitter"></img>
            </li>
            <li className="header__link-item">
              <img className="header__link-img"src={weibo} alt="weibo"></img>
            </li>
            <li className="header__link-item">
              <img className="header__link-img"src={github} alt="github"></img>
            </li>
            <li className="header__link-item">
              <img className="header__link-img"src={discord} alt="discord"></img>
            </li>
            <li className="header__link-item header__link-item_languages">
              <img className="header__link-img" src={telegram} alt="telegram"></img>
              <button className="header__button">
                <img src={us} alt="language ru"></img>
              </button>
              <button className="header__button">
                <img src={cn} alt="language cn"></img>
              </button>
              <button className="header__button">
                <img src={ru} alt="language ru"></img>
              </button>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;