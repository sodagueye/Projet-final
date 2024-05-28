import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Title from './About/Title';
import Container from './About/Container';
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
        </Routes>
      </Router>


    </div>
  )
}

export default App;
