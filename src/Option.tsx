import React, { HTMLAttributes } from 'react';

interface OptionProps extends HTMLAttributes<HTMLOptionElement> {
  children: string;
}

const Option = ({ children, ...props }: OptionProps) => {
  return <option {...props}>{children}</option>;
};

export default Option;
