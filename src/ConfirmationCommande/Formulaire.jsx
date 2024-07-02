import { useState } from "react"

export function Form() {
    const [localite, setLocalite] = useState()
    const [quartier, setQuartier] = useState()
    const [telephone, setTelephone] = useState()
    
    return <div>
          <form>
            <label htmlFor="localite">Localite</label>
            <input type="text" name="localite" onChange={(e) => setLocalite({ localite: e.target.value })} />

            <label htmlFor="quartier">Quartier</label>
            <input type="text" name="quartier" onChange={(e) => setQuartier({ quartier: e.target.value })} />

            <label htmlFor="tel">Telephone</label>
            <input type="text" name="tel" onChange={(e) => setTelephone({ telephone: e.target.value })} />
          
        </form>
    </div>
}