import { useState } from "react"
import orangeMoney from "../Footer-img/orange-money.png"
import weave from "../Footer-img/weave.png"
import "../Ventes/Ventes.css"

export function Vente() {
    const [recherche , setRecherche] = useState("")

    // const dateDuCommende = new Date().toLocaleDateString()

    const tabHistoriqueVente = [
        {
            date: '31/12/2024',
            nbArticle: 2,
            montant: "25.000fr",
            livraison: "En attente",
            paiment: orangeMoney,
        },
        {
            date: '30/01/2022',
            nbArticle: 2,
            montant: "35.000fr",
            livraison: "terminee",
            paiment: weave,
        },
        {
            date: '03/05/2023',
            nbArticle: 2,
            montant: "12.000fr",
            livraison: "En cours",
            paiment: orangeMoney,
        },
        {
            date: '30/01/2024',
            nbArticle: 1,
            montant: "20.000fr",
            livraison: "En attente",
            paiment: weave,
        },
        {
            date: '10/05/2024',
            nbArticle: 10,
            montant: "39.000fr",
            livraison: "terminée",
            paiment: orangeMoney,
        }
    ]

    return <div className="container vente pb-5 my-4">
        <h6 className="ms-2 py-2">Historique des ventes</h6>
        <div style={{ borderTop: "2px solid gray" }}></div>
        <div className="d-flex justify-content-end">
            <div className="d-flex py-2">
                <p>Recherche:</p>
                <input type="text" className="rounded" style={{height:25}} onChange={(e)=>setRecherche(e.target.value)}/>
            </div>
        </div>
        
        <table class="table">
            <thead>
                <tr style={{ backgroundColor: "#eee" }}>
                    <th scope="col">Date</th>
                    <th scope="col">Nombre d'article</th>
                    <th scope="col">Montant</th>
                    <th scope="col">Paiment</th>
                    <th scope="col">Livraison</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    tabHistoriqueVente.filter((item) => {
                        const rechercheLower = recherche.toLowerCase();
                        const itemDateLower = item.date.toLowerCase();
                        return rechercheLower === '' ? true : itemDateLower.includes(rechercheLower);
                      }).map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.nbArticle}</td>
                            <td>{item.montant}</td>
                            <td><img src={item.paiment} alt="mode de paiment" style={{width:20,height:20, borderRadius:100}}/></td>
                            <td>{item.livraison}</td>
                            <td><i class="bi bi-eye-fill"></i></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
}