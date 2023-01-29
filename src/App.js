import { RouterProvider } from "react-router-dom";
import "./App.css";
import BillProvider from "./CONTEXT/BillProvider/BillProvider";
import router from "./ROUTES/Routes/Routes";

function App() {
  return (
    <div className="">
      <BillProvider>
        <RouterProvider router={router}></RouterProvider>
      </BillProvider>
    </div>
  );
}

export default App;
