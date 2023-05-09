"use client";
import { database } from "../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};

function Dashboard({}: Props) {
  const [dataGroups, setDataGroups] = useState<any[]>([]);
  const databaseRef = collection(database, "createGroup");
  const getDataGroups = async () => {
    await getDocs(databaseRef).then((res) =>
      setDataGroups(
        res.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      )
    );
  };

  useEffect(() => {
    getDataGroups();
  }, []);

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h2>Ici tu trouveras ton tableau de bord personnalisé</h2>
      <Link href="/dashboard/creategroup" className="text-blue-600">
        Créer un groupe
      </Link>
      <div className="flex justify-evenly">
        {dataGroups.map((group) => {
          return (
            <div key={group.id} className="card w-80 bg-base-100 shadow-xl mr-5">
              <div className="card-body">
                <h2 className="card-title">{group.name}</h2>
                <p>
                  Créé le <span>...</span> par : <span>...</span>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Continuer</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
