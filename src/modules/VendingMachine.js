import { useEffect } from 'react';
import { Products, Settlement } from '../components';
import { useFetchProducts } from '../hooks';
import { useVendingMachineContext } from '../context';
import { validCoins, errors, MAX_AMOUNT } from '../constants';

const VendingMachine = () => {
  const {
    state: { coins },
    func: { setCoins },
  } = useVendingMachineContext();
  const [products, fetchProducts] = useFetchProducts();

  useEffect(
    () => {
      fetchProducts();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handlePurchaseProduct = (item, change) => {
    const message = `You bought ${item.name} and your change is ${change}`;
    alert(message);
    setCoins(0.0);
  };

  const handleAddCoin = (coin) => {
    if (coin.currency !== 'AUD') {
      alert(JSON.stringify(errors.INVALID_CURRENCY));
      return;
    }

    const validAmounts = validCoins.map(({ value }) => value);
    if (!validAmounts.includes(coin.value)) {
      alert(JSON.stringify(errors.INVALID_DENOMINATION));
      return;
    }

    const amount = coin.value + coins;
    if (amount <= MAX_AMOUNT) {
      setCoins((prevCoin) => prevCoin + coin.value);
    } else {
      alert(JSON.stringify(errors.LIMIT_REACHED));
    }
  };

  return (
    <div className="App">
      <h1>Vending Machine</h1>

      <div className="content">
        <Products products={products} />
        <Settlement
          coins={coins}
          products={products}
          handlePurchaseProduct={handlePurchaseProduct}
          handleAddCoin={handleAddCoin}
        />
      </div>
    </div>
  );
};

export default VendingMachine;
