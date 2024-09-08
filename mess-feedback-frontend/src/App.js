import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login/Login';
import Student from './screens/Student/Student';
import Supervisor from './screens/Supervisor/Supervisor';
import Admin from './screens/Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Manager from './screens/Manager/Manager';
import Director from './screens/Director/Admin';
import Committe from './screens/Committe/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student" element={<Student />} />
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/director" element={<Director />} />
          <Route path="/committe" element={<Committe />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
