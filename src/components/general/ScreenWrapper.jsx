import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import COLORS from 'constants/Colors';
import Metrics from 'constants/Metrics';
import GLOBAL_STYLES from 'constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: Metrics.screenWidth * 0.056,
    width: Metrics.screenWidth,
  },
  innerConatiner: {
    backgroundColor: COLORS.light,
    flex: 1,
  },
});

export default function ScreenWrapper({
  children,
  spaceBetween,
  customStyle,
  noKeyboardVerticalOffset = false,
}) {
  const allContainerStyle = [
    styles.container,
    { justifyContent: spaceBetween ? 'space-between' : 'flex-start' },
    customStyle,
  ];

  const MainContentMarkup = (
    <View style={allContainerStyle}>
      {children}
    </View>
  );

  return (
    <SafeAreaView style={styles.innerConatiner}>
      {Platform.OS === 'ios'
        ? (
          <KeyboardAvoidingView
            style={GLOBAL_STYLES.fullSize}
            behavior="padding"
            keyboardVerticalOffset={!noKeyboardVerticalOffset ? Metrics.headerHeight : 0}
          >
            {MainContentMarkup}
          </KeyboardAvoidingView>
        )
        : MainContentMarkup}
    </SafeAreaView>
  );
}
