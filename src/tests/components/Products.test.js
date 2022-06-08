import { render, screen } from '@testing-library/react';
import { Products } from '../../components';
import { products } from "../../constants";

describe('<Products />', () => {
  let testProps;

  beforeEach(() => {
    testProps = { products }
  });


  it('should render Products component', () => {
    render(<Products {...testProps} />);
    const result = screen.getByText(/Menu Section/i);
    expect(result).toBeInTheDocument();
  });
});