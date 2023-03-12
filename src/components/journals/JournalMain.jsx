import React, { useState } from "react";
import AdminLayout from "../admin/AdminLayout";
import JournalCards from "./JournalCards";
import { useNavigate } from "react-router-dom";
import JournalSearch from "./JournalSearch";

const JournalMain = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleToCreate = () => {
    navigate("/create-journal", { replace: true });
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (key) => {
    setValue(key);
  };
  return (
    <AdminLayout>
      <div className="JournalMain">
        <div className="topWrap">
          <h1>Журналы</h1>

          <div className="search">
            <div className="inputWrap position-relative">
              <i>
                <img src="/icons/search.svg" alt="" />
              </i>
              <input
                onChange={onChange}
                type="text"
                placeholder="Поиск"
                className="form-control"
              />
              <JournalSearch value={value} onSearch={onSearch} />
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
