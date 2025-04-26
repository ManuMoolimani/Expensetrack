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
      <h3>Add New Expense</h3>
      <form onSubmit={handleAddExpense} className="form">
        <input 
          type="text"
          placeholder="Description (e.g., Grocery)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          type="number"
          placeholder="Amount (e.g., 100)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
