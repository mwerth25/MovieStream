function MovieTimeline() {
    return (
        <div className="movie-timeline">
            <div className="timeline-header">
                <h3>Movie Release Timeline</h3>
            </div>
            <div className="timeline-track">
                {movies.sort((a, b) => 
                    new Date(a.releaseDate) - new Date(b.releaseDate)
                ).map(movie => (
                    <div className="timeline-point" 
                         style={{
                             left: `${getTimelinePosition(movie.releaseDate)}%`
                         }}>
                        <img src={movie.url} alt={movie.title} />
                        <span>{new Date(movie.releaseDate).getFullYear()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
} 