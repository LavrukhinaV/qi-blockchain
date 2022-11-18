import './Footer.css';
import logoImage from "../../images/logo-foother.svg";
import logoText from "../../images/foother-text.svg";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import coinMarketCap from "../../images/CoinMarketCap.svg";
import benzinga from "../../images/benzinga.svg";
import coinspeaker from "../../images/Coinspeaker.svg";
import market from "../../images/Market.svg";
import watch from "../../images/Watch.svg";
import businessInsider from "../../images/BusinessInsider.svg";
import walletInvestor from "../../images/WalletInvestor.svg";
import bloomberg from "../../images/Bloomberg_logo.svg";
import coinGecko from "../../images/coingecko-logo.svg";
import techBullion from "../../images/TechBullionLogo.svg";
import digitalJournal from "../../images/Digital-Journal.svg";
import menaFM from "../../images/MenaFM.svg";
import investingCom from "../../images/investing.com.svg";
import yahooFinance from "../../images/Yahoo_Finance.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img className="footer__logo-image" src={logoImage} alt="logo"></img>
          <img className="footer__logo-text" src={logoText} alt="Blockchain"></img>
        </div>
        <p className="footer__copyright">&copy; 2022 QiBlockchain. All Rights Reserved</p>
        <ul className="footer__links">
          <li className="footer__link">
            <img className="footer__link-image" src={coinMarketCap} alt="Coin Market Cap"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={benzinga} alt="benzinga"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={coinspeaker} alt="coinspeaker"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={market} alt="market"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={watch} alt="watch"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={businessInsider} alt="businessInsider"></img>
          </li>
          <li className="footer__link footer__link_margin_none">
            <img className="footer__link-image" src={walletInvestor} alt="walletInvestor"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={bloomberg} alt="bloomberg"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={coinGecko} alt="Coin Gecko"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={techBullion} alt="Tech Bullion"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={digitalJournal} alt="Digital Journal"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={menaFM} alt="MenaFM"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={investingCom} alt="investing.com"></img>
          </li>
          <li className="footer__link">
            <img className="footer__link-image" src={yahooFinance} alt="Yahoo Finance"></img>
          </li>
        </ul>
        <div className="footer__social-networks">
          <SocialNetworks />
        </div>
      </div>
    </footer>
  )
}

export default Footer;