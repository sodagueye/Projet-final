// import React from 'react'
// import { AiFillEdit, AiFillDelete, AiFillEye, } from "react-icons/ai";
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';

// function ListeUtilisateur() {
//   const [tableaulist, setTableaulist] = useState([])


//   const data = async () => {
//     const response = await axios.get("http://localhost:8000/users/get-user")
//     const json = await response.data
//     console.log(json);
//     setTableaulist([json])
//     // console.log(listUsers);
//   }
//   useEffect(() => {

//     data()
//   }, [])

//   return (
//     <div className="lister  m-auto ">
//       <h6 className="ms-2 py-2">Liste des utilisateurs</h6>
//       <div style={{ borderTop: "2px solid gray" }}></div>


//       <table class="table">
//         <thead>
//           <tr style={{ backgroundColor: "#eee" }}>
//             <th scope="col">Nom</th>
//             <th scope="col">Prenom</th>
//             <th scope="col">Email</th>
//             <th scope="col">Telephone</th>
//             <th scope="col">Action</th>

//           </tr>
//         </thead>
//         <tbody>
//           {
//             // listUsers.map((i) => {
//             //   <tr key={i}>
//             //     <td className='text-danger'>{i.firstName}</td>
//             //     <td>{i.lastName}</td>
//             //     <td>{i.email}</td>
//             //     <td>{i.number}</td>
//             //     <td>{i.password}</td>
//             //     <td>{i.confirmPassword}</td>
//             //     <td className='gap-3'>
//             //       <AiFillEye className='icone1' />
//             //       <AiFillEdit className='icone2' />
//             //       <AiFillDelete className='icone3' />
//             //     </td>
//             //   </tr>
//             // })
            
//             tableaulist.map(user => {
//       return (
//         <tr key={user.id}>
//           <td>{user.firstName}</td>
//           <td>{user.lastName}</td>
//           <td>{user.email}</td>
//           <td>{user.number}</td>
//           <td>{user.password}</td>
//           <td>{user.confirmPassword}</td>
//           <td className='gap-3'>
//             <AiFillEye className='icone1' />
//             <AiFillEdit className='icone2' />
//             <AiFillDelete className='icone3' />
//           </td>
//         </tr>
//       );
//     })
//           }
//         </tbody>
//       </table>

//     </div>
//   )
// }

// export default ListeUtilisateur

