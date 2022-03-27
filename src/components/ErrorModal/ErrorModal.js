import React from "react";
import "./ErrorModal.css";

const ErrorModal = ({ error, closeModalButton }) => {
  return(
    <div className="error-modal" tabIndex="0">
      <div className="modal-content" role="dialog" aria-modal="true">
        <p id="errorMessage">{error}</p>
        <button
          onClick={() => closeModalButton()}
          className="close-button"
          name="close dialog"
        >
          &times;
        </button>
      </div>
    </div>
  )
};

export default ErrorModal
