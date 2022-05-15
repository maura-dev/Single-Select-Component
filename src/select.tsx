import React, { HTMLAttributes, ReactNode } from 'react';

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
	children: ReactNode;
	variant?:"filled" | "outlined" | "flushed" | "samurai";
}

// sets the default variant to outlined
export const Select = ( {children, variant="outlined", ...props}:SelectProps ) => {

    return (
            <select {...props}>
            	{children}
            </select>

    );
};
 
