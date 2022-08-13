/* eslint-disable testing-library/await-async-query */
/* eslint-disable jest/no-identical-title */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import Header from '../Header';

const MockHeader = () => {
  return <Header loading={false} error={false} dataMakerId={[]} />;
};

describe('Rendering Header Component', () => {
  it('Rendering h1 element properly', async () => {
    const { getByRole } = render(<Header />);
    const headingElement = getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });
  it('Rendering h1 element text properly', async () => {
    const { getByText } = render(<Header />);
    const headingElement = getByText(/Car Dashboard Counter/i);
    expect(headingElement).toBeInTheDocument();
  });
  it('Rendering car name before api call expected empty', () => {
    const { queryByTestId } = render(<Header />);
    const carNameElement = queryByTestId(/div-Header-async-name/i);
    expect(carNameElement).not.toBeInTheDocument();
  });
  it('Rendering car name without api call expected 0', async () => {
    const { findByTestId } = await render(<MockHeader />);
    const carNameMockElement = findByTestId(/div-Header-async-name/i);
    expect(carNameMockElement).toBeTruthy();
  });
});
