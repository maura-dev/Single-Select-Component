import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import React, {
  JSXElementConstructor,
  ReactNode,
  HTMLAttributes,
  useState,
  ReactElement
} from 'react';
import { headingStyle } from './styles/default';
import { OptionsGroup } from './OptionsGroup';
import { styled } from '@stitches/react';
import ReactHtmlParser from 'react-html-parser'
import { chakra } from '@chakra-ui/react';
import CSS from 'csstype';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactElement[];
  placeholder: string;
  variant?: 'filled' | 'flushed' | 'outlined';
  borderColor?: string;
  isDisabled?: boolean;
  size?: 'md' | 'lg' | 'sm';
  isRequired?: boolean;
  dropdownOpenIcon?: ReactNode;
  dropdownCloseIcon?: ReactNode;
  defaultValue: string;
  errorBorderColor?: string;
  focusBorderColor?: string;
  placeholderColor?: string;
  placeholderIcon?: ReactNode;
  optionsVariant?: 'lined' | 'unlined';
  isInvalid?: boolean;
  inputLabel?: string;
  triggerStyles?:CSS.Properties;
  optionsStyles?:CSS.Properties;
  inputLabelStyle?: CSS.Properties;
}

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
  ...props
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string[]>([]);
  const toggle = () => setOpen((prev) => !prev);
  const d = document.getElementById(selection[0]);

  //function that handles when an option is clicked 
  const handleOnClick = async (option: string) => {
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

  //function to check if an option is selected
  function isItemInSelection(item: string) {
    if (selection.some((current) => current === item)) {
      return true;
    }
    return false;
  }
  //base styles for select
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

  //function to handle styles for disabled and invalid states
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
      <label style={{ ...inputLabelStyle }}>{inputLabel}&nbsp;<sup style={{color:'red'}}>{isRequired? '*' : null}</sup></label>
      <BaseSelect
        variant={variant}
        size={size}
        {...props}
        style={{...(disabledOrInvalidStyles(variant)), ...triggerStyles}}
        aria-invalid={isInvalid}
        id="ssc-select"
      >
        <div
          tabIndex={0}
          role="button"
          style={{ ...headingStyle }}
          onKeyPress={toggle}
          onClick={toggle}
          aria-haspopup="listbox"
          aria-expanded={open}
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

export const Select = chakra(SelectDefault)
