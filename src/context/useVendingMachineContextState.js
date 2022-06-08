import { useState } from "react";

const useVendingMachineContextState = () => {
  const [coins, setCoins] = useState(0.0);
  const [change, setChange] = useState(0.0);

  return {
    state: {
      coins,
      change,
    },
    func: {
      setCoins,
      setChange,
    }
  }
}

export default useVendingMachineContextState;