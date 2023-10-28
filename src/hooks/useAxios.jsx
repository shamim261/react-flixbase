import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAxios(apiPath) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiUrl = `https://api.themoviedb.org/3/${apiPath}?api_key=${
        import.meta.env.VITE_TMBD_API_KEY
    }`;
    useEffect(() => {
        async function getMovies() {
            setLoading(true);
            const { data } = await axios.get(apiUrl);

            setMovies(data.results);
            setLoading(false);
        }

        getMovies();
    }, [apiUrl]);

    return { movies, loading };
}
