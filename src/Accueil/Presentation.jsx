import pizza1 from "../Footer-img/pizza1.jpg";
import burger4 from "../Footer-img/burger4.jpg";
import tacos from "../Footer-img/tacos.png";
import gateau2 from "../Footer-img/gateau2.jpeg";

import jus5 from "../Footer-img/jus5.jpg";
import jus7 from "../Footer-img/jus7.jpg";
import jusOrange from "../Footer-img/jus-orange.png";
import jusDitakh from "../Footer-img/jus-ditakh.png";

import yass1 from "../Footer-img/yassa1.jpg";
import thiebouDieune from "../Footer-img/thiebou-dieune.png";
import soupYapp from "../Footer-img/soupYapp.jpeg";
import thiebouGuinar from "../Footer-img/thiebouGuinar.jpeg";

import poulet1 from "../Footer-img/poulet1.jpg";
import poulet2 from "../Footer-img/poulet2.png";
import frite1 from "../Footer-img/frite1.jpg";
import frire3 from "../Footer-img/frite3.jpg";
import "../Accueil/Presentation.css"



export function Presentation() {
    const imgInfo = [
        {
            img: pizza1,
            title: "Pizza",
            prix: "7.000fr"
        },
        {
            img: burger4,
            title: "Burger",
            prix: "1.500fr"
        },
        {
            img: tacos,
            title: "Tacos",
            prix: "1.500fr"
        },
        {
            img: gateau2,
            title: "Gateau D'anniversaire",
            prix: "12.000fr"
        },
        {
            img: poulet1,
            title: "Cuisese",
            prix: "3.500fr"
        },
        {
            img: poulet2,
            title: "Cuisse",
            prix: "4.500fr"
        },
        {
            img: frire3,
            title: "Frite",
            prix: "1.000fr"
        },
        {
            img: frite1,
            title: "frite",
            prix: "1.500fr"
        },
        {
            img: soupYapp,
            title: "Soup Yapp",
            prix: "2.500fr"
        },
        {
            img: yass1,
            title: "Yassa Poulet",
            prix: "1.500fr"
        },
        {
            img: thiebouDieune,
            title: "Thiebou Dieune",
            prix: "1.000fr"
        },
        {
            img: thiebouGuinar,
            title: "Thiebou Guinar",
            prix: "1.500fr"
        },
        {
            img: jus5,
            title: "Jus d'orange",
            prix: "500fr"
        },
        {
            img: jus7,
            title: "Jus Bissap",
            prix: "500fr"
        },
        {
            img: jusOrange,
            title: "Jus d'orange et Citron",
            prix: "500fr"
        },
        {
            img: jusDitakh,
            title: "Jus Ditakh",
            prix: "500fr"
        }

    ]
    return <div className="container py-3">
        <div className="row g-3 row-accueil">
            {
                imgInfo.map((info, index) => (
                    <div class="card col-6 col-sm-4 col-md-3 card-accueil rounded" key={index}>
                        <div>
                            <img src={info.img} class="card-img-top" alt="Plat"/>
                            <div class="card-body d-flex flex-column align-items-center">
                                <h6 class="card-title fw-bold">{info.title}</h6>
                                <p class="card-text">{info.prix}</p>
                                <a href="#" class="btn btn-danger" style={{ fontSize: 10 }}>Ajouter au Panier</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}