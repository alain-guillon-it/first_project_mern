import "./App.css";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="bg-slate-300 w-full h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default App;
