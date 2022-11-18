import './Markets.css';
import markets from "../../images/markets.png";

function Markets() {
  return (
    <section className="markets">
      <h2 className="markets__title">USDD Markets</h2>
      <img className="markets__image" src={markets} alt="markets"></img>

    </section>
  )
}

export default Markets;