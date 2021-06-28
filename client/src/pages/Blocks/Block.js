import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Transaction from '../TransactionPool/Transaction';
import DarkRapListItem from '../../components/DarkList';

class Block extends Component {
  state = { displayTransaction: false };

  toggleTransaction = () => {
    this.setState({ displayTransaction: !this.state.displayTransaction });
  }

  get displayTransaction() {
    const { data } = this.props.block;

    const stringifiedData = JSON.stringify(data);

    const dataDisplay = stringifiedData.length > 35 ?
      `${stringifiedData.substring(0, 35)}...` :
      stringifiedData;

    if (this.state.displayTransaction) {
      return (
        <div>
          { 
            data.map(transaction => (
              <div key={transaction.id} >
                <hr />
                <Transaction transaction={transaction} />
              </div>
            ))
          }
          <br />
          <Button
            bsStyle="danger"
            bsSize="small"
            onClick={this.toggleTransaction}
          >
            Show Less
          </Button>
        </div>
      )
    }

    return (
      <div>
        <div>Data: {dataDisplay}</div>
        <Button
          bsStyle="danger"
          bsSize="small"
          onClick={this.toggleTransaction}
        >
          Show More
        </Button>
      </div>
    );
  }

  render() {
    const { timestamp, hash } = this.props.block;

    const hashDisplay = `${hash.substring(0, 15)}...`;
    let stamp = new Date(timestamp).toLocaleString();
    return (
      <DarkRapListItem hash={hash} timestamp={stamp} styleKey={this.props.styleKey}>
        <div>Hash: {hashDisplay}</div>
        <div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
        {this.displayTransaction}
        </DarkRapListItem>
    );
  }
};

export default Block;