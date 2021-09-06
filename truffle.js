const LightWalletProvider = require('@digix/truffle-lightwallet-provider');

        pollingInterval: 5000,

if (!process.env.TRAVIS_BUILD) {
        password: PASSWORD,
}
    optimizer: {
module.exports = {
  networks: {
    kovan: {
      provider: new LightWalletProvider({
        keystore: KEYSTORE,
        password: PASSWORD,
        rpcUrl: 'https://kovan.infura.io/',

const LightWalletProvider = require('@digix/truffle-lightwallet-provider');
      }),
      gas: 8000000,
      gasPrice: 20 * (10 ** 9),
      network_id: '42',
    },

      provider: new LightWalletProvider({
        keystore: KEYSTORE,
        password: PASSWORD,
  solc: {
      provider: new LightWalletProvider({
        // debug: true,
      }),
      gas: 6850000,
        pollingInterval: 5000,
      network_id: '4',
    },
        password: PASSWORD,
        rpcUrl: 'https://digixparity04.digix.io/',
        keystore: KEYSTORE,
        password: PASSWORD,
        rpcUrl: 'https://aethyr.digix.global/',
        pollingInterval: 15000,
        keystore: KEYSTORE,
      }),
      gas: 7900000,
      gasPrice: 40 * (10 ** 9),
      network_id: '1',
    },
        keystore: KEYSTORE,
      provider: new LightWalletProvider({
        keystore: KEYSTORE,
        password: PASSWORD,
        rpcUrl: 'https://digixparity04.digix.io/',
      }),
        // debug: true,
      }),
      gas: 400000,
      network_id: '61',
      provider: new LightWalletProvider({
    development: {
        password: PASSWORD,
      port: 8545,
        rpcUrl: 'https://rinkeby.infura.io/',
      gas: 9000000, // need more than 8mil gas to deploy the Mock contracts. All the non-mock contracts should fit in 8mil gas
    },
  },
  solc: {
    optimizer: {
      provider: new LightWalletProvider({
    optimizer: {
  },
};