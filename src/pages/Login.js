import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Dummy login
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <div className="login-footer">
          <span>Don't have an account? </span>
          <a href="/signup">Create one</a>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f8f9fa;
          padding: 20px;
        }

        .login-box {
          width: 100%;
          max-width: 380px;
          background: white;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(10, 36, 99, 0.1);
          text-align: center;
        }

        .login-header {
          margin-bottom: 32px;
        }

        .login-header h2 {
          color: #0A2463;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .login-header p {
          color: #6c757d;
          font-size: 14px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          width: 100%;
        }

        .input-group input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .input-group input:focus {
          border-color: #3E92CC;
          outline: none;
          box-shadow: 0 0 0 3px rgba(62, 146, 204, 0.2);
        }

        .login-button {
          width: 100%;
          padding: 14px;
          background-color: #0A2463;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .login-button:hover {
          background-color: #3E92CC;
          transform: translateY(-2px);
        }

        .login-footer {
          margin-top: 24px;
          font-size: 14px;
          color: #6c757d;
        }

        .login-footer a {
          color: #FB3640;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .login-footer a:hover {
          color: #0A2463;
        }
      `}</style>
    </div>
  );
}

export default Login;