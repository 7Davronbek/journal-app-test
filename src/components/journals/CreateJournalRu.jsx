import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { journalAction } from "../../redux/journalSlice";
import { useNavigate } from "react-router-dom";

const CreateJournalRu = ({ back }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCreateJournals } = useSelector((state) => state.journal);

  const [pdf_file, setPdf_file] = useState(null);
  const [image, setImage] = useState(null);

  const date = useRef("");
  const name_ru = useRef("");
  const description_ru = useRef("");
  const keyword_ru = useRef("");

  const name_en = useRef("");
  const description_en = useRef("");
  const keyword_en = useRef("");

  const name_uz = useRef("");
  const description_uz = useRef("");
  const keyword_uz = useRef("");

  const createJournal = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("date", date.current.value);
    formData.append("image", image);
    formData.append("pdf_file", pdf_file);

    formData.append("name_ru", name_ru.current.value);
    formData.append("description_ru", description_ru.current.value);
    formData.append("keyword_ru", keyword_ru.current.value);

    formData.append("name_uz", name_uz.current.value);
    formData.append("description_uz", description_uz.current.value);
    formData.append("keyword_uz", keyword_uz.current.value);

    formData.append("name_en", name_en.current.value);
    formData.append("description_en", description_en.current.value);
    formData.append("keyword_en", keyword_en.current.value);

    dispatch(journalAction.createJournal({ formData, navigate }));
  };

  return (
    <div className="CreateJournalRu ">
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
        </div>

        <div className="col-12 mt-5">
          <h3 className="mb-3">In English</h3>
          <input
            ref={name_en}
            required
            type="text"
            placeholder="Название журнала"
            className="form-control mb-4"
          />
          <input
            ref={keyword_en}
            required
            type="text"
            placeholder="Ключевое слово"
            className="form-control mb-4"
          />
          <textarea
            ref={description_en}
            required
            className="form-control mb-4"
            placeholder="Описание"
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <h3 className="my-3">O'zbekcha</h3>
          <input
            ref={name_uz}
            required
            type="text"
            placeholder="Название журнала"
            className="form-control mb-4"
          />
          <input
            ref={keyword_uz}
            required
            type="text"
            placeholder="Ключевое слово"
            className="form-control mb-4"
          />
          <textarea
            ref={description_uz}
            required
            className="form-control mb-4"
            placeholder="Описание"
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <div className="buttonWrap">
            <button onClick={back} className="btn back">
              Отменить
            </button>
            <button
              disabled={isCreateJournals}
              type="submit"
              className="btn save"
            >
              Сохранить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateJournalRu;
