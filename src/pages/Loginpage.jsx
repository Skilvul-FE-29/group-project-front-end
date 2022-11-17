import React, { useState } from "react";
import img from "../images/regisimg.png";
import "../styles/loginpage.css";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  // const changeUsername = (e) => {
  //     const value = (e.target.value)
  //     setUsername(value)
  // }

  // const changePassword = (e) => {
  //   const value = (e.target.value)
  //   setPassword(value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({username, password})
    // console.log(data.username)
    // console.log(data.password)
  };

  return (
    <div class="container" id="login">
      <div class="login__left">
        <img src={img} alt="" />
      </div>

      <div class="login__right">
        <div class="login__right-header">
          <h1>Masuk</h1>
        </div>

        <div class="login__right-form">
          <form action="" id="form" onSubmit={handleSubmit}>
            <div class="form__group">
              <label for="user_email">Email</label>
              <input
                type="text"
                name="email"
                id="user_email"
                placeholder="Masukkan email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div class="form__group">
              <label for="user_password">Password</label>
              <input
                type="text"
                name="password"
                id="user_password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div class="form__group">
              <button type="submit" name="register" class="btn" id="btn-login">
                login
              </button>
            </div>
          </form>
        </div>

        <div class="register__right-footer">
          <p>
            Belum mempunyai akun? <Link to="/regis">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
