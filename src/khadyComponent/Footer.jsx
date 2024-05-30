import appstore from "../Footer-img/app-store.png"
import googleplay from "../Footer-img/goole-play.png"
import "../Footer/Footer.css"
export function Footer() {
    return <footer>
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-sm-6 text-left">
                    <div className="cen">
                        <h6>Order where you are</h6>
                        <p style={{ fontSize: 12 }}>download our mobile application.</p>
                        <div className="d-flex align-items-center">
                            <img src={appstore} alt="app store" style={{ width: 80, height: 30 }} />
                            <img src={googleplay} alt="google play" style={{ width: 90, height: 50 }} />
                        </div>

                    </div>
                </div>
                <div className="col-12 col-sm-6 ">
                    <div className="cen">
                        <h6>Stay up to date</h6>
                        <p style={{ fontSize: 12 }}>subscribe to our newslette</p>
                        <div>
                            <form className="d-flex flex-wrap cen">
                                <input type="text" placeholder="E-mail" className="rounded border-0" style={{ backgroundColor: "#ddd" }} />
                                <button className="rounded bg-warning border-0 mt-2 mt-md-0">Subscribe</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       <div className="container-fluid">
       <div className="row px-5 mt-3 mb-2" style={{ borderTop: "1px solid #ccc" }}>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="cen">
                    <h1>logo</h1>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="cen">
                    <h6>Monstro</h6>
                    <ul style={{ padding: 0 }}  className="cen">
                        <li>Terms and conditions</li>
                        <li> Contact Us</li>
                        <li>Privacy policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="cen">
                    <h6> Menu 1</h6>
                    <ul style={{ padding: 0 }}  className="cen">
                        <li>Contact Us</li>
                        <li>Terms and conditions</li>
                        <li>Privacy policy</li>
                        <li>Contact Us</li>
                        <li>Terms and conditions</li>
                        <li>Terms and conditions</li>
                        <li>Privacy policy</li>

                    </ul>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="cen">
                    <h6> burger</h6>
                </div>
            </div>
        </div>
       </div>
        <div className="container">
            <div className="row px-lg-5 px-2 py-3">
                <div className="col-12 col-sm-6">
                    <div>
                        <ul className="d-flex justify-content-between">
                            <li>Den</li>
                            <li>pasta</li>
                        </ul>

                    </div>
                </div>
                <div className="col-12 col-sm-6 text-end">
                    <div>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-google"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="container d-flex justify-content-between pb-0">
            <p>Terms and conditions</p>
            <div className="bg-warning" style={{ width: 25, height: 25, borderRadius: 100 }}>
                <i class="bi bi-chevron-up text-white"></i>
            </div>

        </div>

    </footer>
}