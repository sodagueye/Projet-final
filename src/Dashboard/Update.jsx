import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Update() {
  let { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    title: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/recup/${id}`)
      .then((res) => {
        console.log("Data retrieved:", res.data); // Vérifiez les données reçues
        setValues({
          id: id,
          title: res.data.title,
          price: res.data.price,
        });
      })
      .catch((err) => {
        console.error("There was an error fetching the data!", err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting values:", values); 
    axios
      .patch(`http://localhost:4000/update/${id}`, values)
      .then((res) => {
        console.log("Update successful:", res.data); 
        navigate("/admin");
      })
      .catch((err) => {
        console.error("There was an error updating the data!", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Title..."
            aria-describedby="titleHelp"
            value={values.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="price"
            placeholder="Price..."
            value={values.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}