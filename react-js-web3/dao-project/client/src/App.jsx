import { useState, useEffect } from "react";
import ABI from "./abi/dao.json";
import { Web3 } from "web3";
import Proposal from "./components/manager/Proposal";
import Execute from "./components/manager/Execute";
import Head from "./components/Head";
import Contribute from "./components/investor/Contribute";
import ShareTransfer from "./components/investor/ShareTransfer";
import Redeem from "./components/investor/Redeem";
import Vote from "./components/investor/Vote";
import InvestorsList from "./components/InvestorsList";
import ProposalsList from "./components/ProposalsList";

function App() {
  const [SelectedAccount, setSelectedAccount] = useState("0");
  const [AddressFunds, setAddressFunds] = useState("0");
  const web3 = new Web3(
    new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
  );
  const ContractAddress = "0xc11927d0242a2cd3118554d1f27cd00145090ba3";
  const Contract = new web3.eth.Contract(ABI, ContractAddress);

  useEffect(() => {
    const fetching = async () => {
      if (SelectedAccount != "0") {
        const response = await Contract.methods
          .numOfshares(SelectedAccount)
          .call();
        setAddressFunds(response.toString());
      }
    };
    fetching();
  }, [SelectedAccount]);

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4 flex justify-center gap-3 flex-wrap">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">
              Welcome to Decentralize Autonomous Organization
            </h1>
          </div>
          <Head
            web3={web3}
            contract={Contract}
            setSelectedAccount={setSelectedAccount}
            AddressFunds={AddressFunds}
          />
          <div className="">
            <div className="text-center m-4">
              <span className="text-red-500">For manager</span>
            </div>
            <div className="flex gap-4 flex-col bg-slate-100 rounded p-4 ">
              <Proposal
                web3={web3}
                contract={Contract}
                SelectedAccount={SelectedAccount}
              />
              <hr className="m-4" />
              <Execute contract={Contract} SelectedAccount={SelectedAccount} />
            </div>
            <div className="text-center m-4 flex justify-center flex-col gap-1">
              <span className="text-red-500">For Investor</span>
            </div>
            <div className="flex gap-4 flex-col border-solid bg-slate-100 rounded p-4">
              <Contribute
                web3={web3}
                contract={Contract}
                SelectedAccount={SelectedAccount}
              />
              <hr className="m-4" />
              <ShareTransfer
                web3={web3}
                contract={Contract}
                SelectedAccount={SelectedAccount}
              />
              <hr className="m-4" />
              <Redeem contract={Contract} SelectedAccount={SelectedAccount} />
              <hr className="m-4" />
              <Vote contract={Contract} SelectedAccount={SelectedAccount}/>
            </div>
          </div>
        </div>
        <InvestorsList contract={Contract} />
        <ProposalsList contract={Contract} />
      </div>
    </div>
  );
}

export default App;
