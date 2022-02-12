import React from "react";

import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/animation.json")}
          />
      </AnimationWrapper>
        <Title>MEALS TO GO</Title>
      <AccountContainer>
        <AuthButton
          icon="lock"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
          >
          Login
        </AuthButton>
        <Spacer size="medium">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
            >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
