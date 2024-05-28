import React, { useState } from 'react'
import '../Inscription/inscrire.css';
import { Link } from 'react-router-dom';

function Inscrire() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');


  return (
    <div className=''>
      <h2 className='text-center fw-bold fs-2'>Let's get started</h2>
      <p className='text-center'>Tell us more about you so we can give you a better delivery experience.</p>
      <div className='back  d-flex justify-content-center align-items-center '>
        <form className='form '>
          <div className='d-flex  gap-2 justify-content-center inscript'>
            <div className='m-0 pt-5'>
              <p className='fw-bold  '>Information utilisateur</p>
              <input class=" input mt-2 " type="text" placeholder="Prenom" required value={firstname} onChange={(e) => {
                setFirstname(e.target.value);
                console.log("hello")
              }
              } />
            </div>
            <div className='pt-5'>
              <input class=" input mt-5 number" type="text" placeholder="Nom" value={lastname} required onChange={e => setLastname(e.target.value)} />
            </div>
          </div>
          <div className='d-flex  gap-2 justify-content-center inscript'>
            <div className='m-0 pt-5'>
              <p className='fw-bold  '>Connexion et coordonnées
              </p>
              <input class=" input mt-2" type="email" placeholder="Email" value={email} required onChange={e => setEmail(e.target.value)} /></div>
            <div className='pt-5'>
              <input class=" input mt-5 number" type="number" placeholder="Telephone" required value={telephone} onChange={e => setTelephone(e.target.value)} />
            </div>
          </div>
          <div className='d-flex  gap-2 mt-5 justify-content-center inscript pass'>
            <div className='pt-5 '>
              <input class=" input " type="text" placeholder="Mot de pass" required value={password} onChange={e => setPassword(e.target.value)} /></div>
            <div className='pt-5'>
              <input class=" input " type="text" placeholder="Confirmation mot de pass" required value={confirmpassword} onChange={e => {
                setConfirmpassword(e.target.value)
                console.log(confirmpassword);
              }} />
            </div>
          </div>
          <p className='m-3 text-center'>By clicking "Submit," you agree to <span className='terms'> E-delivery General Terms and Conditions </span> and acknowledge you have read the  <span className='terms'>Privacy Policy.</span></p>
          <div className='comptes creer'>
           <Link to='/connexion' className='liens'> <button type='submit' className='creer liens' >Creer un compte</button></Link>
           </div>
        </form>

      </div>

    </div>
  )
}

export default Inscrire