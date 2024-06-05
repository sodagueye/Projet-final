import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import CustomNavbar from './Componentnav/CustomNavbar';
//import Tableau from './Table/Tableau'
import Menu from'./Componentnav/Menu';
//import ProductList from './Componentnav/ProductList';

function App() {
  return (
    <div className="App">
   {/**    <CustomNavbar />
          <Tableau/>  
    */}  
  
      <div className='' style={{height:"100px"}}></div>
    <Menu/>  
   
    
    
    </div>
  );
}

export default App;
