import './Footer.css';
import logoImage from "../../images/logo-foother.svg";
import logoText from "../../images/foother-text.svg";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import MentionLinks from "../MentionLinks/MentionLinks";
import Copyright from "../Copyright/Copyright";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img className="footer__logo-image" src={logoImage} alt="logo"></img>
          <img className="footer__logo-text" src={logoText} alt="Blockchain"></img>
        </div>
        <Copyright />
        <div className="footer__links">
          <MentionLinks />
        </div>
        <div className="footer__social-networks">
          <SocialNetworks />
        </div>
      </div>
    </footer>
  )
}

export default Footer;