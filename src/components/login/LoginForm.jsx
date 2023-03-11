import React, { useState } from "react";

const LoginForm = () => {
  const [passwordHidden, setPasswordHidden] = useState(false);
  const handleShowPassword = () => {
    setPasswordHidden(true);
    setTimeout(() => {
      setPasswordHidden(false);
    }, 2000);
  };
  return (
    <div className="LoginForm">
      <div className="row h-100">
        <div className="col-lg-5">
          <div className="cards">
            <div className="logo">
              <img src="/icons/logo.svg" alt="" />
            </div>
            <h1>С возвращением</h1>
            <h2>Пожалуйста, введите свои регистрационные данные ниже</h2>
            <div className="inputWrap">
              <label htmlFor="login">Логин</label>
              <input id="login" type="text" className="form-control" />
            </div>

            <div className="inputWrap">
              <label htmlFor="password">Пароль</label>

              <div className="eyeWrap">
                <input
                  id="password"
                  type={`${passwordHidden ? "text" : "password"}`}
                  className="form-control"
                />
                {!passwordHidden && (
                  <div className="eye">
                    <img
                      onClick={handleShowPassword}
                      src="/icons/eye-off.svg"
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>

            <button className="btn">
              Войти{" "}
              <span>
                <img src="/icons/login.svg" alt="" />
              </span>
            </button>

            <h3>
              У вас нет учетной записи?{" "}
              <a href="tel: +998943698058">Свяжитесь с нами</a>
            </h3>
          </div>
        </div>

        <div className="col-lg-6 ps-5 myCol">
          <h4>
            "Умные дома - это следующая большая вещь, будьте готовы к этим
            великим переменам, которые вот-вот произойдут".
          </h4>
          <h5>Kerlos Eskander</h5>
          <h6>Директор компании</h6>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
