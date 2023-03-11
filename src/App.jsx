import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CreateJournal, Journals, Login } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/create-journal" element={<CreateJournal />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
