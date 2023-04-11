import React from "react";
import AdminLayout from "../../../components/admin/AdminLayout";
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const ConferenceMain = () => {
  return (
    <AdminLayout>
      <div className="ConferenceMain">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Конференции</h1>
          <Button variant="contained" endIcon={<AddOutlinedIcon />}>
            Send
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ConferenceMain;
