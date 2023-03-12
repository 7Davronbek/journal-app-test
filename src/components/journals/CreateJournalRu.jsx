import React from "react";

const CreateJournalRu = ({ back }) => {
  return (
    <div className="CreateJournalRu">
      <div className="row">
        <div className="col-12">
          <h1>Добавить журналы</h1>
        </div>
        <div className="col-lg-2">
          <div className="imgWrap">
            <input id="img" type="file" className="img"></input>
            <label htmlFor="img">
              <img src="/icons/photo.svg" alt="" />
            </label>
          </div>
          <div className="fileWrap">
            <input type="file" className="file" id="file" />
            <label htmlFor="file"></label>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="d-flex align-items-center">
            <input type="date" className="form-control" />
            <input
              type="text"
              placeholder="Ключевое слово"
              className="form-control"
            />
          </div>
          <input
            type="text"
            placeholder="Название журнала"
            className="form-control"
          />
          <textarea
            className="form-control"
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <div className="buttonWrap">
            <button onClick={back} className="btn back">
              Отменить
            </button>
            <button className="btn save">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJournalRu;
