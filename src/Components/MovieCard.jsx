import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie, onClick }) {
    return (
        <div className="movie-card" onClick={onClick}>
            <img src={movie.url} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <div className="movie-meta">
                    <span>{movie.rating}⭐</span>
                    <span>{new Date(movie.releaseDate).getFullYear()}</span>
                </div>
            </div>
        </div>
    );
}

export default MovieCard; 