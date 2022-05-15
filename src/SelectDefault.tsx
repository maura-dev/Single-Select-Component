import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import React, { JSXElementConstructor, ReactNode, HTMLAttributes, useState,  ReactElement } from 'react';
import {
  defaultStyles,
  headingStyle,
} from './styles/default';
import { OptionsGroup } from './OptionsGroup';
// import { ChakraProvider, chakra } from '@chakra-ui/react';

// import { chakra } from '@chakra-ui/react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  placeholder: string;
  variant?:"filled" | "flushed" | "outlined" | "samurai";
}

export const SelectDefault = ({
  placeholder,
  variant= "outlined",
  children,
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

  // const childrenWithProps = React.Children.map(children, child => {
  //   if(React.isValidElement(child)){
  //     return React.cloneElement(child, { handleOnClick, isItemInSelection })
  //   }
  //   return child
  // })

  return (
    <>
      <div style={{ ...defaultStyles }} {...props}>
        <div
          tabIndex={0}
          style={{ ...headingStyle }}
          role="button"
          onKeyPress={toggle}
          onClick={toggle}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <div>
            <p style={{ fontWeight: 'bold' }}>
              {selection.length > 0 ? selection : placeholder}
            </p>
          </div>
          <div>
            <p>{open ? <ChevronDownIcon /> : <ChevronUpIcon />}</p>
          </div>
        </div>
      </div>

      { open ?
        (<OptionsGroup>
                  {React.Children.map(children, child => {
                    return React.cloneElement(child, { handleOnClick: handleOnClick, isItemInSelection: isItemInSelection })
                  })}
          </OptionsGroup>) : null}
        
    </>
  );
};

// export const Select = C

// const handleVariantStyle = () => {
//   if (variant === 'unlined') {
//     return {};
//   }
//   if (variant === 'lined') {
//     return {};
//   }
//   return {
// minWidth: '300px',
// padding: '10px 10px',
// borderRadius: '6px',
// outline: 'none',
// border: '1px solid #E2E8F0',
// background: '#fff',
// height: '40px',
// };
// };

//export const Select = chakra(SelectDefault)
