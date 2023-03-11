import React from "react";
import AdminLayout from "../admin/AdminLayout";
import JournalCards from "./JournalCards";
import { useNavigate } from "react-router-dom";

const JournalMain = () => {
  const navigate = useNavigate();
  const handleToCreate = () => {
    navigate("/create-journal", { replace: true });
  };
  return (
    <AdminLayout>
      <div className="JournalMain">
        <div className="topWrap">
          <h1>Журналы</h1>

          <div className="search">
            <div className="inputWrap">
              <i>
                <img src="/icons/search.svg" alt="" />
              </i>
              <input type="text" placeholder="Поиск" className="form-control" />
            </div>
            <button onClick={handleToCreate} className="btn">
              Добавить{" "}
              <span className="ms-2">
                <img src="/icons/plus.svg" alt="" />
              </span>
            </button>
          </div>
        </div>

        <div className="bottomWrap">
          <div className="row">
            <JournalCards />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default JournalMain;
