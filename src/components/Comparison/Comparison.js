import './Comparison.css';
// import QIUSD from "../../images/logo-image.svg";
import USDT from "../../images/USDT.svg";
import USDC from "../../images/USDC.svg";
import DAI from "../../images/DAI.svg";

function Comparison() {
  return (
    <section className="comparison">
      <ul className="comparison__table">
        <li className="comparison__table-cell">
          <img className="comparison__table-cell-image" alt="QIUSD"></img>
          <p className="comparison__table-cell-token">QIUSD</p>
          <p className="comparison__table-cell-ratio comparison__table-cell-ratio_color_pink">200%</p>
        </li>
        <li className="comparison__table-cell">
          <img className="comparison__table-cell-image" src={USDT} alt="USDT"></img>
          <p className="comparison__table-cell-token">USDT</p>
          <p className="comparison__table-cell-ratio">100%</p>
        </li>
        <li className="comparison__table-cell">
          <img className="comparison__table-cell-image" src={USDC} alt="USDC"></img>
          <p className="comparison__table-cell-token">USDC</p>
          <p className="comparison__table-cell-ratio">100%</p>
        </li>
        <li className="comparison__table-cell">
          <img className="comparison__table-cell-image" src={DAI} alt="DAI"></img>
          <p className="comparison__table-cell-token">DAI</p>
          <p className="comparison__table-cell-ratio">120%</p>
        </li>
      </ul>
      <p className="comparison__text">Collateral Ratio Comparison</p>
    </section>
  )
}

export default Comparison;