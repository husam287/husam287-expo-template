import React, { useState } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  I18nManager,
} from 'react-native';

import GLOBAL_STYLES from 'constants/GlobalStyles';
import useShadow from 'hooks/useShadow';
import COLORS from 'constants/Colors';
import i18n from 'assets/i18n';
import CustomText from '../CustomText';
import Icon from '../Icon';

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: COLORS.danger,
    borderWidth: 1,
  },
  errorText: {
    ...GLOBAL_STYLES.font400,
    color: COLORS.danger,
    fontSize: 12,
  },
  hintText: {
    color: COLORS.secondary,
    fontSize: 14,
    ...GLOBAL_STYLES.font400,
  },
  input: {
    color: COLORS.dark,
    flex: 1,
    fontSize: 14,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    textAlignVertical: 'center',
    width: '100%',
    ...GLOBAL_STYLES.font500,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.light,
    borderRadius: 16,
    flexDirection: 'row',
    height: 56,
    marginTop: 5,
    paddingHorizontal: 15,
  },
  labelText: {
    color: COLORS.dark,
    fontSize: 14,
    marginStart: 5,
    ...GLOBAL_STYLES.font500,
  },
  showPasswordIcon: {
    elevation: 20,
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 10,
  },
  spaceAround: { marginHorizontal: 5 },
  spaceBottom: { marginBottom: 16 },
  spaceEnd10: { marginEnd: 10 },
});

export default function PureInput({
  error,
  editable = true,
  customContainerStyle,
  prefix,
  suffix = <Icon name="edit" color={COLORS.darkGrey} size={14} />,
  value,
  onChange,
  onSubmit = () => {},
  onBlur = () => {},
  placeholderText = i18n.t('DEFAULT_PLACEHOLDER'),
  inputType,
  placeholderTextColor = `${COLORS.headlineDark}8A`,
  keyboard = 'default',
  autoCompleteType,
  maxLength,
  customInputColorWhenDisabled = COLORS.darkGrey,
  textArea,
  customInputStyle,
  hintText,
  labelText,
  isPlaceholderDotsHidden = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const hasErrors = Boolean(error);
  const shadowStyle = useShadow();

  const ErrorSectionMarkup = (
    <View>
      {hasErrors && <CustomText style={styles.errorText}>{error}</CustomText>}
      {hintText && !hasErrors && (
        <View style={GLOBAL_STYLES.row}>
          <FontAwesome
            name="exclamation"
            size={14}
            color={COLORS.secondary}
            style={styles.spaceAround}
          />
          <CustomText style={styles.hintText}>{hintText}</CustomText>
        </View>
      )}
    </View>
  );

  const PasswordIconMarkup = inputType === 'password' && (
    <View style={styles.showPasswordIcon}>
      <TouchableOpacity
        onPress={() => {
          setShowPassword(false);
        }}
      >
        {showPassword && (
          <Ionicons name="md-eye-outline" size={24} color={COLORS.primary} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setShowPassword(true);
        }}
      >
        {!showPassword && (
          <Ionicons
            name="md-eye-off-outline"
            size={24}
            color={COLORS.primary}
          />
        )}
      </TouchableOpacity>
    </View>
  );

  const pointerEventValue = editable === false && Platform.OS === 'ios' ? 'none' : 'auto';

  const inputContainerStyles = [
    styles.inputContainer,
    { ...customContainerStyle },
    shadowStyle(),
    hasErrors && styles.errorBorder,
  ];

  const inputStyles = [
    styles.input,
    customInputStyle && { ...customInputStyle },
    !editable && { color: customInputColorWhenDisabled }, // override color when disabled
  ];

  const placeholderTextColorValue = placeholderTextColor || COLORS.grey;

  const LabelMarkup = (!!labelText
    && (
    <View style={GLOBAL_STYLES.row}>
      <Icon
        name="next"
        size={14}
        color={COLORS.darkGrey}
      />
      <CustomText style={styles.labelText}>
        {labelText}
      </CustomText>
    </View>
    )
  );

  return (
    <View style={styles.spaceBottom}>
      {LabelMarkup}

      <View pointerEvents={pointerEventValue} style={inputContainerStyles}>
        {!!prefix && (
          <View style={styles.spaceEnd10}>
            {prefix}
          </View>
        )}

        <TextInput
          onChangeText={onChange}
          onBlur={onBlur}
          onSubmitEditing={onSubmit}
          placeholder={`${placeholderText}${isPlaceholderDotsHidden ? '' : '...'}`}
          value={value}
          textContentType={inputType}
          secureTextEntry={inputType === 'password' && !showPassword}
          placeholderTextColor={placeholderTextColorValue}
          keyboardType={keyboard}
          autoCompleteType={autoCompleteType}
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={maxLength}
          editable={editable}
          multiline={Boolean(textArea)}
          numberOfLines={textArea ? 5 : 1}
          style={inputStyles}
        />

        {/* ONLY FOR SELECTION INPUT */}
        {suffix || null}

        {/* SHOW PASSWORD */}
        {PasswordIconMarkup}
      </View>

      {ErrorSectionMarkup}
    </View>
  );
}
