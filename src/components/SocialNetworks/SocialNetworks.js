import './SocialNetworks.css';

import { LINKS } from "../../constant";

import reddit from '../../images/reddit.svg';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import weibo from '../../images/weibo.svg';
import github from '../../images/github.svg';
import discord from '../../images/discord.svg';
import telegram from '../../images/telegram.svg';
import us from '../../images/US.svg';
import cn from '../../images/CN.svg';
import ru from '../../images/RU.svg';

function SocialNetworks() {
  return (
    <nav className="links">
      <ul className="links__list" >
        <li className="links__item">
          <a href={LINKS.REDDIT} target="blank">
            <img className="link__img" src={reddit} alt="reddit"></img>
          </a>
        </li>
        <li className="links__item">
          <a href={LINKS.INSTAGRAM} target="blank">
            <img className="link__img" src={instagram} alt="instagram"></img>
          </a>
        </li>
        <li className="links__item">
          <a href={LINKS.FACEBOOK} target="blank">
            <img className="link__img" src={facebook} alt="facebook"></img>
          </a>
        </li>
        <li className="links__item">
          <a href={LINKS.TWITTER} target="blank">
            <img className="link__img" src={twitter} alt="twitter"></img>
          </a>
        </li>
        <li className="links__item">
          <a href={LINKS.WEIBO} target="blank">
            <img className="link__img"src={weibo} alt="weibo"></img>
          </a>
        </li>
        <li className="links__item">
          <a href={LINKS.GITHUB} target="blank">
            <img className="link__img"src={github} alt="github"></img>
          </a>
        </li>
        <li className="links__item">
          <a href={LINKS.DISCORD} target="blank">
            <img className="link__img"src={discord} alt="discord"></img>
          </a>
        </li>
        <li className="links__item links__items_languages">
          <a className="links__item lenks__item_telegram" href={LINKS.TELEGRAM} target="blank">
            <img className="link__img" src={telegram} alt="telegram"></img>
          </a>
          <a href={LINKS.TELEGRAM_US} target="blank" className="links__button">
            <img src={us} alt="language ru"></img>
          </a>
          <a href={LINKS.TELEGRAM_CN} target="blank" className="links__button">
            <img src={cn} alt="language cn"></img>
          </a>
          <a href={LINKS.TELEGRAM_RU} target="blank" className="links__button">
            <img src={ru} alt="language ru"></img>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SocialNetworks;