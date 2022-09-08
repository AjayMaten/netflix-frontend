import React from "react";
import FooterComponent from "../../components/dumb/Footer/FooterComponent/FooterComponent";
import HeaderWrapper from "../../components/dumb/header/HeaderWrapper/HeaderWrapper";
import Logo from "../../components/dumb/header/Logo";
import NavBar from "../../components/dumb/header/NavBar/NavBar";
import SignInComponent from "../../components/smart/SignInComponent/SignInComponent";

function SignInPage() {
  return (
    <>
      <HeaderWrapper>
        <NavBar className="navbar_home">
          <Logo />
        </NavBar>
        <SignInComponent />
      </HeaderWrapper>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default SignInPage;
