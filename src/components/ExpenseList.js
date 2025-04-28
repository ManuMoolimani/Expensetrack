function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h3 className="text-center mb-4" style={{ color: "#4e73df" }}>Expense History</h3>

      {expenses.length === 0 ? (
        <p className="text-center text-muted">No expenses added yet.</p>
      ) : (
        <ul className="list-group">
          {expenses.map((expense) => (
            <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong style={{ fontSize: "1.1rem" }}>{expense.description}</strong><br />
                <small className="text-muted">{expense.date}</small>
              </div>
              <span className="badge bg-primary rounded-pill" style={{ fontSize: "1rem" }}>
                ${expense.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
