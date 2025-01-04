import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import LoadingScreen from '../Components/LoadingScreen';
import AdBanner from '../Components/AdBanner';
import MoodSelector from '../Components/MoodSelector';
import MovieTimeline from '../Components/MovieTimeline';
import CastWeb from '../Components/CastWeb';
import { movies } from '../data/movies';
import './Home.css';

function Home() {
    const [moviesList, setMoviesList] = useState(movies);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchQuery) {
            const filtered = movies.filter(movie => 
                movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                movie.cast.some(actor => 
                    actor.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
            setMoviesList(filtered);
        } else {
            setMoviesList(movies);
        }
    }, [searchQuery]);

    const handleMovieClick = async (movieId) => {
        setIsLoading(true);
        // Simulate loading time for smooth transition
        await new Promise(resolve => setTimeout(resolve, 800));
        navigate(`/movie/${movieId}`);
    };

    return (
        <div className="home-container">
            <LoadingScreen className={isLoading ? 'visible' : ''} />
            
            <nav className="navbar">
                <a href="/" className="logo">
                    <span className="logo-icon">▶</span>
                    <h1>Movie<span>Stream</span></h1>
                </a>
                <div className="search-form">
                    <input
                        type="search"
                        placeholder="Search movies, genres, or actors..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </nav>

            <div className="development-banner">
                <p>
                    <span>MovieStream Beta:</span> We're crafting something special! 
                    More movies and exciting features are on the way. 🎬
                </p>
            </div>

            <AdBanner type="banner" />

            <main className="main-content">
                <MoodSelector />
                
                <section className="featured-section">
                    <h2>{searchQuery ? 'Search Results' : 'Popular Movies'}</h2>
                    <div className="movies-grid">
                        {moviesList.length > 0 ? (
                            moviesList.map(movie => (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    onClick={() => handleMovieClick(movie.id)}
                                />
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No movies found matching "{searchQuery}"</p>
                            </div>
                        )}
                    </div>
                </section>

                <MovieTimeline />
                <CastWeb />
            </main>
        </div>
    );
}

export default Home;
