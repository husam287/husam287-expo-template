import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { globalStyle } from 'constants/Styles';
import CustomText from './CustomText';
import { Icon } from './Icon';
import { COLORS } from 'constants/Colors';

const ButtonComponent = ({
  title,
  onPress,
  color = '#fff',
  backgroundColor = COLORS.primary,
  borderColor,
  disabled = false,
  hasArrow = false,
  fontSize = 14,
  buttonCustomStyle,
  IconCompoent,
  isLoading,
}) => {
  const customStyle = {
    backgroundColor: disabled ? COLORS.grey : backgroundColor,
    color: color,
    borderColor: borderColor,
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
            <CustomText style={[styles.text, { color: color, fontSize }]}>
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
          <ActivityIndicator color={'#fff'} size={24} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    textTransform: 'uppercase',
    ...globalStyle.font500,
  },
  nextArrowPlace: {
    position: 'absolute',
    end: 20,
    ...globalStyle.flipBasesOnLang,
  },
});
