import React, {useState} from 'react';
import { Meta, Story } from '@storybook/react';
import { SelectDefault, Props } from '../src/SelectDefault';
import { OptionDefault } from '../src/OptionDefault';
import { ArrowDownIcon, ArrowUpIcon, PhoneIcon } from '@chakra-ui/icons';

const meta: Meta = {
  title: 'Custom Single Select Component',
  component: SelectDefault,
  argTypes: {
    numberOfChildren: {
      type: 'number',
      defaultValue: 3,
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
)

export const Default= Template.bind({});

export const SelectWithLabel= Template.bind({});
SelectWithLabel.args = {
  inputLabel:'Number of children',
}

export const SelectWithLabelStyles= Template.bind({});
SelectWithLabelStyles.args = {
  inputLabel:'Number of children',
  inputLabelStyle:{
    fontWeight:'bold',
    color:'grey',
    fontSize:'14px',
    textTransform:'uppercase',
  }
}

export const RequiredSelect= Template.bind({});
RequiredSelect.args = {
  inputLabel:'Number of children',
  isRequired: true,
  inputLabelStyle:{
    fontWeight:'bold',
    color:'grey',
    fontSize:'14px',
    textTransform:'uppercase',
  }
}

/** This should alert the selected value if any is selected after clicking submit */
export const RequiredSelectWithForm = () => {
  const [value, setValue] = useState("")
  return(<form onSubmit={()=> alert(value)}>
    <SelectDefault isRequired inputLabel='Number of children' onSelectChange={(val) => setValue(val)}>
          <OptionDefault value="1">1</OptionDefault>
          <OptionDefault value="2">2</OptionDefault>
          <OptionDefault value="3">3</OptionDefault>
    </SelectDefault>
    <input type="submit" value="submit"/>
  </form>)
}


export const SelectWithBorderColor= Template.bind({});
SelectWithBorderColor.args = {
  borderColor:'blue',
}

export const DisabledSelect= Template.bind({});
DisabledSelect.args = {
  isDisabled:true,
}

export const InvalidSelect= Template.bind({});
InvalidSelect.args = {
  isInvalid:true,
}

export const SelectWithCustomDropdownIcon= Template.bind({});
SelectWithCustomDropdownIcon.args = {
  dropdownOpenIcon:<ArrowDownIcon/>,
  dropdownCloseIcon:<ArrowUpIcon/>
}

export const SelectWithErrorBorderColor= Template.bind({});
SelectWithErrorBorderColor.args = {
  errorBorderColor:'orange',
  isInvalid:true,
}

export const SelectWithFocusBorderColor= Template.bind({});
SelectWithFocusBorderColor.args = {
  focusBorderColor:'purple',
}

export const SelectWithPlaceholderIcon= Template.bind({});
SelectWithPlaceholderIcon.args = {
  placeholderIcon:<PhoneIcon/>,
}

export const SelectWithPlaceholderColor= Template.bind({});
SelectWithPlaceholderColor.args = {
  placeholderIcon:<PhoneIcon/>,
  placeholderColor:'blue',
  dropdownOpenIcon:<ArrowDownIcon color='blue'/>,
  dropdownCloseIcon:<ArrowUpIcon color='blue'/>,
}

export const SelectWithLinedOptions= Template.bind({});
SelectWithLinedOptions.args = {
  optionsVariant:"lined",
}

export const SelectWithStyledTriggerElement= Template.bind({});
SelectWithStyledTriggerElement.args = {
  placeholderColor:'white',
  triggerStyles: {
    backgroundColor:'green',
    color:'white',
    }
}

export const GettingTheValueOfTheSelect= Template.bind({});
GettingTheValueOfTheSelect.args = {
  onSelectChange: (value) => alert(value),
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
