import { useState, useEffect } from "react";
import { Web3 } from "web3";
import "./App.css";

function App() {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
  );
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4 flex justify-center gap-3 flex-wrap">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">
              Welcome to Decentralize Autonomous Organization
            </h1>
          </div>
          <div className="mb-4 ">
            <h2 className="text-m font-semibold text-pink-600">
              Account Connect
            </h2>
            <p>None</p>
          </div>
          <div className="mb-4">
            <h2 className="text-m font-semibold text-pink-600">
              Available Funds
            </h2>
            <p> ETH</p>
          </div>
          <div className="mb-4">
            <h2 className="text-m font-semibold text-pink-600">
              Select Account
            </h2>
            <select
              className="w-full border p-2 rounded outline-none hover:border"
              defaultValue={0}
            >
              <option value="0">select account address</option>
            </select>
          </div>
          <div className="">
            <div className="text-center m-4">
              <span className="text-red-500">For manager</span>
            </div>

            <div className="flex gap-4 flex-col bg-slate-100 rounded p-4 ">
              <div className="flex justify-between">
                <div className="w-full">
                  <textarea
                    placeholder="Description"
                    name=""
                    className="border p-2 rounded w-full"
                    id=""
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div>
                  <input
                    type="number"
                    placeholder="Amount in Wei:"
                    className="border p-2 rounded"
                  />
                </div>
                <div>
                  <input
                    placeholder="Recipient Address:"
                    type="number"
                    className="border p-2 rounded"
                  />
                </div>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded self-center">
                Create Proposal
              </button>
              <hr className="m-4" />

              <div className="flex gap-4 flex-row justify-between">
                <div>
                  <input
                    type="number"
                    placeholder="proposal id :"
                    className="border p-2 rounded"
                  />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded self-center">
                  execute
                </button>
              </div>
            </div>

            <div className="text-center m-4">
              <span className="text-red-500">For Investor</span>
            </div>

            <div className="flex gap-4 flex-col border-solid bg-slate-100 rounded p-4">
              <div className="flex gap-4 flex-row justify-between">
                <div>
                  <input
                    type="number"
                    placeholder="Contribution Amount :"
                    className="border p-2 rounded"
                  />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded self-center">
                  Contribute
                </button>
              </div>
              <hr className="m-4" />
              <div className="flex gap-4 flex-col">
                <div className="flex flex-row gap-4 justify-between">
                  <div>
                    <input
                      type="number"
                      placeholder="Amount :"
                      className="border p-2 rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Address :"
                      className="border p-2 rounded"
                    />
                  </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded self-center">
                  Transfer Share
                </button>
              </div>
              <hr className="m-4" />
              <div className="flex gap-4 flex-col">
                <div className="flex flex-row gap-4 justify-between">
                  <div>
                    <input
                      type="number"
                      placeholder="Number of Shares :"
                      className="border p-2 rounded"
                    />
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded self-center">
                    Redeem Share
                  </button>
                </div>
              </div>
              <hr className="m-4" />
              <div className="flex gap-4 flex-col">
                <div className="flex flex-row gap-4 justify-between">
                  <div>
                    <input
                      type="number"
                      placeholder="Proposal Id :"
                      className="border p-2 rounded"
                    />
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded self-center">
                    Vote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-min sticky top-3">
          <div className="mb-4">
            <h1 className="text-m font-semibold">Investor's list</h1>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-min sticky top-3">
          <div className="mb-4">
            <h1 className="text-m font-semibold">Proposal's list</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
