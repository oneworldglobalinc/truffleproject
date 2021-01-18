
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "";

//module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  
//networks: {
  
    //development: {
      //host: "127.0.0.1",
//port: 7545,
      //network_id: "*"
    //},
    //test: {
      //host: "127.0.0.1",
      //port: 7545,
      //network_id: "*"
    //}
  //}
networks: {
    ropsten:{
       provider: function(){
          return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/");
       },
       network_id: '5777',
    },

    test: {
      provider: function(){
        return new HDWalletProvider(mnemonic, "HTTP://127.0.0.1:7545/");
      },
      network_id: "*"
    },
  //
};
