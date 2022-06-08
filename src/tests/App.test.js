import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('should render Vending Machine', () => {
    render(<App />);
    const banner = screen.getByText(/Vending Machine/i);
    expect(banner).toBeInTheDocument();
  });
});