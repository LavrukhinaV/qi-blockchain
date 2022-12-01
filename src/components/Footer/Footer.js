import './Footer.css';
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import MentionLinks from "../MentionLinks/MentionLinks";
import Copyright from "../Copyright/Copyright";
import useScreenWidth from "../../utils/useScreenWidth";
import NavBlock from "../NavBlock/NavBlock";
import FooterLogo from "../FooterLogo/FooterLogo";

function Footer() {
  const size = useScreenWidth();

  return (
    <footer className="footer">
      <div className="footer__content">
      {size.width>1025 ?
      <>
        <FooterLogo />
        <Copyright />
        <MentionLinks className="mention-links"/>
        <SocialNetworks />
      </>
      :
      <>
        <nav className="footer__nav-block">
          <NavBlock className="nav-block__link nav-block__link_footer"/>
        </nav>
        <MentionLinks className="mention-links mention-links_footer-mobile"/>
        <SocialNetworks />
        <Copyright />
      </>
    }
      </div>
    </footer>
  )
}

export default Footer;