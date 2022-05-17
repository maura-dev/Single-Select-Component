import React, { ReactComponentElement, ReactElement } from 'react';
import { SelectDefault } from '../src/SelectDefault';
// import { OptionsGroup } from '../src/OptionsGroup';
// import { Option } from '../src/Option';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { OptionDefault } from '../src/OptionDefault';

// Testing SelectDefault with OptionDefault

describe('Select is rendered without failing', () => {
  let select: ReactComponentElement<any, ReactElement>;

  beforeEach(() => {
    select = (
      <SelectDefault placeholder="Select Options">
        <OptionDefault value="true"> Option 1</OptionDefault>
        <OptionDefault value="false"> 2</OptionDefault>
        <OptionDefault value="false"> 3</OptionDefault>
      </SelectDefault>
    );
  });
  it('Should render completely without failing', () => {
    const { getByRole } = render(select);
    // const placeholder = getByText('Select Options').className;
    const optionDiv = getByRole('button');

    // expect(placeholder).toEqual('select-placeholder');
    expect(optionDiv).toBeDefined();
  });

  it('Should contain the options dropdown on click', () => {
    const { getByText } = render(select);
    fireEvent.click(screen.getByRole(/button/i));
    const options = getByText('Option 1');
    expect(options).toBeInTheDocument();
  });
  it('Should be able to click to an Option Button', () => {
    const { getByText, container } = render(select);
    fireEvent.click(screen.getByRole(/button/i));
    const options = getByText('Option 1');
    fireEvent.click(options);
    screen.debug();
    const hasSVG = container.getElementsByClassName('chakra-icon');
    expect(hasSVG).toBeDefined();
  });
});
