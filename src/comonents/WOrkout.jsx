import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Layout } from './Layout';

const WOrkout = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activities, setActivities] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  // Fetch workouts data from API when the component mounts
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('https://api.example.com/workouts'); // Replace with your API endpoint
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, []);

  // Retrieve activities from local storage when the component mounts
  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(storedActivities);
  }, []);

  // Filter activities by selected date
  const filteredActivities = activities.filter(activity => activity.date === selectedDate?.format('YYYY-MM-DD'));

  return (
    <Layout>
      <Grid container spacing={3}>
        {/* Calendar on the left */}
        <Grid item xs={12} md={4}>
          <Box sx={{ padding: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
              />
            </LocalizationProvider>
          </Box>
        </Grid>

        {/* Activities on the right */}
        <Grid item xs={12} md={8}>
          <Box className="activity-container" sx={{ marginTop: 4 }}>
            <Typography variant="h5" gutterBottom>
              Activities for {selectedDate ? selectedDate.format('YYYY-MM-DD') : 'Selected Date'}
            </Typography>
            <Grid container spacing={2}>
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card variant="outlined" sx={{ width: '100%', height: 120, padding: '0.5rem' }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>Date: {activity.date}</Typography>
                        <Typography><b>Steps:</b> {activity.steps}</Typography>
                        <Typography><b>Calories Burned:</b> {activity.calories}</Typography>
                        <Typography><b>Workout Time:</b> {activity.workoutTime} mins</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography>No activities logged for this date.</Typography>
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default WOrkout;
