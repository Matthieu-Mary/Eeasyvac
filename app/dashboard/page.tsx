"use client";
import { database } from "../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { auth } from "../firebase/clientApp";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";

type Props = {};

function Dashboard({}: Props) {
  const router = useRouter();
  const [dataGroups, setDataGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState(false)
  const databaseRef = collection(database, "createGroup");
  const user = auth.currentUser;
  const userFirstname = user?.displayName ? user.displayName.split(" ")[0] : "";

  // Protect the dashboard route against user not connected
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      user ? user : router.push("/");
    });
    return () => unsubscribe();
  }, [router]);


  // Get data from firebase store
  const getDataGroups = async () => {
    setLoading(true)
    await getDocs(databaseRef).then((res) =>
      setDataGroups(
        res.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      )
    );
    setLoading(false)
  };

    // Call function to get data from firebase store
    useEffect(() => {
      getDataGroups() 
    }, []);


  return loading ? (
    <Loader />
  ) : (
    <div className="flex h-screen flex-col p-4 max-w-8xl mx-auto">
      <div className="flex justify-between items-center p-5">
        <h2 className="text-2xl font-bold">
          Bonjour <span className="text-blue-600">{userFirstname}</span> voilà
          les groupes que tu as rejoints :
        </h2>
        <Link
          href="/dashboard/creategroup"
          className="text-blue-600 hover:opacity-80"
        >
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
              seconds={group.createdAt.seconds}
              author={group.author}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
