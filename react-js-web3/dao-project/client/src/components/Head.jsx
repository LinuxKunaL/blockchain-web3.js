import React, { useState, useEffect } from "react";

function Head({ web3, contract, setSelectedAccount, AddressFunds }) {
  const [AllAccounts, setAllAccounts] = useState([]);
  const [Address, setAddress] = useState("none");
  const [Funds, setFunds] = useState(0);

  useEffect(() => {
    const Fetching = async () => {
      const Response = await web3.eth.getAccounts();
      setAllAccounts(Response);
      const Funds = await contract.methods.availableFunds().call();
      setFunds(Funds.toString());
    };
    Fetching();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between border-2 p-2 rounded border-indigo-60 ">
        <div className="">
          <h2 className="text-m font-semibold text-pink-600">
            Account Connect
          </h2>
          <p>{Address}</p>
        </div>
        <div className="">
          <h2 className="text-m font-semibold text-pink-600">Account Funds</h2>
          <p>{AddressFunds}</p>
        </div>
      </div>

      <div className="mb-4 p-2">
        <h2 className="text-m font-semibold text-pink-600">Available Funds</h2>
        <p>{Funds} ETH</p>
      </div>
      <div className="mb-4 p-2">
        <h2 className="text-m font-semibold text-pink-600">Select Account</h2>
        <select
          className="w-full border p-2 rounded outline-none hover:border"
          defaultValue={0}
          onChange={(e) => {
            setAddress(e.target.value);
            setSelectedAccount(e.target.value);
          }}
        >
          <option value="0">select account address</option>
          {AllAccounts.map((address) => (
            <option key={address} value={address}>
              {address.slice(0, 6)}....{address.slice(38)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Head;
