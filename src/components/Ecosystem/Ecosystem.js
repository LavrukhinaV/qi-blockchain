import './Ecosystem.css';
import tron from "../../images/Tron.svg";
import USDT from "../../images/USDT.svg";
import QIUSD from "../../images/QIUSD.png";
import Switch from "../Switch/Switch";

function Ecosystem() {
  return (
    <section className="ecosystem">
      <h2 className="ecosystem__title">Ecosystem</h2>
      <h3 className="ecosystem__subtitle">
        QiUSD Staking
        <span className="ecosystem__subtitle_pink"> APY 30%+</span></h3>
        <div className="ecosystem__switch">
        <Switch />
        <div className="ecosystem__filter">
          <div className="ecosystem__filter-item">
            <input className="ecosystem__filter-input" id="news" type="radio" name="radio" value="Sort by" onChange={console.log('change')} defaultChecked/>
            <label className="ecosystem__filter-label" htmlFor="news">Sort by</label>
          </div>
          <div className="ecosystem__filter-item">
            <input className="ecosystem__filter-input" id="videos" type="radio" name="radio" value="Api" onChange={console.log('change')}/>
            <label className="ecosystem__filter-label" htmlFor="videos">Api</label>
          </div>
      </div>
        </div>
        <ul className="ecosystem__table">
          <li className="ecosystem__table-cell">
            <div className="ecosystem__table-container ecosystem__table-container_position_top">
              <div className="ecosystem__flexibility">
                <span className="ecosystem__table-span ecosystem__table-span_color_green">Flexible</span>
                <span className="ecosystem__table-span ecosystem__table-span_color_red">Fixed</span>
              </div>
              <div className="ecosystem__table-icon">
                <img className="ecosystem__table-img" src={tron} alt="TRON"></img>
                <p className="ecosystem__table-text">TRON</p>
              </div>
              <div className="ecosystem__infobox">
                <div className="ecosystem__tokens-image">
                  <img className="ecosystem__token" src ={QIUSD} alt="QIUSD"></img>
                  <img className="ecosystem__token" src={USDT} alt="USDT"></img>
                </div>
                <h3 className="ecosystem__tokens">QiUSD - USDT LP</h3>
                <p className="ecosystem__link">sun.io</p>
              </div>
            </div>
            <ul className="ecosystem__table-container ecosystem__table-container_position_bottom">
              <li className="ecosystem__stake">
                <h3 className="ecosystem__stake-title">Total staked</h3>
                <p className="ecosystem__stake-value">$ 2,000,000,000</p>
              </li>
              <li className="ecosystem__apy">
                <h3 className="ecosystem__apy-title">APY</h3>
                <p className="ecosystem__apy-value">99,99%</p>
              </li>
            </ul>
          </li>
          <li className="ecosystem__table-cell">
            <div className="ecosystem__table-container ecosystem__table-container_position_top">
              <div className="ecosystem__flexibility">
                <span className="ecosystem__table-span ecosystem__table-span_color_green">Flexible</span>
                <span className="ecosystem__table-span ecosystem__table-span_color_red">Fixed</span>
              </div>
              <div className="ecosystem__table-icon">
                <img className="ecosystem__table-img" src={tron} alt="TRON"></img>
                <p className="ecosystem__table-text">TRON</p>
              </div>
              <div className="ecosystem__infobox">
                <div className="ecosystem__tokens-image">
                  <img className="ecosystem__token" src ={QIUSD} alt="QIUSD"></img>
                  <img className="ecosystem__token" src={USDT} alt="USDT"></img>
                </div>
                <h3 className="ecosystem__tokens">QiUSD - USDT LP</h3>
                <p className="ecosystem__link">sun.io</p>
              </div>
            </div>
            <ul className="ecosystem__table-container ecosystem__table-container_position_bottom">
              <li className="ecosystem__stake">
                <h3 className="ecosystem__stake-title">Total staked</h3>
                <p className="ecosystem__stake-value">$ 2,000,000,000</p>
              </li>
              <li className="ecosystem__apy">
                <h3 className="ecosystem__apy-title">APY</h3>
                <p className="ecosystem__apy-value">99,99%</p>
              </li>
            </ul>
          </li>
          <li className="ecosystem__table-cell">
            <div className="ecosystem__table-container ecosystem__table-container_position_top">
              <div className="ecosystem__flexibility">
                <span className="ecosystem__table-span ecosystem__table-span_color_green">Flexible</span>
                <span className="ecosystem__table-span ecosystem__table-span_color_red">Fixed</span>
              </div>
              <div className="ecosystem__table-icon">
                <img className="ecosystem__table-img" src={tron} alt="TRON"></img>
                <p className="ecosystem__table-text">TRON</p>
              </div>
              <div className="ecosystem__infobox">
                <div className="ecosystem__tokens-image">
                  <img className="ecosystem__token" src ={QIUSD} alt="QIUSD"></img>
                  <img className="ecosystem__token" src={USDT} alt="USDT"></img>
                </div>
                <h3 className="ecosystem__tokens">QiUSD - USDT LP</h3>
                <p className="ecosystem__link">sun.io</p>
              </div>
            </div>
            <ul className="ecosystem__table-container ecosystem__table-container_position_bottom">
              <li className="ecosystem__stake">
                <h3 className="ecosystem__stake-title">Total staked</h3>
                <p className="ecosystem__stake-value">$ 2,000,000,000</p>
              </li>
              <li className="ecosystem__apy">
                <h3 className="ecosystem__apy-title">APY</h3>
                <p className="ecosystem__apy-value">99,99%</p>
              </li>
            </ul>
          </li>
          <li className="ecosystem__table-cell">
            <div className="ecosystem__table-container ecosystem__table-container_position_top">
              <div className="ecosystem__flexibility">
                <span className="ecosystem__table-span ecosystem__table-span_color_green">Flexible</span>
                <span className="ecosystem__table-span ecosystem__table-span_color_red">Fixed</span>
              </div>
              <div className="ecosystem__table-icon">
                <img className="ecosystem__table-img" src={tron} alt="TRON"></img>
                <p className="ecosystem__table-text">TRON</p>
              </div>
              <div className="ecosystem__infobox">
                <div className="ecosystem__tokens-image">
                  <img className="ecosystem__token" src ={QIUSD} alt="QIUSD"></img>
                  <img className="ecosystem__token" src={USDT} alt="USDT"></img>
                </div>
                <h3 className="ecosystem__tokens">QiUSD - USDT LP</h3>
                <p className="ecosystem__link">sun.io</p>
              </div>
            </div>
            <ul className="ecosystem__table-container ecosystem__table-container_position_bottom">
              <li className="ecosystem__stake">
                <h3 className="ecosystem__stake-title">Total staked</h3>
                <p className="ecosystem__stake-value">$ 2,000,000,000</p>
              </li>
              <li className="ecosystem__apy">
                <h3 className="ecosystem__apy-title">APY</h3>
                <p className="ecosystem__apy-value">99,99%</p>
              </li>
            </ul>
          </li>
          <li className="ecosystem__table-cell">
            <div className="ecosystem__table-container ecosystem__table-container_position_top">
              <div className="ecosystem__flexibility">
                <span className="ecosystem__table-span ecosystem__table-span_color_green">Flexible</span>
                <span className="ecosystem__table-span ecosystem__table-span_color_red">Fixed</span>
              </div>
              <div className="ecosystem__table-icon">
                <img className="ecosystem__table-img" src={tron} alt="TRON"></img>
                <p className="ecosystem__table-text">TRON</p>
              </div>
              <div className="ecosystem__infobox">
                <div className="ecosystem__tokens-image">
                  <img className="ecosystem__token" src ={QIUSD} alt="QIUSD"></img>
                  <img className="ecosystem__token" src={USDT} alt="USDT"></img>
                </div>
                <h3 className="ecosystem__tokens">QiUSD - USDT LP</h3>
                <p className="ecosystem__link">sun.io</p>
              </div>
            </div>
            <ul className="ecosystem__table-container ecosystem__table-container_position_bottom">
              <li className="ecosystem__stake">
                <h3 className="ecosystem__stake-title">Total staked</h3>
                <p className="ecosystem__stake-value">$ 2,000,000,000</p>
              </li>
              <li className="ecosystem__apy">
                <h3 className="ecosystem__apy-title">APY</h3>
                <p className="ecosystem__apy-value">99,99%</p>
              </li>
            </ul>
          </li>
          <li className="ecosystem__table-cell">
            <div className="ecosystem__table-container ecosystem__table-container_position_top">
              <div className="ecosystem__flexibility">
                <span className="ecosystem__table-span ecosystem__table-span_color_green">Flexible</span>
                <span className="ecosystem__table-span ecosystem__table-span_color_red">Fixed</span>
              </div>
              <div className="ecosystem__table-icon">
                <img className="ecosystem__table-img" src={tron} alt="TRON"></img>
                <p className="ecosystem__table-text">TRON</p>
              </div>
              <div className="ecosystem__infobox">
                <div className="ecosystem__tokens-image">
                  <img className="ecosystem__token" src ={QIUSD} alt="QIUSD"></img>
                  <img className="ecosystem__token" src={USDT} alt="USDT"></img>
                </div>
                <h3 className="ecosystem__tokens">QiUSD - USDT LP</h3>
                <p className="ecosystem__link">sun.io</p>
              </div>
            </div>
            <ul className="ecosystem__table-container ecosystem__table-container_position_bottom">
              <li className="ecosystem__stake">
                <h3 className="ecosystem__stake-title">Total staked</h3>
                <p className="ecosystem__stake-value">$ 2,000,000,000</p>
              </li>
              <li className="ecosystem__apy">
                <h3 className="ecosystem__apy-title">APY</h3>
                <p className="ecosystem__apy-value">99,99%</p>
              </li>
            </ul>
          </li>
          <li className="ecosystem__table-cell">
            <div className="ecosystem__table-container ecosystem__table-container_position_top">
              <div className="ecosystem__flexibility">
                <span className="ecosystem__table-span ecosystem__table-span_color_green">Flexible</span>
                <span className="ecosystem__table-span ecosystem__table-span_color_red">Fixed</span>
              </div>
              <div className="ecosystem__table-icon">
                <img className="ecosystem__table-img" src={tron} alt="TRON"></img>
                <p className="ecosystem__table-text">TRON</p>
              </div>
              <div className="ecosystem__infobox">
                <div className="ecosystem__tokens-image">
                  <img className="ecosystem__token" src ={QIUSD} alt="QIUSD"></img>
                  <img className="ecosystem__token" src={USDT} alt="USDT"></img>
                </div>
                <h3 className="ecosystem__tokens">QiUSD - USDT LP</h3>
                <p className="ecosystem__link">sun.io</p>
              </div>
            </div>
            <ul className="ecosystem__table-container ecosystem__table-container_position_bottom">
              <li className="ecosystem__stake">
                <h3 className="ecosystem__stake-title">Total staked</h3>
                <p className="ecosystem__stake-value">$ 2,000,000,000</p>
              </li>
              <li className="ecosystem__apy">
                <h3 className="ecosystem__apy-title">APY</h3>
                <p className="ecosystem__apy-value">99,99%</p>
              </li>
            </ul>
          </li>
          <li className="ecosystem__table-cell">
            <div className="ecosystem__table-container ecosystem__table-container_position_top">
              <div className="ecosystem__flexibility">
                <span className="ecosystem__table-span ecosystem__table-span_color_green">Flexible</span>
                <span className="ecosystem__table-span ecosystem__table-span_color_red">Fixed</span>
              </div>
              <div className="ecosystem__table-icon">
                <img className="ecosystem__table-img" src={tron} alt="TRON"></img>
                <p className="ecosystem__table-text">TRON</p>
              </div>
              <div className="ecosystem__infobox">
                <div className="ecosystem__tokens-image">
                  <img className="ecosystem__token" src ={QIUSD} alt="QIUSD"></img>
                  <img className="ecosystem__token" src={USDT} alt="USDT"></img>
                </div>
                <h3 className="ecosystem__tokens">QiUSD - USDT LP</h3>
                <p className="ecosystem__link">sun.io</p>
              </div>
            </div>
            <ul className="ecosystem__table-container ecosystem__table-container_position_bottom">
              <li className="ecosystem__stake">
                <h3 className="ecosystem__stake-title">Total staked</h3>
                <p className="ecosystem__stake-value">$ 2,000,000,000</p>
              </li>
              <li className="ecosystem__apy">
                <h3 className="ecosystem__apy-title">APY</h3>
                <p className="ecosystem__apy-value">99,99%</p>
              </li>
            </ul>
          </li>
          <li className="ecosystem__table-cell">
            <div className="ecosystem__table-container ecosystem__table-container_position_top">
              <div className="ecosystem__flexibility">
                <span className="ecosystem__table-span ecosystem__table-span_color_green">Flexible</span>
                <span className="ecosystem__table-span ecosystem__table-span_color_red">Fixed</span>
              </div>
              <div className="ecosystem__table-icon">
                <img className="ecosystem__table-img" src={tron} alt="TRON"></img>
                <p className="ecosystem__table-text">TRON</p>
              </div>
              <div className="ecosystem__infobox">
                <div className="ecosystem__tokens-image">
                  <img className="ecosystem__token" src ={QIUSD} alt="QIUSD"></img>
                  <img className="ecosystem__token" src={USDT} alt="USDT"></img>
                </div>
                <h3 className="ecosystem__tokens">QiUSD - USDT LP</h3>
                <p className="ecosystem__link">sun.io</p>
              </div>
            </div>
            <ul className="ecosystem__table-container ecosystem__table-container_position_bottom">
              <li className="ecosystem__stake">
                <h3 className="ecosystem__stake-title">Total staked</h3>
                <p className="ecosystem__stake-value">$ 2,000,000,000</p>
              </li>
              <li className="ecosystem__apy">
                <h3 className="ecosystem__apy-title">APY</h3>
                <p className="ecosystem__apy-value">99,99%</p>
              </li>
            </ul>
          </li>
        </ul>
        <button type="button" className="ecosystem__button">Load More</button>
    </section>
  )
}

export default Ecosystem;