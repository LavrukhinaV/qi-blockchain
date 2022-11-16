import './About.css';
import logo from "../../images/about-logo.png"

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__title">Decentralized USD</h1>
          <p className="about__text">
            <span className="about__colortext">The TRON DAO Reserve </span>
            is the custodian of QiUSD and guarantees its price stability
          </p>
        <button className="about__button about__button_with-gradient">PSM</button>
        <div className="about__button-container">
          <button className="about__button about__button_without-gradient">
            <p className="about__button-text">QiUSD Token Addresses</p>
            <span className="about__button-img about__button-img_type_brackets"></span>
          </button>
          <button className="about__button about__button_without-gradient">
            <p className="about__button-text">Audit Report</p>
            <span className="about__button-img about__button-img_type_magglass"></span>
          </button>
        </div>
      </div>
      <img className="about__image" alt="Logo" src={logo}></img>
    </section>
  )
}

export default About;