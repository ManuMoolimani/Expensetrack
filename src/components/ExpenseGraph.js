import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f', '#ffbb28', '#d0ed57', '#a4de6c'];

function ExpenseGraph({ expenses }) {
  if (expenses.length === 0) {
    return (
      <div className="expense-graph text-center mt-4">
        <h3 style={{ color: "#4e73df" }}>Expense Graphs</h3>
        <p className="text-muted">No expenses to show graphs.</p>
      </div>
    );
  }

  return (
    <div className="expense-graph text-center mt-4">
      <h3 className="mb-4" style={{ color: "#4e73df" }}>Expense Graphs</h3>

      {/* Pie Chart */}
      <h5 className="mb-3" style={{ color: "#36b9cc" }}>Spending Percentage (Pie Chart)</h5>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={expenses}
            dataKey="amount"
            nameKey="description"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {expenses.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Bar Chart */}
      <h5 className="mt-5 mb-3" style={{ color: "#1cc88a" }}>Spending Amount (Bar Chart)</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={expenses} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="description" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#4e73df" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ExpenseGraph;
