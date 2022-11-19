import './Members.css';
import tpsCapital from "../../images/partners_tps.svg";
import falconx from "../../images/partners_falconx.svg";
import multichain from "../../images/partners_multichain.svg";
import mirana from "../../images/partners_mirana.svg";
import ankr from "../../images/partners_ankr.svg";
import poloniex from "../../images/partners_poloniex.svg";

function Members() {
 
  return (

    <section className="members">
      <h2 className="members__title">Members</h2>
      <div className="members__animation">
        <ul className="members__list">
          <li className="members__list-item">
            <img className="members__list-logo" src={tpsCapital} alt="Tps Capital"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={falconx} alt="falconx"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={multichain} alt="multichain"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={mirana} alt="mirana"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={ankr} alt="ankr"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={poloniex} alt="poloniex"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={tpsCapital} alt="Tps Capital"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={falconx} alt="falconx"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={multichain} alt="multichain"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={mirana} alt="mirana"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={ankr} alt="ankr"></img>
          </li>
          <li className="members__list-item">
            <img className="members__list-logo" src={poloniex} alt="poloniex"></img>
          </li>
        </ul>
      </div>
    </section>
    
  )
}

export default Members;