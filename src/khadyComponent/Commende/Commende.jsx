import orangeMoney from "../Footer-img/orange-money.png"
import weave from "../Footer-img/weave.png"
import "../Commende/commende.css"

export function Commende() {
    const dateDuCommende = new Date().toLocaleDateString()
    const tabHistoriqueCommende = [
        {
            date: dateDuCommende,
            nbArticle: 2,
            montant: "12.000fr",
            etat: "En cours",
            paiment: orangeMoney,
        },
        {
            date: dateDuCommende,
            nbArticle: 1,
            montant: "20.000fr",
            etat: "En attente",
            paiment: weave,
        },
        {
            date: dateDuCommende,
            nbArticle: 10,
            montant: "39.000fr",
            etat: "terminée",
            paiment: orangeMoney,
        }
    ]
    return <div className="container commende pb-5">
        <h6 className="ms-2 py-2">Historique des commendes</h6>
        <div style={{ borderTop: "2px solid gray" }}></div>
        <div className="d-flex justify-content-end">
            <div className="d-flex py-2">
                <p>Recherche:</p>
                <input type="text" style={{height:30}}/>
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
                    tabHistoriqueCommende.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.nbArticle}</td>
                            <td>{item.montant}</td>
                            <td>{item.etat}</td>
                            <td><img src={item.paiment} alt="mode de paiment" style={{width:20,height:20, borderRadius:100}}/></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
}