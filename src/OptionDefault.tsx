import React, {ReactNode} from 'react';
import {  CheckIcon } from '@chakra-ui/icons';
import {
  listItemButtonStyle,
  listItemStyle,
  //listItemStyleDisabled,
} from './styles/default';

export interface OptionProps {
  children: string;
  handleOnClick: any;
  isItemInSelection: any;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  value: string;
  //disabled?: boolean;
}

export const OptionDefault = ({ handleOnClick, isItemInSelection, children, leftIcon, rightIcon, value }: OptionProps ) => {

	const isSelected = (x:string) => {
			return isItemInSelection(x)
	}

	const handleClick = () => {
		handleOnClick(children);
	}

	//const style = {disabled ? listItemStyleDisabled : listItemStyle}

    return (
        <li style={{...listItemStyle}} role="option" id={value} tabIndex={0}>
                        <button
                          type="button"
                          style={{ ...listItemButtonStyle }}
                          onClick={handleClick}
                        >
                          {leftIcon ? <span>{leftIcon} &nbsp; &nbsp;</span> : null}
                          <span>{children}</span>
                          {rightIcon ? <span> &nbsp; &nbsp;{rightIcon}</span> : null}
                          <span>{isSelected(children) && <CheckIcon />}</span>
                        </button>
                 </li> 
    );
};



