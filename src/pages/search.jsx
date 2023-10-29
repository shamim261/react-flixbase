import { useSearchParams } from 'react-router-dom';
import Card from '../Components/Card';
import useAxios from '../hooks/useAxios';

export default function Search({ apiPath }) {
    const [searchParams] = useSearchParams();
    const queryStr = searchParams.get('q');

    const { movies, loading } = useAxios(apiPath, queryStr);

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
