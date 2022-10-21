import { View } from 'react-native';
import React from 'react';

import globalStyle from 'constants/Styles';
import CustomText from 'components/CustomText';
import Icon from 'components/Icon';
import COLORS from 'constants/Colors';

function TapbarComponent({
  isFocused, title, tabWidth, iconName,
}) {
  const containerStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    width: tabWidth,
  };

  const textStyle = {
    color: isFocused ? COLORS.primary : COLORS.grey,
    fontSize: 12,
    marginTop: 6,
  };

  return (
    <View style={containerStyle}>
      <Icon
        name={iconName}
        size={24}
        color={isFocused ? COLORS.primary : COLORS.grey}
      />
      <CustomText style={[textStyle, globalStyle.font500]}>{title}</CustomText>
    </View>
  );
}

export default TapbarComponent;
