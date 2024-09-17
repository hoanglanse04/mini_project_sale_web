// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './Login.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users?email=${email}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const users = await response.json();
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        login(user);
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
  <div className="content">
    <div className="container  d-flex justify-content-center row">
      <div className="login-page d-flex flex-column justify-content-center  col-xl-6 col-lg-6 col-md-8 col-sm-12">
        <h2 className=' text-center'>Login</h2>
        <div className="row">
          <label htmlFor="email">Email</label>
        </div>
        <div className="row"><input
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="row">
          <label htmlFor="Password">Password</label>
        </div>
        <div className="row"> <input
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="" style={{display:"flex",justifyContent:"space-between"}}>
        <button style={{width:'30%'}} onClick={handleLogin}>Login</button>
        <button style={{width:'30%'}} onClick={ ()=>{
          navigate('/SignUp')
        }
        }>Sign Up</button>
        </div>
     

      {error && <p>{error}</p>}
    </div>
    </div>
  </div>
  
    
  );
};

export default LoginPage;
