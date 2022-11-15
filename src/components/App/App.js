import './App.css';
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'; 

function App() {
  return (
  <div className="page">
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
