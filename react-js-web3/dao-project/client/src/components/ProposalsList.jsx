import React, { useEffect, useState } from "react";
import Time from "unix-timestamp";

function ProposalsList({ contract }) {
  const [ProposalsList, setProposalsList] = useState([]);

  useEffect(() => {
    const Fetching = async () => {
      const response = await contract.methods.ProposalLists().call();
      setProposalsList(response);
    };
    Fetching();
  }, []);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-min sticky top-3">
      <div className="mb-4">
        <h1 className="text-m font-semibold">Proposal's list</h1>
        <div className="container mx-auto p-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Message</th>
                <th className="py-2 px-4 border-b">IsExecuted</th>
                <th className="py-2 px-4 border-b">Recipient</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              {ProposalsList.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.id.toString()}</td>
                  <td className="py-2 px-4 border-b">{item.description}</td>
                  <td className="py-2 px-4 border-b">
                    {item.isExecuted.toString()}
                  </td>
                  <td className="py-2 px-4 border-b">{item[3].slice(0, 7)}</td>
                  <td className="py-2 px-4 border-b">
                    {item.amount.toString()}
                  </td>
                  <td className="py-2 px-4 border-b">{item.end.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProposalsList;
