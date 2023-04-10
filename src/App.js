import './App.css';
import { useAuthContext } from "@asgardeo/auth-react";
import {BrowserRouter, Router, Route, Switch} from "react-router-dom";
import Login from "./Login";
import {history} from "./history";

function App() {
  const { state, signIn, signOut } = useAuthContext();
  const handleSignIn = () => {
    signIn();
  }

  return (
    <div className="App">
      {
        state.isAuthenticated
          ? (
            // <div>
            //   <button onClick={() => signOut()}>Logout</button>
            // </div>
            <BrowserRouter>
              <Router history={history}>
                <Switch>
                  <Route exact path="/login" component={Login}/>
                </Switch>
              </Router>
            </BrowserRouter>
          )
          : <button onClick={() => signIn()}>Login</button>
          // : handleSignIn()
      }
    </div>
  );
}

export default App;
