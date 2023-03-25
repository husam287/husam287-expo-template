import COLORS from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    color: COLORS.dark,
    fontSize: 14,
    ...GLOBAL_STYLES.font700,
  },
  customButtonRadius16: {
    borderRadius: 16,
  },
  customButtonRadius30: {
    borderRadius: 30,
  },
  dateText: {
    color: COLORS.secondaryText,
    fontSize: 10,
    ...GLOBAL_STYLES.font500,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceTop20: {
    marginTop: 20,
  },
  title: {
    color: COLORS.danger,
    fontSize: 14,
    ...GLOBAL_STYLES.font500,
  },
});

export default styles;
