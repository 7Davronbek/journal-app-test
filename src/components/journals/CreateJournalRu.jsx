import React, { useRef, useState } from "react";

const CreateJournalRu = ({ back }) => {
  const [pdf_file, setPdf_file] = useState("");
  const [image, setImage] = useState("");

  const name_ru = useRef("");
  const description_ru = useRef("");
  const keyword_ru = useRef("");
  const date = useRef("");

  const createJournal = (e) => {
    e.preventDefault();
    const data = {
      name_ru: name_ru.current.value,
      description_ru: description_ru.current.value,
      keyword_ru: keyword_ru.current.value,
      date: date.current.value,
      image,
      pdf_file,
      date,
    };
    console.log(data);
  };

  return (
    <div className="CreateJournalRu">
      <form onSubmit={createJournal} className="row">
        <div className="col-12">
          <h1>Добавить журналы</h1>
        </div>
        <div className="col-lg-3">
          <div className="imgWrap">
            <input
              required
              accept="image/png, image/jpeg, image/jpg, image/webp, image/svg"
              id="img"
              type="file"
              className="img"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <label htmlFor="img">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  style={{ width: "100%", height: "337px", objectFit: "cover" }}
                  alt=""
                />
              ) : (
                <img src="/icons/photo.svg" alt="" />
              )}
            </label>
          </div>
          <div className="fileWrap">
            <input
              required
              accept=".pdf"
              type="file"
              className="file"
              id="file"
              onChange={(e) => setPdf_file(e.target.files[0])}
            />
            <label htmlFor="file">
              Добавить файл{" "}
              <span className="ms-2">
                <img src="/icons/download.svg" alt="" />
              </span>
            </label>
            {pdf_file && pdf_file.name}
          </div>
        </div>

        <div className="col-lg-9">
          <div className="d-flex align-items-center">
            <input
              ref={date}
              required
              type="date"
              className="form-control me-3"
            />
            <input
              ref={keyword_ru}
              required
              type="text"
              placeholder="Ключевое слово"
              className="form-control"
            />
          </div>
          <input
            ref={name_ru}
            required
            type="text"
            placeholder="Название журнала"
            className="form-control"
          />
          <textarea
            ref={description_ru}
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
      </form>
    </div>
  );
};

export default CreateJournalRu;
