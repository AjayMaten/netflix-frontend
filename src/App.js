import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>} />
          <Route path="/SignIn" element={<SignInPage></SignInPage>} />
          <Route path="/SignUp" element={<SignUpPage></SignUpPage>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
