import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     // Charger les produits depuis l'API
    //     axios.get('/api/products')
    //         .then(response => setProducts(response.data))
    //         .catch(error => console.error('Erreur lors du chargement des produits:', error));
    // }, []);

    // const archiveProduct = (productId) => {
    //     axios.put(`/api/products/${productId}/archive`)
    //         .then(response => {
    //             const updatedProduct = response.data;
    //             setProducts(products.map(product => 
    //                 product.id === updatedProduct.id ? updatedProduct : product
    //             ));
    //         })
    //         .catch(error => console.error('Erreur lors de l\'archivage du produit:', error));
    // };

    return (
        <div>
            <h1>Liste des produits</h1>
            <ul>
                {products.filter(product => !product.archived).map(product => (
                    <li key={product.id}>
                        {product.name}
                        <button onClick={() => archiveProduct(product.id)}>
                            Archiver
                        </button>
                    </li>
                ))}
            </ul>
            <h2>Produits Archivés</h2>
            <ul>
                {products.filter(product => product.archived).map(product => (
                    <li key={product.id}>
                        {product.name} (Archivé)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;

