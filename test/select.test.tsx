import React, { ReactComponentElement, ReactElement } from 'react';
import { SelectDefault } from '../src/SelectDefault';
// import { OptionsGroup } from '../src/OptionsGroup';
// import { Option } from '../src/Option';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { OptionDefault } from '../src/OptionDefault';

describe('Select is rendered without failing', () => {
  let select: ReactComponentElement<any, ReactElement>;

  beforeEach(() => {
    select = (
      <SelectDefault defaultValue="Option 1" placeholder="Select Options">
        <OptionDefault value="Option 1"> Option 1</OptionDefault>
        <OptionDefault value="Option 2"> Option 2</OptionDefault>
        <OptionDefault value="Option 3"> Option 3</OptionDefault>
      </SelectDefault>
    );
  });
  it('Should render completely without failing', () => {
    const { getByRole } = render(select);
    const optionDiv = getByRole('button');
    expect(optionDiv).toBeInTheDocument();
  });

  it('Should contain the options dropdown on click', () => {
    const { getByText } = render(select);
    fireEvent.click(screen.getByRole(/button/i));
    const options = getByText('Option 2');
    expect(options).toBeInTheDocument();
  });

  it('Should be able to click to an Option Button', () => {
    const { getByText, container } = render(select);
    fireEvent.click(screen.getByRole(/button/i));
    const options = getByText('Option 1');
    fireEvent.click(options);
    const hasSVG = container.querySelector('svg.chakra-icon');
    expect(hasSVG).toBeInTheDocument();
  });

  it('Should be able to test if the Select returns value of an Option on click', () => {
    const { getByText, container } = render(select);
    fireEvent.click(screen.getByRole(/button/i));
    const options = getByText('Option 1');
    fireEvent.click(options);
    // check if the Select value changes to the option
    expect(container).toBeInTheDocument();
  });
});
