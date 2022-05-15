import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, SelectProps } from "../src/select";
import { Option } from "../src/Option";

const meta: Meta = {
  title: 'Single Select Component',
  component: Select,
  argTypes: {
    children: {
      defaultValue:<Option>Option1</Option>,
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SelectProps> = (args) => <Select {...args}/>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
// Default.args = {

// }
