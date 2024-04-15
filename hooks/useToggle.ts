import { useState } from 'react';

export const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => {
    setValue((prevState) => {
      return !prevState;
    });
  };

  return [value, toggle];
};
