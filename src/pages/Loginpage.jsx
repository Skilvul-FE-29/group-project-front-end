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
    setData({ username, password });
    // console.log(data.username)
    // console.log(data.password)
  };

  return (
    <div className="login-container" id="login">
      <div className="login__left">
        <img src={img} alt="" />
      </div>

      <div className="login__right">
        <div className="login__right-header">
          <h1>Masuk</h1>
        </div>

        <div className="login__right-form">
          <form action="" id="form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="user_email">Email</label>
              <input
                type="text"
                name="email"
                id="user_email"
                placeholder="Masukkan email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form__group">
              <label htmlFor="user_password">Password</label>
              <input
                type="text"
                name="password"
                id="user_password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form__group">
              <button
                type="submit"
                name="register"
                className="btn"
                id="btn-login"
              >
                login
              </button>
            </div>
          </form>
        </div>

        <div className="register__right-footer">
          <p>
            Belum mempunyai akun? <Link to="/regis">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
