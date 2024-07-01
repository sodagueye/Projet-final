import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AppAjout() {
  const [columns, setColumns] = useState(["Name", "Description", "Price"]); // Définir les colonnes ici
  const [records, setRecords] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    imgPreview: null,
  });
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [tab, setTab] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImgPreview(URL.createObjectURL(file)); // Créer une URL pour la prévisualisation de l'image
  };
  const navigation = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:8080/admin/liste-produits")
      .then((res) => {
        setRecords(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("An error occurred while fetching products:", err);
      });
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewProduct({ ...newProduct, [name]: value });
  // };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      price: price,
      description: description,
      imgUrl: imgPreview,
    };
    // setTab([...tab, data]);

    axios
      .post(
        "https://tache-de-validition-nodejs-1p19n5070.vercel.app/admin/liste-produits",
        data
      )
      .then((res) => {
        setTab([...tab, res.data]);
        // setRecords([...records, res.data]);
        // setNewProduct({ name: "", description: "", price: "" });
        navigation("/admin/plats");
      })
      .catch((err) => {
        console.error("An error occurred while adding the product:", err);
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleAddProduct} className="">
        <div className="">
          <input
            type="text"
            className="form-control my-3"
            id="productName"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
          />
          <input
            type="text"
            className="form-control my-3"
            id="description"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Description"
          />
          <input
            type="number"
            className="form-control my-3"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Price"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control my-3"
            required
          />
          {imgPreview && (
            <div>
              <img src={imgPreview} alt="Prévisualisation" width="100" />
            </div>
          )}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-danger w-50 mb-3 ">
            Ajouter
          </button>
        </div>
      </form>

      <table className="table mt-4 border border-secondary">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.name}</td>
              <td>{d.description}</td>
              <td>{d.price}</td>
              <td>
                <img src={d.image} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppAjout;
