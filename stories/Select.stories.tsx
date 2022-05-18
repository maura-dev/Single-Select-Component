import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, Props } from '../src/SelectDefault';
import { Option } from '../src/OptionDefault';
import {InfoIcon} from '@chakra-ui/icons';

const meta: Meta = {
  title: 'Chakra-infused Select Component ',
  component: Select,
  argTypes: {
    numberOfChildren:{ 
      type: "number", 
      defaultValue: 3,
    },
    defaultValue: {
      defaultValue: "1",
    },
    placeholder: {
      defaultValue: "Select one option",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template=({ numberOfChildren, ...args}) => (
  <Select {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <Option value={n}>{n}</Option>
    ))}
  </Select>
)

export const Default= Template.bind({});

export const ChakraStyled = Template.bind({})

ChakraStyled.args = {
  w:'50%',
  bg:'red !important',
  color:'white !important',
  placeholderColor:'white',
  optionsStyles:{
    width:'50%',
  }
}



// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing


