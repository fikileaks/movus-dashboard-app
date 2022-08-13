/* eslint-disable jest/no-identical-title */
/* eslint-disable testing-library/prefer-screen-queries */
import { Screen, render } from '@testing-library/react';
import Testing from './Testing';

describe('testing komponen pertama', () => {
  it('HARUSNYA MASUK COKKKKKKK', () => {
    const { getByText } = render(<Testing />);
    const linkElement = getByText(/masukga/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('RENDER KOMPONEN h1', () => {
    const { getByRole } = render(<Testing />);
    const linkElement = getByRole('heading');
    expect(linkElement).toBeInTheDocument();
  });
});
