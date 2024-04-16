import React from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

interface ControlledTextInputProps<T extends FieldValues>
  extends UseControllerProps<T> {
  style: StyleProp<TextStyle>;
}

const ControlledTextInput = <T extends FieldValues>(
  props: ControlledTextInputProps<T>
) => {
  const { field } = useController<T>(props);

  return <TextInput {...field} style={props.style} />;
};

export default ControlledTextInput;
