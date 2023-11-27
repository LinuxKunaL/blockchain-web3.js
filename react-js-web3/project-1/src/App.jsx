import { useState, useEffect } from "react";
import Web3 from "web3";
import ABI from "./abis/api.json";

function App() {
  const [Balance, setBalance] = useState(0);
  const [NewBalance, setNewBalance] = useState(Balance);
  const WEB3 = new Web3(
    new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
  );
  const ContractAddress = "0xF7E62DFBF813b8CE87Db2eC2131e67Bb2E94B5B1";
  const Contract = new WEB3.eth.Contract(ABI, ContractAddress);

  const getValue = async () => {
    const Value = await Contract.methods.getValue().call();
    setBalance(Value.toString());
  };

  const setValue = async () => {
    await Contract.methods
      .setValue(NewBalance)
      .send({ from: "0xceF946e9e2B659234B2e860Ada341584Bd674B1F" });
  };

  return (
    <div>
      <div>
        <span>{Balance}</span>
        <br />
        <button onClick={getValue}>GetValue</button>
      </div>
      <br />
      <div>
        <input
          type="number"
          onChange={(e) => {
            setNewBalance(e.target.value);
          }}
        />
        <button onClick={setValue}>set value</button>
      </div>
    </div>
  );
}

export default App;
