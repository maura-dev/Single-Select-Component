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
import { styled } from '@stitches/react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<any, string | JSXElementConstructor<any>> | ReactElement[];
  placeholder: string;
  variant?: 'filled' | 'flushed' | 'outlined';
  borderColor?: string;
  isDisabled?: boolean;
  size?: 'md' | 'lg' | 'sm';
  isRequired?: boolean;
  dropdownOpenIcon?: ReactNode;
  dropdownCloseIcon?: ReactNode;
  defaultValue?: string | number;
  errorBorderColor?: string;
  focusBorderColor?: string;
  placeholderColor?: string;
  placeholderIcon?: ReactNode;
  optionsVariant?: 'lined' | 'unlined';
}

export const SelectDefault = ({
  placeholder,
  variant = 'outlined',
  children,
  borderColor = '#E2E8F0',
  isDisabled = false,
  size = 'md',
  isRequired = false,
  dropdownOpenIcon = <ChevronDownIcon />,
  dropdownCloseIcon = <ChevronUpIcon />,
  defaultValue,
  errorBorderColor = '#E53E3E',
  focusBorderColor = '#3182CE',
  placeholderColor = '#2D3748',
  placeholderIcon,
  optionsVariant = 'unlined',
  ...props
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<ReactNode[]>([]);
  const toggle = () => setOpen((prev) => !prev);

  const handleOnClick = (option: string) => {
    if (!selection.some((current) => current === option)) {
      setSelection([option]);
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current !== option
      );
      setSelection([...selectionAfterRemoval]);
    }

    toggle();
  };

  function isItemInSelection(item: string) {
    if (selection.some((current) => current === item)) {
      return true;
    }
    return false;
  }
  //base styles for select
  const BaseSelect = styled('div', {
    backgroundColor: 'black',
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
    '& .placeholder': {
      color: placeholderColor,
    },
    variants: {
      variant: {
        filled: {
          backgroundColor: '#E2E8F0',
        },
        outlined: {
          backgroundColor: '#fff',
        },
        flushed: {
          borderRadius: '0px',
          border: 'none',
          borderBottom: '1px solid',
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

  return (
    <>
      <BaseSelect
        variant={variant}
        size={size}
        {...props}
        style={{ borderColor: borderColor }}
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
            <p style={{ fontWeight: 'bold' }}>
              <span>
                {placeholderIcon ? placeholderIcon : null} &nbsp; &nbsp;
              </span>
              {selection.length > 0 ? selection : placeholder}
            </p>
          </div>
          <div>
            <p>{open ? dropdownOpenIcon : dropdownCloseIcon}</p>
          </div>
        </div>
      </BaseSelect>

      {open ? (
        <OptionsGroup variant={optionsVariant}>
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
//export const Select = chakra(SelectDefault)
