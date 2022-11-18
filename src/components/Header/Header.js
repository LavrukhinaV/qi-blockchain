import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import MobileMenu from '../MobileMenu/MobileMenu';
import './Header.css'
// import logoImage from '../../images/QIUSD.png';
import logoText from '../../images/logo-text.svg';

function Header(props) {
  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  return (
    <header className="header">
      {size.width>890 ?
      <>
      <div className="logo">
        <img className="logo__image" alt="Лого сайта" />
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
      </>
      :
      <>
        <div className="logo__mobile"></div>
        <button type="menu" className="header__menu-btn_open" onClick={props.onHeaderMenu}/>
        <MobileMenu isOpen={props.isOpen} onClose={props.onClose}/>
      </>
      }
    </header>
  )
}

export default Header;