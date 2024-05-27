import React, { useState } from 'react'
import '../Inscription/inscrire.css';

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
              <p className='fw-bold  '>User information</p>
              <input class=" input mt-2 " type="text" placeholder="First name" required value={firstname} onChange={(e) => {
                setFirstname(e.target.value);
                console.log("hello")
              }
              } />
            </div>
            <div className='pt-5'>
              <input class=" input mt-5 number" type="text" placeholder="Last name" value={lastname} required onChange={e => setLastname(e.target.value)} />
            </div>
          </div>
          <div className='d-flex  gap-2 justify-content-center inscript'>
            <div className='m-0 pt-5'>
              <p className='fw-bold  '>Login & Contact Details
              </p>
              <input class=" input mt-2" type="email" placeholder="Email" value={email} required onChange={e => setEmail(e.target.value)} /></div>
            <div className='pt-5'>
              <input class=" input mt-5 number" type="number" placeholder="Mobile number" required value={telephone} onChange={e => setTelephone(e.target.value)} />
            </div>
          </div>
          <div className='d-flex  gap-2 mt-5 justify-content-center inscript pass'>
            <div className='pt-5 '>
              <input class=" input " type="text" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} /></div>
            <div className='pt-5'>
              <input class=" input " type="text" placeholder="Confirm password" required value={confirmpassword} onChange={e => {
                setConfirmpassword(e.target.value)
                console.log(confirmpassword);
              }} />
            </div>
          </div>
          <p className='m-3 text-center'>By clicking "Submit," you agree to <span className='terms'> E-delivery General Terms and Conditions </span> and acknowledge you have read the  <span className='terms'>Privacy Policy.</span></p>
          <div className='d-flex '>
            <button type='submit align-items-center' className='compte'>Create account</button></div>
        </form>

      </div>

    </div>
  )
}

export default Inscrire