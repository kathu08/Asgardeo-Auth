import './App.css';
import { useAuthContext } from "@asgardeo/auth-react";
import {BrowserRouter, Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./Login";
import {history} from "./history";
import React from "react";

function App() {
  const { state } = useAuthContext();

  return (
    <div className="App">
      {
        state.isAuthenticated
          ? (
            <BrowserRouter>
              <Router history={history}>
                <Switch>
                  <Route exact path="/home" component={Login}/>
                  <Redirect to="/home"/>
                </Switch>
              </Router>
            </BrowserRouter>
          )
            : null
      }
    </div>
  );
}

export default App;
