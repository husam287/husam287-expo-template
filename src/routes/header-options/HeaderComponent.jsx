import React from 'react';
import {
  I18nManager, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SimpleLineIcons } from '@expo/vector-icons';

import CustomText from 'components/general/CustomText';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import COLORS from 'constants/Colors';
import Icon from 'components/general/Icon';

const styles = StyleSheet.create({
  headerStyle: {
    alignItems: 'flex-end',
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default function HeaderComponent({
  navigation,
  title,
  hasBackArrow = true,
  isRightComponentHidden = false,
}) {
  const BackButtonMarkup = (
    <View style={GLOBAL_STYLES.row}>
      <SimpleLineIcons
        name={I18nManager.isRTL ? 'arrow-right' : 'arrow-left'}
        size={18}
        color={COLORS.dark}
      />
    </View>
  );

  const NotificationButtonMarkup = (
    <Icon name="alert" size={18} color={COLORS.dark} />
  );

  const goToNotificationScreen = () => {
    navigation.navigate('NotificationScreen');
  };

  const isBackButtonVisible = hasBackArrow && navigation?.canGoBack();

  return (
    <View style={styles.headerStyle}>
      {/* BACK BUTTON */}
      {isBackButtonVisible && (
        <TouchableOpacity
          style={styles.spacing}
          onPress={() => navigation.goBack()}
        >
          {BackButtonMarkup}
        </TouchableOpacity>
      )}

      {/* TITLE */}
      <View>
        <CustomText style={styles.headerTitle}>{title}</CustomText>
      </View>

      {/* NOTIFICATION */}
      {!isRightComponentHidden && (
        <TouchableOpacity
          style={styles.spacing}
          onPress={goToNotificationScreen}
        >
          {NotificationButtonMarkup}
        </TouchableOpacity>
      )}
    </View>
  );
}
