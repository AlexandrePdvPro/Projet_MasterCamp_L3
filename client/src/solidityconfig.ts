// eslint-disable-next-line @typescript-eslint/no-var-requires
const Tx = require("ethereumjs-tx").Transaction;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Web3 = require("web3");
const rpcURL =
  "https://eth-ropsten.alchemyapi.io/v2/R8hTrLENk42oUS9SbIUZZfx1N2t0nG7b"; // RPC URL , provider of the Ethereum node (Alchemy)
//https://eth-ropsten.alchemyapi.io/v2/R8hTrLENk42oUS9SbIUZZfx1N2t0nG7b
//https://ropsten.infura.io/v3/c77cbbf7c86b4406aed541bc5fb8b054
const web3 = new Web3(rpcURL);

// an abi is the skeleton of the contract, it's show all the methods objects and variables of the contract
const abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_sessionID",
        type: "uint256",
      },
      {
        name: "_proposalID",
        type: "uint8",
      },
    ],
    name: "numberOfVotePerProposal",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_sessionID",
        type: "uint256",
      },
    ],
    name: "getWinner",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getSessions",
    outputs: [
      {
        components: [
          {
            name: "proposals",
            type: "uint256",
          },
          {
            name: "ID",
            type: "uint256",
          },
          {
            name: "votersCount",
            type: "uint256",
          },
          {
            name: "winnerProposal",
            type: "uint8",
          },
          {
            name: "proposalCount",
            type: "uint8",
          },
          {
            name: "open",
            type: "bool",
          },
          {
            name: "priv",
            type: "bool",
          },
          {
            name: "ownerID",
            type: "string",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "voters",
            type: "string[]",
          },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_ownerID",
        type: "string",
      },
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_priv",
        type: "bool",
      },
    ],
    name: "createSession",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_description",
        type: "string",
      },
      {
        name: "_sessionID",
        type: "uint256",
      },
    ],
    name: "addProposal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_sessionID",
        type: "uint256",
      },
    ],
    name: "getProposal",
    outputs: [
      {
        components: [
          {
            name: "ID",
            type: "uint8",
          },
          {
            name: "voteCount",
            type: "uint256",
          },
          {
            name: "description",
            type: "string",
          },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_userID",
        type: "string",
      },
      {
        name: "_sessionID",
        type: "uint256",
      },
      {
        name: "_proposalID",
        type: "uint8",
      },
    ],
    name: "processVote",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_sessionID",
        type: "uint256",
      },
    ],
    name: "toggleSession",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "ID",
        type: "uint256",
      },
      {
        indexed: false,
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        name: "ownerID",
        type: "string",
      },
    ],
    name: "NewSession",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "sessionID",
        type: "uint256",
      },
      {
        indexed: false,
        name: "userID",
        type: "string",
      },
    ],
    name: "NewVote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const address = "0x174cF1456373bD5d1a839a08e8d7A600358652Bb"; // adress of the contract

const account = "0xF8c59363C090cF0e436109A5B2aA22335f3A0319"; // adress of the Eth account (ropsten)

//export PRIVATE_KEY_1= 'ad7dd029142a7d4ada19ce0e6a923d4786e03920cd67cf04ede6d05b9fcf962e'

//const privateKey1 = process.env.PRIVATE_KEY_1

const privateKey1 = new Buffer.from(
  "ad7dd029142a7d4ada19ce0e6a923d4786e03920cd67cf04ede6d05b9fcf962e",
  "hex"
);

//web3.eth.getBalance(account, (err, wei) => {  balance = web3.utils.fromWei(wei, 'ether')

const contract = new web3.eth.Contract(abi, address);

//1 First step Create a session with String id = the user ID (here it's gonna be the ID Card number) , String name = the Title of the Session (ex: Election présidentiels) and bool priv false is public
// the function will create a closed sessions without proposals, the id of the sessions are auto implemented
function createSessions(id: string, name: string, priv: boolean) {
  web3.eth.getTransactionCount(account, (err: Error, txCount: any) => {
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amoun
      gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
      to: address,
      data: contract.methods.createSession(id, name, priv).encodeABI(),
    };

    const tx = new Tx(txObject, { chain: "ropsten" });
    tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");

    web3.eth.sendSignedTransaction(raw, (err: Error, txHash: any) => {
      console.log("err:", err, "txHash:", txHash);
      // Use this txHash to find the contract on Etherscan!
    });
  });
  return contract.events.NewSession();
}

