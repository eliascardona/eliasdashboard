import React, { useEffect, useState } from "react";

const ModalDelete = (props) => {
  const [dialogDetails, setDialogDetails] = useState({
    open: true,
    success: false,
  });

  useEffect(() => {
    props.sendDeleteCallback(dialogDetails);
  },[dialogDetails])

  const handleClose = (e) => {
    e.preventDefault();
    setDialogDetails({
      ...dialogDetails,
      open: false,
    });
  };

  const handleSuccess = (e) => {
    e.preventDefault();
    setDialogDetails({
      ...dialogDetails,
      success: true,
      open: false,
    });
  };


  return (
    <div
      className="my_modal_outer"
      style={{ display: dialogDetails.open ? "flex" : "none" }}
    >
      <div className="my_modal">
        <div className="my_modal_header">
          <h5>Delete Course/Video?</h5>
          <div onClick={handleClose} style={{ cursor: "pointer" }}>
            <i className="bi bi-x-lg"></i>
          </div>
        </div>
        <div className="my_modal_content">
          Are you sure you want to delete the course/video? Once you delete the course, it can not revert back.
        </div>
        <div className="my_modal_actions">
          <button className="btn btn-outline-secondary me-2" onClick={handleClose}>
            No
          </button>
          <button className="btn btn-outline-primary" onClick={handleSuccess}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
