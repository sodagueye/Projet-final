const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    headers: ["Content-Type", "Authorization"],
  })
);

app.get("/ventes", (req, res) => {
  const date = req.query.date;
  const aggregation = [
    {
      $match: { date: date },
    },
    {
      $group: {
        _id: null,
        total: {
          $sum: { $multiply: [{ $multiply: ["$quantité", "$prix"] }, 1] },
        },
      },
    },
  ];
  db.collection("ventes").aggregate(aggregation, (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ message: "Erreur lors de la récupération des ventes" });
    } else {
      res.send(result);
    }
  });
});

app.get("/total-ventes", (req, res) => {
  const aggregation = [
    {
      $group: {
        _id: null,
        totalPlatsVendus: { $sum: "$quantité" },
        chiffreDAffaires: {
          $sum: { $multiply: [{ $multiply: ["$quantité", "$prix"] }, 1] },
        },
        benefice: {
          $sum: { $multiply: [{ $multiply: ["$quantité", "$prix"] }, 1] },
        },
      },
    },
  ];
  db.collection("ventes").aggregate(aggregation, (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ message: "Erreur lors de la récupération des ventes" });
    } else {
      res.send(result);
    }
  });
});

app.listen(6000, () => {
  console.log("Server started on port 6000");
});
