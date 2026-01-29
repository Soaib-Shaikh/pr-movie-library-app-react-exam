import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../features/movie/movieSlice";
import { Link } from "react-router-dom";

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch]);

    if (loading) return <h3 className="text-center mt-4">Loading...</h3>;
    if (error) return <h3 className="text-danger">{error}</h3>;

    return (
        <div className="container mt-4">
            <div className="row">
                {movies?.map(movie => (
                    <div className="col-md-3 mb-4" key={movie.id}>
                        <div className="card h-100 shadow">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h6>{movie.title}</h6>
                                <Link to={`/movie/${movie.id}`} className="btn btn-primary btn-sm w-100">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default MovieList;
