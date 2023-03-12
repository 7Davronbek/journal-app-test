import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CreateJournal, Home, Journals, Login } from "./pages";
import { PageNotFound, ScrollToTop } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/create-journal" element={<CreateJournal />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ToastContainer />
      <ScrollToTop />
    </>
  );
};

export default App;
