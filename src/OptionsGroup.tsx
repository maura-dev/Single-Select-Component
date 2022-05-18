import React, { ReactNode } from 'react';
import { listStyle, defaultStyles } from './styles/default';
import { styled } from '@stitches/react';
import CSS from 'csstype';
import { ChevronUpIcon } from '@chakra-ui/icons';

export interface OptionsGroupProps {
  children: ReactNode | ReactNode[];
  variant?: 'lined' | 'unlined';
  optionsStyles?: CSS.Properties;
}

export const OptionsGroup = ({
  children,
  variant,
  optionsStyles,
  ...props
}: OptionsGroupProps) => {
  const BaseOption = styled('div', {
    position: 'relative',
    variants: {
      variant: {
        unlined: {
          '& li': {},
        },
        lined: {
          '& li': {
            borderBottom: '1px solid #E2E8F0',
          },
        },
      },
    },
    defaultVariants: {
      variant: 'unlined',
    },
  });

  return (
    <BaseOption
      variant={variant}
      style={{ ...defaultStyles, ...optionsStyles }}
      {...props}
      role="listbox"
      tabIndex={-1}
    >
      <ChevronUpIcon
        pos="absolute"
        top="-17px"
        left="20px"
        boxSize="7"
        color="#E2E8F0"
      />
      <div
        style={{
          position: 'absolute',
          top: '-3px',
          width: '6px',
          left: '31px',
          height: '3px',
          zIndex: '10',
          backgroundColor: 'white',
        }}
      ></div>
      <ul style={{ ...listStyle }}>{children}</ul>
    </BaseOption>
  );
};
