import React, { ReactNode } from 'react';
import { listStyle, defaultStyles } from './styles/default';
import { styled } from '@stitches/react';

export interface OptionsGroupProps {
  children: ReactNode | ReactNode[];
  variant?: 'lined' | 'unlined';
}

export const OptionsGroup = ({
  children,
  variant,
  ...props
}: OptionsGroupProps) => {
  console.log({ variant });
  const BaseOption = styled('div', {
    variants: {
      variant: {
        unlined: {
          '& li': {},
        },
        lined: {
          '& li': {
            borderBottom: '1px solid #BDBDBD',
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
      style={{ ...defaultStyles }}
      {...props}
      role="listbox"
      tabIndex={-1}
    >
      <ul style={{ ...listStyle }}>{children}</ul>
    </BaseOption>
  );
};
