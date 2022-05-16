import React from 'react';
import { SelectDefault } from '../src/SelectDefault';
import { OptionsGroup } from '../src/OptionsGroup';
import { Option } from '../src/Option';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { OptionDefault } from '../src/OptionDefault';

describe('Select is rendered without failing', () => {
  const select = (
    <SelectDefault placeholder="Select Options">
      <Option>Option 1</Option>
    </SelectDefault>
  );
  it('Should render completely without failing', () => {
    
    const { getByText, getByRole } = render(select);
    const placeholder = getByText('Select Options').className;
    const optionDiv = getByRole('button');
    screen.debug();

    expect(placeholder).toEqual('select-placeholder');
    expect(optionDiv).toBeDefined();
    
  });

  it('Should contain the options dropdown on click', () => {
    const { getByText } = render(select);
    fireEvent.click(screen.getByRole(/button/i));
    screen.debug();
    expect(getByText('Option 1')).toBeInTheDocument();
  });
});

// Testing SelectDefault with OptionDefault

// describe("Test suite for SelectDefault and OptionsGroup", ()=>{
//   const select = (
//     <SelectDefault placeholder="Select Options">
//         <OptionDefault>Option 1</OptionDefault>
//     </SelectDefault>
//   );
//   it("Should be able to render correctly")
  
// })