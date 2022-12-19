import './App.css';
import './components/NavBar.css'
import React from 'react';
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


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/activities" element={<ActivityPage />} />
            <Route path="/calendar" element={<Calendar />} />
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
