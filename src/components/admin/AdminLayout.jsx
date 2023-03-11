import React from "react";
import { Link } from "react-router-dom";

const AdminLayout = (props) => {
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
            <button className="btn">
              Выйти{" "}
              <span className="ms-2">
                <img src="/icons/logoutBlue.svg" alt="" />
              </span>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            leftLayout Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Porro consequuntur aliquam consectetur maxime distinctio nobis ullam
            laborum fuga officiis! Nobis deserunt rem pariatur explicabo
            perferendis aut sed facilis ad autem!
          </div>
          <div className="col-9">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
