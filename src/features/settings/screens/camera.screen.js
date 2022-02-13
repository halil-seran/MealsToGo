import React, { useRef, useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, Button } from "react-native";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  bottom: 30px;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
        ratio={"16:9"} //this is for only android
      >
        <ButtonContainer>
          <Button title="take a picture" onPress={snap} />
        </ButtonContainer>
      </ProfileCamera>
    </TouchableOpacity>
  );
};
