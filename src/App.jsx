import React, { useState } from 'react';
import './App.css';
import LOgForm  from './comonents/LOgForm'
import Dashboard from './comonents/Dashboard'
import WOrkout  from './comonents/WOrkout'
import Contact from './comonents/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './comonents/singIn';
import About from './comonents/About';
import SignUp from './comonents/singUp';
import Home from './comonents/Home';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activities, setActivities] = useState([]);

  // useEffect(() => {
  //   // Check localStorage for login state
  //   const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  //   setIsLoggedIn(loggedIn);
  // }, []);

  const addActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   localStorage.setItem('isLoggedIn', 'false');
  //   setIsLoggedIn(false);
  // };

  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={isLoggedIn ? <Dashboard activities={activities} /> : <Navigate to="/signIn" />}
        />
        <Route path="/work" element={isLoggedIn ? <WOrkout /> : <Navigate to="/signIn" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/signIn" />} />
        <Route path="/add" element={isLoggedIn ? <LOgForm addActivity={addActivity} />  : <Navigate to="/signIn" />} />
        <Route path="/signIn" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/signUp" element={<SignUp />} /> */}
         
         <Route path="/" element={ <Home/>} />
        <Route path="/dash"  element={<Dashboard  activities={activities}/>}/>
        <Route path="/work" element={ <WOrkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={ <LOgForm addActivity={addActivity}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />  

      </Routes>
    </Router>
  );
}
export default App;
