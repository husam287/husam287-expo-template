import { View } from 'react-native';
import React from 'react';

import GLOBAL_STYLES from 'constants/GlobalStyles';
import CustomText from 'components/general/CustomText';
import COLORS from 'constants/Colors';

function TapbarComponent({
  isFocused,
  title,
  tabWidth,
  iconComponent,
}) {
  const SPACE_BETWEEN = 10.5;

  const containerStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    MarginHorizontal: SPACE_BETWEEN,
    width: tabWidth - (SPACE_BETWEEN * 2),
    marginTop: 10,
  };

  const focusContainer = {
    backgroundColor: isFocused ? '#D1D5DB' : 'transpparent',
    borderRadius: 16,
  };

  const textStyle = {
    color: COLORS.dark,
    fontSize: 10,
  };

  return (
    <View style={[containerStyle, focusContainer]}>
      {iconComponent}
      <CustomText style={[textStyle, GLOBAL_STYLES.font700]}>{title}</CustomText>
    </View>
  );
}

export default TapbarComponent;
