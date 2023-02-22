import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = {
      name: "Harry Klint",
      email: "harry@gmail.com",
    };
    setSuccess(true);
    localStorage.setItem("login", JSON.stringify(value));
    setTimeout(() => {
      router.push("/");
    },2000);
  };

  return (
    <div className="login_container">
      <div className="login_box">
        <div className="mb-3">
          <h3>Login</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username/Email</label>
            <input
              type="email"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>
          <div className="mb-3">
            <small>Forgot Password?</small>
          </div>
          <div className="login_button">
            <button type="submit" className="btn_dark" >
              Login
            </button>
          </div>
          

          {/* Success message after login */}
          {success &&
          <div className="mt-3 mb-3" onClick={() => setSuccess(false)}>
            <div className="alert alert-success">
              <strong>Success!</strong> Logged in Successfully!
            </div>
          </div>
        }
        </form>
      </div>
    </div>
  );
};

export default Login;
