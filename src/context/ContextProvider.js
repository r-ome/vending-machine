import { createContext } from "react";
import useVendingMachineContextState from './useVendingMachineContextState';

export const VendingMachineContext = createContext();

const ContextProvider = ({ children }) => {
  const value = useVendingMachineContextState();
  return (
    <VendingMachineContext.Provider value={value}>
      {children}
    </VendingMachineContext.Provider>
  );
}

export default ContextProvider;