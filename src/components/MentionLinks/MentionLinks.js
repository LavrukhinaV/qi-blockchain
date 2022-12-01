import "./MentionLinks.css";
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

function MentionLinks ({ className }) {
    return (
      <ul className={className}>
        <li className="mention-links__link">
          <a href='https://coinmarketcap.com/' target="blank">
            <img className="mention-links-image" src={coinMarketCap} alt="Coin Market Cap"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a href='https://www.benzinga.com/' target="blank">
            <img className="mention-links-image" src={benzinga} alt="benzinga"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a href='https://www.coinspeaker.com/' target="blank">
            <img className="mention-links-image" src={coinspeaker} alt="coinspeaker"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a>
            <img className="mention-links-image" src={market} alt="market"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a>
            <img className="mention-links-image" src={watch} alt="watch"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a href='https://www.businessinsider.com/' target="blank">
            <img className="mention-links-image" src={businessInsider} alt="businessInsider"></img>
          </a>
        </li>
        <li className="mention-links__link mention-links__link_margin_none">
          <a href='https://walletinvestor.com/' target="blank">
            <img className="mention-links-image" src={walletInvestor} alt="walletInvestor"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a href='https://www.bloomberg.com/' target="blank">
            <img className="mention-links-image" src={bloomberg} alt="bloomberg"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a href='https://www.coingecko.com/' target="blank">
            <img className="mention-links-image" src={coinGecko} alt="Coin Gecko"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a href='https://techbullion.com/' target="blank">
            <img className="mention-links-image" src={techBullion} alt="Tech Bullion"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a href='https://www.digitaljournal.com/' target="blank">
            <img className="mention-links-image" src={digitalJournal} alt="Digital Journal"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a href='https://menafn.com/' target="blank">
            <img className="mention-links-image" src={menaFM} alt="MenaFM"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a href='https://www.investing.com/' target="blank">
            <img className="mention-links-image" src={investingCom} alt="investing.com"></img>
          </a>
        </li>
        <li className="mention-links__link">
          <a href='https://finance.yahoo.com/' target="blank">
            <img className="mention-links-image" src={yahooFinance} alt="Yahoo Finance"></img>
          </a>
        </li>
      </ul>
    );
};

export default MentionLinks;