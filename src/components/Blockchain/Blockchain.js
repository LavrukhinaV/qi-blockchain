import "./Blockchain.css";
import tron from "../../images/Tron.svg";
import USDT from "../../images/USDT.svg";
import QIUSD from "../../images/QIUSD.svg";

function Blockchain({element}) {
  return(
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
          <h3 className="ecosystem__tokens">{element.token}</h3>
          <p className="ecosystem__link">sun.io</p>
        </div>
      </div>
      <ul className="ecosystem__table-container ecosystem__table-container_position_bottom">
        <li className="ecosystem__stake">
          <h3 className="ecosystem__stake-title">Total staked</h3>
          <p className="ecosystem__stake-value">{element.stak}</p>
        </li>
        <li className="ecosystem__apy">
          <h3 className="ecosystem__apy-title">APY</h3>
          <p className="ecosystem__apy-value">{element.value}</p>
        </li>
      </ul>
    </li>
  )
}

export default Blockchain;