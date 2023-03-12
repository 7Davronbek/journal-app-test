import React from "react";

const CreateJournalRu = ({ back }) => {
  return (
    <div className="CreateJournalRu">
      <div className="row">
        <div className="col-12">
          <h1>Добавить журналы</h1>
        </div>
        <div className="col-lg-3">
          <div className="imgWrap">
            <input
              accept="image/png, image/jpeg, image/jpg, image/webp, image/svg"
              id="img"
              type="file"
              className="img"
            />
            <label htmlFor="img">
              <img src="/icons/photo.svg" alt="" />
            </label>
          </div>
          <div className="fileWrap">
            <input
              accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              type="file"
              className="file"
              id="file"
            />
            <label htmlFor="file">
              Добавить файл{" "}
              <span className="ms-2">
                <img src="/icons/download.svg" alt="" />
              </span>
            </label>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="d-flex align-items-center">
            <input required type="date" className="form-control me-3" />
            <input
              required
              type="text"
              placeholder="Ключевое слово"
              className="form-control"
            />
          </div>
          <input
            required
            type="text"
            placeholder="Название журнала"
            className="form-control"
          />
          <textarea
            required
            className="form-control"
            placeholder="Описание"
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <div className="buttonWrap">
            <button onClick={back} className="btn back">
              Отменить
            </button>
            <button type="submit" className="btn save">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJournalRu;
