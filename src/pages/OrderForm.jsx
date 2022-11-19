import React from "react";
import { Link } from "react-router-dom";
import '../styles/orderform.css'

const OrderForm = () => {
    return (
        <div className="form-order">
            <h1>Pesan Les</h1>
            <p>Yuk jadwalkan les sekarang dan mulai belajar </p>
            <form action="" className="form-container">
                <div className="pengajar-les">
                    <img src="" alt="foto-pengajar" />
                    <p>Albertus Handy Pramana Rendra</p>
                    <p>Universitas Gadjah Mada | Ilmu Komputer</p>
                    <p>Rp50.000 | 1 jam</p>
                </div>

                <div className="materi">
                    <h3 className="form-heading">Materi</h3>
                    <p>Jenjang pendidikan</p>

                    <div className="input-jenjang">
                        <input type="radio" name="pendidikan" value="SD" id="rd-sd" />
                        <label htmlFor="rd-sd">SD</label>
                        <input type="radio" name="pendidikan" value="SMP" id="rd-smp" />
                        <label htmlFor="rd-smp">SMP</label>
                        <input type="radio" name="pendidikan" value="SMP" id="rd-sma" />
                        <label htmlFor="rd-sma">SMA</label>
                    </div>

                    <div className="input-topik">
                        <p>Topik</p>
                        <input type="text" placeholder="Matematika" />
                    </div>

                    <div className="input-detail-topik">
                        <p>Detail Topik</p>
                        <textarea name="" id="detail-topik" cols="100" rows="5"
                            placeholder="Jelaskan materi apa yang kamu ingin pelajari"></textarea>
                    </div>
                </div>

                <div className="waktu-les">
                    <h3 className="form-heading">Waktu Les</h3>

                    <div className="waktu-input">
                        <div className="waktu-top">
                            <p>Tanggal Les</p>
                            <input type="date" id="date" />
                        </div>

                        <div className="waktu-bottom">
                            <div className="mulai-container">
                                <p>Jam Mulai</p>
                                <input type="time" id="mulai" />
                            </div>

                            <div className="durasi-container">
                                <p>Durasi</p>
                                <input type="number" placeholder="menit" className="durasi" />
                            </div>
                        </div>
                    </div>


                </div>

                <div className="lokasi-les">
                    <h3 className="form-heading">Lokasi Les</h3>

                    <div className="mode-pembelajaran">
                        <input type="radio" name="lokasi" id="rd-on" value="online" />
                        <label htmlFor="rd-on">Online</label>
                        <input type="radio" name="lokasi" id="rd-off" value="offline" />
                        <label htmlFor="rd-off">Offline</label>
                    </div>

                    <div className="detail-lokasi">
                        <div className="alamat-lengkap">
                            <p>Alamat</p>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Tuliskan alamatmu selengkap mungkin"></textarea>
                        </div>
                        <label htmlFor="maps">Lokasi Maps</label>
                        <input type="text" name="maps" placeholder="Link google maps" />
                    </div>
                </div>

                <div className="info-tambahan">
                    <h3 className="form-heading">Informasi Tambahan</h3>
                    <p>Catatan untuk pengajar</p>
                    <textarea name="" id="info-tambahan" placeholder="Banyakin latihan soal ya"></textarea>
                </div>
                <div className="button">
                    <Link to='/teacher' id="btn-batal">Batalkan Pesanan</Link>
                    <button id="btn-pesan" type="submit">Pesan Sekarang</button>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;
