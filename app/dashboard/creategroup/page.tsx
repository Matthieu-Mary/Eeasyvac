"use client"
import { database } from "../../firebase/clientApp";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

type Props = {}

function CreateGroup({}: Props) {
    const [name, setName] = useState("");
    const databaseRef = collection(database, "createGroup");
    const addGroupe =  () => {
      addDoc(databaseRef, {
        name
      })
      .then(() => alert("Data sent"))
      .catch(err => console.log(err))
    }
  return (
    <div className="flex justify-center items-center flex-col h-screen">
        <label htmlFor="name">Nom du groupe</label>
        <input id="name" type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={addGroupe}>Ajouter</button>
    </div>
  )
}

export default CreateGroup