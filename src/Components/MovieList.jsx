import useAxios from '../hooks/useAxios';
import Card from './Card';
export default function MovieList({ apiPath }) {
    const movies = useAxios(apiPath);

    return (
        <section>
            <div className="m-3 flex  justify-start flex-wrap">
                {movies.map((movie) => (
                    <Card key={movie.id} data={movie} />
                ))}
            </div>
        </section>
    );
}
