import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Combine from "./components/Combine";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/movie-react-app/" component={Combine}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
