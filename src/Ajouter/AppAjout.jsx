import React, { useState, useEffect } from "react";
import axios from "axios";
import { storage } from "../firebase"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";




// **********************************************TEST 2******************************************************

// function ImageUpload() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [editingProductId, setEditingProductId] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (image) {
//     const imageRef = ref(storage, `images/${image.name}`);
//     const uploadTask = uploadBytesResumable(imageRef, image);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {},
//       (error) => {
//         console.error(error);
//       },
//       async () => {
//         const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
//         saveProduct(imageUrl); 
//       }
//     );
//   } else {
//     saveProduct(); 
//   }
// };


//   const saveProduct = async (imageUrl = "") => {
//   const productData = {
//     name,
//     description,
//     price,
//     image: imageUrl, 
//   };

//     try {
//       if (editingProductId) {
//         await axios.patch(
//           `https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits/${editingProductId}`,
//           productData
//         );
//         setEditingProductId(null);
//       } else {
//         await axios.post(
//           "https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits",
//           productData
//         );
//       }
//       setName("");
//       setDescription("");
//       setPrice("");
//       setImage(null);
//       fetchProducts();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits");
//       setProducts(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleEdit = (product) => {
//     setName(product.name);
//     setDescription(product.description);
//     setPrice(product.price);
//     setEditingProductId(product._id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits/${id}`);
//       fetchProducts(); 
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Nom du produit:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
//         </div>
//         <div>
//           <label>Description:</label>
//           <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required/>
//         </div>
//         <div>
//           <label>Prix:</label>
//           <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required/>
//         </div>
//         <div>
//           <label>Image:</label>
//           <input type="file" onChange={handleImageChange} />
//         </div>
//         <button type="submit">
//           {editingProductId ? "Modifier Produit" : "Ajouter Produit"}
//         </button>
//       </form>

//       <h2>Liste des Produits</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Nom</th>
//             <th>Description</th>
//             <th>Prix</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>
//                 {product.image && (
//                   <img src={product.image} alt={product.name} width="100"/>
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => handleEdit(product)}>Modifier</button>
//                 <button onClick={() => handleDelete(product._id)}>Supprimer</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ImageUpload;



// *********************************************************TEST 3*******************************************************************


function ImageUpload() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error(error);
        },
        async () => {
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
          saveProduct(imageUrl); // Envoyer l'URL de l'image au moment de sauvegarder le produit
        }
      );
    } else {
      saveProduct(); // Envoie les autres données du produit sans l'image
    }
  };

  const saveProduct = async (imageUrl = "") => {
    const productData = {
      name,
      description,
      price,
      image: imageUrl, // Assurez-vous que imageUrl est bien défini
      category,
    };

    try {
      if (editingProductId) {
        await axios.patch(
          `https://tache-de-validition-nodejs-61fk.onrender.com/admin/liste-produits/${editingProductId}`,
          productData
        );
        setEditingProductId(null);
      } else {
        await axios.post(
          "https://tache-de-validition-nodejs-61fk.onrender.com/admin/liste-produits",
          productData
        );
      }
      setName("");
      setDescription("");
      setPrice("");
      setImage(null);
      setCategory("");
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://tache-de-validition-nodejs-61fk.onrender.com/admin/liste-produits");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (product) => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setCategory(product.category);
    setEditingProductId(product._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://tache-de-validition-nodejs-61fk.onrender.com/admin/liste-produits/${id}`);
      fetchProducts(); 
    } catch (err) {
      console.error(err);
    }
  };

  const handleCategoryFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredProducts = filterCategory
    ? products.filter(product => product.category === filterCategory)
    : products;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom du produit:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Prix:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div>
          <label>Catégorie:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Sélectionnez une catégorie</option>
            <option value="plats senegalais">Plats Sénégalais</option>
            <option value="fastfood">Fastfood</option>
            <option value="boissons">Boissons</option>
            <option value="desserts">Desserts</option>
            <option value="cuisine d'ailleurs">Cuisine d'ailleurs</option>
          </select>
        </div>
        <button type="submit">
          {editingProductId ? "Modifier Produit" : "Ajouter Produit"}
        </button>
      </form>

      <h2>Liste des Produits</h2>
      <div>
        <label>Filtrer par catégorie:</label>
        <select value={filterCategory} onChange={handleCategoryFilterChange}>
          <option value="">Toutes les catégories</option>
            <option value="plats senegalais">Plats Sénégalais</option>
            <option value="fastfood">Fastfood</option>
            <option value="boissons">Boissons</option>
            <option value="desserts">Desserts</option>
            <option value="cuisine d'ailleurs">Cuisine d'ailleurs</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Image</th> {/* Ajout de la colonne Image */}
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                {product.image && (
                  <img src={product.image} alt={product.name} width="100"/>
                )}
              </td>
              <td>{product.category}</td>
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
