"use client"
import Container from "../Container";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center">
            <Logo />
            <h1 className="ml-5 font-bold leading-10 md:text-2xl pt-3">Easyvac</h1>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <MenuItem linkLabel="/login" label={'Se connecter'} onClick={() => {console.log("Se connecter")}} />
            <MenuItem linkLabel="/signup" label={'Créer un compte'} onClick={() => {console.log("Créer compte")}} />
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Navbar;
