import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Benefits from '../Benefits/Benefits';
import Comparison from '../Comparison/Comparison';
import Psm from "../Psm/Psm";
import Transparency from "../Transparency/Transparency";
import Ecosystem from "../Ecosystem/Ecosystem";
import Markets from "../Markets/Markets";
import Members from "../Members/Members";
import QIBlockchainTechnology from "../QIBlockchainTechnology/QIBlockchainTechnology";
import News from "../News/News";
import Footer from "../Footer/Footer";
import { Route, Switch } from 'react-router-dom'; 

function App() {
  return (
  <div className="page">
    <Switch>
      <Route exact path="/">
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
        <News />
        <Footer />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
