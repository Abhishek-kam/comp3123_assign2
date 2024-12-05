import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    position: '',
  });
  const { id } = useParams(); // For edit and view
  const navigate = useNavigate();
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      axios.get(`http://localhost:5000/api/employees/${id}`)
        .then((response) => setEmployee(response.data))
        .catch((error) => console.error('Error fetching employee:', error));
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isEdit
      ? `http://localhost:5000/api/employees/${id}`
      : 'http://localhost:5000/api/employees';
    const method = isEdit ? 'put' : 'post';

    axios({ method, url, data: employee })
      .then(() => {
        alert(isEdit ? 'Employee updated successfully!' : 'Employee added successfully!');
        navigate('/employees');
      })
      .catch((error) => console.error('Error saving employee:', error));
  };

  return (
    <div className="employee-form-container">
      <form onSubmit={handleSubmit}>
        <h2>{isEdit ? 'Edit Employee' : 'Add Employee'}</h2>
        <input name="firstName" placeholder="First Name" value={employee.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={employee.lastName} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={employee.email} onChange={handleChange} required />
        <input name="department" placeholder="Department" value={employee.department} onChange={handleChange} required />
        <input name="position" placeholder="Position" value={employee.position} onChange={handleChange} required />
        <button type="submit">{isEdit ? 'Update' : 'Add'} Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
