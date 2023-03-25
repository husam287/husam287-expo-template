import {
  FlatList, TouchableOpacity, View,
} from 'react-native';
import React, { useState } from 'react';
import ReactNativeModal from 'react-native-modal';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import METRICS from 'constants/Metrics';
import CustomText from 'components/general/CustomText';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import LoadingComponent from 'components/general/LoadingComponent';
import COLORS from 'constants/Colors';
import i18n from 'assets/i18n';
import styles from './styles';
import PureInput from '../PureInput';

export default function NormalSelectionModal({
  data,
  onChange,
  inputValue,
  InputLabel,
  InputPlaceholder = i18n.t('CHOOSE'),
  errors,
  containerStyle,
  customInputStyle,
  isLoading,
  prefix,
  emptyPlaceholder,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onShowModal = () => {
    setIsModalVisible(true);
  };
  const onDismissModal = () => {
    setIsModalVisible(false);
  };

  const onSelectItem = (selectedItem) => {
    onChange(selectedItem);
    onDismissModal();
  };

  const ModalMarkup = (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onDismissModal}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <View style={styles.modalContainer}>
        <FlatList
          style={{ height: METRICS.screenHeight / 3 }}
          keyExtractor={(_) => _?.value}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onSelectItem(item)}
              style={[
                GLOBAL_STYLES.row,
                styles.pressSpace,
              ]}
            >
              <CustomText style={styles.text}>
                {item.label}
              </CustomText>
            </TouchableOpacity>
          )}
        />
      </View>
    </ReactNativeModal>
  );

  const InputIcon = data?.length
    ? (
      <SimpleLineIcons
        name="arrow-down"
        size={16}
        color={COLORS.darkGrey}
      />
    )
    : (
      <AntDesign
        name="inbox"
        size={16}
        color={COLORS.darkGrey}
      />
    );

  return (
    <View>
      <TouchableOpacity disabled={isLoading || !data?.length} onPress={onShowModal}>
        <PureInput
          editable={false}
          labelText={InputLabel}
          placeholderText={emptyPlaceholder || InputPlaceholder}
          isPlaceholderDotsHidden
          placeholderTextColor={COLORS.darkGrey}
          value={inputValue?.label}
          customInputColorWhenDisabled={COLORS.dark}
          customContainerStyle={containerStyle}
          customInputStyle={customInputStyle}
          error={errors}
          prefix={prefix}
          suffix={
            !isLoading
              ? InputIcon
              : <LoadingComponent />
            }
        />
      </TouchableOpacity>

      {ModalMarkup}
    </View>
  );
}
