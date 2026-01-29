import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

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
          background: linear-gradient(135deg,#141e30,#243b55);
          min-height:100vh;
        }
        .auth-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          color:#fff;
        }
      `}</style>

      <div className="container d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
        <div className="col-md-4 auth-card p-4 shadow">
          <h3 className="text-center mb-3">Create Account</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control my-2"
              placeholder="Username"
              onChange={e => setForm({...form, username:e.target.value})}
              required
            />
            <input
              className="form-control my-2"
              placeholder="Email"
              onChange={e => setForm({...form, email:e.target.value})}
              required
            />
            <input
              type="password"
              className="form-control my-2"
              placeholder="Password"
              onChange={e => setForm({...form, password:e.target.value})}
              required
            />

            <button className="btn btn-success w-100 mt-2">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
