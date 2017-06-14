import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TransactionInput extends Component {
  selectInputText = (event) => {
    event.target.select();
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          value={this.props.transactionValue}
          onChange={this.props.stateHandler}
          placeholder={this.props.placeholderText}
          onFocus={this.selectInputText}
        />
      </div>
    );
  }
}

TransactionInput.propTypes = {
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  name: PropTypes.string.isRequired,
  transactionValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

TransactionInput.defaultProps = {
  transactionValue: 'Enter transaction info'
}

export default TransactionInput;