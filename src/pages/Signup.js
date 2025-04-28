import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Name:', name, 'Email:', email, 'Password:', password);
    // Dummy signup
    navigate('/dashboard');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fc" }}>
      <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4" style={{ color: "#4e73df" }}>Sign Up</h2>
        <form onSubmit={handleSignup}>
          
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input 
              type="email" 
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input 
              type="password" 
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>

        </form>

        <div className="text-center">
          <small>Already have an account? <a href="/" style={{ color: "#4e73df" }}>Login</a></small>
        </div>
      </div>
    </div>
  );
}

export default Signup;
