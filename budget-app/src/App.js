import React, {Component} from 'react';
import NewTransaction from './NewTransaction';
import Transaction from './Transaction';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      startingBalance: 1000.00,
      currentBalance: 0.00,
      newTransaction: {},
      transactions: [
        {
          name: 'lunch',
          amount: 7.06,
          transactionType: 'debit'
        },
        {
          name: 'Home Depot purchase',
          amount: 83.96,
          transactionType: 'debit'
        },
        {
          name: 'yard sell',
          amount: 340.00,
          transactionType: 'deposit'
        },
      ]
    }
  }

  componentWillMount = () => {
    let currentBalance = this.state.transactions.map(transaction => {
      return transaction.transactionType === 'debit' ? parseFloat(-transaction.amount) : transaction.amount
    })
      .reduce((amount, balance) => {
        return balance += amount
      }, this.state.startingBalance)

    this.setState({currentBalance})
  }

  transactionName = (event) => {
    let newTransaction = Object.assign({}, this.state.newTransaction)
    newTransaction.name = event.target.value
    this.setState({newTransaction})
  }

  transactionAmount = (event) => {
      let newTransaction = Object.assign({}, this.state.newTransaction)

      newTransaction.amount = parseFloat(event.target.value)
      this.setState({newTransaction})
    
  }

  transactionClick = (event) => {
    let currentBalance = this.state.currentBalance
    let newTransaction = Object.assign({}, this.state.newTransaction)
    let transactions = this.state.transactions.slice()

    newTransaction.transactionType = event.target.className

    transactions.push(newTransaction)

    if (newTransaction.transactionType === 'deposit') {
      currentBalance += newTransaction.amount
    } else {
      currentBalance -= newTransaction.amount
    }

    newTransaction = {}

    this.setState({ currentBalance, transactions, newTransaction })
  }

  render() {

    let transactions = this.state.transactions.map((transaction, index) =>
      <Transaction key={index} transaction={transaction}/>)

    return (
      <div className="App">
        {
          !this.state.currentBalance ?
            <div className="error">
              <h3>
                We are unable to show the balance, please verify your credentials and try again
              </h3>
            </div> :
          <div className="showBalance">
            <h3>
              {`The account balance is: $${this.state.currentBalance}`}
            </h3>
            <NewTransaction
              transactionName={this.transactionName}
              transactionAmount={this.transactionAmount}
              transactionClick={this.transactionClick}
              newTransaction={this.state.newTransaction}
            />
          </div>
        }
        {transactions}
      </div>
    );
  }
}

export default App;