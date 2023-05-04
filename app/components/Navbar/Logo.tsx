"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

function Logo({}: Props) {
  const router = useRouter();
  return (
    <Link href="/">
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height={"40"}
        width={"40"}
        src="/images/logo.png"
      />
    </Link>
  );
}

export default Logo;
