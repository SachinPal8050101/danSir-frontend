import React, { Component } from 'react';
import '../style/modalStyle.css'

const ReactCustomModal =(props) => {
  const closeCustomModal=()=>{
   props.setShowModal(false)
  }
    return (
        <div className="modal-content">

          <div className="modal-header">
            <span className="close" onClick={closeCustomModal}>&times;</span>
            <h4>Amount Added Successfully</h4>
          </div>
        </div>
    );
}

export default ReactCustomModal;

