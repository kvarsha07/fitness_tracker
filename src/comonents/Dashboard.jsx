import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, Grid, Button } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'; // For calories
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // For workout time
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'; // For steps
import { Link } from 'react-router-dom';
import { PieChart } from '@mui/x-charts/PieChart';
import { Layout } from './Layout';

const Dashboard = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Load activities from local storage
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(storedActivities);
  }, []);

  // Calculate totals
  const totalSteps = activities.reduce((sum, activity) => sum + Number(activity.steps), 0);
  const totalCalories = activities.reduce((sum, activity) => sum + Number(activity.calories), 0);
  const totalWorkoutTime = activities.reduce((sum, activity) => sum + Number(activity.workoutTime), 0);

  return (
    <Layout>
      <Box className="dash-container" sx={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Fitness Tracker
      </Typography>

      {/* Cards for Total Counts */}
      <Box className="card-container" sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Card className="cards" sx={{ minWidth: 400, padding: '1rem' }}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" color="#007bff">Calories Burned</Typography>
                <Typography variant="body1">{totalCalories} kcal</Typography>
                <p style={{ margin: '8px 0 0 0', color: '#555' }}>Total Calories Burned</p>
              </Grid>
              <Grid item>
                <LocalFireDepartmentIcon fontSize="large" color="secondary" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card className="cards" sx={{ minWidth: 400, padding: '1rem' }}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" color="#007bff">Workout Time</Typography>
                <Typography variant="body1">{totalWorkoutTime} mins</Typography>
                <p style={{ margin: '8px 0 0 0', color: '#555' }}>Total Workout Time</p>
              </Grid>
              <Grid item>
                <FitnessCenterIcon fontSize="large" color="primary" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card className="cards" sx={{ minWidth: 400, padding: '1rem' }}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" color="#007bff">Steps</Typography>
                <Typography variant="body1">{totalSteps}</Typography>
                <p style={{ margin: '8px 0 0 0', color: '#555' }}>Total Steps</p>
              </Grid>
              <Grid item>
                <DirectionsRunIcon fontSize="large" color="secondary" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Pie Chart Card */}
        <Card className="cards" sx={{ minWidth: 400, padding: '1rem' }}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="center">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'Shoulder' },
                      { id: 1, value: 15, label: 'ABS' },
                      { id: 2, value: 20, label: 'Legs' },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </Grid>
          </CardContent>
        </Card>

        {/* Add New Workout Card */}
        <Card className="cards" sx={{ minWidth: 400, padding: '1rem' }}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" color="#007bff">Add New Workout</Typography>
                <Box border={1} borderColor="black" p={2} mt={1} width="300px" height="80px">
                  <p style={{ margin: 0 }}>#legs</p>
                  <p style={{ margin: 0 }}>-Back Squat</p>
                  <p style={{ margin: 0 }}>-30 kg</p>
                </Box>
                <Link to="/add" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: '1rem', marginBottom: '1rem' }} // Adjusted margin for spacing
                  >
                    Add Activity
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
    </Layout>
  );
};

export default Dashboard;
