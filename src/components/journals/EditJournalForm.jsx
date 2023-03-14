import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../admin/AdminLayout";
import axios, { CONFIG } from "../../utils/axios";
import { toast } from "react-toastify";

const EditJournalForm = () => {
  const { id } = useParams();

  const [singleJournal, setSingleJournal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPosted, setIsPosted] = useState(false);

  const [date, setDate] = useState("");
  const [pdf_file, setPdf_file] = useState(null);
  const [image, setImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);
  const [pdfChanged, setPdfChanged] = useState(false);

  const [name_ru, setName_ru] = useState("");
  const [description_ru, setDescription_ru] = useState("");
  const [keyword_ru, setKeyword_ru] = useState("");

  const [name_en, setName_en] = useState("");
  const [description_en, setDescription_en] = useState("");
  const [keyword_en, setKeyword_en] = useState("");

  const [name_uz, setName_uz] = useState("");
  const [description_uz, setDescription_uz] = useState("");
  const [keyword_uz, setKeyword_uz] = useState("");

  const getJournal = async () => {
    setIsLoading(true);
    await axios
      .get(`/journal/${id}`)
      .then((res) => {
        setSingleJournal(res.data);
        setImage(res.data.image);
        setPdf_file(res.data.pdf_file);

        setDate(res.data.date);
        setName_ru(res.data.name_ru);
        setDescription_ru(res.data.description_ru);
        setKeyword_ru(res.data.keyword_ru);
        setName_en(res.data.name_en);
        setDescription_en(res.data.description_en);
        setKeyword_en(res.data.keyword_en);
        setName_uz(res.data.name_uz);
        setDescription_uz(res.data.description_uz);
        setKeyword_uz(res.data.keyword_uz);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Network Error.");
        setIsLoading(false);
      });
  };

  const updateJournal = async (e) => {
    e.preventDefault();
    setIsPosted(true);
    const formData = new FormData();
    formData.append("date", date);
    formData.append("image", image);
    formData.append("pdf_file", pdf_file);

    formData.append("name_ru", name_ru);
    formData.append("description_ru", description_ru);
    formData.append("keyword_ru", keyword_ru);

    formData.append("name_uz", name_uz);
    formData.append("description_uz", description_uz);
    formData.append("keyword_uz", keyword_uz);

    formData.append("name_en", name_en);
    formData.append("description_en", description_en);
    formData.append("keyword_en", keyword_en);

    await axios
      .patch(`/user/journal_update/${id}/`, formData, CONFIG)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getJournal();
  }, [id]);

  return (
    <AdminLayout>
      <div className="EditJournalForm CreateJournalForm">
        {isLoading ? (
          <h5>Loading...</h5>
        ) : (
          <form onSubmit={updateJournal} className="row">
            <div className="col-12">
              <h1> Изменить</h1>
            </div>
            <div className="col-lg-3">
              <div className="imgWrap">
                <input
                  //   required
                  accept="image/png, image/jpeg, image/jpg, image/webp, image/svg"
                  id="img"
                  type="file"
                  className="img"
                  onChange={(e) => {
                    setImage(e.target.files[0]), setImageChanged(true);
                  }}
                />

                <label htmlFor="img">
                  {imageChanged ? (
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
                    image && (
                      <img
                        src={image}
                        style={{
                          width: "100%",
                          height: "337px",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    )
                  )}
                </label>
              </div>
              <div className="fileWrap">
                <input
                  //   required
                  accept=".pdf"
                  type="file"
                  className="file"
                  id="file"
                  onChange={(e) => {
                    setPdf_file(e.target.files[0]), setPdfChanged(true);
                  }}
                />
                <label htmlFor="file">
                  Добавить файл{" "}
                  <span className="ms-2">
                    <img src="/icons/download.svg" alt="" />
                  </span>
                </label>
                {pdfChanged ? (
                  <a target="_blank" href={pdf_file}>
                    {pdf_file.name}
                  </a>
                ) : (
                  pdf_file && (
                    <a target="_blank" href={pdf_file}>
                      {pdf_file}
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="col-lg-9">
              <div className="d-flex align-items-center">
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  type="date"
                  className="form-control me-3"
                />
                <input
                  value={keyword_ru}
                  onChange={(e) => setKeyword_ru(e.target.value)}
                  required
                  type="text"
                  placeholder="Ключевое слово"
                  className="form-control"
                />
              </div>
              <input
                value={name_ru}
                onChange={(e) => setName_ru(e.target.value)}
                required
                type="text"
                placeholder="Название журнала"
                className="form-control"
              />
              <textarea
                value={description_ru}
                onChange={(e) => setDescription_ru(e.target.value)}
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
                value={name_en}
                onChange={(e) => setName_en(e.target.value)}
                required
                type="text"
                placeholder="Название журнала"
                className="form-control mb-4"
              />
              <input
                value={keyword_en}
                onChange={(e) => setKeyword_en(e.target.value)}
                required
                type="text"
                placeholder="Ключевое слово"
                className="form-control mb-4"
              />
              <textarea
                value={description_en}
                onChange={(e) => setDescription_en(e.target.value)}
                required
                className="form-control mb-4"
                placeholder="Описание"
                id=""
                cols="30"
                rows="10"
              ></textarea>

              <h3 className="my-3">O'zbekcha</h3>
              <input
                value={name_uz}
                onChange={(e) => setName_uz(e.target.value)}
                required
                type="text"
                placeholder="Название журнала"
                className="form-control mb-4"
              />
              <input
                value={keyword_uz}
                onChange={(e) => setKeyword_uz(e.target.value)}
                required
                type="text"
                placeholder="Ключевое слово"
                className="form-control mb-4"
              />
              <textarea
                value={description_uz}
                onChange={(e) => setDescription_uz(e.target.value)}
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
        )}
      </div>
    </AdminLayout>
  );
};

export default EditJournalForm;
