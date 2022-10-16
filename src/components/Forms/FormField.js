import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import InputComponent from '../InputComponents/InputComponent';
import CustomText from '../CustomText';
import Colors from 'constants/Colors';
import { globalStyle } from 'constants/Styles';

function FormField({ name, width, height, label, textAlign, backgroundColor, inputType, placeholderText, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched, submitCount } = useFormikContext();

  return (
    <View style={{ marginBottom: 50 }}>
      {label && <CustomText style={styles.label}>{label}</CustomText>}
      <InputComponent
        inputType={inputType}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        errors={errors[name]}
        placeholderText={placeholderText}
        touched={touched[name] || submitCount}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Colors.LIGHT_BLUE,
    fontSize: 11,
    ...globalStyle.fontRegular,
    position: 'relative',
    top: 15,
    zIndex: 10
  }
})
export default FormField;
