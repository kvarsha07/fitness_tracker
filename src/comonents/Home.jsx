import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Layout } from "./Layout"; // Assuming you have a Layout component
import { Link } from "react-router-dom";
// import './Home.css'; // Import the CSS file

function Home() {
  return (
    <Layout>
      <Box
        className="home-container"
        display="flex"
        flexDirection="column"
        alignItems="flex-start" // Align items to the left
        justifyContent="center"
        textAlign="left" // Align text to the left
        padding={4}
        position="relative"
        sx={{
          '@media (max-width: 600px)': {
            padding: 2,
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          },
          '@media (max-width: 900px)': {
            padding: 3,
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          marginTop={2}
          color="white"
          sx={{
            fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize', md: 'h2.fontSize' },
          }}
        >
          Welcome to Fitness Journey
        </Typography>
        <Typography
          variant="body1"
          component="p"
          marginTop={1}
          fontSize='20px'
          sx={{
            fontSize: { xs: 'body2.fontSize', sm: 'body1.fontSize' },
          }}
        >
          We provide you with the tools and support you need to achieve your fitness goals. Track your workouts, monitor your progress, and stay motivated with our comprehensive fitness platform. Whether you’re a beginner or a seasoned athlete, we have something for everyone!
        </Typography>
        
        <Box
          position="relative"
          display="inline-flex"
          marginTop={3}
          sx={{
            '@media (max-width: 600px)': {
              marginTop: 2,
            },
          }}
        >
          <Link to='/signIn'>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                '@media (max-width: 600px)': {
                  fontSize: 'small',
                  padding: '8px 16px',
                },
              }}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
