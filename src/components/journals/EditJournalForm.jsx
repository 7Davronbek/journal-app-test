import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../admin/AdminLayout";
import axios from "../../utils/axios";
import { toast } from "react-toastify";

const EditJournalForm = () => {
  const { id } = useParams();

  const [singleJournal, setSingleJournal] = useState(null);
  const name_ru = useRef("");

  const getJournal = async () => {
    await axios
      .get(`/journal/${id}`)
      .then((res) => {
        setSingleJournal(res.data);
        name_ru.current.value = res.data.name_ru;
        console.log(name_ru.current.value);
      })
      .catch((err) => {
        toast.error("Network Error.");
      });
  };

  const updateJournal = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getJournal();
  }, [id]);

  return (
    <AdminLayout>
      <div className="EditJournalForm CreateJournalForm">
        <form onSubmit={updateJournal} className="row">
          <div className="col-12">
            <h1> Изменить</h1>
          </div>
          <div className="col-lg-3">
            <div className="imgWrap">
              <input
                required
                accept="image/png, image/jpeg, image/jpg, image/webp, image/svg"
                id="img"
                type="file"
                className="img"
                // onChange={(e) => setImage(e.target.files[0])}
              />

              <label htmlFor="img">
                {/* {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    style={{
                      width: "100%",
                      height: "337px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                ) : (
                  <img src="/icons/photo.svg" alt="" />
                )} */}
                <img src="/icons/photo.svg" alt="" />
              </label>
            </div>
            <div className="fileWrap">
              <input
                required
                accept=".pdf"
                type="file"
                className="file"
                id="file"
                // onChange={(e) => setPdf_file(e.target.files[0])}
              />
              <label htmlFor="file">
                Добавить файл{" "}
                <span className="ms-2">
                  <img src="/icons/download.svg" alt="" />
                </span>
              </label>
              {/* {pdf_file && pdf_file.name} */}
            </div>
          </div>

          <div className="col-lg-9">
            <div className="d-flex align-items-center">
              <input
                // ref={date}
                required
                type="date"
                className="form-control me-3"
              />
              <input
                // ref={keyword_ru}
                required
                type="text"
                placeholder="Ключевое слово"
                className="form-control"
              />
            </div>
            <input
              //   ref={name_ru}
              required
              type="text"
              placeholder="Название журнала"
              className="form-control"
            />
            <textarea
              //   ref={description_ru}
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
              //   ref={name_en}
              required
              type="text"
              placeholder="Название журнала"
              className="form-control mb-4"
            />
            <input
              //   ref={keyword_en}
              required
              type="text"
              placeholder="Ключевое слово"
              className="form-control mb-4"
            />
            <textarea
              //   ref={description_en}
              required
              className="form-control mb-4"
              placeholder="Описание"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <h3 className="my-3">O'zbekcha</h3>
            <input
              //   ref={name_uz}
              required
              type="text"
              placeholder="Название журнала"
              className="form-control mb-4"
            />
            <input
              //   ref={keyword_uz}
              required
              type="text"
              placeholder="Ключевое слово"
              className="form-control mb-4"
            />
            <textarea
              //   ref={description_uz}
              required
              className="form-control mb-4"
              placeholder="Описание"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <div className="buttonWrap">
              <Link to="/journals" className="btn back">
                Отменить
              </Link>
              <button
                // disabled={isCreateJournals}
                type="submit"
                className="btn save"
              >
                Сохранить
              </button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditJournalForm;
