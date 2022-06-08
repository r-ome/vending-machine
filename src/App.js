import './App.css';
import ContextProvider from './context/ContextProvider';
import VendingMachine from './modules/VendingMachine';

const App = () => (
  <ContextProvider>
    <VendingMachine />
  </ContextProvider>
);

export default App;
