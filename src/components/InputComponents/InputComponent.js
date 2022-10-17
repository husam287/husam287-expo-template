import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  I18nManager,
} from "react-native";

import { globalStyle } from "constants/Styles";
import CustomText from "../CustomText";
import useShadow from "hooks/useShadow";
import Metrics from "constants/Metrics";
import { Controller } from "react-hook-form";
import { COLORS } from "constants/Colors";

const InputComponent = ({
  control,
  name,
  onChange,
  value,
  errors,
  editable = true,
  customContainerStyle,
  prefix,
  suffix,
  placeholderText,
  inputType,
  placeholderTextColor = COLORS.grey,
  keyboard = "default",
  autoCompleteType,
  maxLength,
  textArea,
  customInputStyle,
  hintText
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const error = errors?.[name]?.message
  const hasErrors = Boolean(error)
  const shadowStyle = useShadow()

  const Input = ({ onChange, onBlur, value }) => (
    <>
      <View
        pointerEvents={(editable === false && Platform.OS === "ios") ? "none" : "auto"}
        style={[
          styles.inputContainer,
          { ...customContainerStyle },
          shadowStyle(40, 0.25),
          hasErrors && styles.errorBorder,
        ]}
      >
        {/* Icon Component */}
        {prefix ? prefix : null}

        {/* INPUT */}
        <TextInput
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholderText}
          value={value}
          textContentType={inputType}
          secureTextEntry={inputType === "password" && !showPassword}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : COLORS.grey
          }
          /* options */
          keyboardType={keyboard}
          autoCompleteType={autoCompleteType}
          autoCorrect={false}
          autoCapitalize={'none'}
          maxLength={maxLength}
          editable={editable}
          /* if textarea */
          multiline={Boolean(textArea)}
          numberOfLines={textArea ? 5 : 1}
          /* styles */
          style={[
            styles.input,
            customInputStyle && { ...customInputStyle },
            !editable && { color: COLORS.darkGrey }, // override color when disabled
          ]}
        />

        {/* ONLY FOR SELECTION INPUT */}
        {suffix ? suffix : null}

        {/* SHOW PASSWORD */}
        {inputType === "password" && (
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
                <Ionicons name="md-eye-off-outline" size={24} color={COLORS.primary} />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* ERROR & HINT PART */}
      <View>
        {hasErrors &&
          <CustomText style={styles.errorText}>{error}</CustomText>
        }
        {hintText && !hasErrors &&
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name="exclamation" size={14} color={COLORS.secondary} style={{ marginHorizontal: 5 }} />
            <CustomText style={styles.hintText}>{hintText}</CustomText>
          </View>
        }
      </View>
    </>
  )

  return (control ?
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input onBlur={onBlur} onChange={onChange} value={value} />
      )}
    />
    :
    <Input onBlur={onBlur} onChange={onChange} value={value} />
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 23,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    width: '100%',
    textAlign: I18nManager.isRTL ? "right" : "left",
    textAlignVertical: "center",
    color: COLORS.primary,
    ...globalStyle.font400
  },
  showPasswordIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
    elevation: 20
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: COLORS.errorRedColor,
  },
  errorText: {
    ...globalStyle.font400,
    color: COLORS.errorRedColor,
    fontSize: 12,
  },
  hintText: {
    color: COLORS.secondary,
    fontSize: 14,
    ...globalStyle.font400
  }
});

export default InputComponent;
