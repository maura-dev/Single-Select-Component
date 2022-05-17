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
      <SelectDefault placeholder="Select Options">
        <OptionDefault value="true"> Option 1</OptionDefault>
        <OptionDefault value="false"> Option 2</OptionDefault>
        <OptionDefault value="false"> Option 3</OptionDefault>
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

  it('Should be able to test using the query selector', () => {
    const { container } = render(select);
    const div = container.firstChild;
    const aria = container.querySelector('[ aria-haspopup="listbox"]');

    expect(aria).toBeInTheDocument();
    expect(div).toBeInTheDocument();
  });
});
