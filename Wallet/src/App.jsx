import { useState, useEffect } from "react";
import { Web3 } from "web3";
import "./App.css";

function App() {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
  );
  const [Accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState();
  const [AccountsBalance, setAccountsBalance] = useState("000.000");
  const [counter, setCounter] = useState(0);
  const [userInputs, setUserInputs] = useState({
    from: "",
    to: "",
    ether: "",
  });

  useEffect(() => {
    const getAccount = async () => {
      setAccounts(await web3.eth.getAccounts());
    };
    setUserInputs({ ...userInputs, from: selectedAccount });
    getAccount();
  }, [selectedAccount]);

  const getBalanceByAddress = async (account) => {
    if (account != 0) {
      const ValueWei = await web3.eth.getBalance(account);
      setAccountsBalance(web3.utils.fromWei(ValueWei, "ether"));
    } else {
      setAccountsBalance("000.000");
    }
  };

  const sendEther = async () => {
    const result = await web3.eth.sendTransaction({
      from: userInputs.from,
      to: userInputs.to,
      value: web3.utils.toWei(userInputs.ether, "ether"),
    });
    if (result) {
      alert("ether send successful");
      setCounter(counter + 1);
    }
  };
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">
              Welcome to Your Smart Contract Wallet
            </h1>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold">Select Account</h2>
            <select
              className="w-full border p-2 rounded outline-none hover:border"
              defaultValue={0}
              onChange={(e) => {
                setSelectedAccount(e.target.value);
                getBalanceByAddress(e.target.value);
              }}
            >
              <option value="0">select account address</option>
              {Accounts.map((item) => (
                <option value={item} key={item}>
                  {item.slice(0, 6)}...{item.slice(38)}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Account Balance</h2>
            <p>{AccountsBalance.slice(0, 7)} ETH</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Ether Sender Address</h2>
            <input
              type="text"
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setUserInputs({ ...userInputs, to: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Enter Ether Amount</h2>
            <input
              type="number"
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setUserInputs({ ...userInputs, ether: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={sendEther}
            >
              Send Ether
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
