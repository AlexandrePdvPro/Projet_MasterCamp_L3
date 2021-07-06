// eslint-disable-next-line @typescript-eslint/no-var-requires
const Tx = require('ethereumjs-tx').Transaction;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Web3 = require('web3');
const rpcURL =
  'https://eth-ropsten.alchemyapi.io/v2/R8hTrLENk42oUS9SbIUZZfx1N2t0nG7b'; // RPC URL to find wich allow to keep private key
//https://eth-ropsten.alchemyapi.io/v2/R8hTrLENk42oUS9SbIUZZfx1N2t0nG7b
//https://ropsten.infura.io/v3/c77cbbf7c86b4406aed541bc5fb8b054
const web3 = new Web3(rpcURL);

const abi = [
  {
    constant: true,
    inputs: [
      {
        name: '_sessionID',
        type: 'uint256',
      },
      {
        name: '_proposalID',
        type: 'uint8',
      },
    ],
    name: 'numberOfVotePerProposal',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_sessionID',
        type: 'uint256',
      },
    ],
    name: 'getWinner',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getSessions',
    outputs: [
      {
        components: [
          {
            name: 'proposals',
            type: 'uint256',
          },
          {
            name: 'ID',
            type: 'uint256',
          },
          {
            name: 'votersCount',
            type: 'uint256',
          },
          {
            name: 'winnerProposal',
            type: 'uint8',
          },
          {
            name: 'proposalCount',
            type: 'uint8',
          },
          {
            name: 'open',
            type: 'bool',
          },
          {
            name: 'priv',
            type: 'bool',
          },
          {
            name: 'ownerID',
            type: 'string',
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'voters',
            type: 'string[]',
          },
        ],
        name: '',
        type: 'tuple[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_ownerID',
        type: 'string',
      },
      {
        name: '_name',
        type: 'string',
      },
      {
        name: '_priv',
        type: 'bool',
      },
    ],
    name: 'createSession',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_description',
        type: 'string',
      },
      {
        name: '_sessionID',
        type: 'uint256',
      },
    ],
    name: 'addProposal',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_sessionID',
        type: 'uint256',
      },
    ],
    name: 'getProposal',
    outputs: [
      {
        components: [
          {
            name: 'ID',
            type: 'uint8',
          },
          {
            name: 'voteCount',
            type: 'uint256',
          },
          {
            name: 'description',
            type: 'string',
          },
        ],
        name: '',
        type: 'tuple[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_userID',
        type: 'string',
      },
      {
        name: '_sessionID',
        type: 'uint256',
      },
      {
        name: '_proposalID',
        type: 'uint8',
      },
    ],
    name: 'processVote',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_sessionID',
        type: 'uint256',
      },
    ],
    name: 'toggleSession',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'ID',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'name',
        type: 'string',
      },
      {
        indexed: false,
        name: 'ownerID',
        type: 'string',
      },
    ],
    name: 'NewSession',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'sessionID',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'userID',
        type: 'string',
      },
    ],
    name: 'NewVote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
];

const address = '0x174cF1456373bD5d1a839a08e8d7A600358652Bb';

const account = '0xF8c59363C090cF0e436109A5B2aA22335f3A0319';

//export PRIVATE_KEY_1= 'ad7dd029142a7d4ada19ce0e6a923d4786e03920cd67cf04ede6d05b9fcf962e'

//const privateKey1 = process.env.PRIVATE_KEY_1

const privateKey1 = new Buffer.from(
  'ad7dd029142a7d4ada19ce0e6a923d4786e03920cd67cf04ede6d05b9fcf962e',
  'hex',
);

//web3.eth.getBalance(account, (err, wei) => {  balance = web3.utils.fromWei(wei, 'ether')
//console.log(balance)})

const contract = new web3.eth.Contract(abi, address);
//console.log("step 2")

function addProposal(description, sessionID) {
  web3.eth.getTransactionCount(account, (err, txCount) => {
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: address,
      data: contract.methods.addProposal(description, sessionID).encodeABI(),
    };

    const tx = new Tx(txObject, { chain: 'ropsten' });
    tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:', err, 'txHash:', txHash);
      // Use this txHash to find the contract on Etherscan!
    });
  });
}

function createSessions(id, name, priv) {
  web3.eth.getTransactionCount(account, (err, txCount) => {
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amoun
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: address,
      data: contract.methods.createSession(id, name, priv).encodeABI(),
    };

    const tx = new Tx(txObject, { chain: 'ropsten' });
    tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:', err, 'txHash:', txHash);
      // Use this txHash to find the contract on Etherscan!
    });
  });
}

function toggleSession(sessionID) {
  web3.eth.getTransactionCount(account, (err, txCount) => {
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amoun
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: address,
      data: contract.methods.toggleSession(sessionID).encodeABI(),
    };

    const tx = new Tx(txObject, { chain: 'ropsten' });
    tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:', err, 'txHash:', txHash);
      // Use this txHash to find the contract on Etherscan!
    });
  });
}

function processVote(userId, sessionId, proposalId) {
  web3.eth.getTransactionCount(account, (err, txCount) => {
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amoun
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: address,
      data: contract.methods
        .createSession(userId, sessionId, proposalId)
        .encodeABI(),
    };

    const tx = new Tx(txObject, { chain: 'ropsten' });
    tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:', err, 'txHash:', txHash);
      // Use this txHash to find the contract on Etherscan!
    });
  });
}

let sessions;

async function getWinner(sessionID) {
  return await contract.methods.getWinner(sessionID).call();
}

function getSession() {
  return contract.methods.getSessions().call();
}

function getProposal(sessionID) {
  return contract.methods.getProposal(sessionID).call();
}

function getNumberOfVotePerProposal(sessionID, proposalId) {
  return contract.methods.numberOfVotePerProposal(sessionID, proposalId).call();
}

//toggleSession(0)

getSession().then(function (result) {
  console.log('Sessions : ' + JSON.stringify(result));
});

getWinner(0).then(function (result) {
  console.log('The winner is : ' + JSON.stringify(result));
});

getProposal(0).then(function (result) {
  console.log('The proposal are : ' + JSON.stringify(result));
});

getNumberOfVotePerProposal(0, 1).then(function (result) {
  console.log('The number of vote is : ' + JSON.stringify(result));
});
