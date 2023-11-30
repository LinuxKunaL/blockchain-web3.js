import React, { useState } from "react";

function Proposal({ contract, SelectedAccount }) {
  const [Inputs, setInputs] = useState({
    Description: "",
    Amount: "",
    Recipient: "",
  });

  const handleCreateProposal = async () => {
    const response = await contract.methods
      .createProposal(Inputs.Description, Inputs.Amount, Inputs.Recipient)
      .send({ from: SelectedAccount, gas: 480000 })
      .catch((e) => {
        return null;
      });
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="w-full">
          <textarea
            placeholder="Description"
            name=""
            className="border p-2 rounded w-full"
            id=""
            onChange={(e) =>
              setInputs({ ...Inputs, Description: e.target.value })
            }
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <div>
          <input
            type="number"
            placeholder="Amount in Wei:"
            className="border p-2 rounded"
            onChange={(e) => setInputs({ ...Inputs, Amount: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="Recipient Address:"
            type=""
            className="border p-2 rounded"
            onChange={(e) =>
              setInputs({ ...Inputs, Recipient: e.target.value })
            }
          />
        </div>
      </div>
      <button
        onClick={handleCreateProposal}
        className="bg-blue-500 text-white px-4 py-2 rounded self-center"
      >
        Create Proposal
      </button>
    </>
  );
}

export default Proposal;
