import { createBrowserRouter } from "react-router-dom";

// Components
import App from "../Pages/App";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import Logout from "../Pages/Logout/Logout";
import Employees from "../Pages/Employees/Employees";
import SignIn from "../Pages/SignIn/SignIn";

// Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
    ],
  },
]);
