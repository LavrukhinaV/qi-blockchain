import './Psm.css';

function Psm() {
  return (
    <section className="psm">
      <div className="psm__rocks psm__rocks_one"></div>
      <div className="psm__rocks psm__rocks_two"></div>
      <div className="psm__rocks psm__rocks_three"></div>
      <div className="psm__rocks psm__rocks_four"></div>
      <div className="psm__rocks psm__rocks_five"></div>
      <div className="psm__rocks psm__rocks_six"></div>
      <div className="psm__guard">

      <h2 className="psm__title">Peg Stability Module</h2>
      <p className="psm__subtitle">
        Peg Stability Module (PSM) is a swap tool launched by the TRON DAO Reserve, 
        aiming to maintain the stability of QiUSD. Users can swap between QiUSD and 
        other stablecoins at a 1:1 ratio with no slippage.</p>
      <button className="psm__button">
        <p className="psm__button-text">Get started</p>
        <span className="psm__button-arrow"></span>
      </button>
      </div>
    </section>
  )
}

export default Psm;