import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const JournalSearch = ({ value, onSearch }) => {
  const { journals } = useSelector((state) => state.journal);
  return (
    <>
      {journals &&
        journals
          .filter((item, index) => {
            const searchKey = value?.toLowerCase();
            const title = item.name_ru?.toLowerCase();

            return searchKey && title.startsWith(searchKey);
          })
          .slice(0, 5)
          .map((item) => (
            <div key={item.id} className="cardsWrap">
              {" "}
              <h5 className="mb-3">
                <Link to={`/journal/${item.id}`}>{item.name_ru}</Link>
              </h5>
            </div>
          ))}
    </>
  );
};

export default JournalSearch;
