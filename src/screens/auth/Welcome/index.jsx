import { View } from 'react-native';
import React from 'react';
import ScreenWrapper from 'components/general/ScreenWrapper';
import CustomText from 'components/general/CustomText';

export default function WelcomeScreen() {
  return (
    <ScreenWrapper>
      <View>
        <CustomText>Welcome</CustomText>
      </View>
    </ScreenWrapper>
  );
}
