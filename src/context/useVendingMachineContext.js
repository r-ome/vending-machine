import { useContext } from "react";
import { VendingMachineContext } from "./ContextProvider";

const useVendingMachineContext = () => {
  const context = useContext(VendingMachineContext);
  if (!context) {
    throw new Error('ContextProvider does not exist');
  }

  return context;
}

export default useVendingMachineContext;