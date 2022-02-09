import React, { useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';
import { useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../../components/typography/text.coomponent';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const CameraScreen = ({navigation}) => {

    const cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);
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
          const { status } = await Camera.requestPermissionsAsync();
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
        <ProfileCamera
            ref={(camera) => (cameraRef.current = camera)}
            type={Camera.Constants.Type.front}
        >
      <TouchableOpacity onPress={snap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
    );
};

export default CameraScreen;