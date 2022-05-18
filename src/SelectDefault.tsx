const { styled } = require('@stitches/react');

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import React, {
  JSXElementConstructor,
  ReactNode,
  HTMLAttributes,
  useState,
  ReactElement,
} from 'react';
import { headingStyle } from './styles/default';
import { OptionsGroup } from './OptionsGroup';
// import { styled } from '@stitches/react';
import ReactHtmlParser from 'react-html-parser';
import { chakra } from '@chakra-ui/react';
import CSS from 'csstype';

export interface Props extends HTMLAttributes<HTMLDivElement> {

  /** Refers to the <OptionDefault> component */
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactElement[];

  /** Placeholder for the select trigger */
  placeholder: string;

  /** Vaiants of the select trigger */
  variant?: 'filled' | 'flushed' | 'outlined';
  /** Border color of the select trigger */
  borderColor?: string;
  /** Disables the trigger and prevents the options from showing */
  isDisabled?: boolean;
  /** Size of the select trigger */
  size?: 'md' | 'lg' | 'sm';
  /** Helps to know if the value of the select is required in a form submission */
  isRequired?: boolean;
  /** Icon that shows at the extreme right when the trigger is clicked to show options */
  dropdownOpenIcon?: ReactNode;
   /** Icon that shows at the extreme right when the trigger is clicked to hide/close the options */
  dropdownCloseIcon?: ReactNode;
  /** Default value of the select component */
  defaultValue: string;
  /** Color of the border of the select when it is invalid */
  errorBorderColor?: string;
  /** Color of the border of the select when it is focused */
  focusBorderColor?: string;
  /** Placeholder color for the select trigger. It doesnt affect the dropdown Icon */
  placeholderColor?: string;
  /** Placeholder icon for the select trigger */
  placeholderIcon?: ReactNode;
   /** Variant of the Option group that houses the OptionDefault component */
  optionsVariant?: 'lined' | 'unlined';
  /** Set when the select doesnt contain valid content or to trigger the error state */
  isInvalid?: boolean;
  /** Label describing the select */
  inputLabel?: string;
  /** Styles for the trigger select component */
  triggerStyles?: CSS.Properties;
  /** Styles for the Option group that houses the OptionDefault component */
  optionsStyles?: CSS.Properties;
  /** Styles for the select label */
  inputLabelStyle?: CSS.Properties;
  /** This function returns the current value of the select component */
  onSelectChange?: (value: any) => any;
}
const handleChangeFunc = (value: any) => {
  console.log({ value });
  return value;
};

/** 
 * This referred to as the select trigger which triggers the options list 
 **/
export const SelectDefault = ({
  placeholder,
  variant = 'outlined',
  children,
  borderColor = '#E2E8F0',
  isDisabled = false,
  size = 'md',
  isRequired = false,
  isInvalid = false,
  dropdownOpenIcon = <ChevronDownIcon />,
  dropdownCloseIcon = <ChevronUpIcon />,
  defaultValue = '',
  errorBorderColor = '#E53E3E',
  focusBorderColor = '#3182CE',
  placeholderColor = '#2D3748',
  placeholderIcon,
  optionsVariant = 'unlined',
  triggerStyles,
  optionsStyles,
  inputLabel,
  inputLabelStyle,
  onSelectChange = handleChangeFunc,
  ...props
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string[]>([]);
  const [value, setValue] = useState<string>(defaultValue);
  const toggle = () => setOpen((prev) => !prev);
  const d = document.getElementById(selection[0]);

  /** Function that handles when an option is clicked */
  const handleOnClick = async (option: string) => {
    setValue(option);
    onSelectChange(option);
    if (selection.includes(option) === false) {
      setSelection([option]);
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current !== option
      );
      setSelection([...selectionAfterRemoval]);
      defaultValue = '';
    }

    toggle();
  };

  /** Function to check if an option is selected */
  const isItemInSelection = (item: string) => {
    if (selection.some((current) => current === item)) {
      return true;
    }
    return false;
  };
  /** Base styles for select trigger */
  const BaseSelect = styled('div', {
    borderColor: borderColor,
    borderRadius: '6px',
    outline: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    fontSize: '16px',
    height: '40px',
    marginTop: '15px',
    '&:focus': {
      borderColor: focusBorderColor,
    },
    '&:invalid': {
      borderColor: errorBorderColor,
    },
    variants: {
      variant: {
        filled: {
          backgroundColor: '#E2E8F0',
          '&:focus': {
            borderColor: focusBorderColor,
            backgroundColor: '#fff',
          },
        },
        outlined: {
          backgroundColor: '#fff',
          '&:focus': {
            borderColor: focusBorderColor,
          },
        },
        flushed: {
          borderRadius: '0px',
          border: 'none',
          borderBottom: '1px solid',
          borderColor: borderColor,
          '&:focus': {
            borderColor: focusBorderColor,
          },
        },
      },
      size: {
        sm: {
          height: '40px',
          fontSize: '14px',
        },
        md: {
          height: '45px',
          fontSize: '16px',
        },
        lg: {
          height: '50px',
          fontSize: '18px',
        },
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  });

  /** Function to handle styles for disabled and invalid states */
  function disabledOrInvalidStyles(x: string) {
    if (isDisabled) {
      if (x === 'outlined') {
        return {
          color: 'gray',
          borderColor: '#E2E8F0',
        };
      } else if (x === 'flushed') {
        return {
          color: 'darkgray',
          borderColor: '#BDBDBD',
        };
      } else if (x === 'filled') {
        return {
          color: '#E2E8F0',
          borderColor: 'rgba(237, 242, 247, 0.2)',
          backgroundColor: 'rgba(237, 242, 247, 0.2)',
        };
      } else {
        return {
          color: '#2D3748',
          borderColor: '#E2E8F0',
        };
      }
    } else {
      if (isInvalid) {
        return {
          borderColor: errorBorderColor,
        };
      } else {
        return {
          outline: 'none',
        };
      }
    }
  }

  return (
    <>
      <label style={{ ...inputLabelStyle }}>
        {inputLabel}&nbsp;
        <sup style={{ color: 'red' }}>{isRequired ? '*' : null}</sup>
      </label>
      <select value={value} style={{ visibility: 'hidden' }} required={isRequired}></select>
      <BaseSelect
        variant={variant}
        size={size}
        {...props}
        style={{ ...disabledOrInvalidStyles(variant), ...triggerStyles }}
        aria-invalid={isInvalid}
        id="ssc-select"
        tabIndex={0}
        onKeyPress={toggle}
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        role="button"
      >
        <div
          
          style={{ ...headingStyle }}
        >
          <div>
            {selection.length > 0 ? (
              <p style={{ color: isDisabled ? 'inherit' : placeholderColor }}>
                {d ? ReactHtmlParser(d.innerHTML) : placeholder}
              </p>
            ) : (
              <p style={{ color: isDisabled ? 'inherit' : placeholderColor }}>
                <span>
                  {placeholderIcon ? placeholderIcon : null} &nbsp; &nbsp;
                </span>
                {placeholder}
              </p>
            )}
          </div>
          <div>
            <p>{open ? dropdownOpenIcon : dropdownCloseIcon}</p>
          </div>
        </div>
      </BaseSelect>

      {open && !isDisabled ? (
        <OptionsGroup variant={optionsVariant} optionsStyles={optionsStyles}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              handleOnClick: handleOnClick,
              isItemInSelection: isItemInSelection,
            });
          })}
        </OptionsGroup>
      ) : null}
    </>
  );
};

export const Select = chakra(SelectDefault);
