import COLORS from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import METRICS from 'constants/Metrics';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonsBox: {
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  coverImage: {
    height: METRICS.screenHeight * 0.4,
    marginBottom: 20,
    width: '100%',
  },
  paragraphDescription: {
    color: COLORS.headlineDark,
    fontSize: 14,
    textAlign: 'center',
    ...GLOBAL_STYLES.font400,
  },
  paragraphTitle: {
    color: COLORS.headlineDark,
    fontSize: 22,
    textAlign: 'center',
    ...GLOBAL_STYLES.font700,
  },
  skipButtonSpace: {
    paddingBottom: 20,
    paddingStart: 20,
  },
  skipText: {
    color: COLORS.headlineDark,
    fontSize: 12,
    marginBottom: 3,
    marginEnd: 10,
    ...GLOBAL_STYLES.font700,
  },
  spaceBottom20: {
    marginBottom: 20,
  },
  spaceVertical: {
    marginVertical: 22,
  },
  toEnd: {
    alignItems: 'flex-end',
  },
});

export default styles;
