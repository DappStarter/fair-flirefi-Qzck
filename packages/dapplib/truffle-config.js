require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food grocery cruise sister proud hard light army giggle'; 
let testAccounts = [
"0xf0e1abbd2b674eb0b168372d4ecec0d9d2b4f1b3cf3415e155123523d9d2be99",
"0xfe4d48a9669174a6fd7f362f19e10be51ca05fe6948b3435f6574ce368da0efd",
"0x3ca64a1f8717aa987de441ca9f10bd219c5df3167ad64735b1dc41d9ca3ed086",
"0x5b04cf1d803fc8675d4c63dcb78fc113878c245d4a491728b4d1055b8cf8277b",
"0x05d275c8efcf68be25867dce01d506c4b6cee51a87c10352176fe1c8fe2f9a51",
"0x675886404904299bae3f9f1c5fd20fe942325e44961e68ea50ad57f449b13b20",
"0xcc6a11a7395de425b2a2f871aabdee66f16839524538408311d2587547366a6e",
"0x5685de16fe2296ed1b3673038bfc2b8365023f27042eb6a22b3bb6641cfa5dfa",
"0x20c3c22328a6d1525eaa8fd6d4bac507bc46410c635647430268d5751a6f87d5",
"0x7d60391385a32f1ab8540d5c039d4af3ba13bd9425deb00752a651c244109e71"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


