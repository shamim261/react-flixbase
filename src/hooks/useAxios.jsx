import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAxios(apiPath) {
    const [movies, setMovies] = useState([]);

    const apiUrl = `https://api.themoviedb.org/3/${apiPath}?api_key=${
        import.meta.env.VITE_TMBD_API_KEY
    }`;
    console.log(apiUrl);
    useEffect(() => {
        async function getMovies() {
            const { data } = await axios.get(apiUrl);

            setMovies(data.results);
        }

        getMovies();
    }, [apiUrl]);
    return movies;
}
