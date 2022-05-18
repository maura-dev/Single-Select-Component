import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Option, OptionProps } from '../src/OptionDefault';
import {PhoneIcon} from '@chakra-ui/icons';
import {Select} from '../src/SelectDefault'

const meta: Meta = {
  title: 'Chakra-infused Option Component',
  component: Option,
  argTypes: {
    value: {
      defaultValue: "1",
    },
    children: {
      defaultValue: "Option 1",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<OptionProps> = (args) => (
<Select placeholder="Select one option" defaultValue="">
  <Option {...args}/>
  </Select>
)
  

export const Default= Template.bind({});

export const ChakraStyledOption= Template.bind({});
ChakraStyledOption.args = {
  leftIcon:<PhoneIcon />,
  bg:'teal !important',
  color:'white !important',
  _hover:{
    bg:'green !important',
  },
}

