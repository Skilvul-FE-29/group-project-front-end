import React, { useEffect, useState } from "react";
import "./TeacherList.css";
import TeacherCard from "../components/list-teacher/TeacherCard";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";

function TeacherList() {
  const [search, setSearch] = useState("");
  const [teachers, setTeachers] = useState([]);

  const filterTeachers = teachers.filter((teacher) => {
    return (
      teacher.nama.toLowerCase().includes(search) ||
      teacher.edukasi[0].lokasi.toLowerCase().includes(search) ||
      teacher.edukasi[0].jurusan.toLowerCase().includes(search)
    );
  });

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
    <>
      <Navbar />
      <div className="teacher-container">
        <h1 className="teacher-title">Daftar Pengajar</h1>
        <div className="search-teacher-wrapper">
          <label htmlFor="search-input" className="search-title">
            Search Pengajar
          </label>
          <input
            type="search"
            id="search-input"
            placeholder="nama/jurusan/lokasi"
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>

        <TeacherCard data={search.length > 0 ? filterTeachers : teachers} />
      </div>
    </>
  );
}

export default TeacherList;
