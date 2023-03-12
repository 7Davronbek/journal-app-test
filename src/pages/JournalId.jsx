import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import { AdminLayout } from "../components";

const JournalId = () => {
  const { id } = useParams();
  const [journal, setJournal] = useState(null);
  const getJournalById = async () => {
    const { data } = await axios.get(`/journal/${id}`);
    setJournal(data);
  };

  useEffect(() => {
    getJournalById();
  }, [id]);

  return (
    <AdminLayout>
      <div className="JournalId">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <h6 className="text-left mb-3">ID: {journal?.id}</h6>
            <img src={journal?.image} className="w-25" alt="" />
            <h3 className="my-3">{journal?.name_ru}</h3>
            <h5 className="mb-3">{journal?.keyword_ru}</h5>
            <p className="mb-3">{journal?.description_ru}</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default JournalId;
