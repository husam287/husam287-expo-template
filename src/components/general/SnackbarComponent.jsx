import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useDispatch, useSelector } from 'react-redux';

import COLORS from 'constants/Colors';
import Metrics from 'constants/Metrics';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { hideToast } from 'reducers/appReducer';
import CustomText from './CustomText';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + Metrics.screenHeight * 0.05,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  msgStyle: {
    ...GLOBAL_STYLES.font500,
    alignSelf: 'center',
    color: COLORS.light,
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },
});

function SnackbarComponent() {
  const toast = useSelector((state) => state.app.toast);
  const visibleCondition = Boolean(toast?.message);
  const dispatch = useDispatch();

  const autoHideToast = useCallback(() => {
    setTimeout(() => {
      dispatch(hideToast());
    }, 3000);
  }, [dispatch]);

  useEffect(() => {
    if (visibleCondition) autoHideToast();
  }, [visibleCondition, autoHideToast]);

  const backgroundStyle = {
    backgroundColor: toast?.type === 'success'
      ? COLORS.success
      : COLORS.danger,
  };

  return (
    visibleCondition
      ? (
        <View
          style={[
            styles.container,
            backgroundStyle,
          ]}
        >
          <CustomText style={styles.msgStyle}>
            {toast?.message}
          </CustomText>
        </View>
      )
      : null
  );
}

export default SnackbarComponent;
