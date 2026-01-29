import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieList from "./components/MovieList";
import PrivateRoute from "./components/PrivateRoute";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <MovieList />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
