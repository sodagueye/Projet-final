import FormVente from "./formVente";
import { ListeVente } from "./tabVente";

export function Vente() {
    return <div className="container vente pb-5 my-4">
        <h6 className="ms-2 py-2">Historique des ventes</h6>
        <div style={{ borderTop: "2px solid gray" }}></div>
        <div className="d-flex justify-content-around align-items-center">
            <div>
                <input
                    type="text"
                    className="rounded"
                    style={{ height: 30 }}
                    onChange={(e) => setRecherche(e.target.value)}
                />
            </div>
            <FormVente/>
        </div>
        <ListeVente/>
    </div>
}
