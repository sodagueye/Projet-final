import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Home() {
  const [data, setData] = useState([]);

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
        await axios.delete(`http://localhost:4000/delete/${id}`);
        alert("Deleted successfully");
        setData(data.filter((item) => item._id !== id));
      } catch (error) {
        console.error("There was an error deleting the item!", error);
      }
    }
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-warning">
                  <Link to={`/update/${item._id}`}>Update</Link>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleSubmit(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
