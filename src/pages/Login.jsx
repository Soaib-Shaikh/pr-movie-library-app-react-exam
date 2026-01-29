import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signupUser({ name, email }));
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-3">Signup</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button className="btn btn-success w-100">
                  Signup
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
