import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import GLOBAL_STYLES from 'constants/GlobalStyles';
import COLORS from 'constants/Colors';
import useShadow from 'hooks/useShadow';
import CustomText from './CustomText';
import Icon from './Icon';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  smallSpaceEnd: { marginEnd: 4 },
  text: {
    color: COLORS.light,
    fontSize: 16,
    textAlign: 'center',
    ...GLOBAL_STYLES.font700,
  },
});

export default function Button({
  title,
  onPress,
  color = COLORS.light,
  backgroundColor = COLORS.primary,
  borderColor,
  disabled = false,
  btnHeight = 52,
  buttonCustomStyle,
  textCustomStyle,
  fontSize = 16,
  iconSize = 18,
  IconComponent,
  IconName,
  isLoading,
  suffix,
  isFullWidth = false,
}) {
  const shadowStyle = useShadow();

  const customStyle = {
    backgroundColor: disabled ? COLORS.grey : backgroundColor,
    color,
    borderColor,
    borderWidth: borderColor && 1,
    height: btnHeight,
    flex: isFullWidth ? 1 : undefined,
    ...buttonCustomStyle,
  };

  const textExtraStyle = { color, fontSize };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        customStyle,
        shadowStyle(),
      ]}
      disabled={disabled || isLoading}
      activeOpacity={disabled ? 1 : 0.2}
      onPress={onPress}
    >
      {!isLoading ? (
        <View style={GLOBAL_STYLES.row}>
          {IconComponent || null}

          {!!IconName
              && (
                <Icon
                  name={IconName}
                  size={iconSize}
                  color={color}
                  style={styles.smallSpaceEnd}
                />
              )}

          {!!title && (
          <CustomText
            style={[styles.text, textExtraStyle, textCustomStyle]}
          >
            {title}
          </CustomText>
          )}

          {suffix}
        </View>
      ) : (
        <ActivityIndicator color={color} size={24} />
      )}
    </TouchableOpacity>
  );
}
