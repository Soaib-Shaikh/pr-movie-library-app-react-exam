import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../features/movie/movieSlice";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie, loading } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [id]);

  if (loading) return <h3>Loading...</h3>;

  return selectedMovie && (
    <div className="container mt-4">
      <h2>{selectedMovie.titleText?.text}</h2>
      <p>Year: {selectedMovie.releaseYear?.year}</p>
      <p>
        Genre: {selectedMovie.genres?.genres?.map(g => g.text).join(", ")}
      </p>
    </div>
  );
};

export default MovieDetails;
