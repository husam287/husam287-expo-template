import React, { useEffect, useRef, useState } from "react";
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
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from '@expo/vector-icons';

import Colors from "constants/Colors";
import { globalStyle } from "constants/Styles";
import CustomText from "../CustomText";
import useShadow from "hooks/useShadow";
import { Icon } from "../Icon";
import Metrics from "constants/Metrics";

const InputComponent = (props) => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const ref = useRef(null);
  const navigation = useNavigation();
  useEffect(() => {
    // disable auto focus on ios
    if (Platform.OS === 'ios') {
      return;
    }
    if (props.autoFocus) {
      let timeOutEvent;
      let unsubscribe = navigation.addListener("focus", () => {
        timeOutEvent = setTimeout(() => {
          props.autoFocus && ref.current.focus();
        }, 100);
      });

      return () => {
        clearTimeout(timeOutEvent);
        unsubscribe();
      };
    }
  }, []);

  const hasErrors = props.errors && props.touched;
  const shadowStyle = useShadow();
  return (
    <>
      <View
        pointerEvents={(props.editable === false && Platform.OS === "ios") ? "none" : "auto"}
        style={[
          styles.inputContainer,
          { ...props.customContainerStyle },
          shadowStyle(40, 0.25),
          focus && styles.inputOnFocus,
          hasErrors && styles.errorBorder,
        ]}
      >

        {/* ICON */}
        {props.iconName && <Icon name={props.iconName} color={(props.editable !== false || props.forSelectionModal) ? Colors.primary : Colors.grey} size={22} style={styles.iconStyle} />}

        {/* Icon Component */}
        {props.iconComponent}

        {/* INPUT */}
        <TextInput
          ref={ref}
          onChangeText={props.onChangeText}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
            props.onBlur && props.onBlur();
          }}
          placeholder={props.placeholderText}
          value={props.value}
          textContentType={props.inputType}
          secureTextEntry={props.inputType === "password" && !showPassword}
          placeholderTextColor={
            props?.customColor ? props?.customColor : Colors.grey
          }
          /* options */
          keyboardType={props.keyboard ? props.keyboard : "default"}
          autoCompleteType={props?.autoCompleteType}
          autoCorrect={false}
          autoCapitalize={'none'}
          maxLength={props?.maxLength}
          editable={props.editable === false ? false : true}
          /* if textarea */
          multiline={props.textArea ? true : false}
          numberOfLines={props.textArea ? 5 : 1}
          /* styles */
          style={[
            styles.input,
            props.customInputStyle && { ...props.customInputStyle },
            props.editable === false && { color: Colors.darkGrey }, // override color when disabled
            props.forSelectionModal === true && { color: Colors.primary }
          ]}
        />


        {/* Date Input */}
        {props.isDateInput && (
          <MaterialIcons style={styles.showPasswordIcon} name="date-range" size={24} color={props.editable !== false ? Colors.primary : Colors.grey} />
        )}

        {/* ONLY FOR SELECTION INPUT */}
        {props.forSelectionModal &&
          <MaterialIcons style={styles.downArrow} name="arrow-forward-ios" size={24} color={Colors.primary} />
        }

        {/* SHOW PASSWORD */}
        {props.inputType === "password" && (
          <View style={styles.showPasswordIcon}>
            <TouchableOpacity
              onPress={() => {
                setShowPassword(false);
              }}
            >
              {showPassword && (
                <Ionicons name="md-eye-outline" size={24} color={Colors.primary} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowPassword(true);
              }}
            >
              {!showPassword && (
                <Ionicons name="md-eye-off-outline" size={24} color={Colors.primary} />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* ERROR & HINT PART */}
      <View>
        {hasErrors &&
          <CustomText style={styles.errorText}>{props.errors}</CustomText>
        }
        {props.hintText && !hasErrors &&
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name="exclamation" size={14} color={Colors.secondary} style={{ marginHorizontal: 5 }} />
            <CustomText style={styles.hintText}>{props.hintText}</CustomText>
          </View>
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 23,
    padding: 15,
    height: 65,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    width: Metrics.screenWidth / 1.5,
    height: 40,
    textAlign: I18nManager.isRTL ? "right" : "left",
    textAlignVertical: "center",
    color: Colors.primary,
    ...globalStyle.font400
  },
  inputOnFocus: {
    borderColor: Colors.primary,
    borderWidth: 1,
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
    borderColor: Colors.errorRedColor,
  },
  errorText: {
    ...globalStyle.font400,
    color: Colors.errorRedColor,
    fontSize: 12,
  },
  iconStyle: {
    marginEnd: 10,
    elevation: 20
  },
  hintText: {
    color: Colors.secondary,
    fontSize: 14,
    ...globalStyle.font400
  },
  downArrow: {
    transform: [{ rotate: '90deg' }],
    position: "absolute",
    top: 23,
    right: 20,
    zIndex: 10,
    elevation: 20
  },
});

export default InputComponent;
