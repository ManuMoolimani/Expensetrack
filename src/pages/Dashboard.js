import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseGraph from '../components/ExpenseGraph';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={{ backgroundColor: "#f8f9fc", minHeight: "100vh" }}>
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3 mb-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="navbar-brand mb-0" style={{ color: "#4e73df", fontSize: "2rem" }}>Expense Tracker</h1>
          <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container d-flex flex-column align-items-center">
        <div className="row justify-content-center w-100">

          {/* Left Panel */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow p-4 mb-4">
              <ExpenseForm setExpenses={setExpenses} />
            </div>
            <div className="card shadow p-4">
              <ExpenseList expenses={expenses} />
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow p-4">
              <ExpenseGraph expenses={expenses} />
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
