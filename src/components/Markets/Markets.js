import './Markets.css';
import polycatFinance from "../../images/AMM/Polygon/polycat\ finance.png";
import sushiswap from "../../images/AMM/Moonriver/sushiswap.png";
import bakeryswap from "../../images/AMM/ETH\ &\ BSC/bakeryswap.png";
import sdlFinance from "../../images/AMM/Multiple/saddle\ finance\ \(SDL\).png";
import curve from "../../images/AMM/Multiple/curve.png";
import pancakeswap from "../../images/AMM/ETH\ &\ BSC/pancakeswap.png";
import gibx from "../../images/AMM/ETH\ &\ BSC/GIBX.png";
import definix from "../../images/AMM/Klaytn/definix.png"


function Markets() {
  return (
    <section className="markets">
      <h2 className="markets__title">USDD Markets</h2>
      <div className="markets__image">
        <img className="markets_item markets_item_polycat-finance" src={polycatFinance} alt="polycatFinance"/>
        <img className="markets_item markets_item_sushiswap" src={sushiswap} alt="sushiswap"/>
        <img className="markets_item markets_item_bakeryswap" src={bakeryswap} alt="{akeryswap"/>
        <img className="markets_item markets_item_sdl-finance" src={sdlFinance} alt="sdl finance"/>
        <img className="markets_item markets_item_curve" src={curve} alt="curve"/>
        <img className="markets_item markets_item_pancakeswap" src={pancakeswap} alt="pancakeswap"/>
        <img className="markets_item markets_item_gibx" src={gibx} alt="gibx"/>
        <img className="markets_item markets_item_definix" src={definix} alt="definix"/>
      </div>
    </section>
  )
}

export default Markets;