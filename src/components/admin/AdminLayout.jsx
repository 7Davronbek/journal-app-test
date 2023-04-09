import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminLayout = (props) => {
  const location = useLocation();
  return (
    <div className="AdminLayout">
      <div className="container">
        <div className="row myRow">
          <div className="col-7 navbarWrap">
            <div className="logo">
              <Link to="/">
                <img src="/icons/logo.svg" alt="" />
              </Link>
            </div>
            <Link to="/">Журналы</Link>
            <Link to="/">Статья</Link>
            <Link to="/">Авторы</Link>
            <Link to="/">Организации</Link>
            <Link to="/">
              Пресс-служба{" "}
              <span>
                <img src="/icons/arrowDown.svg" alt="" />
              </span>
            </Link>
            <Link to="/">Контакт</Link>
          </div>

          <div className="col-5 navbarWrap justify-content-around">
            <div className="inputWrap">
              <span className="me-2">
                <img src="/icons/search.svg" alt="" />
              </span>
              <input className="form-control" type="text" placeholder="Поиск" />
            </div>
            <select>
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="uz">O'zbek</option>
            </select>
            <Link to="/login" className="btn">
              Выйти{" "}
              <span className="ms-2">
                <img src="/icons/logoutBlue.svg" alt="" />
              </span>
            </Link>
          </div>
        </div>

        <div className="row bottomRow">
          <div className="col-2 ">
            <div className=" leftSide">
              <Link
                className={`${
                  location.pathname === "/create-journal" && "active"
                }`}
                to="/create-journal"
              >
                <i className="icon icon1"></i>Аналитика
              </Link>
              <Link
                className={`${location.pathname === "/journals" && "active"}`}
                to="/journals"
              >
                <i className="icon icon2"></i>Журналы
              </Link>
              <Link 
                className={`${location.pathname === "/articles" && "active"}`}
                to="/articles"
                >
                <i className="icon icon3"></i>Статьи
              </Link>
              <Link to="/journals">
                <i className="icon icon4"></i>Конференции
              </Link>
              <Link to="/journals">
                <i className="icon icon5"></i>Семинары
              </Link>
              <Link to="/journals">
                <i className="icon icon6"></i>Настройки
              </Link>
              <Link className="last" to="/login">
                <i className="icon icon7"></i>Выйти
              </Link>
            </div>
          </div>
          <div className="col-lg-10 rightAdmin">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
