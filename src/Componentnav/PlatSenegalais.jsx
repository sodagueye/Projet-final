import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function PlatSenegalais() {

   const [products, setProducts] = useState([]);
  const [filterCategory] = useState("plats senegalais");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://tache-de-validition-nodejs-61fk.onrender.com/admin/liste-produits");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };


  const filteredProducts = filterCategory
    ? products.filter(product => product.category === filterCategory)
    : products;




  return (
    <div className='container'>
          <div className='row justify-content-center'>
            {filteredProducts.map((item) => (
             <div key={item.id} className="col-lg-4 mt-4 scale-image">
               <Link to={`/detail/${item._id}`}>
                 <div className="card border-0 carte shadow">
                   <img src={item.image} className="card-img-top" alt="..."/>   
                   {/* <h3>{item.name}</h3>              */}
                 </div>
               </Link>
             </div>
           ))
          }
          </div>
      </div>
  )
}


// <div>
//     <div className="row">
//         {loading ? (
//           <div>
//             <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <div
//               className="spinner-grow"
//               style={{ width: "3rem", height: "3rem" }}
//               role="status"
//             >
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         ) : (
//           plats.map((item) => (
//             <div key={item.id} className="col-lg-4 mt-4 scale-image">
//               <Link to={`/detail/${item._id}`}>
//                 <div className="card border-0 carte shadow">
//                   <img
//                     src={item.image}
//                     className="card-img-top "
//                     alt="..."
//                   />
                  
//                 </div>
//               </Link>
//             </div>
//           ))
//         )}
//       </div>
//       </div>