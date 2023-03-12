import React, { useState } from "react";
import JournalDeleteModal from "../modal/JournalDeleteModal";

const JournalCards = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div className="col-lg-6">
        <div className="cards">
          <div className="img">
            <img src="/images/card.png" alt="" />
          </div>
          <div className="mid">
            <h2>001</h2>
            <h3>
              Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги Ион-плазма ва
              лазер технологиялари институти
            </h3>
            <h4>
              Ключевое слово: <b>Физика / Точные науки / Узбекистан</b>
            </h4>

            <div className="cardFooter">
              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/calendar.svg" alt="" />
                </i>
                <p>12.12.2022</p>
              </div>

              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/download.svg" alt="" />
                </i>
                <p>200 000</p>
              </div>

              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/eye.svg" alt="" />
                </i>
                <p>200 000</p>
              </div>
            </div>
          </div>
          <div className="editWrap">
            <button className="btn edit">
              <img src="/icons/edit.svg" alt="" />
            </button>
            <button onClick={() => setIsModal(true)} className="btn delete">
              <img src="/icons/delete.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="cards">
          <div className="img">
            <img src="/images/card.png" alt="" />
          </div>
          <div className="mid">
            <h2>001</h2>
            <h3>
              Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги Ион-плазма ва
              лазер технологиялари институти
            </h3>
            <h4>
              Ключевое слово: <b>Физика / Точные науки / Узбекистан</b>
            </h4>

            <div className="cardFooter">
              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/calendar.svg" alt="" />
                </i>
                <p>12.12.2022</p>
              </div>

              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/download.svg" alt="" />
                </i>
                <p>200 000</p>
              </div>

              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/eye.svg" alt="" />
                </i>
                <p>200 000</p>
              </div>
            </div>
          </div>
          <div className="editWrap">
            <button className="btn edit">
              <img src="/icons/edit.svg" alt="" />
            </button>
            <button onClick={() => setIsModal(true)} className="btn delete">
              <img src="/icons/delete.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="cards">
          <div className="img">
            <img src="/images/card.png" alt="" />
          </div>
          <div className="mid">
            <h2>001</h2>
            <h3>
              Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги Ион-плазма ва
              лазер технологиялари институти
            </h3>
            <h4>
              Ключевое слово: <b>Физика / Точные науки / Узбекистан</b>
            </h4>

            <div className="cardFooter">
              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/calendar.svg" alt="" />
                </i>
                <p>12.12.2022</p>
              </div>

              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/download.svg" alt="" />
                </i>
                <p>200 000</p>
              </div>

              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/eye.svg" alt="" />
                </i>
                <p>200 000</p>
              </div>
            </div>
          </div>
          <div className="editWrap">
            <button className="btn edit">
              <img src="/icons/edit.svg" alt="" />
            </button>
            <button onClick={() => setIsModal(true)} className="btn delete">
              <img src="/icons/delete.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="cards">
          <div className="img">
            <img src="/images/card.png" alt="" />
          </div>
          <div className="mid">
            <h2>001</h2>
            <h3>
              Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги Ион-плазма ва
              лазер технологиялари институти
            </h3>
            <h4>
              Ключевое слово: <b>Физика / Точные науки / Узбекистан</b>
            </h4>

            <div className="cardFooter">
              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/calendar.svg" alt="" />
                </i>
                <p>12.12.2022</p>
              </div>

              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/download.svg" alt="" />
                </i>
                <p>200 000</p>
              </div>

              <div className="d-flex align-items-center">
                <i className="me-2">
                  <img src="/icons/eye.svg" alt="" />
                </i>
                <p>200 000</p>
              </div>
            </div>
          </div>
          <div className="editWrap">
            <button className="btn edit">
              <img src="/icons/edit.svg" alt="" />
            </button>
            <button onClick={() => setIsModal(true)} className="btn delete">
              <img src="/icons/delete.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <JournalDeleteModal isModal={isModal} setIsModal={setIsModal} />
    </>
  );
};

export default JournalCards;
