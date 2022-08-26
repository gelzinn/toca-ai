import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";
import { HeaderContainer } from "./styles";

export default function Header() {
  const currentLocation = location.pathname;

  return (
    <HeaderContainer>
      <header>
        <Link href="/">
          <a className="logo">
            <img src="../../images/hi-emoji.gif" alt="" />
            <span>Toca ai</span>
          </a>
        </Link>
        <ul className="navbar">
          <Link href="/">
            <a>Início</a>
          </Link>
          <Link href="/">
            <a>Planos</a>
          </Link>
          <Link href="/">
            <a>Entrar na sua conta</a>
          </Link>
          <Link href="/">
            <a className="vibe">Descubra sua vibe</a>
          </Link>
          {currentLocation != "/explore" && (
            <Link href="/explore">
              <MagnifyingGlass weight="bold" />
            </Link>
          )}
        </ul>
      </header>
    </HeaderContainer>
  );
}
