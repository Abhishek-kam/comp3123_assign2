import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/add-employee" element={<EmployeeForm />} />
        <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        <Route path="/employees/:id" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
};

export default App;
