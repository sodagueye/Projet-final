import orangeMoney from "../Footer-img/orange-money.png"
import weave from "../Footer-img/weave.png"
import "../Commende/commende.css"
import { useState } from "react"

export function Commende() {
    const [recherche , setRecherche] = useState("")

    // const dateDuCommende = new Date().toLocaleDateString()
    const tabHistoriqueCommende = [
        {
            date: '12/03/2023',
            nbArticle: 2,
            montant: "12.000fr",
            etat: "En cours",
            paiment: orangeMoney,
        },
        {
            date: '02/06/2024',
            nbArticle: 1,
            montant: "20.000fr",
            etat: "En attente",
            paiment: weave,
        },
        {
            date: '12/12/2024',
            nbArticle: 10,
            montant: "39.000fr",
            etat: "terminée",
            paiment: orangeMoney,
        }
    ]
    return <div className="container commende pb-5 my-4">
        <h6 className="ms-2 py-2">Historique des commendes</h6>
        <div style={{ borderTop: "2px solid gray" }}></div>
        <div className="d-flex justify-content-end">
            <div className="d-flex py-2">
                <p>Recherche:</p>
                <input type="text" className="rounded" style={{ height: 25 }}  onChange={(e)=>setRecherche(e.target.value)}/>
            </div>
        </div>

        <table class="table">
            <thead>
                <tr style={{ backgroundColor: "#eee" }}>
                    <th scope="col">Date</th>
                    <th scope="col">Nombre d'article</th>
                    <th scope="col">Montant</th>
                    <th scope="col">Etat</th>
                    <th scope="col">Paiment</th> 
                </tr>
            </thead>
            <tbody>
                {
                    tabHistoriqueCommende.filter((item) => {
                        const rechercheLower = recherche.toLowerCase();
                        const itemDateLower = item.date.toLowerCase();
                        return rechercheLower === '' ? true : itemDateLower.includes(rechercheLower);
                    }).map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.nbArticle}</td>
                            <td>{item.montant}</td>
                            <td>{item.etat}</td>
                            <td><img src={item.paiment} alt="mode de paiment" style={{ width: 20, height: 20, borderRadius: 100 }} /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
}