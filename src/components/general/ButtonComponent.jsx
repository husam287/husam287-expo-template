import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import GLOBAL_STYLES from 'constants/GlobalStyles';
import COLORS from 'constants/Colors';
import CustomText from './CustomText';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  text: {
    textAlign: 'center',
    textTransform: 'uppercase',
    ...GLOBAL_STYLES.font500,
  },
});

export default function ButtonComponent({
  title,
  onPress,
  color = COLORS.light,
  backgroundColor = COLORS.primary,
  borderColor,
  disabled = false,
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
          <View>
            {IconCompoent || null}
            {title
              ? (
                <CustomText style={[styles.text, { color, fontSize }]}>
                  {title}
                </CustomText>
              )
              : null}
          </View>
        ) : (
          <ActivityIndicator color="#fff" size={24} />
        )}
      </TouchableOpacity>
    </View>
  );
}
