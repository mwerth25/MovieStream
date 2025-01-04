import { movies } from '../data/movies';

// Use local data until API is approved
export const fetchMovies = async (searchQuery = '') => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (searchQuery) {
        return movies.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    return movies;
};

export const fetchMovieDetails = async (movieId) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const movie = movies.find(m => m.id === parseInt(movieId));
    if (!movie) throw new Error('Movie not found');
    return movie;
}; 