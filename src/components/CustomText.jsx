import COLORS from 'constants/Colors';
import globalStyle from 'constants/Styles';
import React from 'react';
import { I18nManager, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.light,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    ...globalStyle.font400,
  },
});

export default function CustomText({ style, children, ...otherProps }) {
  const customStyles = style?.lenght ? [...style] : style;
  return (
    <Text {...otherProps} style={[styles.textStyle, customStyles]}>
      {children}
    </Text>
  );
}
