import './SocialNetworks.css';
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

function SocialNetworks() {
  return (
    <nav className="links">
      <ul className="links__list" >
        <li className="links__item">
          <img className="link__img" src={reddit} alt="reddit"></img>
        </li>
        <li className="links__item">
          <img className="link__img" src={instagram} alt="instagram"></img>
        </li>
        <li className="links__item">
          <img className="link__img" src={facebook} alt="facebook"></img>
        </li>
        <li className="links__item">
          <img className="link__img" src={twitter} alt="twitter"></img>
        </li>
        <li className="links__item">
          <img className="link__img"src={weibo} alt="weibo"></img>
        </li>
        <li className="links__item">
          <img className="link__img"src={github} alt="github"></img>
        </li>
        <li className="links__item">
          <img className="link__img"src={discord} alt="discord"></img>
        </li>
        <li className="links__item links__item_languages">
          <img className="link__img" src={telegram} alt="telegram"></img>
          <button className="links__button">
            <img src={us} alt="language ru"></img>
          </button>
          <button className="links__button">
            <img src={cn} alt="language cn"></img>
          </button>
          <button className="links__button">
            <img src={ru} alt="language ru"></img>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default SocialNetworks;