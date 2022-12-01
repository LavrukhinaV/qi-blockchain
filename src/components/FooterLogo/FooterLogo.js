import './FooterLogo.css';
import logoImage from "../../images/logo-foother.svg";
import logoText from "../../images/foother-text.svg";

function FooterLogo() {

  return (
    <div className="footer__logo">
      <img className="footer__logo-image" src={logoImage} alt="logo"></img>
      <img className="footer__logo-text" src={logoText} alt="Blockchain"></img>
    </div>
  )
}

export default FooterLogo;