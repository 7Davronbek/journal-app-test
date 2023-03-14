import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AdminLayout, Loading } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { journalAction } from "../redux/journalSlice";

const JournalId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { journal, isJournal } = useSelector((state) => state.journal);

  useEffect(() => {
    dispatch(journalAction.getJournal(id));
  }, [id]);

  return (
    <AdminLayout>
      <div className="JournalId CreateJournalForm">
        {isJournal ? (
          <Loading />
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="row">
            <div className="col-12 d-flex align-items-center justify-content-between mb-3">
              <h1>ID: {journal?.id}</h1>
              <Link to="/journals">
                <img src="/icons/close.svg" alt="" />
              </Link>
            </div>
            <div className="col-lg-3">
              <div className="imgWrap">
                <a target="_blank" href={journal?.image}>
                  <img
                    src={journal?.image}
                    style={{
                      width: "100%",
                      height: "337px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </a>
              </div>
              <div className="fileWrap">
                <a className="d-flex " target="_blank" href={journal?.pdf_file}>
                  <span className="me-2 ">
                    <img src="/icons/download.svg" alt="" />
                  </span>
                  {journal?.pdf_file}
                </a>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="d-flex align-items-center">
                <input
                  disabled
                  required
                  type="date"
                  value={journal?.date}
                  className="form-control me-3"
                />
                <input
                  required
                  disabled
                  value={journal?.keyword_ru}
                  type="text"
                  placeholder="Ключевое слово"
                  className="form-control"
                />
              </div>
              <input
                required
                disabled
                value={journal?.name_ru}
                type="text"
                placeholder="Название журнала"
                className="form-control"
              />
              <textarea
                required
                disabled
                value={journal?.description_ru}
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
                required
                disabled
                value={journal?.name_en}
                type="text"
                placeholder="Название журнала"
                className="form-control mb-4"
              />
              <input
                required
                disabled
                value={journal?.keyword_en}
                type="text"
                placeholder="Ключевое слово"
                className="form-control mb-4"
              />
              <textarea
                required
                disabled
                value={journal?.description_en}
                className="form-control mb-4"
                placeholder="Описание"
                id=""
                cols="30"
                rows="10"
              ></textarea>

              <h3 className="my-3">O'zbekcha</h3>
              <input
                required
                disabled
                value={journal?.name_uz}
                type="text"
                placeholder="Название журнала"
                className="form-control mb-4"
              />
              <input
                required
                disabled
                value={journal?.keyword_uz}
                type="text"
                placeholder="Ключевое слово"
                className="form-control mb-4"
              />
              <textarea
                required
                disabled
                value={journal?.description_uz}
                className="form-control mb-4"
                placeholder="Описание"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </form>
        )}
      </div>
    </AdminLayout>
  );
};

export default JournalId;
