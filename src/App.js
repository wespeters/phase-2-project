import logo from './logo.svg';
import { Route, Switch } from "react-router.dom";
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path ="/">
          <Home>
          </Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
