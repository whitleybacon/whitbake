import React, {Component} from 'react';

class TransactionButton extends Component {
  render() {
    return (
      <button
        className={this.props.buttonVal.toLowerCase()} onClick={this.props.transactionClick}
      >
        {this.props.buttonVal}
      </button>

    );
  }
}

export default TransactionButton;