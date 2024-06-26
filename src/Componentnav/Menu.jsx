import React, { useState } from "react";
import Section1 from "./Section1";
import VoirMenu from "./VoirMenu";
import { Footer } from "../khadyComponent/Footer/Footer";
const Menu = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const updateCartQuantity = (product, quantity) => {
    setCartQuantity((prevQuantity) => prevQuantity + quantity);
    setCartProducts((prevProducts) => {
      const productIndex = prevProducts.findIndex(
        (item) => item.name === product.name
      );
      if (productIndex > -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts[productIndex].quantity += quantity;
        return updatedProducts;
      }
      return [...prevProducts, { ...product, quantity }];
    });
  };

  const handleCategoryFilter = (category) => {
    console.log("Category selected:", category);
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="w-100">
          <VoirMenu onCategorySelect={handleCategoryFilter} />
        </div>
        <div className="row">
          <div className="col-md-12 mt-4">
            <Section1
              updateCartQuantity={updateCartQuantity}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Menu;
