import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error('Error fetching employees:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/employees/${id}`)
      .then(() => setEmployees(employees.filter((e) => e._id !== id)))
      .catch((error) => console.error('Error deleting employee:', error));
  };

  return (
    <div className="employee-list-container">
      <button onClick={() => navigate('/add-employee')} className="btn btn-primary">Add Employee</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{`${emp.firstName} ${emp.lastName}`}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <button onClick={() => navigate(`/employees/${emp._id}`)} className="btn btn-info">View</button>
                <button onClick={() => navigate(`/edit-employee/${emp._id}`)} className="btn btn-warning">Edit</button>
                <button onClick={() => handleDelete(emp._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
