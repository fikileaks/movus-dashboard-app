import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import App from '../App';
import Dashboard from './Dashboard';

describe('Rendering Main Block Components', () => {
  it('render Header Component', () => {
    render(<Dashboard />);
    const divElement = screen.getByTestId(/HeaderComponent/i);
    expect(divElement).toBeInTheDocument();
  });
  it('render heading 1', () => {
    render(<Dashboard />);
    const heading1 = screen.getByText(/testing/i);
    expect(heading1).toBeInTheDocument();
  });
});
