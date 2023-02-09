import { useEffect, useState } from "react";

function Employees() {
  // useState
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/employees");
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };
    fetchData();
  }, []); // Dépendances vides pour ne déclencher l'effet qu'une seule fois lors du montage du composant.

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/employee/${id}`, {
        method: "DELETE",
      });
      console.log(users);
      setUsers((users) => users.filter((user) => user.id !== user));
      const usersTest = await fetch("http://localhost:8080/api/employees");
      const data = await usersTest.json();
      console.log(data);
      setUsers(data);
      console.log(users);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="w-full  h-screen mx-auto  bg-slate-400 py-20">
      <h1 className="mb-28 text-center text-4xl uppercase underline">
        First APP with MERN stack
      </h1>

      <div className="w-full flex justify-start">
        <div className="grid-cols-6 mx-40">
          <div className="bg-slate-50 w-full p-12 shadow-md">
            <h1 className="mb-14 text-center text-4xl uppercase underline">
              Ajouter un employée
            </h1>
            <form action="/login" method="post">
              <div>
                <label>Nom Complet</label>
                <input
                  className=" w-full bg-slate-50 p-2 mb-3 mt-1 border rounded"
                  autoFocus
                  type="text"
                  name="fullname"
                  id="fullename"
                  placeholder="Votre nom complet ici"
                />
              </div>
              <div>
                <label>age</label>
                <input
                  className=" w-full bg-slate-50 p-2 mb-3 mt-1 border rounded"
                  type="number"
                  name="age"
                  id="age"
                  min="0"
                  max="120"
                />
              </div>
              <div>
                <label>Salaire</label>
                <input
                  className=" w-full bg-slate-50 p-2 mb-6 mt-1 border rounded"
                  type="number"
                  name="salary"
                  id="salary"
                  min="1300"
                  placeholder="min 1300"
                />
              </div>
              <div>
                <a className="bg-slate-800 text-white p-2 rounded" href="/">
                  Ajouter
                </a>
              </div>
            </form>
          </div>
        </div>

        <table className="grid-cols-6 mr-60 shadow-md">
          <caption className="text-right text-gray-100 italic pb-2 pr-2">
            {users.length} documents en base de donnée
          </caption>
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
                <td className="border px-8 py-2 text-yellow-700">
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  }).format(current.salary)}
                </td>
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
  );
}

export default Employees;
