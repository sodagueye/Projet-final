import React from 'react'
import p1 from '../mes-images/p1.png'
import pa2 from '../mes-images/pa2.png'
import p3 from '../mes-images/p3.jpg'
import p4 from '../mes-images/p4.jpg'
import p5 from '../mes-images/p5.jpg'
import p6 from '../mes-images/p6.jpg'
import a2 from '../mes-images/a2.png'
import bur2 from '../mes-images/bur2.png'
import bur3 from '../mes-images/bur3.png'
import bur4 from '../mes-images/bur4.png'
import bur5 from '../mes-images/bur5.png'
import a9 from '../mes-images/a9.png'
import tac1 from '../mes-images/tac1.png'
import tac2 from '../mes-images/tac2.png'
import tac3 from '../mes-images/tac3.png'
import tac4 from '../mes-images/tac4.png'
import a1 from '../mes-images/a1.jpg'
import tac5 from '../mes-images/tac5.png'
import a7 from '../mes-images/a7.png'
import tb1 from '../mes-images/tb1.jpg'
import tb4 from '../mes-images/tb4.jpg'
import tb5 from '../mes-images/tb5.jpg'
import tb6 from '../mes-images/tb6.jpg'
import tb7 from '../mes-images/tb7.jpg'
import tb8 from '../mes-images/tb8.jpg'
import jus1 from '../mes-images/jus1.jpg'
import jus3 from '../mes-images/jus3.jpg'
import jus4 from '../mes-images/jus4.jpg'
import jus5 from '../mes-images/jus5.jpg'
import jus6 from '../mes-images/jus6.jpg'
import jusb from '../mes-images/jusb.jpg'

 function Produits() {
  return (
    <div>
       <section className='pizzas'>
        <h1 className='my-3'>Pizzas</h1>
        <div className='container '>
          <div className='row d-flex justify-content-around'>
               <div class="card col-md-3 " >
            <img src={p1} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Pizza à la viande</h5>
            <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div class="card col-md-3" >
               <img src={pa2} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">Pizza au poulet</h5>
               <a href="#" className="btn btn-danger">Ajouter au panier</a>
               </div>
               </div>
               <div class="card col-md-3" >
            <img src={p3} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Pizza au thon</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div className='row  d-flex justify-content-around mt-5'>
               <div class="card col-md-3 " >
            <img src={p4} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Pizza au Saucisse</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div class="card col-md-3" >
               <img src={p5} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">Pizza au champignon </h5>
               <a href="#" className="btn btn-danger">Ajouter au panier</a>
               </div>
               </div>
               <div class="card col-md-3" >
            <img src={p6} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Pizza viande hachée</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>   
               </div>
            </div>
        </div>
      </section>

      <section className='burgers'>
        <h1 className='my-3'>Burgers</h1>
        <div className='container '>
          <div className='row d-flex justify-content-around'>
               <div class="card col-md-3 " >
            <img src={a2} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Burgers Simple</h5>
            <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div class="card col-md-3 " >
               <img src={bur2} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">Burgers poulet-pané</h5>
               <a href="#" className="btn btn-danger">Ajouter au panier</a>
               </div>
               </div>
               <div class="card col-md-3 " >
            <img src={bur3} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Burgers Steck-frite</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div className='row  d-flex justify-content-around mt-5'>
               <div class="card col-md-3" >
            <img src={bur4} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Burgers Steck</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div class="card col-md-3 " >
               <img src={bur5} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">Double Burgers</h5>
               <a href="#" className="btn btn-danger">Ajouter au panier</a>
               </div>
               </div>
               <div class="card col-md-3 " >
            <img src={a9} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Burgers Complet</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>   
               </div>
            </div>
        </div>
      </section>

      <section className='Tacos'>
        <h1 className='my-3'>Tacos</h1>
        <div className='container '>
          <div className='row d-flex justify-content-around'>
               <div class="card col-md-3 " >
            <img src={tac1} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Tacos à la viande</h5>
            <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div class="card col-md-3" >
               <img src={tac2} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">Tacos au poulet</h5>
               <a href="#" className="btn btn-danger">Ajouter au panier</a>
               </div>
               </div>
               <div class="card col-md-3" >
            <img src={tac4} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Tacos Panée</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div className='row  d-flex justify-content-around mt-5'>
               <div class="card col-md-3 " >
            <img src={a1} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Tacos viande hachée</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div class="card col-md-3" >
               <img src={tac3} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">Tacos poulet-dibi</h5>
               <a href="#" className="btn btn-danger">Ajouter au panier</a>
               </div>
               </div>
               <div class="card col-md-3" >
            <img src={a7} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Tacos poutin </h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>   
               </div>
            </div>
        </div>
      </section>

      <section className='plat-senegalais'>
        <h1 className='my-3'>Plats-Sénégalais</h1>
        <div className='container '>
          <div className='row d-flex justify-content-around'>
               <div class="card col-md-3 " >
            <img src={tb1} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Thiébou-Diaga</h5>
            <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div class="card col-md-3" >
               <img src={tb4} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">Thiéb-bou-xonk</h5>
               <a href="#" className="btn btn-danger">Ajouter au panier</a>
               </div>
               </div>
               <div class="card col-md-3" >
            <img src={tb5} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Mafé</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div className='row  d-flex justify-content-around mt-5'>
               <div class="card col-md-3 " >
            <img src={tb6} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Dakhine</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div class="card col-md-3" >
               <img src={tb7} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">C'est Bon</h5>
               <a href="#" className="btn btn-danger">Ajouter au panier</a>
               </div>
               </div>
               <div class="card col-md-3" >
            <img src={tb8} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Yassa Poulet</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>   
               </div>
            </div>
        </div>
      </section>

      <section className='boissons'>
        <h1 className='my-3'>Boissons Locales</h1>
        <div className='container '>
          <div className='row d-flex justify-content-around'>
               <div class="card col-md-3 " >
            <img src={jus1} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Jus ditakh-orange-bissabe</h5>
            <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div class="card col-md-3" >
               <img src={jus3} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">Jus Goyave</h5>
               <a href="#" className="btn btn-danger">Ajouter au panier</a>
               </div>
               </div>
               <div class="card col-md-3" >
            <img src={jus4} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Coktail de jus</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div className='row  d-flex justify-content-around mt-5'>
               <div class="card col-md-3 " >
            <img src={jus5} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Jus Bouye</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>
               <div class="card col-md-3" >
               <img src={jus6} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">Jus Mange</h5>
               <a href="#" className="btn btn-danger">Ajouter au panier</a>
               </div>
               </div>
               <div class="card col-md-3" >
            <img src={jusb} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">Jus Bissabe</h5>
             <a href="#" className="btn btn-danger">Ajouter au panier</a>
            </div>
               </div>   
               </div>
            </div>
        </div>
      </section>
  
 </div>
  )
}
export default Produits;