import React from 'react';

const CategorieProduit = ({ filterProducts }) => {

  const handleClick = (category, event) => {
    event.preventDefault();
    filterProducts(category);
  };
  return (
    <div className='bg-light' style={{ color: "#91725d", marginTop: "7px" }}>
      <ul className="nav justify-content-center">
        <li className="nav-item">
    
          <a className="nav-link active" aria-current="page" href="#" onClick={(e) => handleClick("Glace", e)}>Glace</a>
          ```
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(e) => handleClick("Jus de Fruit",e)}>Jus</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(e) => handleClick("Burger",e)}>Burger</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(e) => handleClick("Burger + KFC")}>Burger + KFC</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(e) => handleClick("Frite avec Sauce tomate", e)}>Frite avec Sauce tomate</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(e) => handleClick("Glace", e)}>Glace</a>
        </li>
      </ul>
    </div>
  );
};

export default CategorieProduit;
