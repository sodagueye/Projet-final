import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        console.log(`Fetching product details for ID: ${id}`);
        const response = await fetch(`http://localhost:4000/recup/${id}`);
        if (!response.ok) {
          throw new Error(`Error fetching product: ${response.statusText}`);
        }
        const resultat = await response.json();
        console.log("Product details:", resultat);
        setProduct(resultat);
      } catch (e) {
        console.error("Failed to fetch product details:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div>
      {/* <div className="mb-5">
        <CustomNavbar />
      </div> */}
      <div className="container d-flex justify-content-center   mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="card border-0">
              <img
                src={product.description}
                className="card-img-top w-100"
                alt={product.title}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <p>Price: {product.price}</p>
            <p>{product.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
