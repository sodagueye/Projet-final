import { FaPhone } from "react-icons/fa6";

export default function Contact() {

    return <div className="container contact">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 bg-white">
                            <div>
                                <FaPhone/>
                            </div>
                        </div>
                        <div className="col-6 bg-white">
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 bg-white">
                            <div>

                            </div>
                        </div>
                        <div className="col-6 bg-white">
                            <div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-12 col-md-6" style={{ backgroundColor: "#91725d" }}>
                <div>
                    <h2>Nous Contacter</h2>
                    <div className="d-flex justify-content-between">
                        <input type="text" placeholder="Prenom" />
                        <input type="text" placeholder="nom" />
                    </div>
                    <input type="text" placeholder="Votre Email"/>
                    <textarea name="message" id="messsage" placeholder=""></textarea>
                    <div>
                        <input type="submit" value={Soumettre}/>
                    </div>
                </div>
            </div>
        </div>

    </div>
}