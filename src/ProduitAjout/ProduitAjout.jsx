// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { Modal, Button, Form } from "react-bootstrap";
// import { MdEdit } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// import "bootstrap/dist/css/bootstrap.min.css";

// function ProduitAjout() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);
//   const [category, setCategory] = useState("");
//   const [products, setProducts] = useState([]);
//   const [filterCategory, setFilterCategory] = useState("");
//   const [editingProductId, setEditingProductId] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (image) {
//       const imageRef = ref(storage, `images/${image.name}`);
//       const uploadTask = uploadBytesResumable(imageRef, image);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {},
//         (error) => {
//           console.error(error);
//         },
//         async () => {
//           const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
//           saveProduct(imageUrl);
//         }
//       );
//     } else {
//       saveProduct();
//     }
//   };

//   const saveProduct = async (imageUrl = "") => {
//     const productData = {
//       name,
//       description,
//       price,
//       image: imageUrl,
//       category,
//     };

//     try {
//       if (editingProductId) {
//         await axios.patch(
//           `http://localhost:8080/admin/liste-produits/${editingProductId}`,
//           productData
//         );
//         setEditingProductId(null);
//       } else {
//         await axios.post(
//           "http://localhost:8080/admin/liste-produits",
//           productData
//         );
//       }
//       setName("");
//       setDescription("");
//       setPrice("");
//       setImage(null);
//       setCategory("");
//       fetchProducts();
//       setShowModal(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:8080/admin/liste-produits"
//       );
//       setProducts(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleEdit = (product) => {
//     setName(product.name);
//     setDescription(product.description);
//     setPrice(product.price);
//     setCategory(product.category);
//     setEditingProductId(product._id);
//     setShowModal(true);
//   };

