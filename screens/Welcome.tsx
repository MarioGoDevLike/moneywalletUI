import {View, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'expo-status-bar';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import Imagebg from "../assets/image.jpeg";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection><TopImage source={Imagebg} /></TopSection>
        <BottomSection></BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
