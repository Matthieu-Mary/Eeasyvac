"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/clientApp";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/features/authSlice";
import { RootState } from "../redux/store";


type Props = {};

function Login({}: Props) {
  const dispatch = useDispatch()
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password).then((response: any) => {
      sessionStorage.setItem("token", response.user.accessToken);
      toast.success("Vous êtes connecté");
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    })
    .catch(err => toast.error("Email ou mot de passe incorrect"));
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-lg rounded px-8 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              value={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              value={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="************"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={loginUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Se connecter
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Mot de passe oublié ?
            </a>
          </div>
          <Link
            className="mt-7 mx-auto inline-block align-baseline font-bold text-sm text-gray-400 hover:text-gray-700"
            href="/signup"
          >
            Vous n&apos;avez pas de compte ? Créez en un !
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Login;
