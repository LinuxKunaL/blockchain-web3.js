import React, { useState } from "react";

function Vote({ contract, SelectedAccount }) {
  const [Input, setInput] = useState();

  const handleVote = async () => {
    const response = await contract.methods
      .voteProposal(Input)
      .send({ from: SelectedAccount, gas: 480000 })
      .catch((e) => {
        console.log(e);
        return null;
      });
    console.log(response);
  };

  return (
    <div className="flex gap-4 flex-col">
      <div className="flex flex-row gap-4 justify-between">
        <div>
          <input
            type="text"
            placeholder="Proposal Id :"
            className="border p-2 rounded"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          onClick={handleVote}
          className="bg-blue-500 text-white px-4 py-2 rounded self-center"
        >
          Vote
        </button>
      </div>
    </div>
  );
}

export default Vote;
