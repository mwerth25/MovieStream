function MoodSelector() {
    const moods = [
        { name: "Happy", gradient: "linear-gradient(135deg, #FFD700, #FFA500)", genres: ["Comedy", "Adventure"] },
        { name: "Thoughtful", gradient: "linear-gradient(135deg, #64ffda, #48c9b0)", genres: ["Drama", "Mystery"] },
        { name: "Excited", gradient: "linear-gradient(135deg, #FF4D4D, #FF8C8C)", genres: ["Action", "Thriller"] }
    ];

    return (
        <div className="mood-selector">
            <h3>What's Your Mood?</h3>
            <div className="mood-buttons">
                {moods.map(mood => (
                    <button 
                        key={mood.name}
                        className="mood-button"
                        style={{ background: mood.gradient }}
                    >
                        {mood.name}
                    </button>
                ))}
            </div>
        </div>
    );
} 