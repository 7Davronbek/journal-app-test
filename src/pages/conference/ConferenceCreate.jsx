import React from "react";
import { AdminLayout } from "../../components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./style/index.scss";
import { useEffect } from "react";
import axios from "axios";
import { API_PATH } from "../../constants";
import { CONFIG } from "../../utils/axios";

const ConferenceCreate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getDash = () => {
      axios.get(API_PATH + "/user/dashboard/", CONFIG);
    };
    getDash();
  }, []);
  return (
    <AdminLayout>
      <div className="ConferenceCreate">
        <div className="flex align-items-center justify-between mb-5">
          <Typography variant="h4" gutterBottom className="text-lg">
            Добавить конференцию
          </Typography>
          <CloseOutlinedIcon
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </div>

        <div className="flex align-items-center">
          <TextField
            type="date"
            className="me-4"
            required
            id="standard-basic"
            variant="standard"
            fullWidth
          />

          <TextField
            fullWidth
            id="Phone-number-basic"
            className="me-4"
            type="number"
            label="Phone number"
            required
            variant="standard"
          />
          <TextField
            fullWidth
            id="Email-basic"
            className="me-4"
            label="Email"
            type="email"
            required
            variant="standard"
          />
        </div>

        <Typography variant="h5" gutterBottom className="text-lg my-5">
          На русском{" "}
        </Typography>
      </div>
    </AdminLayout>
  );
};

export default ConferenceCreate;
