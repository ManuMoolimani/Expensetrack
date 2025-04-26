import { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseGraph from '../components/ExpenseGraph';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>Expense Tracker</h2>
        <button className="logout-btn">Logout</button>
      </nav>

      <div className="dashboard-content">
        <div className="left-panel">
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseList expenses={expenses} />
        </div>

        <div className="right-panel">
          <ExpenseGraph expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
