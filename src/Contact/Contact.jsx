import { useState } from "react";
import "../Contact/Contact.css";

export default function Contact() {
    const [nom , setNom] = useState()
    const [prenom , setPrenom] = useState()
    const [email , setsetEmail] = useState()
    const [message , setMessage] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault()
        setNom("")
        setPrenom("")
        setsetEmail("")
        setMessage("")
    }
    
    return <div className="container contact">
        <div className="row">
            <div className="col-12 col-md-6 one">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex flex-column align-items-center bg-white p-2 card">
                                <i class="bi bi-geo-alt-fill"></i>
                                <h6>Siege</h6>
                                <p>Kounoune ,Keur Massar</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column align-items-center bg-white p-2 card">
                               <i class="bi bi-telephone"></i>
                                <h6>Telephone</h6>
                                <p>77-5-43-67-89</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex flex-column align-items-center bg-white p-2 card">
                                <i class="bi bi-phone-vibrate"></i>
                                <h6>Fax</h6>
                                <p>33-3-43-56-78</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column align-items-center bg-white p-2 card">
                                <i class="bi bi-envelope"></i>
                                <h6>Email</h6>
                                <p>yayesoda@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-12 col-md-6 text-white py-4 px-3" style={{ backgroundColor: "#91725d" }}>
                <div>
                    <h2 className="text-center mb-3">Nous Contacter</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between gap-2">
                        <input type="text" placeholder="Prenom" className="form-control" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                        <input type="text" placeholder="nom" className="form-control" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
                    </div>
                    <input type="email" placeholder="Votre Email" className="form-control mt-4 mb-2" value={email} onChange={(e)=>setsetEmail(e.target.value)}/> <br />
                    <textarea name="message" id="messsage" placeholder="Votre message" className="form-control"value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="p-2 border-0 rounded">Soumettre</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
}