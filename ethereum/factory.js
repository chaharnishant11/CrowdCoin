import web3 from './web3';
import CampaginFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaginFactory.interface),
  '0xA24b0bd3956bD29F1C8339d344fe9b608F65248e'
);

export default instance;
