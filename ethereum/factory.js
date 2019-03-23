import web3 from './web3';
import CampaginFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaginFactory.interface),
  '0xaa5A68bD95B5AE04CE15cAEE1D839Fd73a7D91Ad'
);

export default instance;
