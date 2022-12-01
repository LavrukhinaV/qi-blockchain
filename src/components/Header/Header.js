import SocialNetworks from "../SocialNetworks/SocialNetworks";
import BurgerMenu from "../BurgerMenu";
import NavBlock from "../NavBlock/NavBlock";
import './Header.css'
import logoImage from '../../images/QIUSD.svg';
import logoText from '../../images/logo-text.svg';
import useScreenWidth from "../../utils/useScreenWidth";

function Header() {
  const size = useScreenWidth();

  return (
    <header className="header">
      {size.width>1025 ?
      <>
      <div className="logo">
        <img className="logo__image" alt="Лого сайта" src={logoImage}/>
        <img className="logo__text" alt="Лого сайта" src={logoText}/>
      </div>
      <div className="header__container">
        <NavBlock className="nav-block__link"/>
      </div>
      <SocialNetworks />
      </>
      :
      <>
        <div className="logo__mobile"></div>
        <BurgerMenu />
      </>
      }
    </header>
  )
}

export default Header;