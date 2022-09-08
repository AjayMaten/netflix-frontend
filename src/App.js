// import logo from './logo.svg';
// import "./App.css";

import HomePage from "./pages/Homepage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <SignInPage></SignInPage>
      <SignUpPage></SignUpPage>
    </div>
  );
}

export default App;
