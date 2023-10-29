import useAxios from '../hooks/useAxios';
import Card from './Card';
export default function MovieList({ apiPath }) {
    const { movies, loading } = useAxios(apiPath);

    return loading ? (
        <div className="dark:text-slate-200 text-xl text-center ">Loading... </div>
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
