import { useDispatch } from "react-redux";
import { searchMovies } from "../features/movie/movieSlice";

const MovieSearch = () => {
  const dispatch = useDispatch();

  return (
    <input
      className="form-control my-3"
      placeholder="Search movies..."
      onChange={(e) => dispatch(searchMovies(e.target.value))}
    />
  );
};

export default MovieSearch;
