import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAYOUT/Main/Main";
import ErrorPage from "../../PAGES/shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [],
  },
]);
export default router;
