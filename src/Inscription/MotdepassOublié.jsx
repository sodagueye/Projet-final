import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MotdepassOublié() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/request-reset', { email });
      navigate('/sendmail');
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la demande de réinitialisation");
      
    }
  };

  return (
    <div>
      <div className='backpass shadow d-flex justify-content-center '>
        <form onSubmit={handleSubmit} className=''>
          <h2 className='fw-bold color fs-6 mt-3'>Trouvez votre compte</h2>
          <p className='votre m-0'>Veuillez entrer votre e-mail  pour rechercher votre compte.</p>
          <div className='inscript1 '>
            <input
              className="nom email my-5"
              type="email"
              placeholder="adresse email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='creer'>
            <button type='submit' className='liens align-items-center m-auto  connect fs-5 fw-bold'>Reinitialiser</button></div>
          {/* <div className='text-center my-4'></div> */}
        </form>
      </div>
      <ToastContainer position='top-center'/>
    </div>
  );
}

export default MotdepassOublié;