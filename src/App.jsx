import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Login from "./pages/Login";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
