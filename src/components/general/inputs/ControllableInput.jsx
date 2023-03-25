import React from 'react';
import { Controller } from 'react-hook-form';
import PureInput from './PureInput';

export default function ControllableInput({
  control,
  name,
  editable = true,
  customContainerStyle,
  prefix,
  suffix,
  placeholderText,
  inputType,
  placeholderTextColor,
  keyboard = 'default',
  autoCompleteType,
  maxLength,
  textArea,
  customInputStyle,
  hintText,
  labelText,
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <PureInput
          labelText={labelText}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={fieldState?.error?.message}
          editable={editable}
          customContainerStyle={customContainerStyle}
          customInputStyle={customInputStyle}
          prefix={prefix}
          suffix={suffix}
          placeholderText={placeholderText}
          inputType={inputType}
          placeholderTextColor={placeholderTextColor}
          keyboard={keyboard}
          autoCompleteType={autoCompleteType}
          maxLength={maxLength}
          textArea={textArea}
          hintText={hintText}
        />
      )}
    />
  );
}
