const express = require('express');
const axios = require('axios');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  headers: ['Content-Type', 'Authorization'], 
}));



const employees = [];

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.post('/employees', (req, res) => {
  const { name, salary, workHours, monthlySalary, poste } = req.body;
  employees.push({ name, salary, workHours, monthlySalary, poste });
  res.json({ message: 'Employee added successfully' });
});

app.put('/employees/:id', (req, res) => {
  const id = req.params.id;
  const employee = employees.find((emp) => emp.id === parseInt(id));
  if (!employee) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  const { name, salary, workHours, monthlySalary, poste } = req.body;
  employee.name = name;
  employee.salary = salary;
  employee.workHours = workHours;
  employee.monthlySalary = monthlySalary;
  employee.poste = poste;
  res.json({ message: 'Employee updated successfully' });
});


app.listen(5000, () => {
  console.log('Server started on port 5000');
});
