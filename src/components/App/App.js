import './App.css';
import '../../vendor/wickedcss.min.css';
import Main from "../Main/Main";
import IssuanceHistory from "../IssuanceHistory/IssuanceHistory";
import { Route, Switch } from 'react-router-dom'; 
import {RecoilRoot} from "recoil";
import {ROUTES} from "../../constant/index";

function App() {

  return (
  <div className="page">
    <RecoilRoot>
      <Route exact path={ROUTES.HOMEPAGE}>
        <Main />
      </Route>
      <Route path={ROUTES.ISSUANCE_HISTORY}>
        <IssuanceHistory />
      </Route>
      </RecoilRoot>
  </div>
  );
}

export default App;
