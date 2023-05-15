"use client";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();`Consultez votre email ${email} pour changer le mot de passe`

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`Consultez votre email ${email} pour changer le mot de passe`)
        setEmail("");

        setTimeout(() => {
          router.push("/login");
        }, 5000);
      })
      .catch((error) => {
        toast.error(error)
        setEmail("");
      });
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
          <div className="mb-6"></div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Récupérer
            </button>
          </div>
          <Link
            className="mt-7 mx-auto inline-block align-baseline font-bold text-sm text-gray-400 hover:text-gray-700"
            href="/login"
          >
            Déjà inscrit? Connectez-vous.
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
