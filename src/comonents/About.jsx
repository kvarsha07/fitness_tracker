// components/AboutUs.js
import React from 'react';

import { Layout } from './Layout';

const AboutUs = () => {
  return (
    <Layout>
        <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to the Fitness Challenge Tracker! We are dedicated to helping you achieve your fitness goals by providing an easy-to-use platform that keeps you motivated, accountable, and inspired.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is simple: to empower individuals of all fitness levels to lead healthier, more active lives. We believe that fitness is not just about hitting the gym or running marathons; it's about making sustainable changes that fit into your lifestyle. That's why we've created a tool that allows you to track your progress, set achievable goals, and celebrate your successes, no matter how big or small.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Personalized Tracking:</strong> Monitor your daily activities, set personal fitness goals, and keep a record of your achievements.</li>
        <li><strong>Community Support:</strong> Join a community of like-minded individuals who share their stories, challenges, and victories to keep you motivated.</li>
        <li><strong>Progress Insights:</strong> Get detailed insights into your fitness journey with our easy-to-read analytics and reports.</li>
        <li><strong>Custom Challenges:</strong> Create or join challenges that push you to new heights and keep your workouts exciting and fun.</li>
      </ul>

      <h2>Our Story</h2>
      <p>
        Founded by a group of fitness enthusiasts, the Fitness Challenge Tracker was born out of a desire to create a supportive environment where people can work towards their health goals. We understand the challenges of staying motivated, and we're here to provide the tools and community you need to stay on track.
      </p>

      <h2>Join Us</h2>
      <p>
        Whether you're just starting your fitness journey or you're a seasoned athlete looking for new challenges, the Fitness Challenge Tracker is here to help you reach your goals. Join us today and start making strides towards a healthier, more active you!
      </p>
    </div>
    </Layout>
  );
};

export default AboutUs;
