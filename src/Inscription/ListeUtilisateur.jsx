import React from 'react'
import { AiFillEdit, AiFillDelete, AiFillEye,  } from "react-icons/ai";

function ListeUtilisateur() {
  const listUsers = [
    { Nom: "soda", Prenom: "gueye", email: "gueyesoda25@gmailcom", telephone: 754567890 },
    { Nom: "soda", Prenom: "gueye", email: "gueyesoda25@gmailcom", telephone: 754567890 },
    { Nom: "soda", Prenom: "gueye", email: "gueyesoda25@gmailcom", telephone: 754567890 },
    { Nom: "soda", Prenom: "gueye", email: "gueyesoda25@gmailcom", telephone: 754567890 },
    { Nom: "soda", Prenom: "gueye", email: "gueyesoda25@gmailcom", telephone: 754567890 },
    { Nom: "soda", Prenom: "gueye", email: "gueyesoda25@gmailcom", telephone: 754567890 },
  ]
  return (
    <div className="lister  m-auto ">
      <h6 className="ms-2 py-2">Liste des utilisateurs</h6>
      <div style={{ borderTop: "2px solid gray" }}></div>


      <table class="table">
        <thead>
          <tr style={{ backgroundColor: "#eee" }}>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Email</th>
            <th scope="col">Telephone</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {
            listUsers.map((item, index) => (
              <tr key={index}>
                <td>{item.Nom}</td>
                <td>{item.Prenom}</td>
                <td>{item.email}</td>
                <td>{item.telephone}</td>
                <td className='gap-3'>
                  <AiFillEye  className='icone1' />
                  <AiFillEdit className='icone2' />
                  <AiFillDelete  className='icone3' />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default ListeUtilisateur



