import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const login = (credentials) => API.post('/login', credentials);
export const signup = (credentials) => API.post('/signup', credentials);
export const fetchEmployees = () => API.get('/employees');
export const addEmployee = (employee) => API.post('/employees', employee);
export const updateEmployee = (id, employee) => API.put(`/employees/${id}`, employee);
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);
