/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import History from '../History';

const MockHistory = () => {
  return <History historyLog={[]} loading={false} handleSubmit={() => {}} />;
};
describe('Rendering History Component', () => {
  it('Rendering history element properly', () => {
    const { getByTestId } = render(<MockHistory />);
    const divElement = getByTestId(/div-History/i);
    expect(divElement).toBeInTheDocument();
  });
  it('Rendering none button element before click search properly', () => {
    const { queryByRole } = render(<MockHistory />);
    const divElement = queryByRole('button');
    expect(divElement).not.toBeInTheDocument();
  });
});
