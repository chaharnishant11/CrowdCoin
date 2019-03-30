import web3 from './web3';
import CampaginFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaginFactory.interface),
  '0x73a372ebA33B9978A3964aC71b4A93fCfaAB8e5E'
);

export default instance;
