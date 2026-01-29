import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../features/movie/movieSlice";

const Popular = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  if (loading) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-4">
      <h3 className="mb-4">🔥 Popular Movies</h3>

      <div className="row">
        {movies?.map(movie => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <div className="card h-100 shadow">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h6>{movie.title}</h6>
                <p className="text-muted">⭐ {movie.vote_average}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
