import { RouterProvider } from "react-router-dom";
import "./App.css";
import BillProvider from "./CONTEXT/BillProvider/BillProvider";
import router from "./ROUTES/Routes/Routes";
// React query
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <BillProvider>
          <RouterProvider router={router}></RouterProvider>
          <Toaster></Toaster>
        </BillProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
