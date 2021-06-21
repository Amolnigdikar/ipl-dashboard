import "./App.scss";
import { TeamPage } from "./pages/TeamPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MatchPage } from "./pages/MatchPage";
import { AllTeamPage } from "./pages/AllTeamPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>
          <Route path="/teams/:teamName">
            <TeamPage />
          </Route>
          <Route path="/">
            <AllTeamPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
