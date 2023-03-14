import React from "react";

const Loading = () => {
  return (
    <span className="text-center py-5 d-flex align-items-center justify-content-center">
      <b>Loading </b>{" "}
      <span
        style={{ color: "#3c4bdc" }}
        className="spinner-border spinner-border-sm ms-2"
      ></span>
    </span>
  );
};

export default Loading;
