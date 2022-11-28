import React from "react";
import { Link } from "react-router-dom";
import "../styles/HistoryLes.css";

const HistoryLes = () => {
  return (
    <div className="history">
      <div className="history-container">
        <div className="sch-title">
          <h1 className="title">History Les</h1>
        </div>

        <div className="sch-wrapper-card">
          <div className="sch-card-item">
            <div className="shc-card-left">
              <h3>Matematika Dasar : Pertemuan 1</h3>
              <p>
                Pengajar : <span>Putri Dresty F</span>
              </p>
              <p>
                Hari/Tanggal : <span>Senin, 17 Oktober 2022</span>
              </p>
              <p>
                Waktu : <span>14.00 - 15.00 WIB</span>
              </p>
            </div>
            <div className="sch-card-right">
              <Link to={"/review"}>
                <button className="btn-detail-sesi">Review Pengajar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryLes;
