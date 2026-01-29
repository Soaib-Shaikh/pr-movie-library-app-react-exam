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

  if (loading) return <h3 className="text-center mt-5">Loading...</h3>;
  if (!selectedMovie) return null;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            className="img-fluid rounded shadow"
            alt={selectedMovie.title}
          />
        </div>

        <div className="col-md-8">
          <h2 className="fw-bold">{selectedMovie.title}</h2>
          <p className="text-muted">
            📅 {selectedMovie.release_date}
          </p>

          <p>{selectedMovie.overview}</p>

          <p>
            <strong>Genres:</strong>{" "}
            {selectedMovie.genres?.map(g => g.name).join(", ")}
          </p>

          <p>
            ⭐ Rating: {selectedMovie.vote_average} / 10
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
