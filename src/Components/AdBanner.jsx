import './AdBanner.css';

function AdBanner({ type }) {
    return (
        <div className={`ad-space ${type}`}>
            <div className="ad-content">
                <p className="ad-label">Advertisement</p>
                {/* Ad network code would go here */}
            </div>
        </div>
    );
}

export default AdBanner; 