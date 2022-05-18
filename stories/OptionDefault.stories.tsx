import React from 'react';
import { Meta, Story } from '@storybook/react';
import { OptionDefault, OptionProps } from '../src/OptionDefault';
import {PhoneIcon} from '@chakra-ui/icons';
import {SelectDefault} from '../src/SelectDefault'

const meta: Meta = {
  title: 'Select Option Component',
  component: OptionDefault,
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
<SelectDefault placeholder="Select one option" defaultValue="">
  <OptionDefault {...args}/>
  </SelectDefault>
)
  

export const Default= Template.bind({});

export const OptionWithLeftIcon= Template.bind({});
OptionWithLeftIcon.args = {
  leftIcon:<PhoneIcon />,
}

export const OptionWithRightIcon= Template.bind({});
OptionWithRightIcon.args = {
  rightIcon:<PhoneIcon />,
}

export const OptionWithCustomStyles= Template.bind({});
OptionWithCustomStyles.args = {
  optionItemStyles: {
      backgroundColor:'green',
      color:'#fff',
      padding:'15px',
      fontSize:'18px'
  },
}

export const DisabledOption= Template.bind({});
DisabledOption.args = {
  disabled:true,
}