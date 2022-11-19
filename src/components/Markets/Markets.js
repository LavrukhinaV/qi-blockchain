import './Markets.css';

function Markets() {
  return (
    <section className="markets">
      <h2 className="markets__title">USDD Markets</h2>
      <div className="markets__image">
        <div className="markets_item markets_item_polycat-finance"></div>
        <div className="markets_item markets_item_sushiswap"></div>
        <div className="markets_item markets_item_bakeryswap"></div>
        <div className="markets_item markets_item_sdl-finance"></div>
        <div className="markets_item markets_item_curve"></div>
        <div className="markets_item markets_item_pancakeswap"></div>
        <div className="markets_item markets_item_gibx"></div>
        <div className="markets_item markets_item_definix"></div>
      </div>
    </section>
  )
}

export default Markets;