import React, { useEffect, useState } from "react";

function InvestorsList({ contract }) {
  const [InvestorList, setInvestorList] = useState([]);
  useEffect(() => {
    const Fetching = async () => {
      const response = await contract.methods.InvestorList().call();
      setInvestorList(response);
    };
    Fetching();
  }, []);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-min sticky top-3">
      <div className="mb-4">
        <h1 className="text-m font-semibold">Investor's list</h1>
        {InvestorList.map((list) => (
          <li className="text-cyan-400" key={list}>
            {list}
          </li>
        ))}
      </div>
    </div>
  );
}

export default InvestorsList;
