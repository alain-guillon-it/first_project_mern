function Login() {
  return (
    <div className="mx-auto flex justify-center items-center">
      <div className="bg-slate-50 w-1/3 p-12 mt-24 shadow-md">
        <h1 className="mb-14 text-center text-4xl uppercase underline">
          Connexion
        </h1>
        <form action="/login" method="post">
          <div>
            <label>Email</label>
            <input
              className=" w-full bg-slate-50 p-2 mb-3 mt-1 border rounded"
              autoFocus
              type="email"
              name="email"
              id="email"
              placeholder="Votre email ici"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className=" w-full bg-slate-50 p-2 mb-6 mt-1 border rounded"
              type="password"
              name="password"
              id="password"
              placeholder="Votre password"
            />
          </div>
          <div>
            <a className="bg-green-300 p-2 rounded" href="/">
              Connexion
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
