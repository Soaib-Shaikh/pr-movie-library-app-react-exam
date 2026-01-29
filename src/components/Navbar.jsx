import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";
import { searchMovies, getAllMovies } from "../features/movie/movieSlice";
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
        .movie-navbar {
          background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
          padding: 12px 40px;
        }
        .brand-logo {
          font-size: 26px;
          font-weight: 800;
          color: #f5c518;
          letter-spacing: 1px;
        }
        .nav-link-custom {
          color: #ddd;
          margin-right: 20px;
          text-decoration: none;
          font-weight: 500;
        }
        .nav-link-custom:hover {
          color: #f5c518;
        }
        .search-box {
          background: #111;
          border-radius: 30px;
          padding: 6px 15px;
          border: 1px solid #333;
          color: #fff;
          width: 260px;
        }
        .search-box::placeholder {
          color: #aaa;
        }
        .user-chip {
          background: rgba(255,255,255,0.1);
          padding: 6px 14px;
          border-radius: 20px;
          color: #fff;
          font-size: 14px;
        }
      `}</style>

      <nav className="movie-navbar d-flex align-items-center justify-content-between shadow">
        
        {/* LEFT */}
        <div className="d-flex align-items-center gap-4">
          <NavLink to="/" className="brand-logo text-decoration-none">
            🎬 MovieHub
          </NavLink>

          <NavLink to="/popular" className="nav-link-custom">
            Popular
          </NavLink>

          <NavLink to="/trending" onClick={() => dispatch(getAllMovies())} className="nav-link-custom">
            Trending
          </NavLink>
        </div>

        {/* CENTER SEARCH */}
        {isAuth && (
          <input
            className="search-box d-none d-md-block"
            placeholder="Search movies..."
            value={query}
            onChange={handleSearch}
          />
        )}

        {/* RIGHT */}
        <div className="d-flex align-items-center gap-3">
          {!isAuth ? (
            <>
              <NavLink to="/login" className="btn btn-outline-light btn-sm">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn btn-warning btn-sm fw-bold">
                Signup
              </NavLink>
            </>
          ) : (
            <>
              <div className="user-chip">
                👋 {user?.username || user?.email?.split("@")[0]}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(logoutUser())}
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
