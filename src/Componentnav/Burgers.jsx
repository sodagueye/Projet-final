import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function PlatSenegalais() {

   const [products, setProducts] = useState([]);
  const [filterCategory] = useState("fastfood");

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
    <div>
          <div className='row'>
            {filteredProducts.map((item) => (
             <div key={item.id} className="col-lg-4 mt-4 scale-image">
               <Link to={`/detail/${item._id}`}>
                 <div className="card border-0 carte shadow">
                   <img src={item.image} className="card-img-top" alt="..."/>                
                 </div>
               </Link>
             </div>
           ))
          }
          </div>
    </div>
  )
}