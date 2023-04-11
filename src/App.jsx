import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  ArticlePage,
  ConferenceCreate,
  ConferencePage,
  CreateJournal,
  EditJournal,
  // Home,
  JournalId,
  Journals,
  Login,
} from "./pages";
import { PageNotFound, ScrollToTop } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* journal */}
        <Route path="/journals" element={<Journals />} />
        <Route path="/create-journal" element={<CreateJournal />} />
        <Route path="/edit-journal/:id" element={<EditJournal />} />
        <Route path="/journal/:id" element={<JournalId />} />
        {/* journal */}
        
        {/* article */}
        <Route path="/articles" element={<ArticlePage />} />
        {/* <Route path="/create-journal" element={<CreateJournal />} /> */}
        {/* <Route path="/edit-journal/:id" element={<EditJournal />} /> */}
        {/* <Route path="/journal/:id" element={<JournalId />} /> */}
        {/* article */}
        
        {/* conference */}
        <Route path="/conferences" element={<ConferencePage />} />
        <Route path="/create-conference" element={<ConferenceCreate />} />
        {/* <Route path="/edit-journal/:id" element={<EditJournal />} /> */}
        {/* <Route path="/journal/:id" element={<JournalId />} /> */}
        {/* conference */}



        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ToastContainer />
      <ScrollToTop />
    </>
  );
};

export default App;
