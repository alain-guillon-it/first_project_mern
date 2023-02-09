import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-around items-center w-full bg-slate-900 h-14">
      <Link className="text-white" to="/">MEARN stack</Link>
      <ul>
        <Link className="px-3 py-2 bg-sky-300 rounded mx-2" to="/signin">
          S'inscrire
        </Link>
        <Link className="px-3 py-2 bg-green-300 rounded mx-2" to="/login">
          Connexion
        </Link>
        <Link className="px-3 py-2 bg-red-300 rounded mx-2" to="/logout">
          Déconnexion
        </Link>
      </ul>
    </header>
  );
}

export default Header;
