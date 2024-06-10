import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route } from 'react-router-dom';
// import './Styles/style.css';
import Maps from './Components/Maps';
import Modification from './Components/Modification';
import Map from './Components/Map';
import ProductSearch from './Components/Recherche/ProductSearch';
import Facture from './Components/Facture/Facture'
import Newsletter from './Components/Email/Newlester';


function App() {

  return (
    
    <div>
      <Routes>
          <Route path='/' element={ <Modification />} />
          <Route path='/Maps' element={ <Maps />} />
          <Route path='/Fact' element={ <Facture />} />
          <Route path='/Map' element= { <Map />} />
          <Route path='/Recherche' element = { <ProductSearch />} />
          <Route path='/Email' element={ <Newsletter />} />
      </Routes>
    </div>

  )

}



export default App;
