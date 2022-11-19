import React from "react";
import "../styles/orderform.css";
import { useState } from "react";

const OrderForm = () => {
  const [pesertales, setPesertaLes] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [topik, setTopik] = useState("");
  const [detailTopik, setDetailTopik] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [mulai, setMulai] = useState("");
  const [selesai, setSelesai] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [informasi, setInformasi] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({pesertales})
    setPesertaLes("")
  };

  return (
    <div className="container">
      <div className="form-title">
        <h1>Pesan Les</h1>
        <p>Yuk jadwalkan les sekarang dan mulai belajar </p>
        <form action="" className="form-section" onSubmit={handleSubmit}>
          <div className="peserta-les">
            <h3>Peserta les</h3>

            <div className="radio-peserta">
              <input
                type="radio"
                name="peserta-les"
                value="individu"
                checked={pesertales === "individu"}
                id="rd-individu"
                onChange={(e) => setPesertaLes(e.target.value)}
              />
              Individu
              <input
                type="radio"
                name="peserta-les"
                value="kelompok"
                checked={pesertales === "kelompok"}
                id="rd-kelompok"
                onChange={(e) => setPesertaLes(e.target.value)}
              />{" "}
              Kelompok
            </div>
          </div>
          <div className="materi">
            <h3>Materi</h3>
            <p>Jenjang pendidikan</p>

            <div className="rd-pendidikan">
              <input type="radio" name="pendidikan" value="SD" id="rd-sd" /> SD
              <input
                type="radio"
                name="pendidikan"
                value="SMP"
                id="rd-smp"
              />{" "}
              SMP
              <input
                type="radio"
                name="pendidikan"
                value="SMP"
                id="rd-sma"
              />{" "}
              SMA
            </div>

            <p>Topik</p>
            <select name="" id="select-topik">
              <option value="Matematika">Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Kimia">Kimia</option>
              <option value="Biologi">Biologi</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="IPA">IPA</option>
              <option value="IPS">IPS</option>
            </select>

            <p>Detail Topik</p>
            <textarea
              name=""
              id="detail-topik"
              cols="100"
              rows="5"
              placeholder="Jelaskan materi apa yang kamu ingin pelajari"></textarea>
          </div>
          <div className="waktu-les">
            <h3>Waktu Les</h3>

            <p>Tanggal Les</p>
            <input type="date" id="date" />

            <p>Jam Mulai</p>
            <input type="time" id="mulai" />

            <p>Jam Selesai</p>
            <input type="time" id="selesai" />
          </div>
          <div className="lokasi-les">
            <h3>Lokasi Les</h3>
            <input type="radio" name="lokasi" id="rd-on" value="online" />{" "}
            Online
            <input
              type="radio"
              name="lokasi"
              id="rd-off"
              value="offline"
            />{" "}
            Offline
          </div>
          <div className="info">
            <h3>Informasi Tambahan</h3>
            <p>Catatan tambahan untuk pengajarmu</p>
            <textarea name="" id="info-tambahan"></textarea>
          </div>
          <div className="button">
            <button id="btn-batal">Batalkan Pesanan</button>
            <button id="btn-pesan" type="submit">
              Pesan Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
