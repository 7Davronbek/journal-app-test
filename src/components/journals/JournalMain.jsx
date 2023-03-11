import React from "react";
import AdminLayout from "../admin/AdminLayout";

const JournalMain = () => {
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
            <button className="btn">
              Добавить{" "}
              <span className="ms-2">
                <img src="/icons/plus.svg" alt="" />
              </span>
            </button>
          </div>
        </div>

        <div className="bottomWrap">
          <div className="row">
            <div className="col-lg-6">
              <div className="cards">
                <div className="img">
                  <img src="/images/card.png" alt="" />
                </div>
                <div className="mid">
                  <h2>001</h2>
                  <h3>
                    Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги
                    Ион-плазма ва лазер технологиялари институти
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
                    <button className="btn edit"><img src="/icons/edit.svg" alt="" /></button>
                    <button className="btn delete"><img src="/icons/delete.svg" alt="" /></button>
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
                    Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги
                    Ион-плазма ва лазер технологиялари институти
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
                    <button className="btn edit"><img src="/icons/edit.svg" alt="" /></button>
                    <button className="btn delete"><img src="/icons/delete.svg" alt="" /></button>
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
                    Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги
                    Ион-плазма ва лазер технологиялари институти
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
                    <button className="btn edit"><img src="/icons/edit.svg" alt="" /></button>
                    <button className="btn delete"><img src="/icons/delete.svg" alt="" /></button>
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
                    Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги
                    Ион-плазма ва лазер технологиялари институти
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
                    <button className="btn edit"><img src="/icons/edit.svg" alt="" /></button>
                    <button className="btn delete"><img src="/icons/delete.svg" alt="" /></button>
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
                    Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги
                    Ион-плазма ва лазер технологиялари институти
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
                    <button className="btn edit"><img src="/icons/edit.svg" alt="" /></button>
                    <button className="btn delete"><img src="/icons/delete.svg" alt="" /></button>
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
                    Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги
                    Ион-плазма ва лазер технологиялари институти
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
                    <button className="btn edit"><img src="/icons/edit.svg" alt="" /></button>
                    <button className="btn delete"><img src="/icons/delete.svg" alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default JournalMain;
