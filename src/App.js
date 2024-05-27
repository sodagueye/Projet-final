import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Title from './About/Title';
import Container from './About/Container';
function App() {
  return (
    <div>
     
      <div className='container '>
      <Title title="About us"/>
       <Container/>
      </div>
    </div>
  );
}

export default App;