//   const handleDeleteClick = (id) => {
//     setProductToDelete(id);
//     setShowDeleteModal(true);
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(
//         `http://localhost:8080/admin/liste-produits/${productToDelete}`
//       );
//       fetchProducts();
//       setShowDeleteModal(false);
//       setProductToDelete(null);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleCategoryFilterChange = (e) => {
//     setFilterCategory(e.target.value);
//   };

//   const filteredProducts = filterCategory
//     ? products.filter((product) => product.category === filterCategory)
//     : products;

//   return (
//     <div className="">
//       <div className="">
//         <div className="d-flex justify-content-end mt-3">
//           <Button
//             style={{ backgroundColor: "#91725d" }}
//             className="border-0"
//             onClick={() => setShowModal(true)}
//           >
//             Ajouter Produit
//           </Button>
//         </div>

//         <Modal show={showModal} onHide={() => setShowModal(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>
//               {editingProductId ? "Modifier Produit" : "Ajouter Produit"}
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group>
//                 <Form.Label>Nom du produit</Form.Label>
//                 <Form.Control
//                   className="inpputControl"
//                   style={{ border: "3px, solid #91725d" }}
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   className="inpputControl"
//                   style={{ border: "3px, solid #91725d" }}
//                   type="text"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Prix</Form.Label>
//                 <Form.Control
//                   className="inpputControl"
//                   style={{ border: "3px, solid #91725d" }}
//                   type="number"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Image</Form.Label>
//                 <Form.Control
//                   className="inputControl"
//                   style={{ border: "3px, solid #91725d" }}
//                   type="file"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Catégorie</Form.Label>
//                 <Form.Control
//                   className="inputControl"
//                   style={{ border: "3px, solid #91725d" }}
//                   as="select"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   required
//                 >
//                   <option value="">Sélectionnez une catégorie</option>
//                   <option value="plats senegalais">Plats Sénégalais</option>
//                   <option value="fastfood">Fastfood</option>
//                   <option value="boissons">Boissons</option>
//                   <option value="desserts">Desserts</option>
//                   <option value="cuisine d'ailleurs">Cuisine d'ailleurs</option>
//                 </Form.Control>
//               </Form.Group>
//               <div className="d-flex justify-content-center mb-5">
//                 <Button
//                   style={{ backgroundColor: "#91725d" }}
//                   className="border-0 mt-3"
//                   type="submit"
//                 >
//                   {editingProductId ? "Modifier Produit" : "Ajouter Produit"}
//                 </Button>
//               </div>
//             </Form>
//           </Modal.Body>
//         </Modal>

//         <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Confirmation de suppression</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             Êtes-vous sûr de vouloir supprimer ce produit ?
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
//               Annuler
//             </Button>
//             <Button variant="danger" onClick={handleDelete}>
//               Supprimer
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>

//       <table>
//         <thead style={{ backgroundColor: "#91725d" }}>
//           <tr>
//             <th style={{ backgroundColor: "#91725d" }}>Nom</th>
//             <th style={{ backgroundColor: "#91725d" }}>Description</th>
//             <th style={{ backgroundColor: "#91725d" }}>Prix</th>
//             <th style={{ backgroundColor: "#91725d" }}>Image</th>
//             <th style={{ backgroundColor: "#91725d" }}>Catégorie</th>
//             <th style={{ backgroundColor: "#91725d" }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((product) => (
//             <tr key={product._id}>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>
//                 {product.image && (
//                   <img src={product.image} alt={product.name} width="100" />
//                 )}
//               </td>
//               <td>{product.category}</td>
//               <td>
//                 <button
//                   onClick={() => handleEdit(product)}
//                   className="border-0 mx-2 bg-warning text-light p-2 rounded-2"
//                 >
//                   <MdEdit />
//                 </button>
//                 <button
//                   onClick={() => handleDeleteClick(product._id)}
//                   className="border-0 bg-danger text-light p-2 rounded-2"
//                 >
//                   <MdDelete />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProduitAjout;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Modal, Button, Form } from "react-bootstrap";
import { MdEdit, MdDelete } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

function ProduitAjout() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Nombre de produits par page

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

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
          saveProduct(imageUrl);
        }
      );
    } else {
      saveProduct();
    }
  };

  const saveProduct = async (imageUrl = "") => {
    const productData = {
      name,
      description,
      price,
      image: imageUrl,
      category,
    };

    try {
      if (editingProductId) {
        await axios.patch(
          `http://localhost:8080/admin/liste-produits/${editingProductId}`,
          productData
        );
        setEditingProductId(null);
      } else {
        await axios.post(
          "http://localhost:8080/admin/liste-produits",
          productData
        );
      }
      setName("");
      setDescription("");
      setPrice("");
      setImage(null);
      setCategory("");
      fetchProducts();
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/admin/liste-produits"
      );
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
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    setProductToDelete(id);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/admin/liste-produits/${productToDelete}`
      );
      fetchProducts();
      setShowDeleteModal(false);
      setProductToDelete(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCategoryFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  // Get current products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterCategory
    ? products.filter((product) => product.category === filterCategory)
    : products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="">
      <div className="">
        <div className="d-flex justify-content-end mt-3">
          <Button
            style={{ backgroundColor: "#91725d" }}
            className="border-0"
            onClick={() => setShowModal(true)}
          >
            Ajouter Produit
          </Button>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editingProductId ? "Modifier Produit" : "Ajouter Produit"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Nom du produit</Form.Label>
                <Form.Control
                  className="inpputControl"
                  style={{ border: "3px, solid #91725d" }}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className="inpputControl"
                  style={{ border: "3px, solid #91725d" }}
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  className="inpputControl"
                  style={{ border: "3px, solid #91725d" }}
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  className="inputControl"
                  style={{ border: "3px, solid #91725d" }}
                  type="file"
                  onChange={handleImageChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Catégorie</Form.Label>
                <Form.Control
                  className="inputControl"
                  style={{ border: "3px, solid #91725d" }}
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="plats senegalais">Plats Sénégalais</option>
                  <option value="fastfood">Fastfood</option>
                  <option value="boissons">Boissons</option>
                  <option value="desserts">Desserts</option>
                  <option value="cuisine d'ailleurs">Cuisine d'ailleurs</option>
                </Form.Control>
              </Form.Group>
              <div className="d-flex justify-content-center mb-5">
                <Button
                  style={{ backgroundColor: "#91725d" }}
                  className="border-0 mt-3"
                  type="submit"
                >
                  {editingProductId ? "Modifier Produit" : "Ajouter Produit"}
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation de suppression</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Êtes-vous sûr de vouloir supprimer ce produit ?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
              Annuler
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Supprimer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <table>
        <thead style={{ backgroundColor: "#91725d" }}>
          <tr>
            <th style={{ backgroundColor: "#91725d" }}>Nom</th>
            <th style={{ backgroundColor: "#91725d" }}>Description</th>
            <th style={{ backgroundColor: "#91725d" }}>Prix</th>
            <th style={{ backgroundColor: "#91725d" }}>Image</th>
            <th style={{ backgroundColor: "#91725d" }}>Catégorie</th>
            <th style={{ backgroundColor: "#91725d" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                {product.image && (
                  <img src={product.image} alt={product.name} width="100" />
                )}
              </td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => handleEdit(product)} className="border-0 mx-2   p-2 rounded-2 bg-transparent">
                  <MdEdit className="text-warning " />
                </button>
                <button onClick={() => handleDeleteClick(product._id)} className="border-0  p-2 rounded-2 bg-transparent">
                  <MdDelete className="text-danger"/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination d-flex justify-content-center my-5 gap-2">
        <Button
          disabled={currentPage === 1}
          style={{ backgroundColor: "#91725d" }}
           className="border-0"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Précédent
        </Button>
        {/* <span>
          Page {currentPage} sur {totalPages}
        </span> */}
        <Button
          disabled={currentPage === totalPages}
          style={{ backgroundColor: "#91725d" }}
            // className="border-0"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}

export default ProduitAjout;
