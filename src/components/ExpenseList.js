function ExpenseList({ expenses }) {
    return (
      <div className="expense-list">
        <h3>Expense History</h3>
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          <ul>
            {expenses.map((expense) => (
              <li key={expense.id} className="expense-item">
                <div>
                  <strong>{expense.description}</strong> <br />
                  <small>{expense.date}</small>
                </div>
                <span>${expense.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default ExpenseList;
  