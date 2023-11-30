import React, { useEffect, useState } from "react";

function Contribute({ web3, contract, SelectedAccount }) {
  const [Amount, setAmount] = useState(0);

  const HandleContribute = async () => {
    console.log();
    await contract.methods
      .contribution()
      .send({ from: SelectedAccount, gas: 480000, value: Amount });
  };

  return (
    <div className="flex gap-4 flex-row justify-between">
      <div>
        <input
          type="number"
          placeholder="Contribution Amount :"
          className="border p-2 rounded"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        onClick={HandleContribute}
        className="bg-blue-500 text-white px-4 py-2 rounded self-center"
      >
        Contribute
      </button>
    </div>
  );
}

export default Contribute;
