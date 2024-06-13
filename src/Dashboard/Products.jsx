import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/style.css"
export default function Home() {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://tache-de-validition-nodejs-1p19n5070.vercel.app/admin/liste-produits"
        );
        const resultat = await response.json();
        setData(resultat);
      } catch {
        console.log("error");
      }
    }

    getData();
  }, []);

  async function handleSubmit(id) {
    const conf = window.confirm("Do you want to delete?");
    if (conf) {
      try {
        await axios.delete(
          `https://tache-de-validition-nodejs-1p19n5070.vercel.app/admin/liste-produits/${id}`
        );
        alert("Deleted successfully");
        setData(data.filter((item) => item._id !== id));
      } catch (error) {
        console.error("There was an error deleting the item!", error);
      }
    }
  }

  return (
    <div className="container mt-5">
      <div className="text-end">
        <button
          onClick={() => navigation("/ajout")}
          className="btn btn-primary btn-ajout shadow"
        >
          Ajouter
        </button>
      </div>
      <table className="table shadow table-hover ">
        <thead>
          <tr>
            <th
              style={{ backgroundColor: "#91725d", color: "white" }}
              scope="col"
            >
              Plats
            </th>
            <th
              style={{ backgroundColor: "#91725d", color: "white" }}
              scope="col"
            >
              Name
            </th>
            <th
              style={{ backgroundColor: "#91725d", color: "white" }}
              scope="col"
            >
              Description
            </th>
            <th
              style={{ backgroundColor: "#91725d", color: "white" }}
              scope="col"
            >
              Price
            </th>
            <th
              style={{ backgroundColor: "#91725d", color: "white" }}
              scope="col"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>
                <img src={item.image} alt="" style={{ width: "50px" }} />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-warning me-1 ">
                  <Link className="text-white" to={`/update/${item._id}`}>
                    Update
                  </Link>
                </button>
                <button
                  className="btn btn-danger me-1"
                  onClick={() => handleSubmit(item._id)}
                >
                  Delete
                </button>
                <button className="btn btn-success">Archiver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
