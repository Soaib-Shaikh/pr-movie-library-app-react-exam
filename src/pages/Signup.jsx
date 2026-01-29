import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
    navigate("/");
  };

  return (
    <>
      <style>{`
        body {
          background: linear-gradient(120deg,#f6d365,#fda085);
          min-height:100vh;
        }
        .signup-card {
          background: #fff;
          border-radius: 18px;
        }
        .signup-card h3 {
          color: #ff6a00;
        }
        .signup-btn {
          background: linear-gradient(45deg,#ff6a00,#ee0979);
          border: none;
        }
      `}</style>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-4 signup-card p-4 shadow-lg">
          <h3 className="text-center mb-3">✨ Create Account</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control my-2"
              placeholder="Username"
              onChange={e => setForm({ ...form, username: e.target.value })}
              required
            />
            <input
              className="form-control my-2"
              placeholder="Email"
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="password"
              className="form-control my-2"
              placeholder="Password"
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
            />

            <button className="btn signup-btn w-100 text-white mt-3">
              Signup
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <Link to="/login" className="text-danger">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
