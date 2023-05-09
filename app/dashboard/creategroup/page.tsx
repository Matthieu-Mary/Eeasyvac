"use client";
import { database } from "../../firebase/clientApp";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { app } from "../../firebase/clientApp";
import { getAuth } from "firebase/auth";

type Props = {};

function CreateGroup({}: Props) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [linkToPage, setLinkToPage] = useState("");
  const [globalBudget, setGlobalBudget] = useState(null)
  const auth = getAuth(app);
  const author = auth.currentUser?.displayName;
  const databaseRef = collection(database, "createGroup");
  const addGroupe = () => {
    addDoc(databaseRef, {
      title,
      createdAt: new Date(),
      startDate,
      endDate,
      linkToPage,
      author,
      globalBudget
    })
      .then(() => {
        alert("Data sent");
        setTitle("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-lg rounded px-8 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Créer un nouvel évènement
            </label>
            <input
              value={title}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nom de l'évènement"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex mt-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="startDate"
                >
                  Date de début
                </label>
                <input
                  value={startDate}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="startDate"
                  type="date"
                  placeholder="Nom de l'évènement"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="endDate"
                >
                  Date de fin
                </label>
                <input
                  value={name}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="endDate"
                  type="date"
                  placeholder="Nom de l'évènement"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={addGroupe}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline"
              type="button"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateGroup;
