import React, { useState } from "react";

function Redeem({ contract, SelectedAccount }) {
  const [Amount, setAmount] = useState(0);
  const handleRedeemShare = async () => {
    await contract.methods
      .reedemShare(Amount)
      .send({ from: SelectedAccount, gas: 480000 });
  };
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex flex-row gap-4 justify-between">
        <div>
          <input
            type="number"
            placeholder="Number of Shares :"
            className="border p-2 rounded"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          onClick={handleRedeemShare}
          className="bg-blue-500 text-white px-4 py-2 rounded self-center"
        >
          Redeem Share
        </button>
      </div>
    </div>
  );
}

export default Redeem;
