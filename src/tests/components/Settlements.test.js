import { render, screen } from '@testing-library/react';
import { Settlement } from '../../components';
import { products, validCoins } from "../../constants";

describe('<Settlements />', () => {
  let props;

  beforeEach(() => {
    props = {
      coins: validCoins,
      products,
      handlePurchaseProduct: jest.fn(),
      handleAddCoin: jest.fn()
    }
  });

  it('should render Settlement Component', () => {
    render(<Settlement {...props} />);
    const result = screen.getByText(/Settlement Section/i);
    expect(result).toBeInTheDocument();
  });
});