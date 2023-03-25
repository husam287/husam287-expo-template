import { TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import METRICS from 'constants/Metrics';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import BottomSheet from './BottomSheet';
import styles from './styles';

function CustomBottomSheet({
  isVisible,
  setVisible,
  children,
  transparent = false,
  draggable = false,
  isCloseButtonHidden = false,
  sheetHeight = METRICS.screenHeight * 0.5,
}) {
  const bottomSheetRef = useRef(null);
  const show = () => {
    bottomSheetRef.current.show();
  };
  const close = () => {
    bottomSheetRef.current.close();
    setVisible(false);
  };

  useEffect(() => {
    if (isVisible) show();
    else close();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      draggable={draggable}
      hasDraggableIcon={draggable}
      height={sheetHeight}
      radius={30}
      backgroundColor={transparent ? 'transparent' : '#00000099'}
      onClose={close}
      closeFunction={isVisible && close}
      sheetBackgroundColor="#fff"
    >
      <StatusBar backgroundColor="#00000099" />
      <View>
        {!isCloseButtonHidden
                    && (
                    <View style={[GLOBAL_STYLES.row, styles.sheetContainer]}>
                      <TouchableOpacity onPress={close}>
                        <AntDesign name="close" size={18} color="black" />
                      </TouchableOpacity>
                    </View>
                    )}
        {children}
      </View>
    </BottomSheet>
  );
}

export default CustomBottomSheet;
