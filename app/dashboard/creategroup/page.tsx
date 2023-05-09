"use client";
import { database } from "../../firebase/clientApp";
import { useState } from "react";
import { collection, addDoc, CollectionReference } from "firebase/firestore";
import { app } from "../../firebase/clientApp";
import { getAuth } from "firebase/auth";

function CreateGroup() {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");
  const [linkToPage, setLinkToPage] = useState("");
  const [globalBudget, setGlobalBudget] = useState<any>("");
  const auth = getAuth(app);
  const author = auth.currentUser?.displayName;
  const databaseRef: CollectionReference = collection(database, "createGroup");
  const addGroupe = (e: any) => {
    e.preventDefault();
    addDoc(databaseRef, {
      title,
      createdAt: new Date(),
      startDate,
      endDate,
      linkToPage,
      author,
      globalBudget,
    })
      .then(() => {
        alert("Data sent");
        setTitle("");
        setGlobalBudget("");
        setStartDate("");
        setEndDate("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <form
          onSubmit={(e) => addGroupe(e)}
          className="bg-white shadow-lg rounded px-8 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Créer un nouvel évènement
            </label>
            <input
              required
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
                  required
                  value={startDate}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="startDate"
                  type="date"
                  placeholder="Nom de l'évènement"
                  onChange={(e) => setStartDate(e.target.value)}
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
                  required
                  value={endDate}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="endDate"
                  type="date"
                  placeholder="Nom de l'évènement"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="budget"
              >
                Budget global
              </label>
              <input
                required
                value={globalBudget}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="budget"
                type="number"
                placeholder="Montant du budget global en euros"
                onChange={(e) => setGlobalBudget(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline"
              type="submit"
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
