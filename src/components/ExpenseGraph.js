import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f', '#ffbb28', '#d0ed57', '#a4de6c'];

function ExpenseGraph({ expenses }) {
  if (expenses.length === 0) {
    return (
      <div className="expense-graph">
        <h3>Expense Graph</h3>
        <p>No expenses to show graph.</p>
      </div>
    );
  }

  return (
    <div className="expense-graph">
      <h3>Expense Graph</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={expenses}
            dataKey="amount"
            nameKey="description"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {expenses.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseGraph;
