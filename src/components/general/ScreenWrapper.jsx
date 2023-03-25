import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import COLORS from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import METRICS from 'constants/Metrics';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: METRICS.generalSpacingValue,
    paddingTop: 10,
    width: METRICS.screenWidth,
  },
  innerConatiner: {
    backgroundColor: COLORS.light,
    flex: 1,
  },
  paddingHorizontal0: {
    paddingHorizontal: 0,
  },
});

export default function ScreenWrapper({
  children,
  spaceBetween,
  customStyle,
  hasNoHorizontalSpacing = false,
  isHeaderHidden = false,
  noKeyboardVerticalOffset = false,
}) {
  const allContainerStyle = [
    styles.container,
    hasNoHorizontalSpacing && styles.paddingHorizontal0,
    { justifyContent: spaceBetween ? 'space-between' : 'flex-start' },
    isHeaderHidden && { paddingTop: isHeaderHidden ? getStatusBarHeight() : 10 },
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
            keyboardVerticalOffset={!noKeyboardVerticalOffset ? METRICS.headerHeight : 0}
          >
            {MainContentMarkup}
          </KeyboardAvoidingView>
        )
        : MainContentMarkup}
    </SafeAreaView>
  );
}
