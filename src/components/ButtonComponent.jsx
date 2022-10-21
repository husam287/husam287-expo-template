import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import globalStyle from 'constants/Styles';
import COLORS from 'constants/Colors';
import CustomText from './CustomText';
import Icon from './Icon';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  nextArrowPlace: {
    end: 20,
    position: 'absolute',
    ...globalStyle.flipBasesOnLang,
  },
  text: {
    textAlign: 'center',
    textTransform: 'uppercase',
    ...globalStyle.font500,
  },
});

export default function ButtonComponent({
  title,
  onPress,
  color = COLORS.light,
  backgroundColor = COLORS.primary,
  borderColor,
  disabled = false,
  hasArrow = false,
  fontSize = 14,
  buttonCustomStyle,
  IconCompoent,
  isLoading,
}) {
  const customStyle = {
    backgroundColor: disabled ? COLORS.grey : backgroundColor,
    color,
    borderColor,
    borderWidth: borderColor && 1,
    ...buttonCustomStyle,
  };

  return (
    <View>
      <TouchableOpacity
        disabled={disabled || isLoading}
        activeOpacity={disabled ? 1 : 0.2}
        onPress={onPress}
        style={[styles.button, customStyle]}
      >
        {!isLoading ? (
          <>
            {IconCompoent && <IconCompoent />}
            <CustomText style={[styles.text, { color, fontSize }]}>
              {title}
            </CustomText>
            {hasArrow && (
              <Icon
                name="right-arrow"
                size={30}
                color="#fff"
                style={styles.nextArrowPlace}
              />
            )}
          </>
        ) : (
          <ActivityIndicator color="#fff" size={24} />
        )}
      </TouchableOpacity>
    </View>
  );
}
