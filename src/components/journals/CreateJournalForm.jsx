import React from "react";
import AdminLayout from "../admin/AdminLayout";
import CreateJournalRu from "./CreateJournalRu";
import { useNavigate } from "react-router-dom";

const CreateJournalForm = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/journals", { replace: true });
  };
  return (
    <AdminLayout>
      <div className="CreateJournalForm">
        <ul
          className="nav nav-pills mb-3 d-flex align-items-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              На русском
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              O‘zbek tili
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              In English
            </button>
          </li>

          <button onClick={back} className="btn ms-auto">
            <img src="/icons/close.svg" alt="" />
          </button>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex="0"
          >
            <CreateJournalRu back={back} />
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex="0"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et vero
            possimus, quae iste facilis dolorum omnis vel ipsa tempore doloribus
            repellendus soluta, inventore eaque! Vero error nam vitae ratione
            quibusdam!
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabIndex="0"
          >
            <h6>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit, ad!
            </h6>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateJournalForm;
