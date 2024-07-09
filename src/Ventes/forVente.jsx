import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function FormVente(){
    const [vente , setVente] = useState([])
    const [nom , setNom] = useState()
    const [prix , setPrix] = useState()
    const [numArticle , setNumArticle] = useState()
    const [paiment , setPaiment] = useState()

    return <div>
             <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ajout d'une Vente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <form>
            <d-flex className="justify-content-betwenn align-items-center">
                <input type="text" name='nom' id='nom' value={nom} onChange={(e)=>setNom({e.target.value})} />
            </d-flex>
        </form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
}