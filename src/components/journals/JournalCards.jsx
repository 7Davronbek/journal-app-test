import React, { useEffect, useState } from "react";
import JournalDeleteModal from "../modal/JournalDeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { journalAction } from "../../redux/journalSlice";
import { Link } from "react-router-dom";

const JournalCards = () => {
  const { journals, isJournals } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    dispatch(journalAction.getJournals());
  }, []);

  return (
    <>
      {isJournals ? (
        <h3 className="text-center py-5">
          Loading...{" "}
          <span
            style={{ color: "blue" }}
            className="spinner-border spinner-border-sm"
          ></span>
        </h3>
      ) : (
        <>
          {journals?.map((item, index) => (
            <div key={index} className="col-lg-6">
              <div className="cards">
                <Link to={`/journal/${item.id}`} className="img">
                  <img src={item.image} alt="" />
                </Link>
                <Link to={`/journal/${item.id}`} className="mid">
                  <h2>{item.id}</h2>
                  <h3>{item.name_ru}</h3>
                  <h4>
                    Ключевое слово: <b>{item.keyword}</b>
                  </h4>

                  <div className="cardFooter">
                    <div className="d-flex align-items-center">
                      <i className="me-2">
                        <img src="/icons/calendar.svg" alt="" />
                      </i>
                      <p>{item.date}</p>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="me-2">
                        <img src="/icons/download.svg" alt="" />
                      </i>
                      <p>{item.downloadview}</p>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="me-2">
                        <img src="/icons/eye.svg" alt="" />
                      </i>
                      <p>{item.views}</p>
                    </div>
                  </div>
                </Link>
                <div className="editWrap">
                  <Link to={`/edit-journal/${item.id}`} className="btn edit">
                    <img src="/icons/edit.svg" alt="" />
                  </Link>
                  <button
                    onClick={() => {
                      setIsModal(true), setDeleteId(item.id);
                    }}
                    className="btn delete"
                  >
                    <img src="/icons/delete.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {/* {journals && <></>} */}

      <JournalDeleteModal
        deleteId={deleteId}
        isModal={isModal}
        setIsModal={setIsModal}
      />
    </>
  );
};

export default JournalCards;
