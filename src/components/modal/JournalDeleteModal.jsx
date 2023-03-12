import React from "react";

const JournalDeleteModal = ({ isModal, setIsModal }) => {
  return (
    <div
      onClick={() => setIsModal(false)}
      className={`JournalDeleteModal ${isModal ? "active" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <div onClick={(e) => e.stopPropagation()} className="modalCards">
              <div className="cardsHeader">
                <h1>Подтверждение</h1>
                <button onClick={() => setIsModal(false)} className="btn close">
                  <img src="/icons/close.svg" alt="" />
                </button>
              </div>
              <div className="cardsBody">
                <span>
                  <img src="/icons/warning.svg" alt="" />
                </span>
                <h2>Вы уверены, что хотите удалить?</h2>
              </div>
              <div className="cardsFooter">
                <button onClick={() => setIsModal(false)} className="btn back">
                  Отменить
                </button>
                <button className="btn del">
                  <span className="me-2">
                    <img src="/icons/delete.svg" alt="" />
                  </span>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDeleteModal;
