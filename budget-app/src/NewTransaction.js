import React, { Component } from 'react';
import TransactionInput from './TransactionInput';
import TransactionButton from './TransactionButton';


class NewTransaction extends Component {

    render() {
        return (
            <div className='newTransaction'>
              <TransactionInput
                label="Name: "
                updateTransaction={this.props.transactionName}
                transactionValue={this.props.newTransaction.name}
                name="name"
                type="text"
              />
              <TransactionInput
                label="Amount: "
                updateTransaction={this.props.transactionAmount}
                transactionValue={this.props.newTransaction.amount}
                name="amount"
                type="number"
              />
            <br/>
              <TransactionButton
                buttonVal="Debit"
                transactionClick={this.props.transactionClick}
              />
              <TransactionButton
                buttonVal="Deposit"
                transactionClick={this.props.transactionClick}
              />
          </div>
        );
    }
}

export default NewTransaction;