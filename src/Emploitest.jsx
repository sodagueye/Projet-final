import React, { useState, useEffect } from "react";

function Emploitest() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({});

  useEffect(() => {
    fetch("/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    });

    const data = await response.json();
    setNewEmployee({ name: "", job: "", hours: "", salary: 0 });
  };

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            <h2>{employee.name}</h2>
            <p>Job: {employee.job}</p>
            <p>Hours: {employee.hours}</p>
            <p>Salary: {employee.salary}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={newEmployee.name}
            onChange={(event) =>
              setNewEmployee({ ...newEmployee, name: event.target.value })
            }
          />
        </label>
        <br />
        <label>
          Job:
          <input
            type="text"
            value={newEmployee.job}
            onChange={(event) =>
              setNewEmployee({ ...newEmployee, job: event.target.value })
            }
          />
        </label>
        <br />
        <label>
          Hours:
          <input
            type="text"
            value={newEmployee.hours}
            onChange={(event) =>
              setNewEmployee({ ...newEmployee, hours: event.target.value })
            }
          />
        </label>
        <br />
        <label>
          Salary:
          <input
            type="number"
            value={newEmployee.salary}
            onChange={(event) =>
              setNewEmployee({
                ...newEmployee,
                salary: parseInt(event.target.value),
              })
            }
          />
        </label>
        <br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default Emploitest;
