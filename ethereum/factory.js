import web3 from './web3';
import CampaginFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaginFactory.interface),
  '0x93BF7B1E87E004b1647ab2f264b1Ad33a086aeC7'
);

export default instance;
