import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      username: email.split("@")[0] // 👈 FIX
    };

    dispatch(loginUser(userData));
    navigate("/");
  };

  return (
    <>
      <style>{`
        body {
          background: radial-gradient(circle at top, #0f2027, #000);
          min-height: 100vh;
        }
        .login-box {
          background: rgba(0,0,0,0.65);
          border: 1px solid #00e5ff;
          box-shadow: 0 0 25px #00e5ff80;
          border-radius: 18px;
          color: #00e5ff;
        }
        .login-box input {
          background: transparent;
          border: 1px solid #00e5ff;
          color: #fff;
        }
        .login-btn {
          background: linear-gradient(90deg,#00e5ff,#0072ff);
          border: none;
        }
      `}</style>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-4 login-box p-4">
          <h3 className="text-center mb-4">🎬 Movie Login</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              required
            />

            <button className="btn login-btn w-100 text-white">
              Login
            </button>
          </form>

          <p className="text-center mt-3">
            New here? <Link to="/signup" className="text-info">Create account</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
