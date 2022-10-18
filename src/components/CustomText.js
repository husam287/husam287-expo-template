import { globalStyle } from 'constants/Styles';
import React from 'react';
import { I18nManager, StyleSheet, Text } from 'react-native';

const CustomText = ({ style, children, ...props }) => {
  const customStyles = style?.lenght ? [...style] : style;
  return (
    <Text {...props} style={[styles.textStyle, customStyles]}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  textStyle: {
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    color: '#fff',
    ...globalStyle.font400,
  },
});
