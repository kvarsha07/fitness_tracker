import React, { useState } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';  // Import the Email icon
import { Layout } from "./Layout";
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const [takeInput, setTakeInput] = useState({
    email: "",
    password: ""
  });
  const [passHide, setPassHide] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTakeInput({
      ...takeInput,
      [name]: value
    });
  };

  const handlePasswordVisibility = () => {
    setPassHide(!passHide);
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!takeInput.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(takeInput.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Password validation
    if (!takeInput.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (takeInput.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Call the API or handle sign-in logic
      collectDataApi();
    }
  };

  const collectDataApi = async () => {
    let result = await fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify(takeInput),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let Data1 = await result.json();
    console.log(Data1);
    navigate("/menu");
  };

  return (
    <Layout>
      <div className="container">
        <div className="form-container">
          <h1>Sign In</h1>
          <form onSubmit={handleSignSubmit}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={takeInput.email}
              onChange={handleInput}
              fullWidth
              error={Boolean(errors.email)}
              helperText={errors.email}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              name="password"
              type={passHide ? "text" : "password"}
              value={takeInput.password}
              onChange={handleInput}
              fullWidth
              error={Boolean(errors.password)}
              helperText={errors.password}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handlePasswordVisibility}
                      aria-label="toggle password visibility"
                    >
                      {passHide ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <span>Don't have an account?</span> <Link to="/signUp">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
