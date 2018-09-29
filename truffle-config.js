/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var mnemonic = "slide exact bottom ramp public depth floor december weird skull index damp";

var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777" // Match any network id
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/5987ae56c03e4bcba7064b9291f8b2bf")
      },
      network_id: '3',
      gas: 4500000,
      gasPrice: 10000000000,
    },
  }
};
