import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
export default function MovieList() {
    const [movies, setMovies] = useState([]);

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        import.meta.env.VITE_TMBD_API_KEY
    }`;

    useEffect(() => {
        async function getMovies() {
            const { data } = await axios.get(url);

            setMovies(data.results);
        }

        getMovies();
    }, [url]);

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
