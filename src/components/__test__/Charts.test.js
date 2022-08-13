/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import Charts from '../Charts';

const MockCharts = () => {
  return <Charts count={[]} carList={[]} defaultName={[]} />;
};
describe('Rendering Charts Component', () => {
  it('Rendering main div chart element properly', async () => {
    const { getByTestId } = render(<MockCharts />);
    const divElement = getByTestId(/div-Charts-main/i);
    expect(divElement).toBeInTheDocument();
  });
});
