import { StyleSheet } from 'react-native';
import COLORS from 'constants/Colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.transparent,
    flex: 1,
  },
  container: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 0,
    overflow: 'hidden',
    width: '100%',
  },
  draggableContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.transparent,
    width: '100%',
  },
  draggableIcon: {
    borderRadius: 3,
    height: 6,
    margin: 10,
    marginBottom: 0,
    width: 40,
  },
  sheetContainer: {
    justifyContent: 'flex-end',
    padding: 30,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
