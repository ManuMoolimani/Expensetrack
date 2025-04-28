import { useState } from 'react';

function ExpenseForm({ setExpenses }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      alert('Please fill all fields!');
      return;
    }

    const newExpense = {
      id: Date.now(), // unique id
      description,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString()
    };

    // Add new expense to the list
    setExpenses(prev => [...prev, newExpense]);

    // Clear form
    setDescription('');
    setAmount('');
  };

  return (
    <div className="expense-form">
      <h3 className="text-center mb-4" style={{ color: "#4e73df" }}>Add New Expense</h3>

      <form onSubmit={handleAddExpense}>
        <div className="mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Description (e.g., Grocery)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input 
            type="number"
            className="form-control"
            placeholder="Amount (e.g., 100)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
