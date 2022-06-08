import { useState } from "react";
import { validCoins, invalidCoins, MAX_AMOUNT } from "../constants";

const Settlement = ({
  coins,
  products,
  handlePurchaseProduct,
  handleAddCoin,
}) => {
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleSelectProduct = (item) => {
    setSelectedProduct(item.name);
    const change = (coins - item.price).toFixed(2);
    setTimeout(() => {
      handlePurchaseProduct(item, change);
      setSelectedProduct("");
    }, 1000);
  }

  const renderCoins = (coin) =>
    coin.map((item, i) => (
      <button
        key={i}
        onClick={() => handleAddCoin(item)}
        className="settlement-coin"
        disabled={coins >= MAX_AMOUNT}
      >
        {item.label}
      </button>
    ));

  return (
    <section>
      <div className="settlement-section">
        <h3>Settlement section</h3>

        <div className="settlement-credit">
          COINS: {coins.toLocaleString('en-AU', { style: 'currency', currency: "AUD" })}
        </div>

        <input
          className="settlement-screen"
          value={selectedProduct}
          placeholder="Please insert coin"
          disabled
        />

        <div className="settlement-options">
          {products.map((item, i) =>(
            <button 
              key={i}
              onClick={() => handleSelectProduct(item)}
              className="settlement-option"
              disabled={item.price > coins}
            >
              {item.buttonDisplay}
            </button>
          ))}
        </div>

        <div className="settlement-coins-container">
          <div className="settlement-coins">
            <div>Valid Coins</div>
            {renderCoins(validCoins)}
          </div>

          <div className="settlement-coins">
            <div>Invalid Coins</div>
            {renderCoins(invalidCoins)}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Settlement;