
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Title from './About/Title';
import Container from './About/Container';
import  Connexion  from './Inscription/Connexion';
import  Inscrire  from './Inscription/Inscrire';
function App() {
  return (
    <div>
      < Router >
        <Routes>
          <Route path='/' />
          <Route path='/About' element={
            <div className='container '>
              <Title title="About us" />
              <Container />
            </div>
          } />
          <Route path='/connexion' element={
              <Connexion />
          }/>
          <Route path='/inscrire' element={
              <Inscrire />
          }/>
        </Routes>
      </Router>


    </div>
  )
}

export default App;
