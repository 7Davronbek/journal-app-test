import React, { useEffect, useState } from "react";
import JournalDeleteModal from "../modal/JournalDeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { journalAction } from "../../redux/journalSlice";

const JournalCards = () => {
  const { journals, isJournals } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    dispatch(journalAction.getJournals());
  }, []);

  return (
    <>
      {isJournals && (
        <>
          <h3>Loading...</h3>
        </>
      )}

      {journals && (
        <>
          {journals.map((item, index) => (
            <div key={index} className="col-lg-6">
              <div className="cards">
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
                <div className="mid">
                  <h2>{item.id}</h2>
                  <h3>
                    {item.name_ru}
                  </h3>
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
                </div>
                <div className="editWrap">
                  <button className="btn edit">
                    <img src="/icons/edit.svg" alt="" />
                  </button>
                  <button
                    onClick={() => setIsModal(true)}
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

      <JournalDeleteModal isModal={isModal} setIsModal={setIsModal} />
    </>
  );
};

export default JournalCards;
