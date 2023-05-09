"use client";
import { database } from "../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

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
    <div className="flex h-screen flex-col p-4">
      <div className="flex justify-between items-center p-10">
        <h2 className="text-2xl font-bold">Mes groupes rejoints :</h2>
        <Link href="/dashboard/creategroup" className="text-blue-600">
          Créer un nouveau groupe
        </Link>
      </div>
      <div className="flex justify-evenly flex-wrap">
        {dataGroups.map((group) => {
          return (
            <EventCard
              key={group.id}
              id={group.id}
              title={group.name}
              date={group.date}
              author={group.author}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
