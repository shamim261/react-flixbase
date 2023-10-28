import useAxios from '../hooks/useAxios';
import Card from './Card';
export default function MovieList({ apiPath }) {
    const { movies, loading } = useAxios(apiPath);

    return loading ? (
        'Loading...'
    ) : (
        <section>
            <div className="m-3 flex justify-center flex-wrap">
                {movies.map((movie) => (
                    <Card key={movie.id} data={movie} />
                ))}
            </div>
        </section>
    );
}
