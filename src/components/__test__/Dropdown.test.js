/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import Dropdown from '../Dropdown';

const MockDropdown = () => {
  return <Dropdown year={[]} handleChange={() => {}} handleSubmit={() => {}} />;
};
describe('Rendering Dropdown Component', () => {
  it('Rendering form element properly', () => {
    const { getByRole } = render(<MockDropdown />);
    const formElement = getByRole('form');
    expect(formElement).toBeInTheDocument();
  });
  it('Rendering button element properly', () => {
    const { getByRole } = render(<MockDropdown />);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
