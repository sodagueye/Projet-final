import axios from "axios";
import { useEffect, useState } from "react";

export default function Test() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("https://tache-de-validition-nodejs-3.onrender.com/api/register/getting")
            .then(response => {
                if (Array.isArray(response.data)) {
                    setList(response.data);
                } else {
                    console.error("La réponse de l'API n'est pas un tableau", response.data);
                }
            })
            .catch(error => {
                console.error("Une erreur est survenue :", error);
            });
    }, []);

    return (
        <div>
            {Array.isArray(list) && list.map((item, index) => (
                <div key={index}>
                    <div>{item.firstName}</div>
                </div>
            ))}
        </div>
    );
}
