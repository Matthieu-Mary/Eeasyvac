"use client";
import Image from "next/image";
import Container from "../Container";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { FaUserAlt } from "react-icons/fa";

type Props = {};

function Navbar({}: Props) {
  const isAuth = sessionStorage.getItem("token")
    ? sessionStorage.getItem("token")
    : localStorage.getItem("token")
    ? localStorage.getItem("token")
    : false;

  const logoutUser = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }

  return (
    <header className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center">
            <Logo />
            <h1 className="ml-5 font-bold leading-10 md:text-2xl pt-3">
              Easyvac
            </h1>
          </div>
          {isAuth ? (
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <div className="flex justify-center items-center px-1">
                <FaUserAlt className="rounded-full w-7 h-7 bg-gray-200" />
                <MenuItem
                  linkLabel="/dashboard"
                  label={"Prénom"}
                />
              </div>
              <MenuItem
                linkLabel="/"
                label={"Se déconnecter"}
                onClick={() => {
                  logoutUser()
                }}
              />
            </div>
          ) : (
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <MenuItem
                linkLabel="/login"
                label={"Se connecter"}
              />
              <MenuItem
                linkLabel="/signup"
                label={"Créer un compte"}
              />
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}

export default Navbar;
