import appstore from "../Footer-img/app-store.png"
import googleplay from "../Footer-img/goole-play.png"
import "../Footer/Footer.css"

export function Footer() {
    return <footer className="py-5 bg-white">
        <div className="d-flex flex-column align-items-center justify-contend-around pb-3">
            <h5>Tiens-toi à jour</h5>
            <p>Abonnez-vous à notre newsletter</p>
            <div>
                <form className="d-flex align-items-center">
                    <input type="text" placeholder="E-mail" className="rounded border-0" style={{ backgroundColor: "#ddd",height:40}} />
                    <button className="rounded bg-warning border-0 px-2" style={{ position: "relative", right: 8,height:40}}>Abonnez-vous</button>
                </form>
            </div>
        </div>
        <div style={{borderTop:"1px solid #ccc" }}></div>
            <div className="container">
                <div className="row my-3" >
                    <div className="col-12 col-sm-4">
                        <div>
                            <h1>logo</h1>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="cen">
                            <ul>
                                <li>Contactez-nous</li>
                                <li> Termes et conditions</li>
                                <li>Politique de confidentialité</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="d-flex gap-2">
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-whatsapp"></i>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-tiktok"></i>
                        </div>
                    </div>
                </div>
            </div>
        <div className="container d-flex justify-content-between">
            <ul className="d-flex gap-3">
                <li>Den</li>
                <li>pasta</li>
            </ul>
            <div className="bg-warning d-flex justify-content-center align-items-center" style={{ width: 25, height: 25, borderRadius: 100 }}>
                <i class="bi bi-chevron-up text-white"></i>
            </div>
        </div>
    </footer>
}