import './App.css';
import './components/NavBar.css'
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ActivityPage from './pages/ActivityPage';
import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';
import DatesPage from './pages/DatesPage';
import RelationshipsPage from './pages/RelationshipsPage';
import LoginPage from './pages/LoginPage';
import NewActivityForm from './components/NewActivityForm';
import NewUserForm from './components/NewUserForm';
import { currentUserStateAtom } from "./recoil/atoms"




function App() {

  const setCurrentUser = useSetRecoilState(currentUserStateAtom)

  useEffect(() => {
    // console.log(currentUser)
    fetch('/auth')
      .then(r => {
        if (r.ok) {
          r.json()
            .then(user => setCurrentUser(user))
        }
      })
  }, [])

  // if(!currentUser) return <Login setCurrentUser={setCurrentUser} />
  

  return (
      <header className="App-header">
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="user/new" element={<NewUserForm />} />
            <Route exact path="/activities" element={<ActivityPage />} />
            <Route exact path="new" element={<NewActivityForm />} />
            <Route exact path="/calendar" element={<Calendar />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dates" element={<DatesPage />} />
            <Route exact path="/relationships" element={<RelationshipsPage />} />
            <Route exact path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </header>
  );
}

export default App;
