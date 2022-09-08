import React from "react";
import HeaderWrapper from "../../dumb/header/HeaderWrapper/HeaderWrapper";
import SignInButton from "../../dumb/header/SignInButton";
import Logo from "../../dumb/header/Logo";
import NavBar from "../../dumb/header/NavBar/NavBar";
import FeatureWrapper from "../../dumb/header/FeatureWrapper/FeatureWrapper";
import FeatureTitle from "../../dumb/header/FeatureTitle/FeatureTitle";
import SubscribeButton from "../../dumb/Forms/Subscribe/SubscribeButton";
import SubscribeWrapper from "../../dumb/Forms/Subscribe/SubscribeWrapper";
import SubscribeEmail from "../../dumb/Forms/Subscribe/SubscribeEmail";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <div>
      <HeaderWrapper>
        <NavBar className="navbar_home">
          <Logo />
          <SignInButton />
        </NavBar>
        <FeatureWrapper className="feature-wrapper-home">
          <FeatureTitle className="feature-title-home">
            Unlimited movies, TV shows and more.
          </FeatureTitle>
        </FeatureWrapper>

        <SubscribeWrapper>
          <SubscribeEmail type="email" placeholder="Email address" />
          <SubscribeButton>Get Started &gt;</SubscribeButton>
        </SubscribeWrapper>
      </HeaderWrapper>
    </div>
  );
}

export default HeaderComponent;
