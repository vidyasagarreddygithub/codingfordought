import './index.css'

const TransactionItem = props => {
  const {amountlist, deletethehistory} = props
  const {inputtitle, inputsalary, inputtypeofsalary, id} = amountlist
  const deletethetab = () => {
    deletethehistory(id, inputsalary, inputtypeofsalary)
  }

  return (
    <div className="resultcontainer">
      <hr className="line" />
      <div className="resultsection">
        <p>{inputtitle}</p>
        <p>{inputsalary}</p>
        <p>{inputtypeofsalary}</p>
        <button
          className="deletebutton"
          type="button"
          data-testid="delete"
          onClick={deletethetab}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </div>
  )
}

export default TransactionItem
