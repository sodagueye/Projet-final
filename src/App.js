import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import CustomNavbar from './Componentnav/CustomNavbar';
import Menu from'./Componentnav/Menu';
function App() {
  return (
    <div className="App">
      
      { /*<CustomNavbar />*/}
     <div className='' style={{height:"100px"}}></div>
    <Menu/>
    </div>
  );
}

export default App;
