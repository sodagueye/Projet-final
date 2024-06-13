import axios from "axios";
import React, { useEffect, useState } from 'react';

function AppAjout() {
    const [columns, setColumns] = useState(['Name', 'Description', 'Price']); // Définir les colonnes ici
    const [records, setRecords] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get('http://localhost:8080/admin/liste-produits')
            .then(res => {
                setRecords(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.error("An error occurred while fetching products:", err);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        axios.post('https://tache-de-validition-nodejs-1p19n5070.vercel.app/admin/liste-produits', newProduct)
            .then(res => {
                setRecords([...records, res.data]); // Ajout du nouveau produit à la liste
                setNewProduct({ name: '', description: '', price: '' }); // Réinitialiser le formulaire
            })
            .catch(err => {
                console.error("An error occurred while adding the product:", err);
            });
    };

    return (
        <div className='container mt-5'>
            <form onSubmit={handleAddProduct} className="">
                <div className="">
                    <input 
                        type="text"
                        className="form-control my-3"
                        id="productName"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Name"
                    />
                    <input 
                        type="text"
                        className="form-control my-3"
                        id="description"
                        name="description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                        required
                        placeholder="Description"
                    />
                    <input 
                        type="number"
                        className="form-control my-3"
                        id="price"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        required
                        placeholder="Price"
                    />
                </div>
                   <div className="text-center">
                       <button type="submit" className="btn btn-danger w-50 mb-3 ">Adjouter</button>
                   </div>
            </form>

            <table className='table mt-4 border border-secondary'>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AppAjout;









