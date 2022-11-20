import React, { useEffect } from "react";
import TeacherImg from "../images/teacher-sample.png";
import Star from "../images/star.svg";
import "../styles/teacher-details.css";
import { useParams } from "react-router";
import { getTeachers } from "../redux/action/teacherAction";
import { useDispatch, useSelector } from "react-redux";

const TeacherDetails = () => {
  const dispatch = useDispatch();

  const { teachers } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  const params = useParams();
  console.log(params.id);
  return (
    <>
      {teachers.map((teacher) => {
        if (teacher.id == params.id) {
          return (
            <section id="teacher-details" key={teacher.id}>
              <section id="teacher-header" className="teacher-header">
                <div className="header-info">
                  <img
                    src={`https://drive.google.com/uc?export=view&id=${teacher.foto}`}
                    alt=""
                    className="teacher-img"
                  />
                  <div className="header-text">
                    <p className="name">{teacher.nama}</p>
                    <p className="jurusan">
                      {teacher.edukasi[0].jurusan} | {teacher.edukasi[0].lokasi}
                    </p>
                    <p className="alamat">
                      {teacher.alamat["kabupaten kota"]} |{" "}
                      {teacher.alamat.provinsi}
                    </p>
                  </div>
                </div>
                <div className="header-btn">
                  <button id="submit">Belajar dengan {teacher.nama}</button>
                  <a>Lihat Pengajar Lain</a>
                </div>
              </section>
              <section className="teacher-main">
                <div className="sub-navbar">
                  <ul className="sub-navbar-menu">
                    <li id="nav-profil" className="navbar-menu">
                      Profil Diri
                    </li>
                    <li id="nav-pengalaman" className="navbar-menu hidden">
                      Pengalaman
                    </li>
                    <li id="nav-ulasan" className="navbar-menu hidden">
                      Ulasan
                    </li>
                  </ul>
                </div>

                <section id="teacher-details">
                  <div id="profil-diri" className="sub-menu hidden">
                    <div className="deskripsi-diri">
                      <h2>Deskripsi Diri</h2>
                      <p>
                        Hai semuanya, aku adalah seorang mahasiswa matematika
                        yang sangat tertarik pada dunia belajar mengajar. Aku
                        memiliki pengalaman mengajar selama 6 bulan sebagai
                        pengajar freelance dan sering mengikuti berbagai
                        pelatihan softskill
                      </p>
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

                  <div id="pengalaman" className="sub-menu hidden">
                    <h2>Daftar Pengalaman</h2>
                    <div className="pengalaman-detail">
                      <p className="posisi">Freelance Mengajar</p>
                      <div className="pengalaman-status">
                        <p className="lokasi">Independen |</p>
                        <p className="mulai">Juli 2021 |</p>
                        <p className="selesai">Sekarang</p>
                      </div>
                      <p className="deskripsi">
                        Saya telah menjadi freelance untuk mengajar anak SD
                        hingga SMA pada mata pelajaran matematika selama 1 tahun
                        terakhir
                      </p>
                    </div>

                    <div className="pengalaman-detail">
                      <p className="posisi">Freelance Mengajar</p>
                      <div className="pengalaman-status">
                        <p className="lokasi">Independen |</p>
                        <p className="mulai">Juli 2021 |</p>
                        <p className="selesai">Sekarang</p>
                      </div>
                      <p className="deskripsi">
                        Saya telah menjadi freelance untuk mengajar anak SD
                        hingga SMA pada mata pelajaran matematika selama 1 tahun
                        terakhir
                      </p>
                    </div>
                  </div>

                  <div id="ulasan" className="sub-menu">
                    <div id="rating-container" className="rating-pengajar">
                      <h2>Rating Pengajar</h2>
                      <div className="detail-rating">
                        <div className="bintang">
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                        <p className="nama">Albertus Handy</p>
                        <p className="deskripsi">
                          Kakaknya sangat sabar dan cara kakaknya ngajar ngga
                          bikin aku bosen
                        </p>
                      </div>
                      <div className="detail-rating">
                        <div className="bintang">
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                        <p className="nama">Albertus Handy</p>
                        <p className="deskripsi">
                          Kakaknya sangat sabar dan cara kakaknya ngajar ngga
                          bikin aku bosen
                        </p>
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
            </section>
          );
        }
      })}
    </>
  );
};

export default TeacherDetails;

/**
 * <section id="teacher-details">
      <section id="teacher-header" className="teacher-header">
        <div className="header-info">
          <img src={TeacherImg} alt="" classNameName="teacher-img" />
          <div className="header-text">
            <p className="name">Juliana Cameron</p>
            <p className="jurusan">Ilmu Komputer | Universitas Gadjah Mada</p>
            <p className="alamat">Sleman, DI Yogyakarta</p>
          </div>
        </div>
        <div className="header-btn">
          <button id="submit">Belajar dengan Albertus</button>
          <a>Lihat Pengajar Lain</a>
        </div>
      </section>
      <section className="teacher-main">
        <div className="sub-navbar">
          <ul className="sub-navbar-menu">
            <li id="nav-profil" className="navbar-menu">
              Profil Diri
            </li>
            <li id="nav-pengalaman" className="navbar-menu hidden">
              Pengalaman
            </li>
            <li id="nav-ulasan" className="navbar-menu hidden">
              Ulasan
            </li>
          </ul>
        </div>

        <section id="teacher-details">
          <div id="profil-diri" className="sub-menu hidden">
            <div className="deskripsi-diri">
              <h2>Deskripsi Diri</h2>
              <p>
                Hai semuanya, aku adalah seorang mahasiswa matematika yang
                sangat tertarik pada dunia belajar mengajar. Aku memiliki
                pengalaman mengajar selama 6 bulan sebagai pengajar freelance
                dan sering mengikuti berbagai pelatihan softskill
              </p>
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

          <div id="pengalaman" className="sub-menu hidden">
            <h2>Daftar Pengalaman</h2>
            <div className="pengalaman-detail">
              <p class="posisi">Freelance Mengajar</p>
              <div class="pengalaman-status">
                <p class="lokasi">Independen |</p>
                <p class="mulai">Juli 2021 |</p>
                <p class="selesai">Sekarang</p>
              </div>
              <p class="deskripsi">
                Saya telah menjadi freelance untuk mengajar anak SD hingga SMA
                pada mata pelajaran matematika selama 1 tahun terakhir
              </p>
            </div>

            <div className="pengalaman-detail">
              <p class="posisi">Freelance Mengajar</p>
              <div class="pengalaman-status">
                <p class="lokasi">Independen |</p>
                <p class="mulai">Juli 2021 |</p>
                <p class="selesai">Sekarang</p>
              </div>
              <p class="deskripsi">
                Saya telah menjadi freelance untuk mengajar anak SD hingga SMA
                pada mata pelajaran matematika selama 1 tahun terakhir
              </p>
            </div>
          </div>

          <div id="ulasan" className="sub-menu">
            <div id="rating-container" className="rating-pengajar">
              <h2>Rating Pengajar</h2>
              <div className="detail-rating">
                <div className="bintang">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
                <p className="nama">Albertus Handy</p>
                <p className="deskripsi">
                  Kakaknya sangat sabar dan cara kakaknya ngajar ngga bikin aku
                  bosen
                </p>
              </div>
              <div className="detail-rating">
                <div className="bintang">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
                <p className="nama">Albertus Handy</p>
                <p className="deskripsi">
                  Kakaknya sangat sabar dan cara kakaknya ngajar ngga bikin aku
                  bosen
                </p>
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
    </section>
 */
