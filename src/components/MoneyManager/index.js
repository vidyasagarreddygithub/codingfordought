import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    amountlist: [],
    typeofsalary: 'Income',
    salary: '',
    title: '',
    balance: 0,
    income: 0,
    expenses: 0,
  }

  gettheamount = event => {
    this.setState({salary: event.target.value})
  }

  gettypesalary = event => {
    this.setState({typeofsalary: event.target.value})
  }

  getthetitle = event => {
    this.setState({title: event.target.value})
  }

  addthedetails = event => {
    event.preventDefault()
    const {salary, typeofsalary, title} = this.state
    const newlist = {
      id: v4(),
      inputtitle: title,
      inputsalary: salary,
      inputtypeofsalary: typeofsalary,
    }
    this.setState(prevState => ({
      amountlist: [...prevState.amountlist, newlist],
      title: '',
      salary: '',
    }))

    if (typeofsalary === 'Income') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(salary),
      }))
      this.setState(prevState => ({
        income: prevState.income + parseInt(salary),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(salary),
      }))
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(salary),
      }))
    }
  }

  deletethehistory = (id, inputsalary, inputtypeofsalary) => {
    const {amountlist} = this.state
    console.log(inputtypeofsalary)

    this.setState({
      amountlist: amountlist.filter(each => each.id !== id),
    })
    if (inputtypeofsalary === 'Expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses - parseInt(inputsalary),
      }))
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(inputsalary),
      }))
    } else {
      this.setState(prevState => ({
        income: prevState.income - parseInt(inputsalary),
      }))
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(inputsalary),
      }))
    }
  }

  render() {
    const {
      salary,
      typeofsalary,
      title,
      amountlist,
      balance,
      income,
      expenses,
    } = this.state
    return (
      <div className="bg-container">
        <div className="topSection">
          <h1 className="name">Hi, Richard</h1>
          <p className="paratopsection">
            Welcome back to your
            <span className="spanelement">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceamount={balance}
          incomeamount={income}
          expensesamount={expenses}
        />
        <div className="bottomsection">
          <form className="addTransactionsection">
            <h1 className="transactionheading">Add Transaction</h1>
            <label htmlFor="titleInput" className="label">
              Title
            </label>
            <input
              type="text"
              id="titleInput"
              className="inputtext"
              value={title}
              onChange={this.getthetitle}
              placeholder="Title"
            />
            <label htmlFor="incomeInput" className="label">
              Amount
            </label>
            <input
              id="incomeInput"
              type="text"
              className="inputtext"
              value={salary}
              onChange={this.gettheamount}
              placeholder="Amount"
            />
            <label htmlFor="typeinput" className="label">
              Type
            </label>
            <select
              id="typeinput"
              className="selectinput"
              value={typeofsalary}
              onChange={this.gettypesalary}
            >
              {transactionTypeOptions.map(each => (
                <option
                  value={each.optionId}
                  className="optionelement"
                  key={each.optionId}
                >
                  {each.displayText}
                </option>
              ))}
            </select>
            <div className="buttonelement">
              <button
                className="addbutton"
                type="button"
                onClick={this.addthedetails}
              >
                Add
              </button>
            </div>
          </form>
          <div className="historysection">
            <h1 className="historyhaed">History</h1>
            <div className="title_amount_type">
              <div className="haedingsection">
                <p className="title">Title</p>
                <p className="amountinbottom">Amount</p>
                <p className="type">Type</p>
              </div>
              <ul>
                {amountlist.map(each => (
                  <TransactionItem
                    amountlist={each}
                    key={each.id}
                    deletethehistory={this.deletethehistory}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
