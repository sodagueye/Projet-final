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
        setValues({
          id: id,
          title: res.data.title,
          price: res.data.price,
        });
      })
      .catch((err) => console.log(err));
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
    axios
      .patch(`http://localhost:4000/update/${id}`, values)
      .then((res) => {
        navigate("/Admin");
      })
      .catch((err) => console.log(err));
    console.log(values);
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
