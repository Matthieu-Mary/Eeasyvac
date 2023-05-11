"use client";
import Container from "../Container";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { FaUserAlt } from "react-icons/fa";
import { app } from "../../firebase/clientApp";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

type Props = {};

function Navbar({}: Props) {
  const [userAuth, setUserAuth] = useState(false);
  const auth = getAuth(app);
  const user = auth.currentUser;
  const userFirstname = user?.displayName ? user.displayName.split(" ")[0] : "";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserAuth(!!user);
    });
    return unsubscribe;
  }, [auth]);
  
  const logoutUser = () => {
    signOut(auth);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  };

  return (
    <header className=" w-full bg-white z-10 shadow-md">
      <div className="y-4 border-b-[1px]">
        <Container>
          <div className="flex items-center">
            <Logo />
            <h1 className="ml-5 font-bold leading-10 md:text-2xl pt-3">
              Easyvac
            </h1>
          </div>
          {userAuth ? (
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <div className="flex justify-center items-center px-1">
                <FaUserAlt className="rounded-full w-7 h-7 bg-gray-200" />
                <MenuItem linkLabel="/dashboard" label={userFirstname ? userFirstname : user?.email} />
              </div>
              <MenuItem
                linkLabel="/"
                label={"Se déconnecter"}
                onClick={() => {
                  logoutUser();
                }}
              />
            </div>
          ) : (
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <MenuItem linkLabel="/login" label={"Se connecter"} />
              <MenuItem linkLabel="/signup" label={"Créer un compte"} />
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}

export default Navbar;
