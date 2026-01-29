import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";
import { searchMovies } from "../features/movie/movieSlice";
import { useState } from "react";

const Navbar = () => {
  const { isAuth, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      dispatch(searchMovies(value));
      navigate("/");
    }
  };

  return (
    <>
      <style>{`
        .glass-nav {
          background: rgba(20,20,20,0.85);
          backdrop-filter: blur(10px);
        }
        .search-input {
          background: #1f1f1f;
          border: none;
          color: #fff;
        }
        .search-input::placeholder {
          color: #aaa;
        }
      `}</style>

      <nav className="navbar glass-nav navbar-expand-lg px-4 shadow">
        <NavLink className="navbar-brand fw-bold text-warning fs-4" to="/">
          🎬 MovieHub
        </NavLink>

        <div className="mx-auto w-50 d-none d-md-block">
          <input
            className="form-control search-input"
            placeholder="Search movies..."
            value={query}
            onChange={handleSearch}
          />
        </div>

        <div className="d-flex gap-2 align-items-center">
          {!isAuth ? (
            <>
              <NavLink className="btn btn-outline-light btn-sm" to="/login">
                Login
              </NavLink>
              <NavLink className="btn btn-outline-warning btn-sm" to="/signup">
                Signup
              </NavLink>
            </>
          ) : (
            <>
              <span className="text-light small">
                👋 {user?.username || user?.email}
              </span>
              <button
                onClick={() => dispatch(logoutUser())}
                className="btn btn-danger btn-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
