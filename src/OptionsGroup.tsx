import React, { ReactNode } from 'react';
import {
  listStyle,
  defaultStyles,
} from './styles/default';

export interface OptionsGroupProps {
	children: ReactNode | ReactNode[];
    variant?:"lined" | "unlined";
}

export const OptionsGroup = ({children, variant = "unlined", ...props}: OptionsGroupProps) => {

    return (
        <div style={{ ...defaultStyles }} {...props} role="listbox" tabIndex={-1}>
                  <ul style={{ ...listStyle }}>
						{children}
                  </ul>  
                </div>
    );
};


