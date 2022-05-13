import React, { HTMLAttributes, ReactNode } from 'react';

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
	children: ReactNode;
	variant?:"filled" | "outlined" | "flushed" | "samurai";
}

// sets the default variant to outlined
const Select = ( {children, variant="outlined", ...props}:SelectProps ) => {

    return (
        <select {...props}>
        	{children}
        </select>
    );
};
 

export default Select;
