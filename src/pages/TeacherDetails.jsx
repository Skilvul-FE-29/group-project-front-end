import React, { useState } from 'react'
import TeacherImg from '../images/teacher-sample.png'
import Star from '../images/star.svg'
import '../styles/teacher-details.css'
import { Link } from 'react-router-dom'



const TeacherDetails = () => {

    const [isBio, setIsBio] = useState(true);
    const [isExp, setIsExp] = useState(false);
    const [isReview, setIsReview] = useState(false);

    const handleBio = () => {
        setIsBio(true);
        setIsExp(false);
        setIsReview(false);
    }

    const handleExp = () => {
        setIsBio(false);
        setIsExp(true);
        setIsReview(false);
    }

    const handleReview = () => {
        setIsBio(false);
        setIsExp(false);
        setIsReview(true);
    }

    return (
        <section id='teacher-details'>
            <section id="teacher-header" className="teacher-header">
                <div className="header-info">
                    <img src={TeacherImg} alt="" className="teacher-img" />
                    <div className="header-text">
                        <p className="name">Juliana Cameron</p>
                        <p className="jurusan">Ilmu Komputer | Universitas Gadjah Mada</p>
                        <p className="alamat">Sleman, DI Yogyakarta</p>
                    </div>
                </div>
                <div className="header-btn">
                    <button id="submit">Belajar dengan Albertus</button>
                    <Link to='/teachers'>Lihat Pengajar Lain</Link>
                </div>
            </section>
            <section className="teacher-main">
                <div className="sub-navbar">
                    <ul className="sub-navbar-menu">
                        <li id="nav-profil" onClick={handleBio} className={isBio ? "navbar-menu" : "navbar-menu hidden"} >Profil Diri</li>
                        <li id="nav-pengalaman" onClick={handleExp} className={isExp ? "navbar-menu" : "navbar-menu hidden"}>Pengalaman</li>
                        <li id="nav-ulasan" onClick={handleReview} className={isReview ? "navbar-menu" : "navbar-menu hidden"} > Ulasan</li>
                    </ul>
                </div>


                <section id="teacher-details">
                    <div id="profil-diri" className={isBio ? "sub-menu" : "sub-menu hidden"}>
                        <div className="deskripsi-diri">
                            <h2>Deskripsi Diri</h2>
                            <p>Hai semuanya, aku adalah seorang mahasiswa matematika yang sangat tertarik pada dunia belajar mengajar. Aku memiliki pengalaman mengajar selama 6 bulan sebagai pengajar freelance dan sering mengikuti berbagai pelatihan softskill</p>
                        </div>
                        <div className="profil-diri-bawah">
                            <div className="edukasi">
                                <h2>Edukasi</h2>
                                <div className="edukasi-univ">
                                    <p>Universitas Gadjah Mada</p>
                                    <p>Ilmu Komputer</p>
                                </div>
                                <div className="edukasi-menengah">
                                    <p>SMA Negeri 1 Klaten</p>
                                    <p>Jurusan IPA</p>
                                </div>
                            </div>
                            <div className="bidang-ajar">
                                <h2>Bidang Ajar</h2>
                                <ul id="bidang-ajar">
                                    <li>Matematika</li>
                                    <li>Statistika</li>
                                    <li>Kimia</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="pengalaman" className={isExp ? "sub-menu" : "sub-menu hidden"}>
                        <h2>Daftar Pengalaman</h2>
                        <div className="pengalaman-detail">
                            <p className="posisi">Freelance Mengajar</p>
                            <div className="pengalaman-status">
                                <p className="lokasi">Independen |</p>
                                <p className="mulai">Juli 2021 |</p>
                                <p className="selesai">Sekarang</p>
                            </div>
                            <p className="deskripsi">Saya telah menjadi freelance untuk mengajar anak SD hingga SMA pada mata pelajaran matematika selama 1 tahun terakhir</p>
                        </div>

                        <div className="pengalaman-detail">
                            <p className="posisi">Freelance Mengajar</p>
                            <div className="pengalaman-status">
                                <p className="lokasi">Independen |</p>
                                <p className="mulai">Juli 2021 |</p>
                                <p className="selesai">Sekarang</p>
                            </div>
                            <p className="deskripsi">Saya telah menjadi freelance untuk mengajar anak SD hingga SMA pada mata pelajaran matematika selama 1 tahun terakhir</p>
                        </div>
                    </div>

                    <div id="ulasan" className={isReview ? "sub-menu" : "sub-menu hidden"}>
                        <div id="rating-container" className="rating-pengajar">
                            <h2>Rating Pengajar</h2>
                            <div className="detail-rating">
                                <div className="bintang">
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                </div>
                                <p className='nama'>Albertus Handy</p>
                                <p className='deskripsi'>Kakaknya sangat sabar dan cara kakaknya ngajar ngga bikin aku bosen</p>
                            </div>
                            <div className="detail-rating">
                                <div className="bintang">
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                </div>
                                <p className='nama'>Albertus Handy</p>
                                <p className='deskripsi'>Kakaknya sangat sabar dan cara kakaknya ngajar ngga bikin aku bosen</p>
                            </div>
                        </div>
                        <div className="overall-rating">
                            <h2>Overall Rating</h2>
                            <div className="rating">
                                <img src={Star} alt="bintang" />
                                <h2>4,70</h2>
                            </div>
                            <p className="jumlah-ulasan">10 ulasan</p>
                        </div>
                    </div>
                </section>
            </section>
        </section >
    )
}

export default TeacherDetails