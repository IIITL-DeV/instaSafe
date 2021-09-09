import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import Homepage from "./components/Homepage.js";
import './App.css';

function App() {
  return (
    <Web3ReactProvider
      getLibrary={(provider, connector) => new Web3Provider(provider)}
    >
      <Homepage />
    </Web3ReactProvider>
  )
}

export default App;