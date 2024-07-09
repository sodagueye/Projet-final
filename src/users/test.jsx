import axios from "axios";
import { useEffect, useState } from "react";
import "../listeUtilisateur/test.css";

export default function Test() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://tache-de-validition-nodejs-61fk.onrender.com//api/register/getting")
            .then(response => {
                console.log(response);
                // Assuming the structure of the response is { utilisateur: [...] }
                if (response.data && response.data.utilisateur) {
                    setUsers(response.data.utilisateur);
                } else {
                    setError("Unexpected response structure");
                }
            })
            .catch(err => {
                console.error(err);
                setError("Error fetching data");
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div  className="container users pb-5 my-4">
            <table>
                <thead>
                    <tr>
                        <td>Prenom</td>
                        <td>Nom</td>
                        <td>Email</td>
                        <td>Number</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item,index)=>(
                            <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
           
        </div>
    );
}
