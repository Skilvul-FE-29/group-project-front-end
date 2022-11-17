import React from "react";
import "../styles/DetailRequest.css";

function DetailRequest({ setOpenModal }) {
  return (
    <>
      <div className="detail-container">
        <div className="close-btn">
          <button className="btn-close" onClick={() => setOpenModal(false)}>
            X
          </button>
        </div>
        <div className="accordion-item">
          <div className="first-item item">
            <h3>Peserta Les</h3>
            <p>Individu</p>
          </div>

          <div className="second-item item">
            <h3>Detail Topik</h3>
            <p>Aljabar</p>
          </div>

          <div className="third-item item">
            <h3>Waktu Les</h3>
            <p>12.13.01</p>
            <h3>Jam</h3>
            <p>12.10 -13.30</p>
          </div>

          <div className="fourth-item item">
            <h3>Lokasi</h3>
            <p>online</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailRequest;
