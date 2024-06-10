import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css"
// import { CiBellOn } from "react-icons/ci";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:4000/recup");
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
      <table className="Table">
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
              <td>{item.title}</td>
              <td>
                <img src={item.description} alt={item.title} />
              </td>
              <td>{item.price}</td>
              <td>
               <button className="btn btn-warning"><Link to={`/update/${item._id}`}>Update</Link></button> 
               <button className="btn btn-danger" onClick={() => handleSubmit(item._id)}>Delete</button>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
