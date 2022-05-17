import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SelectDefault, Props } from '../src/SelectDefault';
import { OptionDefault } from '../src/OptionDefault';
import { InfoIcon } from '@chakra-ui/icons';

const meta: Meta = {
  title: 'Custom Single Select Component',
  component: SelectDefault,
  argTypes: {
    numberOfChildren: {
      type: 'number',
      defaultValue: 3,
    },
    defaultValue: {
      defaultValue: '1',
    },
    placeholder: {
      defaultValue: 'Select one option',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = ({ numberOfChildren, ...args }) => (
  <SelectDefault {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <OptionDefault value={n}>{n}</OptionDefault>
    ))}
  </SelectDefault>
);

export const Default = Template.bind({});

// export const FilledVariant= () => (
//   <SelectDefault placeholder="Select one option" variant="filled">
//       <OptionDefault value="1"> 1</OptionDefault>
//       <OptionDefault value="2"> 2</OptionDefault>
//       <OptionDefault value="3"> 3</OptionDefault>
//   </SelectDefault>
// )

// export const FlushedVariant= () => (
//   <SelectDefault placeholder="Select one option" variant="flushed">
//       <OptionDefault value="1"> 1</OptionDefault>
//       <OptionDefault value="2"> 2</OptionDefault>
//       <OptionDefault value="3"> 3</OptionDefault>
//   </SelectDefault>
// )

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
