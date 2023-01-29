import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAYOUT/Main/Main";
import Login from "../../PAGES/authentication/Login";
import Registration from "../../PAGES/authentication/Registration";
import Bills from "../../PAGES/Bills/Bills";
import ErrorPage from "../../PAGES/shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Bills />,
      },
      {
        path: "/bills",
        element: <Bills />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);
export default router;
