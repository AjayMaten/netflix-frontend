import React from "react";
import JumboComponent from "../components/dumb/Jumbo/JumboComponent.jsx";
// import HeaderWrapper from "../components/dumb/header/HeaderWrapper/HeaderWrapper.jsx";
// import SignInButton from "../components/dumb/header/SignInButton.jsx";
import HeaderComponent from "../components/smart/HeaderComponent/HeaderComponent.jsx";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <HeaderComponent />
      <hr className="seperator" />
      <JumboComponent />
    </div>
  );
}

export default HomePage;
