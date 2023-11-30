import React, { useState } from "react";

function Execute({ contract, SelectedAccount }) {
  const [Input, setInput] = useState();

  const handleExecute = async () => {
    const response = await contract.methods
      .executeProposal(Input)
      .send({ from: SelectedAccount, gas: 480000 })
      .catch((e) => {
        return null;
      });
  };
  return (
    <div className="flex gap-4 flex-row justify-between">
      <div>
        <input
          type="text"
          placeholder="proposal id :"
          className="border p-2 rounded"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button
        onClick={handleExecute}
        className="bg-blue-500 text-white px-4 py-2 rounded self-center"
      >
        execute
      </button>
    </div>
  );
}

export default Execute;
