import React, { ReactNode } from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import {
  listItemButtonStyle,
} from './styles/default';
import { styled } from '@stitches/react';
import { chakra } from '@chakra-ui/react';
import CSS from 'csstype';

export interface OptionProps {
  children: string;
  handleOnClick?: any;
  isItemInSelection?: any;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  value: string;
  disabled?: boolean;
  optionItemStyles?: CSS.Properties
}

export const OptionDefault = ({ handleOnClick, isItemInSelection, disabled=false, children, leftIcon, rightIcon, value, optionItemStyles, ...props }: OptionProps ) => {

  //base styles for option
  const BaseOption = styled('li', {
    listStyleType: 'none',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    backgroundColor: 'white',
    fontWeight: 600,
    fontSize: '13px',
    padding: '8px 20px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: '#EDF2F7',
    },
  })

  function DisabledAndSelectedStyles(){
    if(disabled){
      return {
        backgroundColor:'#EDF2F7',
        color:'#CBD5E0',
      }
    }else{
      if(isSelected(value)){
        return {
          backgroundColor:'#3182CE',
          color:'#fff',
        }
      } else{
        return {
          outline:'none',
        }
      }
    }
  }

  const isSelected = (x:string) => {
      return isItemInSelection(x)
  }

  const handleClick = () => {
    if(!disabled){
      handleOnClick(children);
    } else{
      return
    }
    
  }

    return (
        <BaseOption role="option" key={value} tabIndex={0} style={{...(DisabledAndSelectedStyles()), ...optionItemStyles}} {...props}>
                        <button
                          type="button"
                          style={{ ...listItemButtonStyle }}
                          onClick={handleClick}
                          id={value}
                        >
                          <span>
                            {leftIcon ? <span>{leftIcon} &nbsp; &nbsp;</span> : null}
                            <span>{children}</span>
                            {rightIcon ? <span> &nbsp; &nbsp;{rightIcon}</span> : null}
                          </span>
                        </button>
                        {isSelected(value) ? (<span><CheckIcon /></span>) : null }
                 </BaseOption> 
    );
};

export const Option = chakra(OptionDefault)
