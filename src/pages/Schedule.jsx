import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Schedule.css";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../redux/action/teacherAction";

const Schedule = () => {
  const [scchedulData, setScheduleData] = useState([]);

  const getSchedule = async () => {
    const response = await fetch(
      "https://634a01375df95285140a732e.mockapi.io/order"
    );
    const data = await response.json();
    setScheduleData(data);
  };

  useEffect(() => {
    getSchedule();
  }, []);

  const dispatch = useDispatch();

  const { teachers } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  const handleDetails = () => {
    document.querySelector(".detail-sesi-wrapper").classList.add("active");
  };

  const handleDetailsRemove = () => {
    document.querySelector(".detail-sesi-wrapper").classList.remove("active");
  };

  const userId = useParams();
  const user = userId.id;
  // console.log("ParamId", user);

  return (
    <div className="schedule">
      <div className="schedule-container">
        <div className="sch-title">
          <h1 className="title">Daftar Sesi</h1>
          <div className="history">
            <Link className="history-les" to={"/history"}>
              <h3>History Les</h3>
            </Link>
          </div>
        </div>

        {scchedulData.map((item) => {
          // console.log("userId", item.userId.toString());;
          if (item.status === true && item.userId.toString() == user) {
            return (
              <div className="sch-wrapper-card" key={item.id}>
                <div className="sch-card-item">
                  <div className="shc-card-left">
                    <h3>
                      {item.jenjangMateri} : {item.topik}
                    </h3>
                    <p>
                      Pengajar : <span> </span>
                      <span>
                        {teachers.map((teacher) => {
                          if (teacher.id == item.teacherId) {
                            return teacher.nama;
                          }
                        })}
                      </span>
                    </p>
                    <p>
                      Hari/Tanggal :{" "}
                      <span>
                        {new Date(item.tanggal).toLocaleDateString("id-ID", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </p>
                    <p>
                      Waktu : <span>{item.jamMulai} - selesai</span>
                    </p>
                  </div>
                  <div className="sch-card-right">
                    <button className="btn-review" onClick={handleDetails}>
                      Lihat Detail Sesi
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="detail-sesi-wrapper" id="modal-detail">
        <div className="header">
          <h3 className="detail-title">Detail Sesi</h3>
          <button className="btn-close-schedule" onClick={handleDetailsRemove}>
            x
          </button>
        </div>
        <hr />
        <div className="detail-info">
          <div className="detail-top">
            <p>
              Pelajaran : <span>Matematika Dasar</span>
            </p>
            <p>
              Pertemuan : <span>1</span>
            </p>
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
          <div className="detail-bottom">
            <h3>Detail Pembelajaran : </h3>
            <p>1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p>2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p>3. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <button className="btn-detail-sesi" style={{ marginTop: "20px" }}>
            Online Via Zoom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
