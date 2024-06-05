import React from 'react';
import Com from '../Images/com.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Modification.css';
import ModfButton from './ModfButton';

function Modification() {
    return (
        <div className='col-lg-6 col-md-12 m-5'>
            <div className='container ens'>
                <h3 className='text-center p-4'>Modifier un produit</h3>
                <div className="row g-5 ensemble">
                    <div className='col-12 col-md-6'>
                        <div className='gauche'>
                            <form action="">
                                <div >
                                    <input className=' trait form-controll' type="text" placeholder='Jus' required />
                                </div>
                                <div>
                                    <input className=' trait' type="text" placeholder='Jus' required />
                                </div>
                                <div>
                                    <input className=' trait' type="text" placeholder='Jus' required />
                                </div>
                                <div>
                                    <input className=' trait' type="text" placeholder='Jus' required />
                                </div>
                                <div>
                                    <input className=' trait' type="text" placeholder='Jus' required />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 droite'>
                        <div className='Image'>
                            <img src={Com} alt="commerce_image" className='img-fluid' />
                        </div>
                    </div>
                </div>
                <ModfButton />
            </div>

        </div>
    )
}
export default Modification;