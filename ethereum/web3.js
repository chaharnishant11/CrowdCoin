import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.web3 !== 'undefined'){
  // We are on a browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
}else{
  // We are on the Server OR the user isn't runnig metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/15a4a56923b14777a2437b58f1c59484'
  );
  web3 = new Web3(provider);
}

export default web3;
