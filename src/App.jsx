import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Login } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
