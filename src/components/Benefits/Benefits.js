import './Benefits.css';
import decentralizedIcon from "../../images/Decentralized-icon.svg";
import overCollateralizedIcon from "../../images/Over-Collateralized-icon.svg";
import chainAgnosticIcon from "../../images/Chain-Agnostic-icon.svg";


function Benefits() {
  return (
    <section className="benefits">
      <h2 className="benefits__title">
        <span className="benefits__title-colortext"> Over-Collateralized </span>
        Decentralized Stablecoin</h2>
      <ul className="benefits__table">
        <li className="benefits__table-cell">
          <img className="benefits__table-cell-image" alt="Decentralized" src={decentralizedIcon}></img>
          <h3 className="benefits__table-cell-title">Decentralized</h3>
          <p className="benefits__table-cell-text">
            The QiUSD protocol aims to provide 
            the blockchain industry with the most stable, decentralized, tamper-proof, 
            and freeze-free stablecoin system, a perpetual system 
            independent from any centralized entity.
          </p>
        </li>
        <li className="benefits__table-cell">
          <img className="benefits__table-cell-image" alt="Over-Collateralized" src={overCollateralizedIcon}></img>
          <h3 className="benefits__table-cell-title">Over-Collateralized</h3>
          <p className="benefits__table-cell-text">
            QiUSD is secured by the over-collateralization of multiple mainstream 
            digital assets (e.g. TRX, BTC, and USDT). The total value of collateralized 
            assets is significantly higher than that of QiUSD in circulation with 
            the collateral ratio set at 130%, far exceeding the 120% required for DAI.
          </p>
        </li>
        <li className="benefits__table-cell">
          <img className="benefits__table-cell-image" alt="Chain-Agnostic" src={chainAgnosticIcon}></img>
          <h3 className="benefits__table-cell-title">Chain-Agnostic</h3>
          <p className="benefits__table-cell-text">
            QiUSD circulates on TRON, Ethereum, BSC, and other networks via the cross-chain protocol 
            BitTorrent Chain. Similar to TRC20-USDT, it caters to users' needs by offering them 
            a fast and affordable experience on TRON.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Benefits;