import React, { ReactNode } from 'react';
import { listStyle, defaultStyles } from './styles/default';
import { styled } from '@stitches/react';
import CSS from 'csstype';

export interface OptionsGroupProps {
  children: ReactNode | ReactNode[];
  variant?: 'lined' | 'unlined';
  optionsStyles?:CSS.Properties
}

export const OptionsGroup = ({
  children,
  variant,
  optionsStyles,
  ...props
}: OptionsGroupProps) => {
  const BaseOption = styled('div', {
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
      <ul style={{ ...listStyle }}>{children}</ul>
    </BaseOption>
  );
};
