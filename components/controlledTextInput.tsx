import React from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface ControlledTextInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  style: StyleProp<TextStyle>;
}

const ControlledTextInput = <T extends FieldValues>({
  name,
  control,
  style,
}: ControlledTextInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={style}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
    />
  );
};

export default ControlledTextInput;
