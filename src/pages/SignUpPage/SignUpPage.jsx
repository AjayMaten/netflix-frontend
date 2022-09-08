import React from "react";
import FooterComponent from "../../components/dumb/Footer/FooterComponent/FooterComponent";
import HeaderWrapper from "../../components/dumb/header/HeaderWrapper/HeaderWrapper";
import Logo from "../../components/dumb/header/Logo";
import NavBar from "../../components/dumb/header/NavBar/NavBar";
import SignUpComponent from "../../components/smart/SignUpComponent/SignUpComponent";

function SignInPage() {
  return (
    <>
      <HeaderWrapper>
        <NavBar className="navbar_home">
          <Logo />
        </NavBar>
        <SignUpComponent />
      </HeaderWrapper>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default SignInPage;
