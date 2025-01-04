import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';
import './MoviePage.css';

function MoviePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find(m => m.id === parseInt(id));

    const getAmazonUrl = (movieTitle) => {
        const searchQuery = encodeURIComponent(`${movieTitle} movie`);
        return `https://www.amazon.com/s?k=${searchQuery}&i=movies-tv`;
    };

    if (!movie) {
        navigate('/');
        return null;
    }

    return (
        <div className="movie-page">
            <button className="back-button" onClick={() => navigate('/')}>
                ← Back
            </button>
            <div className="movie-content">
                <div className="movie-poster">
                    <img src={movie.url} alt={movie.title} />
                    <div className="button-group">
                        <a 
                            href={getAmazonUrl(movie.title)} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="amazon-button"
                        >
                            <span>🛒</span> Buy on Amazon
                        </a>
                        {movie.trailer && (
                            <a 
                                href={`https://www.youtube.com/watch?v=${movie.trailer}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="trailer-button"
                            >
                                <span>▶</span> Watch Trailer
                            </a>
                        )}
                    </div>
                </div>
                <div className="movie-details">
                    <h1>{movie.title}</h1>
                    <div className="movie-meta">
                        <span>Rating: {movie.rating}⭐</span>
                        <span>{movie.duration}</span>
                        <span>{movie.genre}</span>
                    </div>
                    <p className="movie-description">{movie.description}</p>
                    <div className="movie-cast">
                        <h3>Cast</h3>
                        <p>{movie.cast.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviePage; 