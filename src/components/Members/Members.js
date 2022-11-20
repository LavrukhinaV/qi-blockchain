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
        <div className="members__animation-container">
          <span className="members__list">
            <img className="members__list-item" src={tpsCapital} alt="Tps Capital"></img>
            <img className="members__list-item" src={falconx} alt="falconx"></img>
            <img className="members__list-item" src={multichain} alt="multichain"></img>
            <img className="members__list-item" src={ankr} alt="ankr"></img>
            <img className="members__list-item" src={poloniex} alt="poloniex"></img>
            <img className="members__list-item" src={tpsCapital} alt="Tps Capital"></img>
            <img className="members__list-item" src={falconx} alt="falconx"></img>
            <img className="members__list-item" src={multichain} alt="multichain"></img>
            <img className="members__list-item" src={mirana} alt="mirana"></img>
            <img className="members__list-item" src={ankr} alt="ankr"></img>
            <img className="members__list-item" src={poloniex} alt="poloniex"></img>
          </span>
          <span className="members__list">
            <img className="members__list-item" src={tpsCapital} alt="Tps Capital"></img>
            <img className="members__list-item" src={falconx} alt="falconx"></img>
            <img className="members__list-item" src={multichain} alt="multichain"></img>
            <img className="members__list-item" src={ankr} alt="ankr"></img>
            <img className="members__list-item" src={poloniex} alt="poloniex"></img>
            <img className="members__list-item" src={tpsCapital} alt="Tps Capital"></img>
            <img className="members__list-item" src={falconx} alt="falconx"></img>
            <img className="members__list-item" src={multichain} alt="multichain"></img>
            <img className="members__list-item" src={mirana} alt="mirana"></img>
            <img className="members__list-item" src={ankr} alt="ankr"></img>
            <img className="members__list-item" src={poloniex} alt="poloniex"></img>
          </span>
        </div>
      </div>
    </section>
    
  )
}

export default Members;