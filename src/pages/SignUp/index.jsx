import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(response => response.json())
      .then(data => {
        setMessage('Registration successful!');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate('/login'); // Redirect to /login
      })
      .catch(error => {
        setMessage('Registration failed.');
        console.error('Error:', error);
      });
  };

  return (
    <div className="content">
      <div className="container row">
        <div className="signup-page d-flex flex-column justify-content-center col-xl-6 col-lg-6 col-md-8 col-sm-12">
          <h2 className='text-center'>Sign Up</h2>
          <form className='d-flex flex-column justify-content-center' onSubmit={handleSubmit}>
            <div className='row'>
              <label htmlFor="name">Name</label>
            </div>
            <div className="row">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='row'>
              <label htmlFor="email">Email</label>
            </div>
            <div className="row">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='row'>
              <label htmlFor="password">Password</label>
            </div>
            <div className="row">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='row'>
              <label htmlFor="confirm-password">Confirm Password</label>
            </div>
            <div className="row">
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button style={{marginTop:'30px'}} className='btn_register' type="submit">Register</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
