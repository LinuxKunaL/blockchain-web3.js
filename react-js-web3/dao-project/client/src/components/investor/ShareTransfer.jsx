import React, { useEffect, useState } from "react";

function ShareTransfer({ contract, SelectedAccount }) {
  const [Inputs, setInputs] = useState({
    to: "",
    amount: "",
  });

  const HandleTransferShare = async () => {
    console.log(await contract.methods);
    const response = await contract.methods
      .transferShare(Inputs.amount, Inputs.to)
      .send({ from: SelectedAccount, gas: 480000 });
  };

  return (
    <div className="flex gap-4 flex-col">
      <div className="flex flex-row gap-4 justify-between">
        <div>
          <input
            type="number"
            placeholder="Amount :"
            className="border p-2 rounded"
            onChange={(e) => setInputs({ ...Inputs, amount: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address :"
            onChange={(e) => setInputs({ ...Inputs, to: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
      </div>
      <button
        onClick={HandleTransferShare}
        className="bg-blue-500 text-white px-4 py-2 rounded self-center"
      >
        Transfer Share
      </button>
    </div>
  );
}

export default ShareTransfer;
