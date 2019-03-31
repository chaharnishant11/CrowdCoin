import React,{ Component } from 'react';
import { Card,Grid, Button, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import Campaign from '../../ethereum/campaign';
import { Link } from '../../routes';
import Profit from '../../components/profit';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      name: summary[5],
      description: summary[6],
      image: summary[7],
      target: summary[8]
    };
  }

  renderCards(){
    const {
      balance,manager,minimumContribution,requestsCount,approversCount,name,description,image,traget
    } = this.props;
    const items = [
      {
        header: <img src={image} style={{ width: 100, align: "center"}} />,
        meta: name,
        description: description
      },
      {
        header:manager,
        meta: 'Address of manager',
        description: 'The manager created the campaign and can create requests to withdraw money. ',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'You must contribute at least this much wei to become an approver'
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description:
          'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description:
          'Number of people who have already donated to this campaign'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description:
          'The balance is how much money this campaign has left to spend.'
      }
    ];

    return <Card.Group items={items} />;
  }

  render(){
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
              <Profit address={this.props.address} />
              <Image src='https://serving.photos.photobox.com/688688952ac5948018d22a7332cdc62a08378718d6fd49a97ccc3886115db5ae9e330f7a.jpg' style={{marginTop:15}}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a><Button primary>View Requests</Button></a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
