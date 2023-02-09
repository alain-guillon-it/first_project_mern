import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const fetchCounterDocument = async () => {
      const result = await fetch("http://localhost:8080/api/employees/count");
      const data = await result.json();
      setNumber(data);
    };
    fetchCounterDocument();
  }, []);

  return (
    <div className="mx-auto flex justify-center items-center">
      <div className="bg-slate-50 w-1/3 p-12 mt-24 shadow-md">
        <h1 className="mb-12 text-center text-4xl uppercase underline">
          Welcome to this application
        </h1>
        <p className="italic mb-12">
          Bienvenue sur cette application développé à l'IT-Akademy en compagnie
          de Mr Barbosa Alexandre formateur fullstack Javascript.
          <br />
          <br />
          Cette Application est en lien avec la stack <strong>MERN</strong>,
          elle permet de lié le front et le back. Pour la connexion on utilisera{" "}
          <strong>Json Web Token</strong>. Pour le back <strong>NodeJS</strong>{" "}
          sera utilisé
        </p>

        {number > 1 ? (
          <Link className="px-3 py-2 bg-sky-300 rounded" to="/employees">
            liste de mes {number} employées
          </Link>
        ) : (
          <Link className="px-3 py-2 bg-sky-300 rounded" to="/employees">
            voir mon employé
          </Link>
        )}
      </div>
    </div>
  );
}

export default HomePage;
