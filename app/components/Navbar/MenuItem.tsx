import Image from "next/image";
import Link from "next/link";

type Props = {
  linkLabel: string;
  label: string;
  onClick?: () => void;
}

function MenuItem({linkLabel ,label, onClick}: Props) {
  return (
    <div className="px-4 py-3 hover:opacity-80 cursor-pointer" onClick={onClick}>
      <Link href={linkLabel}>{label}</Link> 
    </div>
  )
}

export default MenuItem