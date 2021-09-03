require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note rifle coin hockey private obscure tornado'; 
let testAccounts = [
"0x708ba148b8c6409f24039a1c36b0f60d38dd2e9820b2497a512c9adbbddd2ceb",
"0x421d5ee14074edbb088bb9277c353c684d8bd2ace0a5513e2aa6b352aa0ceb89",
"0x001a04034f0f2b57ce03e7b2bf690a6a7838a02f32b9d71e36ce331706f2a83b",
"0x38ab3f0333aed070229dcd88908a6f26bbcea53dca79d74171d16d0cb9ed6aae",
"0x578ca0c75a43a5769fd4fb37d14b240e200ba0213e20b8da81fff91fa1cb399d",
"0x648d43f3337b52f2fb4675d1f8b00b1ce269e10001349b99bee9ce8797e0ae72",
"0xc3381f1b3e1e8f2b20e42760b4c8e4b3d4fcec55414a30b000b4c60edc41f43f",
"0x609718b9328835f02bd5ec5f208ed861d20fec9b778bfaca8a741de3628660fb",
"0x27a74f90627b4484c879be0f3ddde0a07fa2aba785a0f6375f1c0050a93e4b58",
"0xc52cbab96a7d7c6160a46ecd7766b642eee8f3954acf4e6cd153a67cde21d1b5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

