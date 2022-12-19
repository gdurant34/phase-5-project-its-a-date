import './App.css';
import './components/NavBar.css'
import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ActivityPage from './pages/ActivityPage';
import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';
import DatesPage from './pages/DatesPage';
import RelationshipsPage from './pages/RelationshipsPage';
import LoginPage from './pages/LoginPage';




function App() {

  useEffect(() => {
    // fetch('/dayts')
    //   .then(r => r.json())
    //   .then(console.log)

    // fetch('/relationships')
    //   .then(r => r.json())
    //   .then(console.log)

    // fetch('/activities')
    //   .then(r => r.json())
    //   .then(console.log)

    // fetch('/comments')
    //   .then(r => r.json())
    //   .then(console.log)

    // fetch('/dayt_activities')
    //   .then(r => r.json())
    //   .then(console.log)

    // fetch('/user_relationships')
    //   .then(r => r.json())
    //   .then(console.log)

    fetch('/users')
      .then(r => r.json())
      .then(console.log)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/activities" element={<ActivityPage />} />
            <Route exact path="/calendar" element={<Calendar />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dates" element={<DatesPage />} />
            <Route exact path="/relationships" element={<RelationshipsPage />} />
            <Route exact path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
