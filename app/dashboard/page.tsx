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
    <div className="flex h-screen flex-col p-4 max-w-8xl mx-auto">
      <div className="flex justify-between items-center p-5">
        <h2 className="text-2xl font-bold">Mes groupes rejoints :</h2>
        <Link href="/dashboard/creategroup" className="text-blue-600 hover:opacity-80">
          Créer un nouveau groupe
        </Link>
      </div>
      <div className="flex justify-evenly flex-wrap">
        {dataGroups.map((group) => {
          return (
            <EventCard
              key={group.id}
              id={group.id}
              title={group.title}
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
