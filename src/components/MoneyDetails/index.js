import './index.css'

const MoneyDetails = props => {
  const {balanceamount, incomeamount, expensesamount} = props

  return (
    <div className="moneyDetailssection">
      <div className="balancecard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="namecontainer">
          <p className="balanceheading">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            RS {balanceamount}
          </p>
        </div>
      </div>
      <div className="incomecard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="namecontainer">
          <p className="balanceheading">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            RS {incomeamount}
          </p>
        </div>
      </div>
      <div className="expancescard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="namecontainer">
          <p className="balanceheading">Your expenses</p>
          <p className="amount" data-testid="expensesAmount">
            RS {expensesamount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
