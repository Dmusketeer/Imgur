import React from "react";
import "./r.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  return (
    <>
      <div className="login page align-items-center">
        <div className="col-6  ">
          <h1>LogIn with Imgur To injoy Gallary Of Images</h1>
          <div className="col-12">
            <label for="username" className="form-label">
              Username
            </label>
            <div className="input-group">
              <span className="input-group-text">@</span>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                required=""
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>

          <div className="col-12">
            <label for="username" className="form-label">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text">**</span>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Password"
                required=""
              />
              <div className="invalid-feedback">Your password is required.</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
