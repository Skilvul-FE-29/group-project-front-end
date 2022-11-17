import React from "react";
import img from "../images/regisimg.png";
import { Link } from "react-router-dom";
import "../styles/regispage.css";

const Regispage = () => {
  return (
    <div class="container" id="register">
      <div class="register__left">
        <img src={img} alt="" />
      </div>
      <div class="register__right">
        <div class="register__right-header">
          <h1>Buat Akun Baru</h1>
        </div>
        <div class="register__right-form" onsubmit="validate()">
          <form id="form">
            <div class="form__group">
              <label for="name">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div class="form__group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan email"
              />
            </div>

            <div class="form__group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Masukkan password"
              />
            </div>

            <div class="form__group">
              <label for="confirmPassword">Konfirmasi Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Masukkan password ulang"
              />
            </div>

            <div class="form__group">
              <label for="education">Jenjang Pendidikan</label>
              <select name="education" id="education">
                <option value="SD">SD</option>
                <option value="SMP">SMP</option>
                <option value="SMA">SMA</option>
              </select>
            </div>

            <div class="form__group">
              <label for="address">Alamat Lengkap</label>
              <input
                name="address"
                id="address"
                cols="30"
                rows="10"
                placeholder="Masukkan alamat lengkap"
              />
            </div>

            <div class="form__group">
              <label for="school">Asal Sekolah</label>
              <input
                type="text"
                name="school"
                id="school"
                placeholder="Masukkan asal sekolah"
              />
            </div>

            <div class="form__group">
              <button type="submit" name="register" class="btn" id="btn-submit">
                Register
              </button>
            </div>
          </form>
        </div>
        <div class="register__right-footer">
          <p>
            Sudah mempunyai akun? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regispage;
