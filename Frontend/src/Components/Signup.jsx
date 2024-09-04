import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(true); // State variable to control visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    axios.post('https://techy-software-nexus-backend.onrender.com/signup', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  const handleClose = () => {
    navigate('../');
    setVisible(false); // Set visibility to false to hide the component
  };
  return (
    <>
      {visible && (
          <div className="regContainer">
            <button className="close-button" onClick={handleClose}>×</button>
            <h3><b><u>Register</u></b></h3>
            <div className="lr">  
            <form onSubmit={handleSubmit}>
              <label htmlFor="name"><strong>Name</strong></label>
              <input type="text" placeholder="Enter Name" autoComplete="off" name="name" value={name} onChange={(e) => setName(e.target.value)} />
              <label htmlFor="email"><strong>Email</strong></label>
              <input type="email" placeholder="Enter Email" autoComplete="off" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="password"><strong>Password</strong></label>
              <input type="password" placeholder="Enter Password" autoComplete="off" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {error && <p className="error-message">{error}</p>}
              <button type="submit">Register</button>
            </form>
            </div>
            <p>Already Have an Account?</p>
            <Link to='/login'>Login</Link>
          </div>
      )}
    </>
  );  
}
export default Signup;
