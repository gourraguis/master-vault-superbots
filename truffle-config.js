const HDWalletProvider = require('truffle-hdwallet-provider');
const MNEMONIC =
  "mammal trip industry special dirt glimpse again spend jaguar uniform kingdom talk";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    mainnet: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://bsc-dataseed1.ninicoin.io`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  compilers: {
    solc: {
      version: "0.8.10",
    }
  },

  api_keys: {
      bscscan: "AMQIN1P9Y1VGHGKRZVJ9PBUH797I46A9EQ"
  },

  plugins: ['truffle-plugin-verify']
};

//[0x6cd5c4d26A9118AeEeB9BF095d67F9268B09efB8,0x3FFbe607E81bF00FAFdaB085C9848344b3BA19B5,0xA15676373248aC4047DAfFf561eB24AA547d1DA8,0x6D08FcfB25ff3D0B6D0cEC68170BA654381215dD,0x2b79E8Dca44c5862c4c4Cc7727e605206e51a5D3]