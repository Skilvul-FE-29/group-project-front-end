import React, { useEffect, useState } from "react";
import "./TeacherList.css";
import TeacherCard from "../components/list-teacher/TeacherCard";
import Navbar from "../components/navbar/Navbar";
// import axios from "axios";

function TeacherList() {
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
            type="text"
            id="search-input"
            placeholder="nama/jurusan/lokasi"
            autoComplete="off"
          />
        </div>

        <TeacherCard />
      </div>
    </>
  );
}

export default TeacherList;
