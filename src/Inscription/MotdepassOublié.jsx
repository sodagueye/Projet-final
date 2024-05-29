import React from 'react'

function MotdepassOublié() {
  return (
    <div>
        <div className='backCConnexion  d-flex justify-content-center align-items-center mt-5 '>
                <form className='form  align-items-center'>
                <p className='text-center '>Veuillez spécifier votre adresse e-mail pour recevoir les instructions pour la réinitialise</p>

                    <div className=' inscript1 align-items-center'>
                        <input class=" input  email my-5 " type="email" placeholder="adress email" required />
                      
                    </div>
                    
                    <button type='submit ' className='liens align-items-center creer '> Réinitialiser le mot pass</button>
                   
                   

                </form>

            </div>

    </div>
  )
}

export default MotdepassOublié