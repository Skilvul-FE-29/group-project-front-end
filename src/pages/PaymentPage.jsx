import React from 'react'
import dana from "../images/dana.png";
import linkaja from "../images/linkaja.png"
import '../styles/PaymentPage.css'

const PaymentPage = () => {
  return (
    <div className='payment'>
        <section className="left">
            <h2>Pesanan Kamu</h2>

            <div className="name">
                <h3>Dipesan oleh : </h3>
                <p>Putri Dresty</p>
            </div>
            <div className="class-name">
                <h3>Nama Kelas : </h3>
                <p>Matematika Aljabar</p>
            </div>
            <div className="mentor">
                <h3>Nama Mentor : </h3>
                <p>Putri Dresty</p>
            </div>
            <div className="sum-peserta">
                <h3>Jumlah Peserta : </h3>
                <p>1 orang/sesi</p>
            </div>
            <div className="loc">
                <h3>Lokasi Pembelajaran : </h3>
                <p>Online - Zoom Meeting</p>
            </div>
        </section>
        <section className="right">
            <div className="title">
                <h1 className='title-h1'>Pembayaran</h1>
                <p className='title-p'>Silahkan pilih pembayaran yang tertera dibawaah :</p>
            </div>
            <div className="card">
                <div className="card-payment">
                    <img src={dana} alt=""/>
                    <div className="info-payment">
                        <p className='p-title'>DANA</p>
                        <p className='p-title'>089990990876</p>
                        <p className='p-title'>A/N. Putri Dresty</p>
                    </div>
                </div>
                <div className="card-payment">
                        <img src={linkaja} alt=""/>
                        <div className="info-payment">
                            <p className='p-title'>LINK AJA</p>
                            <p className='p-title'>089990990876</p>
                            <p className='p-title'>A/N. Putri Dresty</p>
                        </div>
                    </div>
                <form action="" className='form-bukti'>
                    <div className="card-bukti">
                        <h3>Total Pembayaran : Rp 100.000-,</h3>
                        <label htmlFor="up-bukti">Upload Bukti Pembayaran :</label>
                        <input type="file" name='up-bukti'/>
                    </div>
                    <button className='btn-bayar'>Bayar Sekarang</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default PaymentPage