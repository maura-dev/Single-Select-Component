import React from 'react';
import { Meta, Story } from '@storybook/react';
import Select from "../src";
import Option from "../src/Option";

const meta: Meta = {
  title: 'Welcome',
  component: Select,
  // argTypes: {
  //   children: {
  //     control: {
  //       type: 'text',
  //     }
  //   },
  // },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = () => (
      <Select>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value-="3">3</Option>
      </Select>
  );

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

