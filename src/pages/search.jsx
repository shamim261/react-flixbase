import { useSearchParams } from 'react-router-dom';
import Card from '../Components/Card';
import useAxios from '../hooks/useAxios';
import useTitle from '../hooks/useTitle';

export default function Search({ apiPath }) {
    const [searchParams] = useSearchParams();
    const queryStr = searchParams.get('q');

    const { movies, loading } = useAxios(apiPath, queryStr);
    useTitle(`Search result for ${queryStr}`);
    return loading ? (
        <div className="dark:text-slate-200 text-xl text-center ">Loading... </div>
    ) : (
        <section>
            {movies.length === 0 ? (
                <h1 className="text-2xl p-4 dark:text-slate-200">
                    No result found for <span className="underline">{queryStr}</span>
                </h1>
            ) : (
                <h1 className="text-2xl p-4 dark:text-slate-200">
                    Search result for <span className="underline">{queryStr}</span>
                </h1>
            )}
            <div className="m-3 flex justify-center flex-wrap">
                {movies.map((movie) => (
                    <Card key={movie.id} data={movie} />
                ))}
            </div>
        </section>
    );
}
