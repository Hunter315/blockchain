import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';
import history from '../../history';
import CustomizedSnackbars from '../../common/SnackBar';
<<<<<<< HEAD
=======
import CircularIndeterminate from '../../common/LoadICon';
>>>>>>> b61368aa6bc5eaef939454816a465cc3d727dbf4

const POLL_INERVAL_MS = 10000;

class TransactionPool extends Component {
  state = {
    transactionPoolMap: {},
    showAlert: false,
    alertMessage: "",
    alertType: "",
    isLoading: false
  };

  fetchTransactionPoolMap = () => {
    fetch(`http://localhost:3000/api/transaction-pool-map`)

    // fetch(`${document.location.origin}/api/transaction-pool-map`)
      .then(response => response.json())
      .then(json => this.setState({ transactionPoolMap: json }));
  }

  fetchMineTransactions = () => {
    this.setState({isLoading : true})
    fetch(`http://localhost:3000/api/mine-transactions`) 
    // fetch(`${document.location.origin}/api/mine-transactions`)

      .then(response => {
        if (response.status === 200) {
          return  <CustomizedSnackbars message={"Success mining the transaction"} alertType={"success"}/>
          CustomizedSnackbars.handleClick();
         // history.push('/blocks');
        } else {
          this.setState({showAlert : true, alertType: "error", alertMessage: "Error mining the transaction!", isLoading: false })

          console.log("error mining")

        }
      });
  }

  componentDidMount() {
    this.fetchTransactionPoolMap();

    this.fetchPoolMapInterval = setInterval(
      () => this.fetchTransactionPoolMap(),
      POLL_INERVAL_MS
    );
  }

  componentWillUnmount() {
    clearInterval(this.fetchPoolMapInterval);
  }
  componentDidUpdate(){
    console.log("UPDATED ME")
  }

  render() {
    return (
      <div className='TransactionPool'>
        {console.log(this.state.transactionPoolMap)  }
        {this.state.isLoading ? <CircularIndeterminate /> : null}
        {
          this.state.showAlert ? <CustomizedSnackbars props={this.state.alertMessage, this.alertType} /> : null
        }
        <h3>Transaction Pool</h3>
        {
          Object.values(this.state.transactionPoolMap).map(transaction => {
            return (
              <div key={transaction.id}>
                <hr />
                <Transaction transaction={transaction} />
              </div>
            )
          })
        }
        <hr />
        <Button
          bsStyle="danger"
          onClick={this.fetchMineTransactions}
        >
          Mine the Transactions
        </Button>
      </div>
    )
  }
}

export default TransactionPool;