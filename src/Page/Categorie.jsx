import React from 'react'
import { useParams } from 'react-router-dom'
export default function Categorie() {
  const tab = [
    {
      nom: "fabi",
      items: ["fanta", "bissap"]
    },
    {
      nom: "soda",
      items: ["thiep", "mafé"]
    }
  ]
  const {nom} = useParams()
  const filtre = tab.filter((noms)=> noms.nom === nom)

  console.log("categorie");
  return (
    <div style={{height: "100vh", paddingTop: "100px"}}>
     <h1>Categorie {nom}</h1> 
     {filtre.map((item)=> <div>{item.items}</div>)}
      </div>
  )
}
