import React, { useState } from "react";
import DetailRequest from "../components/requestlist/DetailRequest";
import "./RequestList.css";

function RequestList() {
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
  };

  return (
    <>
      <div className="order-container">
        <h1 className="order-title">Daftar Pesanan</h1>
        <div className="order-wrapper">
          <div className="order-top">
            <div className="order-les">
              <h3 className="order-les-title">Les Matematika</h3>
              <span className="order-les-date">dipesan tanggal 12.12.12</span>
            </div>
            <div className="order-status">
              <span>Terbayar</span>
            </div>
          </div>
          <div className="order-bottom">
            <div className="button-left">
              <button
                className="btn btn-detail-request"
                onClick={handleOpenModal}
              >
                Lihat Detail Pesanan
              </button>
              <button className="btn btn-detail-pelamar">
                Lihat Daftar Pelamar
              </button>
            </div>
            <div className="button-right">
              <button className="btn-payment">Bayar Pesanan</button>
            </div>
          </div>
          {show ? <DetailRequest setOpenModal={setShow} /> : null}
        </div>
      </div>
    </>
  );
}

export default RequestList;
