import { NavLink } from "react-router-dom";
import { useDispatch, useSelector,} from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { isAuth, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand text-warning fw-bold" to="/">
        🎬 MovieHub
      </NavLink>

      <div className="d-flex gap-2">
        <NavLink className="btn btn-outline-light btn-sm" to="/">
          Home
        </NavLink>

        {!isAuth ? (
          <>
            <NavLink className="btn btn-outline-success btn-sm" to="/login">
              Login
            </NavLink>
            <NavLink className="btn btn-outline-primary btn-sm" to="/signup">
              Signup
            </NavLink>
          </>
        ) : (
          <>
            <span className="text-light align-self-center">
              Hi, {user?.username || user?.email }
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
  );
};

export default Navbar;
