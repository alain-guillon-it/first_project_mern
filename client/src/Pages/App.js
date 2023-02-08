import { useEffect, useState } from "react";
import "./App.css";
import Header from "../components/Header/Header";

function App() {
  // useState
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/users");
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };
    fetchData();
  }, []); // Dépendances vides pour ne déclencher l'effet qu'une seule fois lors du montage du composant.

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: "DELETE",
      });
      // console.log(response);
      console.log("ICI 1");
      console.log(users);
      setUsers([
        {
          name: "Emily Brown",
          age: 26,
          salary: 35000,
        },
      ]);
      console.log("ICI 2");
      console.log(users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <h1 className="text-5xl text-center font-bold underline pt-10 pb-20">
          First APP with MERN stack
        </h1>
        <div>
          <table className="table-auto w-100 mx-auto text-left">
            <caption>{users.length} documents en base de donnée</caption>
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-8 py-2">Nom Complet</th>
                <th className="px-8 py-2">Age</th>
                <th className="px-8 py-2">Salaire</th>
                <th className="px-8 py-2">Créé le</th>
                <th className="px-8 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((current) => (
                <tr key={current._id} className="bg-gray-100">
                  <td className="border px-8 py-2">{current.name}</td>
                  <td className="border px-8 py-2">{current.age}</td>
                  <td className="border px-8 py-2">{current.salary}</td>
                  <td className="border px-8 py-2">
                    {new Date(current.created_at).toLocaleDateString("fr-FR", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                    })}
                  </td>
                  <td className="border px-8 py-2">
                    <button
                      onClick={(e) => {
                        handleDelete(current._id);
                      }}
                      className="bg-red-600 text-white p-2 rounded"
                    >
                      {/* {console.log(current._id)} */}
                      Supprimer
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
