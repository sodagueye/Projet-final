import React from 'react';
import weave from"../Footer-img/weave.png"
import om from"../Footer-img/orange-money.png"
import Cash from"../Footer-img/xaliss.webp"
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

export default function ListeVente({ datas, edit, delete: handleDelete }){
    const date = new Date().toLocaleString()
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
          <th scope="col">date</th>
            <th scope="col">Nom du Produit</th>
            <th scope="col">Prix</th>
            <th scope="col">Nombre d'article</th>
            <th scope="col">Prix total</th>
            <th scope="col">Mode de Paiment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={data.id}>
                <td>{date}</td>
              <td>{data.nom}</td>
              <td>{data.prix}</td>
              <td>{data.numArticle}</td>
              <td>{Number(data.prix) * Number(data.numArticle)}</td>
              <td>
              {data.paiment === 'Cash' && (
                  <img src={Cash} alt="Cash'" style={{ width:'30px',height: '30px' , borderRadius:"50px"}} />
                )}
              {data.paiment === 'Weave' && (
                  <img src={weave} alt="Weave" style={{ width:'30px',height: '30px' , borderRadius:"50px"}} />
                )}
                {data.paiment === 'Orange-Money' && (
                  <img src={om} alt="Orange Money" style={{ width: '30px', height:'30px' , borderRadius:"50px" }} />
                )}
              </td>
              <td>
                <button
                  onClick={() => edit(index)}
                  className=' fs-5 me-2 border-0'
                >
                     <MdModeEdit/>
                 
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className='fs-5 border-0'
                >
                 <MdDelete/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};