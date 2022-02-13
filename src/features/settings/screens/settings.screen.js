import React, { useContext, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";

import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItems = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  top: 10px;
`;

const EmailTitle = styled(Text)`
  font-size: 20px;
`;

export const AnimationWrapper = styled.View`
  width: 30%;
  height: 15%;
  position: absolute;
  left: 145px;
  top: 645px;
  padding: ${(props) => props.theme.space[2]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SafeArea>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/AvatarAnimation.json")}
        />
      </AnimationWrapper>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon
              size={130}
              icon="karate"
              color="black"
              backgroundColor="rgba(200, 150, 150, 0.5)"
            />
          )}
          {photo && (
            <Avatar.Image
              size={130}
              source={{ uri: photo }}
              backgroundColor="rgba(200, 150, 150, 0.5)"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="small">
          <EmailTitle variant="caption">{user.email}</EmailTitle>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItems
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItems
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

// <Avatar.Icon size={100} icon="human" backgroundColor="#2182BD" />
