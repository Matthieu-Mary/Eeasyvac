"use client";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useEffect, useState } from "react";
import { app } from "../firebase/clientApp";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';


type Props = {};

function Signup({}: Props) {

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerWithEmailAndPassword = () => {
    confirmPassword === password
      ? createUserWithEmailAndPassword(auth, email, password)
          .then((response: any) => {
            sessionStorage.setItem("token", response.user.accessToken)
            toast.success(
              "Votre compte à bien été créé, rendez vous sur la page de connexion afin de vous connecter"
            );
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
          })
          .catch((err) => {
            toast.error("Une erreur est survenue: " + err);
          })
      : toast.error("Les mots de passe doivent être identiques");
  };

  const registerWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((response: any) => {
        console.log(response.user)
        sessionStorage.setItem("token", response.user.accessToken)
        toast.success("Compte via Google créé avec succès");
      })
      .catch((err) => toast.error("Une erreur est survenue: " + err));
  };

  useEffect(() => {
    let token = sessionStorage.getItem("token");

    if(token) {
      router.push("/dashboard")
    }
  }, [])

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <form className="shadow-lg pb-1 w-full max-w-lg p-8">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Prénom
              </label>
              <input
                value={firstName}
                required
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <p className="text-red-500 text-xs italic hidden">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Nom
              </label>
              <input
                value={lastname}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                value={email}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="Adresse Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Mot de passe
              </label>
              <input
                value={password}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="***********"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-confirm-password"
              >
                Confirmer mot de passe
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-confirm-password"
                type="password"
                placeholder="***********"
              />
              <button
                onClick={registerWithEmailAndPassword}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Créer un compte
              </button>
              <button
                onClick={registerWithGoogle}
                className="relative inline-flex justify-center items-center mt-4 bg-gray-300 hover:bg-gray-200 text-black border-gray-600 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                <FcGoogle className="absolute w-6 h-6 left-4" />
                <p className={"text-center"}> Continuer avec Google</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
