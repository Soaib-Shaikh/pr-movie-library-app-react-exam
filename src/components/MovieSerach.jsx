import { useDispatch } from "react-redux";
import { searchMovies } from "../features/movie/movieSlice";
import { useState, useEffect } from "react";

const MovieSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 2) {
        dispatch(searchMovies(query));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <input
      className="form-control my-3"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default MovieSearch;
