import './App.css';
import { useAuthContext } from "@asgardeo/auth-react";

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
            <div>
              <button onClick={() => signOut()}>Logout</button>
            </div>
          )
          // : <button onClick={() => signIn()}>Login</button>
          : handleSignIn()
      }
    </div>
  );
}

export default App;
