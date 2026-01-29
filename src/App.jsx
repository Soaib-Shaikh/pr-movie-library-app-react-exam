import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import PrivateRoute from "./components/PrivateRoute";
import Trending from "./pages/Trending";
import Popular from "./pages/Popular";

const App = () => {
  const location = useLocation();

  // Navbar hide on auth pages
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MovieList />
            </PrivateRoute>
          }
        />

        {/* 🔥 Movie Details Route */}
        <Route
          path="/movie/:id"
          element={
            <PrivateRoute>
              <MovieDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/popular"
          element={
            <PrivateRoute>
              <Popular />
            </PrivateRoute>
          }
        />

        <Route
          path="/trending"
          element={
            <PrivateRoute>
              <Trending />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
