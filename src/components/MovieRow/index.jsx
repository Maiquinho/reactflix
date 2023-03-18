import './styles.css';

export function MovieRow({ title, items }) {

    return (
        <div className="movie-row">
            <h2>{title}</h2>

            <div className="movie-row__list-area">
                { items.results.length > 0 && items.results.map((item, key) => (
                    <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name} title={item.original_name} />
                )) }
            </div>
        </div>
    );
}
