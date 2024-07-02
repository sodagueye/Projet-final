// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AppAjout() {
//   const [columns, setColumns] = useState(["Name", "Description", "Price"]); // Définir les colonnes ici
//   const [records, setRecords] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//   });
//   const navigation = useNavigate();
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     axios
//       .get("http://localhost:8080/admin/liste-produits")
//       .then((res) => {
//         setRecords(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.error("An error occurred while fetching products:", err);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value });
//   };

//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     axios
//       .post(
//         "https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits",
//         newProduct
//       )
//       .then((res) => {
//         setRecords([...records, res.data]);
//         setNewProduct({ name: "", description: "", price: "" });
//         navigation("/admin/plats");
//       })
//       .catch((err) => {
//         console.error("An error occurred while adding the product:", err);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <form onSubmit={handleAddProduct} className="">
//         <div className="">
//           <input
//             type="text"
//             className="form-control my-3"
//             id="productName"
//             name="name"
//             value={newProduct.name}
//             onChange={handleInputChange}
//             required
//             placeholder="Name"
//           />
//           <input
//             type="text"
//             className="form-control my-3"
//             id="description"
//             name="description"
//             value={newProduct.description}
//             onChange={handleInputChange}
//             required
//             placeholder="Description"
//           />
//           <input
//             type="number"
//             className="form-control my-3"
//             id="price"
//             name="price"
//             value={newProduct.price}
//             onChange={handleInputChange}
//             required
//             placeholder="Price"
//           />
//         </div>
//         <div className="text-center">
//           <button type="submit" className="btn btn-danger w-50 mb-3 ">
//             Ajouter
//           </button>
//         </div>
//       </form>

//       <table className="table mt-4 border border-secondary">
//         <thead>
//           <tr>
//             {columns.map((c, i) => (
//               <th key={i}>{c}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {records.map((d, i) => (
//             <tr key={i}>
//               <td>{d.name}</td>
//               <td>{d.description}</td>
//               <td>{d.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AppAjout;


      // ****************************************TEST***************************************************

import React, { useState, useEffect } from "react";
import axios from "axios";

function ImageUpload() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      if (editingProductId) {
        await axios.patch(
          `https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits/${editingProductId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setEditingProductId(null);
      } else {
        await axios.post(
          "https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      setName("");
      setDescription("");
      setPrice("");
      setImage(null);
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (product) => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setEditingProductId(product._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits/${id}`);
      fetchProducts(); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom du produit:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required/>
        </div>
        <div>
          <label>Prix:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required/>
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">
          {editingProductId ? "Modifier Produit" : "Ajouter Produit"}
        </button>
      </form>

      <h2>Liste des Produits</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                {product.image && (
                  <img src={`https://tache-de-validition-nodejs-6.onrender.com/${product.image}`} alt={product.name} width="100"/>
                )}
              </td>
              <td>
                <button onClick={() => handleEdit(product)}>Modifier</button>
                <button onClick={() => handleDelete(product._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ImageUpload;

