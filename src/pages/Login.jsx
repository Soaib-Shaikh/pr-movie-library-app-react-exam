import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email }));
    navigate("/");
  };

  return (
    <>
      <style>{`
        body {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          min-height: 100vh;
        }
        .auth-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          color: #fff;
        }
        .auth-card input {
          background: transparent;
          color: #fff;
          border: 1px solid #ccc;
        }
        .auth-card input::placeholder {
          color: #ccc;
        }
        .auth-btn {
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          border: none;
        }
      `}</style>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-4 auth-card p-4 shadow-lg">
          <h3 className="text-center mb-4">Welcome Back 🎬</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="btn auth-btn w-100 text-white">
              Login
            </button>
          </form>

          <p className="text-center mt-3">
            New user? <a href="/signup" className="text-info">Signup</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
