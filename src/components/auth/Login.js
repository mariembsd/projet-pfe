import React from "react";
import "./Forms.css"; // custom CSS file

const Login = () => {
  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="login-box shadow">
        <h2 className="text-center mb-4">Welcome Back</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-brown w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
