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
            <h2>{selectedMovie.title}</h2>
            <p>Release Date: {selectedMovie.release_date}</p>
            <p>{selectedMovie.overview}</p>

        </div>
    );
};

export default MovieDetails;
