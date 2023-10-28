import useAxios from '../hooks/useAxios';
import TVSCard from './TVCard';
export default function TVSList({ apiPath }) {
    const { movies, loading } = useAxios(apiPath);

    return loading ? (
        'Loading...'
    ) : (
        <section>
            <div className="m-3 flex  justify-start flex-wrap">
                {movies.map((movie) => (
                    <TVSCard key={movie.id} data={movie} />
                ))}
            </div>
        </section>
    );
}
