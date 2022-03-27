import React from "react";
import "./ErrorModal.css"

const ErrorModal = ({error, closeModal}) => {
  <div className="error-modal" tabindex="0" class="modal">
      <div className="modal-content" role="dialog" aria-modal="true">
        <p id="errorMessage">
          {error}
        </p>
        <button className="close button-62" role="button" name="close dialog">&times;</button>
      </div>
    </div>
}