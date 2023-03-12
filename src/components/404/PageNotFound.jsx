import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="PageNotFound py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="text-dark">
              Page Not Found!{" "}
              <Link className="text-primary border-bottom" to="/login">
                Go Login
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
