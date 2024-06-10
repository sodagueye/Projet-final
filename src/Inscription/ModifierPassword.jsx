
import React from 'react'

function ModifierPassword() {
  return (
    <div>
      <div className='backCConnexion shadow d-flex justify-content-center align-items-center mt-5'>
                <form className='form  align-items-center'>
                <h2 className='text-center fw-bold fs-2 color '>Récupération de compte</h2>

                    <div className=' inscript1'>
                        <input class=" input  email my-2" type="password" placeholder="mot de pass" required />
                        <input class=" input  email my-2" type="password" placeholder=" confirm mot de pass" required />
                    </div>
                    
                    <button type='submit ' className='liens align-items-center creer fs-5 fw-bold mt-5 '>Envoyer</button>
                    
                    </form>
              </div>  
    </div>
  )
}

export default ModifierPassword