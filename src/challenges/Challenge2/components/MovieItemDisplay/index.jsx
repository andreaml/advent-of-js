import "./index.styles.scss";

const MovieItemDisplay = ({ movie }) => {
    return (
        <div className= "dropdown__movie-display">
            <img className='dropdown__movie-display__img' src={movie.Image} alt={movie['Image Alt']} />
            <div className='dropdown__movie-display__title'>
                <span className='dropdown__movie-display__title-heading'>{movie.Title.substring(movie.Title.indexOf('.') + 1).trim()}</span>
                <span className='dropdown__movie-display__title-subtitle'>{movie.Year}</span>
            </div>
        </div>
    );
};

export default MovieItemDisplay;