//2 Second Step Add the proposal to our session with string description = the label of the proposal (ex : François Hollande) and the int (uint in solidity) sessionID = id of the session
//If and only if the sesion is closed , The function will add a proposal to a given session .
// Coding hint maybe we should surround the function by a try catch to avoid any bug but notmally err var in the sendSignedTransaction should do the job
function addProposal(description: string, sessionID: number) {
  web3.eth.getTransactionCount(account, (err: Error, txCount: any) => {
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
      gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
      to: address,
      data: contract.methods.addProposal(description, sessionID).encodeABI(),
    };

    const tx = new Tx(txObject, { chain: "ropsten" });
    tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");

    web3.eth.sendSignedTransaction(raw, (err: Error, txHash: any) => {
      console.log("err:", err, "txHash:", txHash);
      // Use this txHash to find the contract on Etherscan!
    });
  });
}

//3 Third Step Very simple as the name indicate toggle the state of a session from closed to open and inverse with the int sessionID
//this function wil have to be call to finish the vote session
//Coding hint Maybe we should in the front block the access to this function if the session was already open and that someone already vote
//coding hint 2 trigger the function the first time to the date of openning and a second to the closing date (can be made automaticly)

function toggleSession(sessionID: number) {
  web3.eth.getTransactionCount(account, (err: Error, txCount: any) => {
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amoun
      gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
      to: address,
      data: contract.methods.toggleSession(sessionID).encodeABI(),
    };

    const tx = new Tx(txObject, { chain: "ropsten" });
    tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");

    web3.eth.sendSignedTransaction(raw, (err: Error, txHash: any) => {
      console.log("err:", err, "txHash:", txHash);
      // Use this txHash to find the contract on Etherscan!
    });
  });
}

//4 Fourth Step We are finnally here , the vote action with string userID , int sessionID , int (uint8 in solidity) proposalID = the id of the proposal
//If and only if the session is open and the user never vote for this session, the function will increment the vote counter of the given proposal in the given session , the user is not link to his vote (anonyme vote) but to the session (list of user who already vote)
//It will also increment the number of voters, and the number of total votes , yes right now that I'm writing this down it's sound silly
//the last feature is that it will check each time that a vote is processed if the chosen proposition overcome the current winning proposal and update it if need there is.
function processVote(userId: string, sessionId: number, proposalId: number) {
  web3.eth.getTransactionCount(account, (err: Error, txCount: any) => {
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amoun
      gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
      to: address,
      data: contract.methods
        .createSession(userId, sessionId, proposalId)
        .encodeABI(),
    };

    const tx = new Tx(txObject, { chain: "ropsten" });
    tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");

    web3.eth.sendSignedTransaction(raw, (err: Error, txHash: any) => {
      console.log("err:", err, "txHash:", txHash);
      // Use this txHash to find the contract on Etherscan!
    });
  });
}

// All the function above consume gas (so money)

//If and only if the session is closed , give the winner with the int sessionID
//coding hint make it automatic when the togglesession is trigger a second time
async function getWinner(sessionID: number) {
  return await contract.methods.getWinner(sessionID).call();
}
// give all the session object into a list, the order of the session is the order of the ids
function getSession() {
  return contract.methods.getSessions().call();
}
// give al the poposals of a given session with int sessionID
function getProposal(sessionID: number) {
  return contract.methods.getProposal(sessionID).call();
}
//all is in the name with int sessionID and int (uint8) proposalID
function getNumberOfVotePerProposal(sessionID: number, proposalId: number) {
  return contract.methods.numberOfVotePerProposal(sessionID, proposalId).call();
}

//theses function are gas free

//Tests it gonna give you the structure of the objects

//toggleSession(0)

module.exports.createSessions = createSessions;
module.exports.addProposal = addProposal;
module.exports.toggleSession = toggleSession;
module.exports.processVote = processVote;
module.exports.getWinner = getWinner;
module.exports.getSession = getSession;
module.exports.getProposal = getProposal;
module.exports.getNumberOfVotePerProposal = getNumberOfVotePerProposal;

console.log(createSessions("1", "Lololo", false));

getSession().then(function (result: any) {
  console.log("Sessions : " + JSON.stringify(result));
});

getWinner(0).then(function (result: any) {
  console.log("The winner is : " + JSON.stringify(result));
});

getProposal(0).then(function (result: any) {
  console.log("The proposal are : " + JSON.stringify(result));
});

getNumberOfVotePerProposal(0, 1).then(function (result: any) {
  console.log("The number of votes is : " + JSON.stringify(result));
});
