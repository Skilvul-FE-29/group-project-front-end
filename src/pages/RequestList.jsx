import axios from "axios";
import React, { useEffect, useState } from "react";
// import DetailRequest from "../components/DetailRequest";
import "../styles/RequestList.css";
import "../styles/DetailRequest.css";

function RequestList() {
  const [dataRequest, setDataRequest] = useState([]);

  useEffect(() => {
    axios
      .get("https://634a01375df95285140a732e.mockapi.io/order")
      .then((res) => {
        setDataRequest(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="order-container">
        <h1 className="order-title">Daftar Pesanan</h1>
        {dataRequest.map((item) => (
          <div className="order-wrapper" key={item.id}>
            <div className="order-top">
              <div className="order-les">
                <h3 className="order-les-title">Les {item.materi.topik}</h3>
                <span className="order-les-date">
                  dipesan tanggal {item.waktu.tanggal}
                </span>
              </div>
              <div className="order-status">
                <span>Terbayar</span>
              </div>
            </div>
            <div className="order-bottom">
              <div className="button-left">
                <button className="btn btn-detail-pelamar">
                  Lihat Daftar Pelamar
                </button>
              </div>
              <div className="button-right">
                <button className="btn-payment">Bayar Pesanan</button>
              </div>
            </div>

            <div className="detail-container">
              <div className="detail-item">
                <div className="left-detail">
                  <div className="first-item item">
                    <h3>Peserta Les : </h3>
                    <p> {item.peserta}</p>
                  </div>

                  <div className="second-item item">
                    <h3>Detail Topik : </h3>
                    <p>{item.materi.detail}</p>
                  </div>
                </div>

                <div className="right-detail">
                  <div className="third-item item">
                    <h3>Waktu Les : </h3>
                    <p> {item.waktu.tanggal}</p>

                    <h3>Jam : </h3>
                    <p>
                      {item.waktu.mulai} - {item.waktu.selesai}
                    </p>
                  </div>

                  <div className="fourth-item item">
                    <h3>Lokasi : </h3>
                    <p>{item.lokasi}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RequestList;
