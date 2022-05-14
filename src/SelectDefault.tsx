import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@chakra-ui/icons';
import React, { HTMLAttributes, useState } from 'react';
import {
  defaultStyles,
  headingStyle,
  listItemButtonStyle,
  listItemStyle,
  listStyle,
} from './styles/default';

type selectItems = {
  id: number;
  value: string;
};

export interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: 'unlined' | 'lined';
  placeholder: string;
  options?: selectItems[];
}

const SelectDefault = ({
  placeholder,
  options = [],
  variant,
  ...props
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<selectItems[]>([]);
  const toggle = () => setOpen((prev) => !prev);

  const handleOnClick = (option: selectItems) => {
    if (!selection.some((current) => current.id === option.id)) {
      setSelection([option]);
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== option.id
      );
      setSelection([...selectionAfterRemoval]);
    }

    toggle();
  };

  function isItemInSelection(item: selectItems) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <>
      <div style={{ ...defaultStyles }} {...props}>
        <div
          tabIndex={0}
          style={{ ...headingStyle }}
          role="button"
          onKeyPress={toggle}
          onClick={toggle}
        >
          <div>
            <p style={{ fontWeight: 'bold' }}>
              {selection.length > 0 ? selection[0].value : placeholder}
            </p>
          </div>
          <div>
            <p>{open ? <ChevronDownIcon /> : <ChevronUpIcon />}</p>
          </div>
        </div>
      </div>

      {open && (
        <div style={{ ...defaultStyles }} {...props}>
          <ul style={{ ...listStyle }}>
            {options.map((option) => (
              <li style={{ ...listItemStyle }} key={option.id}>
                <button
                  type="button"
                  style={{ ...listItemButtonStyle }}
                  onClick={() => handleOnClick(option)}
                >
                  <span>{option.value}</span>
                  <span>{isItemInSelection(option) && <CheckIcon />}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SelectDefault;

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
