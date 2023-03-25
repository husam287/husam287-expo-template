import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import i18n from 'assets/i18n';
import CustomText from './CustomText';

const styles = StyleSheet.create({
  centering: {
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.secondary,
    fontSize: 14,
    marginStart: 5,
  },
});

export default function EmptyComponent({ text = i18n.t('EMPTY') }) {
  return (
    <View style={[GLOBAL_STYLES.row, styles.centering]}>
      <AntDesign name="inbox" size={18} color={Colors.secondary} />
      <CustomText style={styles.textStyle}>{text}</CustomText>
    </View>
  );
}
