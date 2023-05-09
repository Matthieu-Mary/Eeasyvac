"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Home({}: Props) {
  return (
    <div className="overflow-hidden relative">
      <div className="bg-my_bg_image bg-cover bg-center bg-no-repeat w-full h-screen overflow-hidden flex justify-center z-0">
        <motion.div
          initial={{ x: -300, scale: 1, opacity: 0 }}
          animate={{ x: 0, scale: 1.25, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-40 z-50"
        >
          <h3 className="text-center text-2xl">Bienvenue sur Easyvac !</h3>
          <p className="text-xl">Planifiez vos vacances entre amis</p>
          <Link href="/login">
            <p className="text-xs text-gray-500 hover:opacity-60">
              Connectez vous pour accéder à votre tableau de bord.
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
