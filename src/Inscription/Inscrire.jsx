import React, { useState, useEffect } from 'react'
import '../Inscription/inscrire.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Inscrire() {
  // const history = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  // const[tableau ,setTableau]=useState([]);



  useEffect(() => {
    if (firstName && lastName && email &&  number && password && password === confirmpassword) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        number:  number,
        password: password
      };
      axios.post('https://localhost:8000/users/register', data)
        .then(response => {

          console.log('Inscription réussie:', response.data);
          // Rediriger l'utilisateur vers une autre page par exemple '/connexion'
        })
        .catch(error => {

          console.error('Erreur lors de l\'inscription:', error);
        });
    }
  }, [firstName, lastName, email,  number, password, confirmpassword]);

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/admin/register", {
        firstName,
        lastName,
        email,
        number,
        password,
        confirmpassword
      });

      if (res.data === "exist") {
        alert("existe deja");
      } else if (res.data === "exist pas") {
        alert("inscription reussite")
        // Réinitialiser les champs du formulaire
        setFirstName('');
        setLastName('');
        setEmail('');
        setNumber('');
        setPassword('');
        setConfirmpassword('');
        console.log("Form fields reset successfully");
      }
    } catch (error) {
      alert("Error");
      // console.log(error);
    }
    // }
  }

  return (
    <div className=''>

      <div className='back shadow  d-flex justify-content-center align-items-center '>

        <form className='form '>
          <div className='text-center color fs-2 m-0 fw-bold'> <h2>Inscription</h2></div>
         
          <div className='d-flex  gap-4 justify-content-center inscript'>
 
          

              <input class=" input " type="text" placeholder="Prenom" required value={firstName} onChange={(e) => {
                setFirstName(e.target.value);
                console.log("hello")
              }} />
           
              <input class=" input  number" type="text" placeholder="Nom" value={lastName} required onChange={e => setLastName(e.target.value)} />
           
          </div>
          <div className='d-flex  gap-4 justify-content-center inscript'>
        
              <input class=" input " type="email" placeholder="Email" value={email} required onChange={e => setEmail(e.target.value)} />
          
              <input class=" input number" type="number" placeholder="Telephone" required value={number} onChange={e => setNumber(e.target.value)} />
          
          </div>
          <div className='d-flex  gap-4  justify-content-center inscript pass'>
         
              <input class=" input " type="text" placeholder="Mot de pass" required value={password} onChange={e => setPassword(e.target.value)} />
           
           
              <input class=" input " type="text" placeholder="Confirmation mot de pass" required value={confirmpassword} onChange={e => {
                setConfirmpassword(e.target.value)
                console.log(confirmpassword);
              }} />
         
          </div>
          <p className='m-3 text-center'>By clicking "Submit," you agree to <span className='terms'> E-delivery General Terms and Conditions </span> and acknowledge you have read the  <span className='terms'>Privacy Policy.</span></p>
          <div className=' creer '>
            <Link to='/connexion' className='liens'> <button type='submit' className='creer liens fs-5 fw-bold' >Creer un compte</button></Link>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Inscrire
