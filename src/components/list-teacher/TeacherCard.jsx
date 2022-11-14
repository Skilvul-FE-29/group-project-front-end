import React, { useEffect, useState } from "react";
import "./TeacherCard.css";
import axios from "axios";

function TeacherCard() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get("https://634a01375df95285140a732e.mockapi.io/teachers")
      .then((res) => {
        setTeachers(res.data);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="wrapper-list-teacher">
      {teachers.map((item) => (
        <div className="card-wrapper" key={item.id}>
          <div className="teacher-profile">
            <img
              src={`https://drive.google.com/uc?export=view&id=${item.foto}`}
              alt=""
              className="profile-img"
            />
          </div>
          <div className="teacher-info">
            <h3 className="info-name">{item.nama}</h3>
            <p className="info-university">{item.edukasi[0].lokasi}</p>
            <p className="info-jurusan">{item.edukasi[0].jurusan}</p>
          </div>
          <div className="teacher-rating">
            <div className="teacher-rating-rating">
              ★ <span>{item.overall.bintang}</span>
            </div>
            <div className="teacher-rating-review">10 ulasan</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeacherCard;
