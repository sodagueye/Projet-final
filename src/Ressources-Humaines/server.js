const express = require('express');
const app = express();

// Créer une base de données pour stocker les employés
const employees = [
  {
    id: 1,
    nom: "John Doe",
    salaire: 5000,
    heureDeTravail: "08:00 - 17:00",
    mensualite: 2000,
    poste: "Développeur"
  },
  {
    id: 2,
    nom: "Jane Smith",
    salaire: 6000,
    heureDeTravail: "09:00 - 18:00",
    mensualite: 2500,
    poste: "Conseillère"
  }
];

// Route pour récupérer la liste des employés
app.get('/employees', (req, res) => {
  res.json(employees);
});

// Route pour récupérer les informations d'un employé spécifique
app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((employee) => employee.id === id);
  if (!employee) {
    res.status(404).send({ message: 'Employé non trouvé' });
  } else {
    res.json(employee);
  }
});

// Route pour créer un nouvel employé
app.post('/employees', (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  res.json(newEmployee);
});

// Route pour mettre à jour les informations d'un employé
app.put('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((employee) => employee.id === id);
  if (!employee) {
    res.status(404).send({ message: 'Employé non trouvé' });
  } else {
    employee.nom = req.body.nom;
    employee.salaire = req.body.salaire;
    employee.heureDeTravail = req.body.heureDeTravail;
    employee.mensualite = req.body.mensualite;
    employee.poste = req.body.poste;
    res.json(employee);
  }
});

// Route pour supprimer un employé
app.delete('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = employees.findIndex((employee) => employee.id === id);
  if (index === -1) {
    res.status(404).send({ message: 'Employé non trouvé' });
  } else {
    employees.splice(index, 1);
    res.send({ message: 'Employé supprimé' });
  }
});

app.listen(5000, () => {
  console.log('API en écoute sur le port 5000');
});