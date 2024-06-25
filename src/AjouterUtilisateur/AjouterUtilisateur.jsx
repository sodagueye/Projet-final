import axios from "axios";
import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

function AjouterUtilisateur() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    async function Ajouter(e) {
        e.preventDefault();
        try {
            const reponse = await axios.post('https://tache-de-validition-nodejs-6.onrender.com/api/register', {
                firstName,
                lastName,
                email,
                number,
                password,
                confirmPassword
            });
            if (reponse.data === "existe") {
                alert("utilisateur existe déjà");
            } else if (reponse.data === "existe pas") {
                alert("inscription réussie");
            }
            setFirstName(''),
            setLastName(''),
            setEmail(''),
            setNumber(''),
            setPassword(''),
            setConfirmPassword('')
        } catch (error) {
            alert("erreur inscription");
            console.log(error);
        }
    }

    return (
        <div>
            <form className="" onSubmit={Ajouter}>
                <div className="">
                    <input 
                        type="text"
                        className="form-control my-3"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder="First Name"
                    />
                    <input 
                        type="text"
                        className="form-control my-3"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder="Last Name"
                    />
                    <input 
                        type="email"
                        className="form-control my-3"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email"
                    />
                    <input 
                        type="number"
                        className="form-control my-3"
                        id="number"
                        name="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                        placeholder="Number"
                    />
                    <input 
                        type="password"
                        className="form-control my-3"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                    />
                    <input 
                        type="password"
                        className="form-control my-3"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-danger w-50 mb-3">Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default AjouterUtilisateur;
