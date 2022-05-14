import React from 'react';
import { Meta, Story } from '@storybook/react';
import SelectDefault, { Props } from '../src/SelectDefault';

const meta: Meta = {
  title: 'SelectDefault',
  component: SelectDefault,
};

export default meta;

const items = [
  {
    id: 1,
    value: 'Text Only',
  },
  {
    id: 2,
    value: 'sparkles Only',
  },
  {
    id: 3,
    value: 'koliko Only',
  },
  {
    id: 4,
    value: 'maureen Only',
  },
];

export const Select = () => (
  <SelectDefault placeholder="Hello" options={items} />
);
