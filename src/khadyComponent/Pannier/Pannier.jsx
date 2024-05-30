import React, { useState } from 'react';
import yassa1 from '../Footer-img/yassa1.jpg';
import thiebouDieune from "../Footer-img/thiebou-dieune.png";
import '../Pannier/Pannier.css';

export function Pannier() {
    const [detailPannier, setDetailPannier] = useState([
        {
            img: yassa1,
            title: "yassa",
            prix: 1500,
            nbreArticle: 2,
            fraisLivraison: 300,
            quantity: 1 
        },
        {
            img: thiebouDieune,
            title: "thiebouDieune",
            prix: 1500,
            nbreArticle: 2,
            fraisLivraison: 300,
            quantity: 1 
        }
    ]);

    const handleIncrement = (index) => {
        setDetailPannier((prevDetailPannier) =>
            prevDetailPannier.map((item, i) => 
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (index) => {
        setDetailPannier((prevDetailPannier) =>
            prevDetailPannier.map((item, i) =>
                i === index && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const handleDelete = (index) => {
        setDetailPannier((prevDetailPannier) =>
            prevDetailPannier.filter((item, ind) => ind !== index)
        );
    };

    // Calcul des totaux
    const totalArticles = detailPannier.reduce((total, item) => total + item.quantity, 0);
    const totalPrix = detailPannier.reduce((total, item) => total + item.prix * item.quantity, 0);
    const totalFraisLivraison = detailPannier.reduce((total, item) => total + item.fraisLivraison, 0);
    const totalGeneral = totalPrix + totalFraisLivraison;

    return (
        <div className="container">
            <div className="row pannier g-3">
                <div className="col-12 col-md-6 Details-des-produit-achete">
                    <h6 className='ms-1'>Pannier</h6>
                    <div style={{ borderTop: "1px solid black" }}></div>
                    {detailPannier.map((element, index) => (
                        <div className="Detail-produit-acheter" key={index}>
                            <div className="d-flex justify-content-between py-2 ps-3">
                                <img src={element.img} alt="" style={{ width: 60, height: 60 }} />
                                <div>
                                    <h6>{element.title}</h6>
                                    <p>{element.prix} fr</p>
                                </div>
                                <div className='d-flex'>
                                    <i className="bi bi-caret-down-fill" style={{ fontSize: 12, marginTop: 5 }} onClick={() => handleDecrement(index)}></i>
                                    <div>
                                        <span style={{ border: "1px solid black", padding: "0px 2px", fontSize: 10 }}>{element.quantity}</span>
                                    </div>
                                    <i className="bi bi-caret-up-fill" style={{ fontSize: 12, marginTop: 5 }} onClick={() => handleIncrement(index)}></i>
                                </div>
                                <p>Prix Total: {element.prix * element.quantity} fr</p>
                                <i className="bi bi-trash" onClick={() => handleDelete(index)}></i>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-12 col-md-6 text-white">
                    <div>
                        <div className='py-2' style={{ backgroundColor: "#0B960F" }}>
                            <h5 className='text-center'>Recapitulatif</h5>
                            <div style={{ borderTop: "1px solid white" }}>
                                <div className='d-flex justify-content-between mt-2 px-2'>
                                    <h6>{totalArticles} Articles</h6>
                                    <p>{totalPrix} fr</p>
                                </div>
                            </div>
                            <div style={{ borderTop: "1px solid white" }}>
                                <div className='d-flex justify-content-between mt-2 px-2'>
                                    <h6>Livraison</h6>
                                    <p>{totalFraisLivraison} fr</p>
                                </div>
                            </div>
                            <div style={{ borderTop: "1px solid white", borderBottom: "1px solid white" }}>
                                <div className='d-flex justify-content-between mt-2 px-2'>
                                    <h6>Total</h6>
                                    <p>{totalGeneral} fr</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center pt-3'>
                                <button className='border-0 bg-white rounded p-2 px-3'>Commander</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 p-2' style={{ backgroundColor: "#0B960F" }}>
                        <h6 className='text-center'>NB:</h6>
                        <p>Veillez bien préciser l'adresse de livraison <br />
                            Livraison en moins de 4H uniquement à Dakar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
