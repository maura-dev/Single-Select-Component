import React, { HTMLAttributes } from 'react';

export interface OptionProps extends HTMLAttributes<HTMLOptionElement> {
  children: string;
}

export const Option = ({ children, ...props }: OptionProps) => {
  return <option {...props}>{children}</option>;
};

