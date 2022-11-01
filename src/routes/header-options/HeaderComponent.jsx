import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Ionicons } from '@expo/vector-icons';

import CustomText from 'components/general/CustomText';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import COLORS from 'constants/Colors';

const styles = StyleSheet.create({
  headerStyle: {
    alignItems: 'flex-end',
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: getStatusBarHeight(),
  },
  headerTitle: {
    color: COLORS.primary,
    fontSize: 22,
    ...GLOBAL_STYLES.font500,
  },
  spacing: { padding: 5 },
});

function HeaderComponent({ navigation, title, hasBackArrow }) {
  return (
    <View style={styles.headerStyle}>
      {hasBackArrow && navigation?.canGoBack() && (
      <TouchableOpacity
        style={styles.spacing}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-chevron-back" size={24} color={COLORS.primary} />
      </TouchableOpacity>
      )}

      <View>
        <CustomText style={styles.headerTitle}>{title}</CustomText>
      </View>
    </View>
  );
}

export default HeaderComponent;
