import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAYOUT/Main/Main";
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
    ],
  },
]);
export default router;
