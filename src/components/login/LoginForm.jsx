import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../redux/authSlice";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const [passwordHidden, setPasswordHidden] = useState(false);
  //   const [login, setLogin] = useState("");
  //   const [password, setPassword] = useState("");
  const login = useRef("");
  const password = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      authAction.login({
        login: login.current.value,
        password: password.current.value,
      })
    );
  };

  const handleShowPassword = () => {
    setPasswordHidden(true);
    setTimeout(() => {
      setPasswordHidden(false);
    }, 2000);
  };
  return (
    <div className="LoginForm">
      <div className="row h-100">
        <form onSubmit={handleSubmit} className="col-lg-5">
          <div className="cards">
            <div className="logo">
              <img src="/icons/logo.svg" alt="" />
            </div>
            <h1>С возвращением</h1>
            <h2>Пожалуйста, введите свои регистрационные данные ниже</h2>
            <div className="inputWrap">
              <label htmlFor="login">Логин</label>
              <input
                required
                ref={login}
                id="login"
                type="text"
                className="form-control"
              />
            </div>

            <div className="inputWrap">
              <label htmlFor="password">Пароль</label>

              <div className="eyeWrap">
                <input
                  required
                  ref={password}
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

            <Link to='/journals' disabled={isLoading} type="submit" className="btn">
              Войти{" "}
              <span>
                <img src="/icons/login.svg" alt="" />
              </span>
            </Link>

            <h3>
              У вас нет учетной записи?{" "}
              <a href="tel: +998943698058">Свяжитесь с нами</a>
            </h3>
          </div>
        </form>

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
