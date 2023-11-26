const { Web3 } = require("web3");
const ABI = require("./abi.json");

const web3App = new Web3(
  new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
);

const getBalance = async () => {
  const address = "0xEd8881ED76467E8f167BC70eC70eca4D73A3dB60";
  const balance = await web3App.eth.getBalance(address);
  console.log(web3App.utils.fromWei(balance, "ether"));
};
const SendTransaction = async () => {
  const WeiValue = web3App.utils.toWei("50", "ether");

  const AddressFrom = "0xEd8881ED76467E8f167BC70eC70eca4D73A3dB60";
  const AddressTo = "0xceF946e9e2B659234B2e860Ada341584Bd674B1F";

  const transaction = await web3App.eth.sendTransaction({
    from: AddressFrom,
    to: AddressTo,
    value: WeiValue, // value must be needed in wei
  });

  console.log(transaction);
};

const readContract = async () => {
  /*
        make contract instance using API json code and contract address
        */

  const ContractAddress = "0x502542C2b847655f84376A896E74331213FECf2f";

  const InstanceContract = new web3App.eth.Contract(ABI, ContractAddress);

  // use `.call()` for call/run the method

  // const Value = await InstanceContract.methods.WinnerCheck().call();

    // const VoterRegister = await InstanceContract.methods
    //   .VoterRegister("mename", "male", 20)
    //   .send({ from: "0x6EE739a9a2dee600Fa740774b650990833D1e1b7" });

    // console.log(VoterRegister);
  // console.log(Value);

  const ListVoter = await InstanceContract.methods.VoterList().call();
  console.log(ListVoter);
};

readContract();

// 1000n : `n` means BigObject , BigNumber object is used to handle large integer numbers with precision.
