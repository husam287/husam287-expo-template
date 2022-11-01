import { Text, View } from 'react-native';
import React from 'react';
import Icon from 'components/general/Icon';
import COLORS from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import ScreenWrapper from 'components/general/ScreenWrapper';

function TestScreen() {
  return (
    <ScreenWrapper>
      <View style={GLOBAL_STYLES.row}>
        <Text>hi</Text>
        <Icon name="user" size={14} color={COLORS.dangerTextColor} />
      </View>
    </ScreenWrapper>
  );
}

export default TestScreen;
