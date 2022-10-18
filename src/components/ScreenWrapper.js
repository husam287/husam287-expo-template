import { globalStyle } from 'constants/Styles';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children }) => {
  return <SafeAreaView style={globalStyle.fullSize}>{children}</SafeAreaView>;
};

export default ScreenWrapper;
