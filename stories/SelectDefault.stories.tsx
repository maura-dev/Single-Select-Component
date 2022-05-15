import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SelectDefault, Props } from '../src/SelectDefault';
import { OptionDefault } from '../src/OptionDefault';

const meta: Meta = {
  title: 'Another Select Component',
  component: SelectDefault,
  argTypes: {
    placeholder: {
      defaultValue: "Select one option",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const options = [
            {
              value: "1",
              text:"Option1"
            },
            {
              value: "2",
              text:"Option2"
            },
            {
              value: "3",
              text:"Option3"
            }
      ]

export const Select= () => (
  <SelectDefault placeholder="Select one option">
      <OptionDefault value="1"> 1</OptionDefault>
      <OptionDefault value="2"> 2</OptionDefault>
      <OptionDefault value="3"> 3</OptionDefault>
  </SelectDefault>
)


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing


