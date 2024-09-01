import React, { useState } from 'react';
import { Layout } from './Layout';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { Person, Email, Lock } from '@mui/icons-material';

const SignUp = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear the error for the current input field as the user types
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({ name: '', email: '', password: '' }); // Clear form after submission
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="form">
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            error={Boolean(errors.name)}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            margin="normal"
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            margin="normal"
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <span>Already have an account? </span><Link to="/signIn">Sign In</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
