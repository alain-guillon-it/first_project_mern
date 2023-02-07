import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // useState
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/users/show")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }); // Dépendances vides pour ne déclencher l'effet qu'une seule fois lors du montage du composant.

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/users/delete/${id}`, {
        method: "DELETE",
      });
      setIsDeleted(true);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>coucou</li>
            <li>coucou</li>
            <li>coucou</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>First APP with MERN stack</h1>
        <div>
          <a className="btn" href="/add">
            Ajout un salarié
          </a>

          <table>
            <caption>X documents en base de donnée</caption>
            <thead>
              <tr>
                <th>Nom Complet</th>
                <th>Age</th>
                <th>Salaire</th>
                <th>Créé le</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((current) => (
                <tr key={current._id}>
                  <td>{current.name}</td>
                  <td>{current.age}</td>
                  <td>{current.salary}</td>
                  <td>
                    {new Date(current.created_at).toLocaleDateString("fr-FR", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                    })}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(current._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
