import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Newlester.css'


function Newsletter() {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/email/send/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            console.log('Réponse du backend:', data);
            setEmail('');
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'e-mail:", error);
        }
    };

    return (
        <div>
            <div className="container mt-5">
                <h2 className='mt-5 text-center'>Inscrivez-vous à notre newsletter</h2>
                <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
                    <input className='p-3 shadow bg-body rounded'
                        type="email"
                        value={email}
                        onChange={handleChange}
                        placeholder='Entrer votre email'
                        required />
                    <button type="button" className="btn m-2 btn-mail">Success</button>
                </form>
            </div>
        </div>
    );
}

export default Newsletter;
