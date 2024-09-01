import React, { useState } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';
import { Layout } from './Layout';
import sideImg from '../assets/bg.jpeg'; // Ensure this path is correct

const LOgForm = ({ addActivity }) => {
  const [formState, setFormState] = useState({
    date: '',
    steps: '',
    calories: '',
    workoutTime: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save activity to local storage
    const existingActivities = JSON.parse(localStorage.getItem('activities')) || [];
    existingActivities.push(formState);
    localStorage.setItem('activities', JSON.stringify(existingActivities));

    setFormState({ date: '', steps: '', calories: '', workoutTime: '' });
  };

  return (
    <Layout>
      <Container className="form-wrapper">
        <div className="image-container">
          <img src={sideImg} alt="Fitness" />
        </div>
        <div className="form-container">
          <h1>Add Daily Activity</h1>
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                type='date'
                label="Date"
                name="date"
                value={formState.date}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Steps Taken"
                name="steps"
                value={formState.steps}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Calories Burned"
                name="calories"
                value={formState.calories}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Workout Time (mins)"
                name="workoutTime"
                value={formState.workoutTime}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Log Activity
            </Button>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default LOgForm;
