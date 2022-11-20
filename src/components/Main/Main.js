import './Main.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from '../About/About';
import Benefits from '../Benefits/Benefits';
import Comparison from '../Comparison/Comparison';
import Psm from "../Psm/Psm";
import Transparency from "../Transparency/Transparency";
import Ecosystem from "../Ecosystem/Ecosystem";
import Markets from "../Markets/Markets";
import Members from "../Members/Members";
import QIBlockchainTechnology from "../QIBlockchainTechnology/QIBlockchainTechnology";
import SliderSection from "../SliderSection"

function Main() {

  return (
    <div className="main">
      <div>
      <Header />
      <About />
      <Benefits />
      <Comparison />
      <Psm />
      <Transparency />
      <Ecosystem />
      <Markets />
      <Members />
      <QIBlockchainTechnology />
      <SliderSection />
      <Footer />
      </div>
    </div>
  );
}

export default Main;