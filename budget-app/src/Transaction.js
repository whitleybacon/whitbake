import React, {Component} from 'react';

class Transaction extends Component {

  render() {
    return (
      <div className='transactions'>
        <div>
          {this.props.transaction.transactionType} of ${parseFloat(this.props.transaction.amount)} for {this.props.transaction.name}
        </div>
      </div>
    );
  }
}

export default Transaction;