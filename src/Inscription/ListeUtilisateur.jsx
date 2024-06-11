import React from 'react'
import { AiFillEdit, AiFillDelete, AiFillEye, } from "react-icons/ai";
import { useState } from 'react';
import { useEffect } from 'react';
// import axios from 'axios';

function ListeUtilisateur() {
    const [data, setData] = useState([]);

    async function getData() {
        try {
            const response = await fetch("http://localhost:8000/users/get-user");
            if (!response.ok) {
                throw new Error(Error`fetching products: ${response.statusText}`);
            }
            const resultat = await response.json();
            setData(resultat);
        } catch (e) {
            console.error("Failed to fetch products:", e);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="lister  m-auto ">
            <h6 className="ms-2 py-2">Liste des utilisateurs</h6>
            <div style={{ borderTop: "2px solid gray" }}></div>


            <table class="table">
                <thead>
                    <tr style={{ backgroundColor: "#eee" }}>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        
                        data.map((item) => (

                            <tr key={item}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td className='gap-3'>
                                    <AiFillEye className='icone1' />
                                    <AiFillEdit className='icone2' />
                                    <AiFillDelete className='icone3' />
                                </td>
                            </tr>
                        ))}

                </tbody>
            </table>

        </div>
    )
}

export default ListeUtilisateur

