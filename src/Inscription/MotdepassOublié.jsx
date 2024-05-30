import React from 'react'
import { Link } from 'react-router-dom'

function MotdepassOublié() {
  return (
    <div>
        <div className='backCConnexion  d-flex justify-content-center align-items-center mt-5 '>
                <form className='form  align-items-center'>
                <h2 className='text-center fw-bold fs-2 color mt-5'>Mot de pass oublié</h2>
                <p className='text-center '>Veuillez spécifier votre adresse e-mail pour recevoir les instructions pour la réinitialise</p>

                    <div className=' inscript1 align-items-center'>
                        <input class=" input  email my-5 " type="email" placeholder="adress email" required />
                      
                    </div>
                    
                    <button type='submit ' className='liens align-items-center creer '> Réinitialiser le mot pass</button>
                   
                    <div className='text-center my-4'>
                        <Link to="/connexion"> <a href="#" className=' oublie '>aller se connecter </a></Link></div>

                </form>

            </div>

    </div>
  )
}

export default MotdepassOublié